import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { FileText, Download, Eye } from 'lucide-react';

const documents = [
  {
    id: 1,
    title: 'Project Proposal Document',
    type: 'Proposal',
    uploadedBy: 'Project Manager',
    date: '2024-01-10',
    size: '2.4 MB',
    category: 'Planning',
  },
  {
    id: 2,
    title: 'Environmental Clearance Certificate',
    type: 'Certificate',
    uploadedBy: 'Legal Team',
    date: '2024-01-25',
    size: '1.1 MB',
    category: 'Compliance',
  },
  {
    id: 3,
    title: 'Detailed Project Report (DPR)',
    type: 'Report',
    uploadedBy: 'Technical Team',
    date: '2024-02-05',
    size: '8.7 MB',
    category: 'Technical',
  },
  {
    id: 4,
    title: 'Fund Sanction Letter',
    type: 'Letter',
    uploadedBy: 'Finance Officer',
    date: '2024-02-15',
    size: '0.5 MB',
    category: 'Finance',
  },
  {
    id: 5,
    title: 'Q1 Progress Report',
    type: 'Report',
    uploadedBy: 'Project Manager',
    date: '2024-04-01',
    size: '3.2 MB',
    category: 'Progress',
  },
  {
    id: 6,
    title: 'Site Inspection Report - May 2024',
    type: 'Inspection',
    uploadedBy: 'Inspector A. Sharma',
    date: '2024-05-15',
    size: '4.1 MB',
    category: 'Inspection',
  },
  {
    id: 7,
    title: 'Q2 Progress Report',
    type: 'Report',
    uploadedBy: 'Project Manager',
    date: '2024-07-01',
    size: '3.5 MB',
    category: 'Progress',
  },
  {
    id: 8,
    title: 'Utilization Certificate Q2',
    type: 'Certificate',
    uploadedBy: 'Finance Officer',
    date: '2024-07-20',
    size: '0.8 MB',
    category: 'Finance',
  },
  {
    id: 9,
    title: 'Q3 Progress Report',
    type: 'Report',
    uploadedBy: 'Project Manager',
    date: '2024-10-01',
    size: '3.8 MB',
    category: 'Progress',
  },
];

const categoryColors: Record<string, string> = {
  Planning: 'bg-blue-100 text-blue-700',
  Compliance: 'bg-green-100 text-green-700',
  Technical: 'bg-purple-100 text-purple-700',
  Finance: 'bg-yellow-100 text-yellow-700',
  Progress: 'bg-cyan-100 text-cyan-700',
  Inspection: 'bg-orange-100 text-orange-700',
};

export function DocumentsTab() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{documents.length} documents available</p>
        <Button variant="outline" size="sm">
          Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex gap-3">
              <div className="p-3 bg-blue-50 rounded-lg h-fit">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-gray-900">{doc.title}</h4>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{doc.type}</Badge>
                  <Badge className={categoryColors[doc.category]}>{doc.category}</Badge>
                </div>
                
                <div className="space-y-1 text-gray-600 mb-3">
                  <p>Uploaded by {doc.uploadedBy}</p>
                  <p>{doc.date} • {doc.size}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Eye className="w-3 h-3" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="w-3 h-3" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
