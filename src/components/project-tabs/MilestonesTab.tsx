import { CheckCircle, Clock, AlertCircle, Circle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

const milestones = [
  {
    id: 1,
    title: 'Project Approval & Planning',
    status: 'Completed',
    owner: 'Project Manager',
    dueDate: '2024-01-30',
    completionDate: '2024-01-28',
    progress: 100,
    icon: CheckCircle,
    iconColor: 'text-green-600',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 2,
    title: 'Site Preparation & Groundwork',
    status: 'Completed',
    owner: 'Civil Engineer',
    dueDate: '2024-03-15',
    completionDate: '2024-03-12',
    progress: 100,
    icon: CheckCircle,
    iconColor: 'text-green-600',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 3,
    title: 'Water Supply System Installation',
    status: 'Completed',
    owner: 'Technical Team',
    dueDate: '2024-05-30',
    completionDate: '2024-05-28',
    progress: 100,
    icon: CheckCircle,
    iconColor: 'text-green-600',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    id: 4,
    title: 'Community Center Construction',
    status: 'In Progress',
    owner: 'Construction Team',
    dueDate: '2024-08-31',
    completionDate: null,
    progress: 65,
    icon: Clock,
    iconColor: 'text-blue-600',
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 5,
    title: 'Road Infrastructure Development',
    status: 'In Progress',
    owner: 'PWD Team',
    dueDate: '2024-10-15',
    completionDate: null,
    progress: 40,
    icon: Clock,
    iconColor: 'text-blue-600',
    statusColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 6,
    title: 'Solar Power Installation',
    status: 'Pending',
    owner: 'Energy Team',
    dueDate: '2024-11-30',
    completionDate: null,
    progress: 0,
    icon: Circle,
    iconColor: 'text-gray-400',
    statusColor: 'bg-gray-100 text-gray-700',
  },
  {
    id: 7,
    title: 'Final Inspection & Handover',
    status: 'Pending',
    owner: 'Project Manager',
    dueDate: '2024-12-31',
    completionDate: null,
    progress: 0,
    icon: Circle,
    iconColor: 'text-gray-400',
    statusColor: 'bg-gray-100 text-gray-700',
  },
];

export function MilestonesTab() {
  return (
    <div className="space-y-6">
      {/* Timeline View */}
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        <div className="space-y-6">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div key={milestone.id} className="relative flex gap-6">
                <div className={`relative z-10 w-16 h-16 rounded-full bg-white border-2 ${milestone.progress === 100 ? 'border-green-600' : milestone.progress > 0 ? 'border-blue-600' : 'border-gray-300'} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${milestone.iconColor}`} />
                </div>
                
                <div className="flex-1 pb-6">
                  <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-gray-900 mb-1">{milestone.title}</h4>
                        <p className="text-gray-500">Owner: {milestone.owner}</p>
                      </div>
                      <Badge className={milestone.statusColor}>{milestone.status}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-gray-500">Due Date</p>
                        <p className="text-gray-900">{milestone.dueDate}</p>
                      </div>
                      {milestone.completionDate && (
                        <div>
                          <p className="text-gray-500">Completed On</p>
                          <p className="text-gray-900">{milestone.completionDate}</p>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900">{milestone.progress}%</span>
                      </div>
                      <Progress value={milestone.progress} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
