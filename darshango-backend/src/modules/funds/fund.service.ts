import { db } from '../../config/firebase';

import { recalculateProjectStats } from '../projects/project.service';
import { createAutoAlert } from '../alerts/alert.service';

export const createFundTransaction = async (projectId: string | undefined, fundData: any) => {
    let docRef;
    if (projectId) {
        docRef = await db.collection('projects').doc(projectId).collection('funds').add({
            ...fundData,
            projectId,
            createdAt: new Date().toISOString(),
            ucStatus: fundData.ucStatus || 'Pending'
        });
        await recalculateProjectStats(projectId);
    } else {
        // Global Fund Flow (Top-level collection)
        docRef = await db.collection('funds').add({
            ...fundData,
            isGlobal: true,
            createdAt: new Date().toISOString(),
            ucStatus: fundData.ucStatus || 'Pending'
        });
    }

    return { id: docRef.id, ...fundData };
};

export const getFundTransactions = async (projectId: string) => {
    const snapshot = await db.collection('projects').doc(projectId).collection('funds').orderBy('date', 'desc').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getAllFundTransactions = async () => {
    // Fetch both project-level and global-level funds
    const globalSnapshot = await db.collection('funds').get();
    const projectSnapshot = await db.collectionGroup('funds').get();

    // Merge and deduplicate (collectionGroup includes top-level if name matches, but 'funds' vs 'projects/{id}/funds' might behave differently depending on structure)
    // Actually, collectionGroup('funds') will fetch ALL collections named 'funds'.
    // If we name the top-level collection 'funds', it will be included.
    // So we just need to use collectionGroup.

    const snapshot = await db.collectionGroup('funds').get();
    const funds = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return funds.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const updateFundTransaction = async (projectId: string | undefined, fundId: string, updateData: any) => {
    if (projectId) {
        await db.collection('projects').doc(projectId).collection('funds').doc(fundId).update({
            ...updateData,
            updatedAt: new Date().toISOString()
        });
        await recalculateProjectStats(projectId);
    } else {
        await db.collection('funds').doc(fundId).update({
            ...updateData,
            updatedAt: new Date().toISOString()
        });
    }

    // Check for UC status change (logic omitted for brevity/safety)

    if (projectId) {
        const doc = await db.collection('projects').doc(projectId).collection('funds').doc(fundId).get();
        return { id: doc.id, ...doc.data() };
    } else {
        const doc = await db.collection('funds').doc(fundId).get();
        return { id: doc.id, ...doc.data() };
    }
};

export const deleteFundTransaction = async (projectId: string | undefined, fundId: string) => {
    if (projectId) {
        await db.collection('projects').doc(projectId).collection('funds').doc(fundId).delete();
        await recalculateProjectStats(projectId);
    } else {
        await db.collection('funds').doc(fundId).delete();
    }
    return true;
};
