import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search, Filter, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const inspections = [
  {
    id: 'INS-2024-001',
    project: 'AG-2024-001',
    projectTitle: 'Adarsh Gram - Village Rampur',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    inspector: 'A. K. Sharma',
    date: '2024-03-15',
    status: 'Completed',
    rating: 'Satisfactory',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'INS-2024-045',
    project: 'HST-2024-023',
    projectTitle: 'Girls Hostel - Bhopal',
    state: 'Madhya Pradesh',
    district: 'Bhopal',
    inspector: 'R. Patel',
    date: '2024-05-20',
    status: 'Completed',
    rating: 'Good',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'INS-2024-089',
    project: 'GIA-2024-156',
    projectTitle: 'GIA Infrastructure - Mumbai',
    state: 'Maharashtra',
    district: 'Mumbai',
    inspector: 'S. Kumar',
    date: '2024-07-10',
    status: 'Completed',
    rating: 'Satisfactory',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'INS-2024-123',
    project: 'AG-2024-087',
    projectTitle: 'Adarsh Gram - Village Kheda',
    state: 'Gujarat',
    district: 'Ahmedabad',
    inspector: 'M. Singh',
    date: '2024-09-25',
    status: 'Completed',
    rating: 'Needs Attention',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'INS-2024-156',
    project: 'HST-2024-034',
    projectTitle: 'Boys Hostel - Jaipur',
    state: 'Rajasthan',
    district: 'Jaipur',
    inspector: 'V. Verma',
    date: '2024-11-25',
    status: 'Scheduled',
    rating: 'Pending',
    statusColor: 'bg-blue-100 text-blue-700',
    ratingColor: 'bg-gray-100 text-gray-700',
  },
  {
    id: 'INS-2024-178',
    project: 'GIA-2024-089',
    projectTitle: 'School Infrastructure',
    state: 'Rajasthan',
    district: 'Udaipur',
    inspector: 'P. Meena',
    date: '2024-12-05',
    status: 'Scheduled',
    rating: 'Pending',
    statusColor: 'bg-blue-100 text-blue-700',
    ratingColor: 'bg-gray-100 text-gray-700',
  },
];

export function MonitoringInspections() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredInspections = inspections.filter(inspection => {
    const matchesSearch = 
      inspection.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inspection.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inspection.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inspection.inspector.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesState = filterState === 'all' || inspection.state === filterState;
    const matchesStatus = filterStatus === 'all' || inspection.status === filterStatus;
    
    return matchesSearch && matchesState && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-1">Monitoring & Inspections</h1>
        <p className="text-gray-500">Track site inspections and monitoring activities</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by inspection ID, project, or inspector..."
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
            <Button>Schedule Inspection</Button>
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
                    <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-gray-700 mb-2 block">Status</label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Scheduled">Scheduled</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Inspection ID</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>District</TableHead>
                  <TableHead>Inspector</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInspections.map((inspection) => (
                  <TableRow key={inspection.id}>
                    <TableCell>{inspection.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="text-gray-900">{inspection.project}</p>
                        <p className="text-gray-500">{inspection.projectTitle}</p>
                      </div>
                    </TableCell>
                    <TableCell>{inspection.state}</TableCell>
                    <TableCell>{inspection.district}</TableCell>
                    <TableCell>{inspection.inspector}</TableCell>
                    <TableCell className="text-gray-600">{inspection.date}</TableCell>
                    <TableCell>
                      <Badge className={inspection.statusColor}>{inspection.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={inspection.ratingColor}>{inspection.rating}</Badge>
                    </TableCell>
                    <TableCell>
                      {inspection.status === 'Completed' && (
                        <Link to={`/monitoring/${inspection.id}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}
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
