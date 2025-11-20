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

const projects = [
  {
    id: 'AG-2024-001',
    component: 'Adarsh Gram',
    title: 'Adarsh Gram Development - Village Rampur',
    agency: 'PRI-UP-034',
    state: 'Uttar Pradesh',
    startDate: '2024-01-15',
    status: 'In Progress',
    progress: 75,
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'HST-2024-023',
    component: 'Hostel',
    title: 'Girls Hostel Construction - Bhopal',
    agency: 'PWD-MP-067',
    state: 'Madhya Pradesh',
    startDate: '2024-03-01',
    status: 'In Progress',
    progress: 45,
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'GIA-2024-156',
    component: 'GIA',
    title: 'Grant-in-Aid Infrastructure - Mumbai',
    agency: 'SD-MH-045',
    state: 'Maharashtra',
    startDate: '2024-02-10',
    status: 'Under Review',
    progress: 30,
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'AG-2024-087',
    component: 'Adarsh Gram',
    title: 'Adarsh Gram Development - Village Kheda',
    agency: 'NGO-GJ-012',
    state: 'Gujarat',
    startDate: '2023-09-20',
    status: 'Completed',
    progress: 100,
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'HST-2024-034',
    component: 'Hostel',
    title: 'Boys Hostel Renovation - Jaipur',
    agency: 'PWD-RJ-001',
    state: 'Rajasthan',
    startDate: '2024-04-05',
    status: 'In Progress',
    progress: 60,
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'GIA-2024-089',
    component: 'GIA',
    title: 'School Infrastructure Development',
    agency: 'PWD-RJ-001',
    state: 'Rajasthan',
    startDate: '2024-05-12',
    status: 'Delayed',
    progress: 25,
    statusColor: 'bg-red-100 text-red-700',
  },
];

interface ProjectManagementProps {
  component?: string;
}

export function ProjectManagement({ component }: ProjectManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesComponent = !component || project.component === component;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.agency.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesState = filterState === 'all' || project.state === filterState;
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    
    return matchesComponent && matchesSearch && matchesState && matchesStatus;
  });

  const title = component ? `${component} Projects` : 'Project Management';

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-1">{title}</h1>
        <p className="text-gray-500">Monitor and manage all project activities</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by project ID, title, or agency..."
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
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Under Review">Under Review</SelectItem>
                    <SelectItem value="Delayed">Delayed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Project ID</TableHead>
                  <TableHead>Component</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Agency</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.id}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{project.component}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      {project.title}
                    </TableCell>
                    <TableCell className="text-gray-500">{project.agency}</TableCell>
                    <TableCell>{project.state}</TableCell>
                    <TableCell className="text-gray-500">{project.startDate}</TableCell>
                    <TableCell>
                      <Badge className={project.statusColor}>{project.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 min-w-32">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-600">{project.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link to={`/projects/${project.id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
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
