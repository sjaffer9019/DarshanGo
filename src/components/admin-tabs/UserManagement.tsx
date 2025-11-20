import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const users = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@gov.in',
    role: 'Admin',
    agency: 'Ministry HQ',
    status: 'Active',
    lastLogin: '2024-11-20 10:30',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 2,
    name: 'Priya Shah',
    email: 'priya.shah@ngo.org',
    role: 'Agency Manager',
    agency: 'NGO-GJ-012',
    status: 'Active',
    lastLogin: '2024-11-19 15:45',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 3,
    name: 'Amit Verma',
    email: 'amit.verma@gov.in',
    role: 'Project Manager',
    agency: 'PRI-UP-034',
    status: 'Active',
    lastLogin: '2024-11-20 09:15',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 4,
    name: 'Sunita Patil',
    email: 'sunita.patil@gov.in',
    role: 'State Coordinator',
    agency: 'SD-MH-045',
    status: 'Active',
    lastLogin: '2024-11-18 14:20',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 5,
    name: 'Vijay Singh',
    email: 'vijay.singh@gov.in',
    role: 'Inspector',
    agency: 'PWD-MP-067',
    status: 'Inactive',
    lastLogin: '2024-11-10 11:30',
    statusColor: 'bg-gray-100 text-gray-700',
  },
];

export function UserManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex-1 max-w-md relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search users..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Create User
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="user@example.com" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="state">State Coordinator</SelectItem>
                    <SelectItem value="manager">Project Manager</SelectItem>
                    <SelectItem value="inspector">Inspector</SelectItem>
                    <SelectItem value="agency">Agency Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="agency">Agency</Label>
                <Select>
                  <SelectTrigger id="agency">
                    <SelectValue placeholder="Select agency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ministry">Ministry HQ</SelectItem>
                    <SelectItem value="pwd-rj">PWD-RJ-001</SelectItem>
                    <SelectItem value="ngo-gj">NGO-GJ-012</SelectItem>
                    <SelectItem value="pri-up">PRI-UP-034</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1" onClick={() => setOpen(false)}>Create User</Button>
                <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>Cancel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Agency</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="text-gray-900">{user.name}</TableCell>
                <TableCell className="text-gray-600">{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">{user.role}</Badge>
                </TableCell>
                <TableCell className="text-gray-600">{user.agency}</TableCell>
                <TableCell>
                  <Badge className={user.statusColor}>{user.status}</Badge>
                </TableCell>
                <TableCell className="text-gray-500">{user.lastLogin}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
