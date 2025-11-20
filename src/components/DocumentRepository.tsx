import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search, Filter, FileText, Download, Eye, Folder } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const documents = [
  {
    id: 1,
    title: 'Project Proposal - Adarsh Gram Rampur',
    type: 'Proposal',
    uploadedBy: 'Project Manager',
    project: 'AG-2024-001',
    date: '2024-01-10',
    size: '2.4 MB',
    category: 'Planning',
  },
  {
    id: 2,
    title: 'Environmental Clearance Certificate',
    type: 'Certificate',
    uploadedBy: 'Legal Team',
    project: 'AG-2024-001',
    date: '2024-01-25',
    size: '1.1 MB',
    category: 'Compliance',
  },
  {
    id: 3,
    title: 'Detailed Project Report (DPR)',
    type: 'Report',
    uploadedBy: 'Technical Team',
    project: 'AG-2024-001',
    date: '2024-02-05',
    size: '8.7 MB',
    category: 'Technical',
  },
  {
    id: 4,
    title: 'Fund Sanction Letter - Hostel Bhopal',
    type: 'Letter',
    uploadedBy: 'Finance Officer',
    project: 'HST-2024-023',
    date: '2024-02-15',
    size: '0.5 MB',
    category: 'Finance',
  },
  {
    id: 5,
    title: 'Q1 Progress Report - GIA Mumbai',
    type: 'Report',
    uploadedBy: 'Project Manager',
    project: 'GIA-2024-156',
    date: '2024-04-01',
    size: '3.2 MB',
    category: 'Progress',
  },
  {
    id: 6,
    title: 'Site Inspection Report - May 2024',
    type: 'Inspection',
    uploadedBy: 'Inspector A. Sharma',
    project: 'AG-2024-001',
    date: '2024-05-15',
    size: '4.1 MB',
    category: 'Inspection',
  },
  {
    id: 7,
    title: 'Tender Document - Construction Work',
    type: 'Tender',
    uploadedBy: 'Procurement Team',
    project: 'AG-2024-087',
    date: '2024-06-10',
    size: '5.2 MB',
    category: 'Procurement',
  },
  {
    id: 8,
    title: 'Utilization Certificate Q2',
    type: 'Certificate',
    uploadedBy: 'Finance Officer',
    project: 'HST-2024-034',
    date: '2024-07-20',
    size: '0.8 MB',
    category: 'Finance',
  },
  {
    id: 9,
    title: 'Completion Certificate - Phase 1',
    type: 'Certificate',
    uploadedBy: 'Project Manager',
    project: 'AG-2024-087',
    date: '2024-09-15',
    size: '1.5 MB',
    category: 'Completion',
  },
  {
    id: 10,
    title: 'Monthly Progress Report - October',
    type: 'Report',
    uploadedBy: 'Project Manager',
    project: 'HST-2024-023',
    date: '2024-10-31',
    size: '2.8 MB',
    category: 'Progress',
  },
  {
    id: 11,
    title: 'Quality Audit Report',
    type: 'Audit',
    uploadedBy: 'Quality Team',
    project: 'GIA-2024-156',
    date: '2024-11-05',
    size: '3.5 MB',
    category: 'Audit',
  },
  {
    id: 12,
    title: 'Vendor Agreement Document',
    type: 'Agreement',
    uploadedBy: 'Legal Team',
    project: 'HST-2024-034',
    date: '2024-11-12',
    size: '1.9 MB',
    category: 'Legal',
  },
];

const categoryColors: Record<string, string> = {
  Planning: 'bg-blue-100 text-blue-700',
  Compliance: 'bg-green-100 text-green-700',
  Technical: 'bg-purple-100 text-purple-700',
  Finance: 'bg-yellow-100 text-yellow-700',
  Progress: 'bg-cyan-100 text-cyan-700',
  Inspection: 'bg-orange-100 text-orange-700',
  Procurement: 'bg-indigo-100 text-indigo-700',
  Completion: 'bg-green-100 text-green-700',
  Audit: 'bg-red-100 text-red-700',
  Legal: 'bg-gray-700 text-white',
};

export function DocumentRepository() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    const matchesType = filterType === 'all' || doc.type === filterType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const categories = [...new Set(documents.map(d => d.category))];
  const types = [...new Set(documents.map(d => d.type))];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-1">Document Repository</h1>
        <p className="text-gray-500">Centralized document storage and management</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search documents by title, project, or uploader..."
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
            <Button>Upload Document</Button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="text-gray-700 mb-2 block">Category</label>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-gray-700 mb-2 block">Type</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Category Folders */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {categories.map(category => {
              const count = documents.filter(d => d.category === category).length;
              return (
                <div
                  key={category}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => setFilterCategory(category)}
                >
                  <Folder className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="text-gray-900 mb-1">{category}</p>
                  <p className="text-gray-500">{count} files</p>
                </div>
              );
            })}
          </div>

          {/* Document Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg h-fit">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 mb-2">{doc.title}</h4>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="outline">{doc.type}</Badge>
                      <Badge className={categoryColors[doc.category]}>{doc.category}</Badge>
                    </div>
                    
                    <div className="space-y-1 text-gray-600 mb-3">
                      <p>Project: {doc.project}</p>
                      <p>By {doc.uploadedBy}</p>
                      <p>{doc.date} • {doc.size}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Eye className="w-3 h-3" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Download className="w-3 h-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
