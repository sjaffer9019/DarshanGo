import { Badge } from '../ui/badge';
import { FileText } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const fundTransactions = [
  {
    id: 'TXN-2024-001',
    type: 'Release',
    amount: '₹1,50,00,000',
    utr: 'UTR2024001234567',
    date: '2024-01-20',
    status: 'Completed',
    description: 'First installment release',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'TXN-2024-045',
    type: 'Release',
    amount: '₹1,00,00,000',
    utr: 'UTR2024001234890',
    date: '2024-04-15',
    status: 'Completed',
    description: 'Second installment release',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'TXN-2024-089',
    type: 'Adjustment',
    amount: '₹5,00,000',
    utr: 'UTR2024001235123',
    date: '2024-06-10',
    status: 'Completed',
    description: 'Budget reallocation',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'TXN-2024-123',
    type: 'Release',
    amount: '₹85,00,000',
    utr: 'UTR2024001235456',
    date: '2024-08-20',
    status: 'Completed',
    description: 'Third installment release',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'TXN-2024-178',
    type: 'Release',
    amount: '₹50,00,000',
    utr: 'Pending',
    date: '2024-11-15',
    status: 'Pending UC',
    description: 'Fourth installment - UC pending',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
];

export function FundFlowTab() {
  return (
    <div className="space-y-6">
      {/* Sankey-style Flow Visualization */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h3 className="text-gray-900 mb-4">Fund Flow Diagram</h3>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="p-4 bg-white rounded-lg shadow-sm text-center">
              <p className="text-gray-600">Ministry</p>
              <p className="text-gray-900">₹4.5 Cr</p>
            </div>
          </div>
          
          <div className="w-16 h-1 bg-blue-400"></div>
          
          <div className="flex-1 space-y-2">
            <div className="p-4 bg-white rounded-lg shadow-sm text-center">
              <p className="text-gray-600">State</p>
              <p className="text-gray-900">₹4.5 Cr</p>
            </div>
          </div>
          
          <div className="w-16 h-1 bg-purple-400"></div>
          
          <div className="flex-1 space-y-2">
            <div className="p-4 bg-white rounded-lg shadow-sm text-center">
              <p className="text-gray-600">District</p>
              <p className="text-gray-900">₹4.5 Cr</p>
            </div>
          </div>
          
          <div className="w-16 h-1 bg-green-400"></div>
          
          <div className="flex-1 space-y-2">
            <div className="p-4 bg-white rounded-lg shadow-sm text-center">
              <p className="text-gray-600">Agency</p>
              <p className="text-gray-900">₹3.4 Cr</p>
            </div>
          </div>
          
          <div className="w-16 h-1 bg-cyan-400"></div>
          
          <div className="flex-1 space-y-2">
            <div className="p-4 bg-white rounded-lg shadow-sm text-center">
              <p className="text-gray-600">Utilized</p>
              <p className="text-gray-900">₹2.8 Cr</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="p-3 bg-white rounded-lg">
            <p className="text-gray-600">Total Budget</p>
            <p className="text-gray-900">₹4.5 Cr</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <p className="text-gray-600">Released</p>
            <p className="text-gray-900">₹3.4 Cr (75.6%)</p>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <p className="text-gray-600">Utilized</p>
            <p className="text-gray-900">₹2.8 Cr (62.2%)</p>
          </div>
        </div>
      </div>

      {/* Fund Ledger Table */}
      <div>
        <h3 className="text-gray-900 mb-4">Fund Ledger (PFMS-style)</h3>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>UTR Number</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Documents</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fundTransactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell>{txn.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{txn.type}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-900">{txn.amount}</TableCell>
                  <TableCell className="text-gray-600">{txn.utr}</TableCell>
                  <TableCell className="text-gray-600">{txn.date}</TableCell>
                  <TableCell>{txn.description}</TableCell>
                  <TableCell>
                    <Badge className={txn.statusColor}>{txn.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <button className="text-blue-600 hover:text-blue-700">
                      <FileText className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* UC Status */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="text-yellow-900">Utilization Certificate Pending</p>
            <p className="text-yellow-700">UC required for transaction TXN-2024-178 (₹50L) before next release</p>
          </div>
        </div>
      </div>
    </div>
  );
}
