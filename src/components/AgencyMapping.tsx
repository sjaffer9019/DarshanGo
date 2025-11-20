import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search, Filter, Eye, Building2, Phone, Mail } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
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

const agencies = [
  {
    code: 'PWD-RJ-001',
    name: 'Public Works Department Rajasthan',
    type: 'PWD',
    role: 'Implementing',
    components: ['Adarsh Gram', 'GIA'],
    activeProjects: 45,
    contact: 'Rajesh Kumar',
    lastUpdated: '2024-11-18',
    state: 'Rajasthan',
    district: 'Jaipur',
    phone: '+91 98765 43210',
    email: 'pwd.raj@gov.in',
    performance: 85,
  },
  {
    code: 'NGO-GJ-012',
    name: 'Gujarat Social Development Foundation',
    type: 'NGO',
    role: 'Executing',
    components: ['Hostel'],
    activeProjects: 23,
    contact: 'Priya Shah',
    lastUpdated: '2024-11-19',
    state: 'Gujarat',
    district: 'Ahmedabad',
    phone: '+91 98765 43211',
    email: 'gsdf@ngo.org',
    performance: 92,
  },
  {
    code: 'PRI-UP-034',
    name: 'Uttar Pradesh Panchayati Raj',
    type: 'PRI',
    role: 'Implementing',
    components: ['Adarsh Gram'],
    activeProjects: 67,
    contact: 'Amit Verma',
    lastUpdated: '2024-11-20',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    phone: '+91 98765 43212',
    email: 'pri.up@gov.in',
    performance: 78,
  },
  {
    code: 'SD-MH-045',
    name: 'Maharashtra State Department',
    type: 'State Dept',
    role: 'Implementing',
    components: ['GIA', 'Hostel'],
    activeProjects: 89,
    contact: 'Sunita Patil',
    lastUpdated: '2024-11-19',
    state: 'Maharashtra',
    district: 'Mumbai',
    phone: '+91 98765 43213',
    email: 'msd@gov.in',
    performance: 88,
  },
  {
    code: 'PWD-MP-067',
    name: 'Madhya Pradesh PWD',
    type: 'PWD',
    role: 'Executing',
    components: ['Hostel', 'Adarsh Gram'],
    activeProjects: 54,
    contact: 'Vijay Singh',
    lastUpdated: '2024-11-17',
    state: 'Madhya Pradesh',
    district: 'Bhopal',
    phone: '+91 98765 43214',
    email: 'pwd.mp@gov.in',
    performance: 81,
  },
];

export function AgencyMapping() {
  const [selectedAgency, setSelectedAgency] = useState<typeof agencies[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAgencies = agencies.filter(agency => {
    const matchesSearch = 
      agency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agency.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agency.state.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesState = filterState === 'all' || agency.state === filterState;
    const matchesType = filterType === 'all' || agency.type === filterType;
    
    return matchesSearch && matchesState && matchesType;
  });

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-1">Agency Mapping</h1>
        <p className="text-gray-500">Manage and monitor implementing and executing agencies</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by agency name, code, state, or district..."
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
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
                <label className="text-gray-700 mb-2 block">Agency Type</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="PWD">PWD</SelectItem>
                    <SelectItem value="NGO">NGO</SelectItem>
                    <SelectItem value="PRI">PRI</SelectItem>
                    <SelectItem value="State Dept">State Dept</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Agency Code</TableHead>
                  <TableHead>Agency Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Components</TableHead>
                  <TableHead>Active Projects</TableHead>
                  <TableHead>Contact Person</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAgencies.map((agency) => (
                  <TableRow key={agency.code}>
                    <TableCell>{agency.code}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-400" />
                        {agency.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{agency.type}</Badge>
                    </TableCell>
                    <TableCell>{agency.role}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {agency.components.map((comp) => (
                          <Badge key={comp} className="bg-blue-50 text-blue-700">
                            {comp}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{agency.activeProjects}</TableCell>
                    <TableCell>{agency.contact}</TableCell>
                    <TableCell className="text-gray-500">{agency.lastUpdated}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedAgency(agency)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Sheet open={!!selectedAgency} onOpenChange={() => setSelectedAgency(null)}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          {selectedAgency && (
            <>
              <SheetHeader>
                <SheetTitle>Agency Details</SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <h3 className="text-blue-900">{selectedAgency.name}</h3>
                  </div>
                  <p className="text-blue-700">{selectedAgency.code}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 mb-1">Agency Type</p>
                    <Badge variant="outline">{selectedAgency.type}</Badge>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Role</p>
                    <p className="text-gray-900">{selectedAgency.role}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">State</p>
                    <p className="text-gray-900">{selectedAgency.state}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">District</p>
                    <p className="text-gray-900">{selectedAgency.district}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">Components Handled</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgency.components.map((comp) => (
                      <Badge key={comp} className="bg-blue-50 text-blue-700">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">Contact Information</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedAgency.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{selectedAgency.email}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">Performance Score</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${selectedAgency.performance}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-900">{selectedAgency.performance}%</span>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 mb-2">Statistics</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-1">Active Projects</p>
                      <p className="text-gray-900">{selectedAgency.activeProjects}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-1">Last Updated</p>
                      <p className="text-gray-900">{selectedAgency.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
