import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Plus } from 'lucide-react';

const roles = [
  {
    id: 1,
    name: 'Admin',
    description: 'Full system access and control',
    userCount: 5,
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: 2,
    name: 'State Coordinator',
    description: 'Manage state-level operations',
    userCount: 28,
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 3,
    name: 'Project Manager',
    description: 'Manage individual projects',
    userCount: 156,
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 4,
    name: 'Inspector',
    description: 'Conduct site inspections',
    userCount: 89,
    color: 'bg-orange-100 text-orange-700',
  },
  {
    id: 5,
    name: 'Agency Manager',
    description: 'Manage agency operations',
    userCount: 234,
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    id: 6,
    name: 'Finance Officer',
    description: 'Manage financial operations',
    userCount: 45,
    color: 'bg-yellow-100 text-yellow-700',
  },
];

const permissions = [
  {
    module: 'Dashboard',
    permissions: ['View', 'Export'],
  },
  {
    module: 'Agency Mapping',
    permissions: ['View', 'Create', 'Edit', 'Delete'],
  },
  {
    module: 'Projects',
    permissions: ['View', 'Create', 'Edit', 'Delete', 'Approve'],
  },
  {
    module: 'Fund Flow',
    permissions: ['View', 'Create', 'Edit', 'Approve'],
  },
  {
    module: 'Monitoring',
    permissions: ['View', 'Create', 'Edit', 'Submit'],
  },
  {
    module: 'Documents',
    permissions: ['View', 'Upload', 'Download', 'Delete'],
  },
  {
    module: 'Alerts',
    permissions: ['View', 'Create', 'Resolve'],
  },
  {
    module: 'Reports',
    permissions: ['View', 'Generate', 'Export'],
  },
  {
    module: 'Admin',
    permissions: ['View', 'Manage Users', 'Manage Roles'],
  },
];

const rolePermissions: Record<string, Record<string, boolean>> = {
  'Admin': {
    'Dashboard-View': true,
    'Dashboard-Export': true,
    'Agency Mapping-View': true,
    'Agency Mapping-Create': true,
    'Agency Mapping-Edit': true,
    'Agency Mapping-Delete': true,
    'Projects-View': true,
    'Projects-Create': true,
    'Projects-Edit': true,
    'Projects-Delete': true,
    'Projects-Approve': true,
  },
  'Project Manager': {
    'Dashboard-View': true,
    'Dashboard-Export': true,
    'Agency Mapping-View': true,
    'Projects-View': true,
    'Projects-Edit': true,
    'Documents-View': true,
    'Documents-Upload': true,
    'Documents-Download': true,
    'Alerts-View': true,
    'Alerts-Create': true,
  },
};

export function RoleManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{roles.length} roles configured</p>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Role
        </Button>
      </div>

      {/* Role List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((role) => (
          <Card key={role.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <Badge className={role.color}>{role.name}</Badge>
                <span className="text-gray-500">{role.userCount} users</span>
              </div>
              <p className="text-gray-600">{role.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Permissions Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Permissions Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 text-gray-700">Module</th>
                  <th className="text-left p-3 text-gray-700">Permission</th>
                  <th className="text-center p-3 text-gray-700">Admin</th>
                  <th className="text-center p-3 text-gray-700">Project Manager</th>
                  <th className="text-center p-3 text-gray-700">Inspector</th>
                  <th className="text-center p-3 text-gray-700">View Only</th>
                </tr>
              </thead>
              <tbody>
                {permissions.map((module) => (
                  <>
                    {module.permissions.map((permission, idx) => (
                      <tr key={`${module.module}-${permission}`} className="border-b hover:bg-gray-50">
                        {idx === 0 && (
                          <td className="p-3 text-gray-900" rowSpan={module.permissions.length}>
                            {module.module}
                          </td>
                        )}
                        <td className="p-3 text-gray-600">{permission}</td>
                        <td className="p-3 text-center">
                          <Checkbox checked={true} />
                        </td>
                        <td className="p-3 text-center">
                          <Checkbox checked={idx < 2} />
                        </td>
                        <td className="p-3 text-center">
                          <Checkbox checked={false} />
                        </td>
                        <td className="p-3 text-center">
                          <Checkbox checked={permission === 'View'} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
