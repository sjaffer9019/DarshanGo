import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const recentProjects = [
  {
    id: 'AG-2024-001',
    title: 'Adarsh Gram Development - Village Rampur',
    component: 'Adarsh Gram',
    state: 'Uttar Pradesh',
    status: 'In Progress',
    progress: 75,
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'HST-2024-023',
    title: 'Girls Hostel Construction - Bhopal',
    component: 'Hostel',
    state: 'Madhya Pradesh',
    status: 'In Progress',
    progress: 45,
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'GIA-2024-156',
    title: 'Grant-in-Aid Infrastructure - Mumbai',
    component: 'GIA',
    state: 'Maharashtra',
    status: 'Under Review',
    progress: 30,
    statusColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'AG-2024-087',
    title: 'Adarsh Gram Development - Village Kheda',
    component: 'Adarsh Gram',
    state: 'Gujarat',
    status: 'Completed',
    progress: 100,
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'HST-2024-034',
    title: 'Boys Hostel Renovation - Jaipur',
    component: 'Hostel',
    state: 'Rajasthan',
    status: 'In Progress',
    progress: 60,
    statusColor: 'bg-blue-100 text-blue-700',
  },
];

export function RecentProjects() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Projects</CardTitle>
        <Link to="/projects" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-500">{project.id}</span>
                    <Badge variant="outline">{project.component}</Badge>
                  </div>
                  <p className="text-gray-900">{project.title}</p>
                  <p className="text-gray-500 mt-1">{project.state}</p>
                </div>
                <Badge className={project.statusColor}>{project.status}</Badge>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
