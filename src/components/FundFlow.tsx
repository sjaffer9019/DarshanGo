import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, Filter, FileText } from 'lucide-react';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stateData = [
  { state: 'Uttar Pradesh', allocated: 850, released: 680, utilized: 520 },
  { state: 'Maharashtra', allocated: 720, released: 650, utilized: 580 },
  { state: 'Rajasthan', allocated: 650, released: 580, utilized: 490 },
  { state: 'Gujarat', allocated: 580, released: 520, utilized: 450 },
  { state: 'Madhya Pradesh', allocated: 520, released: 480, utilized: 420 },
];

const transactions = [
  {
    id: 'TXN-2024-001',
    project: 'AG-2024-001',
    type: 'Release',
    amount: '₹1,50,00,000',
    utr: 'UTR2024001234567',
    date: '2024-01-20',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'TXN-2024-045',
    project: 'HST-2024-023',
    type: 'Release',
    amount: '₹2,00,00,000',
    utr: 'UTR2024001234890',
    date: '2024-04-15',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'TXN-2024-089',
    project: 'GIA-2024-156',
    type: 'Adjustment',
    amount: '₹15,00,000',
    utr: 'UTR2024001235123',
    date: '2024-06-10',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'TXN-2024-123',
    project: 'AG-2024-087',
    type: 'Release',
    amount: '₹1,80,00,000',
    utr: 'UTR2024001235456',
    date: '2024-08-20',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'TXN-2024-167',
    project: 'HST-2024-034',
    type: 'Release',
    amount: '₹90,00,000',
    utr: 'Pending',
    date: '2024-10-15',
    status: 'Pending UC',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'TXN-2024-189',
    project: 'GIA-2024-089',
    type: 'Release',
    amount: '₹1,20,00,000',
    utr: 'UTR2024001236789',
    date: '2024-11-05',
    status: 'Processing',
    statusColor: 'bg-blue-100 text-blue-700',
  },
];

export function FundFlow() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTransactions = transactions.filter(txn => {
    const matchesSearch = 
      txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.utr.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-1">Fund Flow Management</h1>
        <p className="text-gray-500">Track fund allocation, release, and utilization</p>
      </div>

      {/* Sankey Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Fund Flow Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-lg">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="p-6 bg-white rounded-lg shadow-sm text-center">
                  <p className="text-gray-600 mb-2">Ministry</p>
                  <p className="text-gray-900">₹8,245 Cr</p>
                  <p className="text-gray-500 mt-1">Total Allocated</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="w-20 h-2 bg-blue-400 rounded"></div>
                <div className="w-20 h-2 bg-blue-300 rounded"></div>
                <div className="w-20 h-2 bg-blue-200 rounded"></div>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="p-6 bg-white rounded-lg shadow-sm text-center">
                  <p className="text-gray-600 mb-2">State Level</p>
                  <p className="text-gray-900">₹8,245 Cr</p>
                  <p className="text-gray-500 mt-1">Transferred</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="w-20 h-2 bg-purple-400 rounded"></div>
                <div className="w-20 h-2 bg-purple-300 rounded"></div>
                <div className="w-20 h-2 bg-purple-200 rounded"></div>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="p-6 bg-white rounded-lg shadow-sm text-center">
                  <p className="text-gray-600 mb-2">District Level</p>
                  <p className="text-gray-900">₹7,850 Cr</p>
                  <p className="text-gray-500 mt-1">Allocated</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="w-20 h-2 bg-green-400 rounded"></div>
                <div className="w-20 h-2 bg-green-300 rounded"></div>
                <div className="w-20 h-2 bg-green-200 rounded"></div>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="p-6 bg-white rounded-lg shadow-sm text-center">
                  <p className="text-gray-600 mb-2">Agency</p>
                  <p className="text-gray-900">₹7,420 Cr</p>
                  <p className="text-gray-500 mt-1">Released</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="w-20 h-2 bg-cyan-400 rounded"></div>
                <div className="w-20 h-2 bg-cyan-300 rounded"></div>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="p-6 bg-white rounded-lg shadow-sm text-center">
                  <p className="text-gray-600 mb-2">Utilized</p>
                  <p className="text-gray-900">₹6,892 Cr</p>
                  <p className="text-gray-500 mt-1">Ground Level</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* State-wise Fund Utilization */}
      <Card>
        <CardHeader>
          <CardTitle>State-wise Fund Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="state" />
              <YAxis label={{ value: 'Amount (₹ Cr)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="allocated" fill="#3b82f6" name="Allocated" />
              <Bar dataKey="released" fill="#8b5cf6" name="Released" />
              <Bar dataKey="utilized" fill="#10b981" name="Utilized" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Fund Ledger */}
      <Card>
        <CardHeader>
          <CardTitle>Fund Ledger (PFMS-style)</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by transaction ID, project, or UTR..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-gray-700 mb-2 block">State</label>
                <Select value={filterState} onValueChange={setFilterState}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="Gujarat">Gujarat</SelectItem>
                    <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>UTR</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ref Docs</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell>{txn.id}</TableCell>
                    <TableCell className="text-gray-600">{txn.project}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{txn.type}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-900">{txn.amount}</TableCell>
                    <TableCell className="text-gray-600">{txn.utr}</TableCell>
                    <TableCell className="text-gray-600">{txn.date}</TableCell>
                    <TableCell>
                      <Badge className={txn.statusColor}>{txn.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
