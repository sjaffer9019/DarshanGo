import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Eye, MapPin, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const inspections = [
  {
    id: 'INS-2024-001',
    date: '2024-03-15',
    inspector: 'A. K. Sharma',
    status: 'Completed',
    rating: 'Satisfactory',
    location: 'Village Rampur, UP',
    findings: 'All work progressing as per plan',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'INS-2024-045',
    date: '2024-05-20',
    inspector: 'R. Patel',
    status: 'Completed',
    rating: 'Good',
    location: 'Village Rampur, UP',
    findings: 'Quality of work meets standards',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'INS-2024-089',
    date: '2024-07-10',
    inspector: 'S. Kumar',
    status: 'Completed',
    rating: 'Satisfactory',
    location: 'Village Rampur, UP',
    findings: 'Minor delays noted, overall satisfactory',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'INS-2024-123',
    date: '2024-09-25',
    inspector: 'M. Singh',
    status: 'Completed',
    rating: 'Needs Attention',
    location: 'Village Rampur, UP',
    findings: 'Some quality issues in road construction',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 'INS-2024-156',
    date: '2024-11-25',
    inspector: 'V. Verma',
    status: 'Scheduled',
    rating: 'Pending',
    location: 'Village Rampur, UP',
    findings: 'Inspection scheduled',
    statusColor: 'bg-blue-100 text-blue-700',
    ratingColor: 'bg-gray-100 text-gray-700',
  },
];

export function InspectionsTab() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{inspections.length} inspections recorded</p>
        <Button variant="outline" size="sm">
          Schedule Inspection
        </Button>
      </div>

      <div className="space-y-3">
        {inspections.map((inspection) => (
          <div
            key={inspection.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-gray-900">{inspection.id}</h4>
                  <Badge className={inspection.statusColor}>{inspection.status}</Badge>
                  <Badge className={inspection.ratingColor}>{inspection.rating}</Badge>
                </div>
              </div>
              {inspection.status === 'Completed' && (
                <Link to={`/monitoring/${inspection.id}`}>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-500">Inspection Date</p>
                  <p className="text-gray-900">{inspection.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-500">Inspector</p>
                  <p className="text-gray-900">{inspection.inspector}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="text-gray-900">{inspection.location}</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded">
              <p className="text-gray-600">{inspection.findings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
