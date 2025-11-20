import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search, Filter, CheckCircle } from 'lucide-react';
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

const alerts = [
  {
    id: 'ALT-2024-001',
    type: 'Delayed Milestone',
    project: 'AG-2024-045',
    projectTitle: 'Adarsh Gram - Village Sankari',
    raisedBy: 'Project Manager',
    assignedTo: 'State Coordinator',
    priority: 'High',
    description: 'Phase 2 completion delayed by 15 days due to material shortage',
    status: 'Open',
    date: '2024-11-18',
    priorityColor: 'bg-red-100 text-red-700',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'ALT-2024-002',
    type: 'Pending UC',
    project: 'HST-2024-023',
    projectTitle: 'Girls Hostel - Bhopal',
    raisedBy: 'Finance Officer',
    assignedTo: 'Agency Finance Head',
    priority: 'High',
    description: 'Utilization certificate pending for ₹45L released in Q2',
    status: 'Open',
    date: '2024-11-17',
    priorityColor: 'bg-red-100 text-red-700',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'ALT-2024-003',
    type: 'Quality Issue',
    project: 'GIA-2024-089',
    projectTitle: 'School Infrastructure',
    raisedBy: 'Inspector M. Singh',
    assignedTo: 'Executing Agency',
    priority: 'High',
    description: 'Quality issues identified in road construction work',
    status: 'In Progress',
    date: '2024-11-15',
    priorityColor: 'bg-red-100 text-red-700',
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'ALT-2024-004',
    type: 'Document Missing',
    project: 'AG-2024-001',
    projectTitle: 'Adarsh Gram - Village Rampur',
    raisedBy: 'Admin User',
    assignedTo: 'Project Manager',
    priority: 'Medium',
    description: 'Environmental clearance document not uploaded',
    status: 'Resolved',
    date: '2024-11-10',
    priorityColor: 'bg-yellow-100 text-yellow-700',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'ALT-2024-005',
    type: 'Budget Overrun',
    project: 'HST-2024-034',
    projectTitle: 'Boys Hostel - Jaipur',
    raisedBy: 'Finance Officer',
    assignedTo: 'State Finance Head',
    priority: 'High',
    description: 'Project expenses exceeding sanctioned budget by 8%',
    status: 'Open',
    date: '2024-11-14',
    priorityColor: 'bg-red-100 text-red-700',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'ALT-2024-006',
    type: 'Inspection Overdue',
    project: 'GIA-2024-156',
    projectTitle: 'GIA Infrastructure - Mumbai',
    raisedBy: 'Monitoring Team',
    assignedTo: 'Inspector V. Verma',
    priority: 'Medium',
    description: 'Quarterly inspection overdue by 10 days',
    status: 'In Progress',
    date: '2024-11-12',
    priorityColor: 'bg-yellow-100 text-yellow-700',
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'ALT-2024-007',
    type: 'Contractor Issue',
    project: 'AG-2024-087',
    projectTitle: 'Adarsh Gram - Village Kheda',
    raisedBy: 'Project Manager',
    assignedTo: 'Legal Team',
    priority: 'Medium',
    description: 'Contractor not adhering to agreed timeline',
    status: 'Open',
    date: '2024-11-09',
    priorityColor: 'bg-yellow-100 text-yellow-700',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'ALT-2024-008',
    type: 'Safety Concern',
    project: 'HST-2024-023',
    projectTitle: 'Girls Hostel - Bhopal',
    raisedBy: 'Safety Officer',
    assignedTo: 'Executing Agency',
    priority: 'High',
    description: 'Inadequate safety measures at construction site',
    status: 'Resolved',
    date: '2024-11-05',
    priorityColor: 'bg-red-100 text-red-700',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'ALT-2024-009',
    type: 'Fund Release Delay',
    project: 'GIA-2024-089',
    projectTitle: 'School Infrastructure',
    raisedBy: 'Agency Head',
    assignedTo: 'State Finance',
    priority: 'Medium',
    description: 'Third installment release pending approval',
    status: 'In Progress',
    date: '2024-11-08',
    priorityColor: 'bg-yellow-100 text-yellow-700',
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'ALT-2024-010',
    type: 'Compliance Issue',
    project: 'AG-2024-045',
    projectTitle: 'Adarsh Gram - Village Sankari',
    raisedBy: 'Compliance Officer',
    assignedTo: 'Project Manager',
    priority: 'Low',
    description: 'Minor compliance documentation updates required',
    status: 'Open',
    date: '2024-11-06',
    priorityColor: 'bg-green-100 text-green-700',
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
];

export function AlertsEscalations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = 
      alert.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPriority = filterPriority === 'all' || alert.priority === filterPriority;
    const matchesStatus = filterStatus === 'all' || alert.status === filterStatus;
    
    return matchesSearch && matchesPriority && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-1">Alerts & Escalations</h1>
        <p className="text-gray-500">Monitor and resolve project alerts and escalations</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search alerts by ID, type, project, or description..."
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
                <label className="text-gray-700 mb-2 block">Priority</label>
                <Select value={filterPriority} onValueChange={setFilterPriority}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
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
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Alert ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Raised By</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell>{alert.id}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{alert.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-gray-900">{alert.project}</p>
                        <p className="text-gray-500">{alert.projectTitle}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">{alert.raisedBy}</TableCell>
                    <TableCell className="text-gray-600">{alert.assignedTo}</TableCell>
                    <TableCell>
                      <Badge className={alert.priorityColor}>{alert.priority}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      {alert.description}
                    </TableCell>
                    <TableCell>
                      <Badge className={alert.statusColor}>{alert.status}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">{alert.date}</TableCell>
                    <TableCell>
                      {alert.status !== 'Resolved' && (
                        <Button variant="outline" size="sm" className="gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Resolve
                        </Button>
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
