import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Network, 
  FolderKanban, 
  Sprout, 
  GraduationCap, 
  Building2,
  ArrowRightLeft,
  ClipboardCheck,
  FileText,
  AlertTriangle,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: Home, label: 'Home / Overview', path: '/' },
  { icon: Network, label: 'Agency Mapping', path: '/agency-mapping' },
  { icon: FolderKanban, label: 'Projects', path: '/projects' },
  { icon: Sprout, label: 'Adarsh Gram', path: '/adarsh-gram' },
  { icon: GraduationCap, label: 'GIA', path: '/gia' },
  { icon: Building2, label: 'Hostel', path: '/hostel' },
  { icon: ArrowRightLeft, label: 'Fund Flow', path: '/fund-flow' },
  { icon: ClipboardCheck, label: 'Monitoring & Inspections', path: '/monitoring' },
  { icon: FileText, label: 'Documents', path: '/documents' },
  { icon: AlertTriangle, label: 'Alerts & Escalations', path: '/alerts' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Admin', path: '/admin' },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white">PM</span>
            </div>
            <span className="text-blue-900">PM-AJAY CMS</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 hover:bg-gray-100 rounded text-gray-600"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 transition-colors",
                collapsed ? "justify-center" : "",
                isActive 
                  ? "bg-blue-50 text-blue-700 border-r-3 border-blue-600" 
                  : "text-gray-700 hover:bg-gray-50"
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
