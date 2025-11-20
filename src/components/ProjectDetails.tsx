import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Building2, MapPin, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { MilestonesTab } from './project-tabs/MilestonesTab';
import { FundFlowTab } from './project-tabs/FundFlowTab';
import { DocumentsTab } from './project-tabs/DocumentsTab';
import { InspectionsTab } from './project-tabs/InspectionsTab';

const projectData = {
  'AG-2024-001': {
    id: 'AG-2024-001',
    title: 'Adarsh Gram Development - Village Rampur',
    component: 'Adarsh Gram',
    implementingAgency: 'PRI-UP-034 - Uttar Pradesh Panchayati Raj',
    executingAgency: 'PWD-UP-089 - UP Public Works Department',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    status: 'In Progress',
    progress: 75,
    startDate: '2024-01-15',
    expectedCompletion: '2024-12-31',
    totalBudget: '₹4.5 Cr',
    fundsReleased: '₹3.4 Cr',
    fundsUtilized: '₹2.8 Cr',
    statusColor: 'bg-blue-100 text-blue-700',
  },
};

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) {
    return (
      <div className="p-6">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/projects">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Header Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-gray-900">{project.title}</h1>
                    <Badge className={project.statusColor}>{project.status}</Badge>
                  </div>
                  <p className="text-gray-500 mb-2">{project.id}</p>
                  <Badge variant="outline">{project.component}</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Implementing Agency</p>
                    <p className="text-gray-900">{project.implementingAgency}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Executing Agency</p>
                    <p className="text-gray-900">{project.executingAgency}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Location</p>
                    <p className="text-gray-900">{project.district}, {project.state}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <p className="text-gray-500">Timeline</p>
                    <p className="text-gray-900">{project.startDate} to {project.expectedCompletion}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-64">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <p className="text-gray-700 text-center mb-4">Overall Progress</p>
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="10"
                      strokeDasharray={`${project.progress * 2.83} 283`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-blue-900">{project.progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500 mb-1">Total Budget</p>
            <p className="text-gray-900">{project.totalBudget}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500 mb-1">Funds Released</p>
            <p className="text-gray-900">{project.fundsReleased}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500 mb-1">Funds Utilized</p>
            <p className="text-gray-900">{project.fundsUtilized}</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="fundflow">Fund Flow</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="inspections">Inspections</TabsTrigger>
              <TabsTrigger value="logs">Audit Logs</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-900 mb-3">Project Description</h3>
                  <p className="text-gray-600">
                    Comprehensive development project aimed at transforming Village Rampur into an Adarsh Gram (Model Village) 
                    through infrastructure development, sanitation facilities, water supply systems, and community amenities. 
                    The project includes construction of community centers, road improvements, and implementation of sustainable 
                    development practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-3">Key Objectives</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Improve village infrastructure and connectivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Provide clean drinking water and sanitation facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-600">Establish community centers and recreational facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span className="text-gray-600">Implement renewable energy solutions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-gray-900">Milestone 3 Completed</p>
                        <p className="text-gray-500">Water supply system installation finished - 2024-11-18</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-gray-900">Inspection Scheduled</p>
                        <p className="text-gray-500">Site inspection by monitoring team on 2024-11-25</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="milestones" className="mt-6">
              <MilestonesTab />
            </TabsContent>

            <TabsContent value="fundflow" className="mt-6">
              <FundFlowTab />
            </TabsContent>

            <TabsContent value="documents" className="mt-6">
              <DocumentsTab />
            </TabsContent>

            <TabsContent value="inspections" className="mt-6">
              <InspectionsTab />
            </TabsContent>

            <TabsContent value="logs" className="mt-6">
              <div className="space-y-3">
                {[
                  { action: 'Project status updated to "In Progress"', user: 'Admin User', date: '2024-11-20 10:30' },
                  { action: 'Fund release approved - ₹50L', user: 'Finance Officer', date: '2024-11-19 14:15' },
                  { action: 'Milestone 3 marked as complete', user: 'Project Manager', date: '2024-11-18 16:45' },
                  { action: 'Document uploaded: Progress Report Q3', user: 'Project Manager', date: '2024-11-15 09:20' },
                  { action: 'Inspection report submitted', user: 'Inspector A. Sharma', date: '2024-11-12 11:30' },
                ].map((log, idx) => (
                  <div key={idx} className="flex justify-between items-start p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="text-gray-900">{log.action}</p>
                      <p className="text-gray-500">By {log.user}</p>
                    </div>
                    <p className="text-gray-400">{log.date}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
