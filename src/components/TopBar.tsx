import { Search, Bell, User, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const breadcrumbMap: Record<string, string[]> = {
  '/': ['Home'],
  '/agency-mapping': ['Home', 'Agency Mapping'],
  '/projects': ['Home', 'Projects'],
  '/adarsh-gram': ['Home', 'Adarsh Gram'],
  '/gia': ['Home', 'GIA'],
  '/hostel': ['Home', 'Hostel'],
  '/fund-flow': ['Home', 'Fund Flow'],
  '/monitoring': ['Home', 'Monitoring & Inspections'],
  '/documents': ['Home', 'Documents'],
  '/alerts': ['Home', 'Alerts & Escalations'],
  '/reports': ['Home', 'Reports'],
  '/admin': ['Home', 'Admin'],
};

export function TopBar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();
  
  const breadcrumbs = breadcrumbMap[location.pathname] || ['Home'];

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-gray-500">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              <span className={index === breadcrumbs.length - 1 ? 'text-gray-900' : ''}>
                {crumb}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className={`relative transition-all ${searchFocused ? 'w-80' : 'w-64'}`}>
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects, agencies, documents..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>

        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-blue-700" />
            </div>
            <span className="text-gray-700">Admin User</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Help</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
