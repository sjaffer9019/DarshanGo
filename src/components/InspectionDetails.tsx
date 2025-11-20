import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { ArrowLeft, MapPin, Calendar, User, Image as ImageIcon, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const inspectionData = {
  'INS-2024-001': {
    id: 'INS-2024-001',
    project: 'AG-2024-001 - Adarsh Gram Development - Village Rampur',
    inspector: 'A. K. Sharma',
    date: '2024-03-15',
    location: 'Village Rampur, Lucknow, Uttar Pradesh',
    geoLocation: '26.8467° N, 80.9462° E',
    status: 'Completed',
    rating: 'Satisfactory',
    statusColor: 'bg-green-100 text-green-700',
    ratingColor: 'bg-green-100 text-green-700',
    checklist: [
      { id: 1, item: 'Site accessibility verified', checked: true },
      { id: 2, item: 'Construction materials quality check', checked: true },
      { id: 3, item: 'Safety measures in place', checked: true },
      { id: 4, item: 'Work progress as per timeline', checked: true },
      { id: 5, item: 'Labor welfare compliance', checked: true },
      { id: 6, item: 'Environmental norms followed', checked: true },
      { id: 7, item: 'Documentation up to date', checked: true },
      { id: 8, item: 'Quality standards met', checked: true },
    ],
    observations: 'All construction work is progressing as per the approved plan. Quality of materials used is satisfactory. Safety measures are properly implemented at the site. Minor delays expected due to monsoon season but overall progress is on track.',
    recommendations: 'Continue monitoring material quality. Ensure timely completion of water supply system installation. Schedule next inspection after monsoon season.',
  },
};

export function InspectionDetails() {
  const { id } = useParams<{ id: string }>();
  const inspection = id ? inspectionData[id as keyof typeof inspectionData] : null;

  if (!inspection) {
    return (
      <div className="p-6">
        <p>Inspection not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/monitoring">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Inspections
          </Button>
        </Link>
      </div>

      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-gray-900">{inspection.id}</h1>
                <Badge className={inspection.statusColor}>{inspection.status}</Badge>
                <Badge className={inspection.ratingColor}>{inspection.rating}</Badge>
              </div>
              <p className="text-gray-600 mb-4">{inspection.project}</p>
            </div>
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF Report
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">Inspector</p>
                <p className="text-gray-900">{inspection.inspector}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">Inspection Date</p>
                <p className="text-gray-900">{inspection.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-1" />
              <div>
                <p className="text-gray-500">Location</p>
                <p className="text-gray-900">{inspection.location}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Geo-location */}
      <Card>
        <CardHeader>
          <CardTitle>Geo-location Tag</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-50 rounded-lg flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-blue-900">GPS Coordinates</p>
              <p className="text-blue-700">{inspection.geoLocation}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Inspection Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {inspection.checklist.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Checkbox checked={item.checked} disabled />
                <span className="text-gray-900">{item.item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Photo Uploads */}
      <Card>
        <CardHeader>
          <CardTitle>Site Photographs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Observations */}
      <Card>
        <CardHeader>
          <CardTitle>Observations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">{inspection.observations}</p>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">{inspection.recommendations}</p>
        </CardContent>
      </Card>
    </div>
  );
}
