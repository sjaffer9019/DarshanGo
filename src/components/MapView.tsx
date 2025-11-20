import { MapPin } from 'lucide-react';

const mockLocations = [
  { id: 1, name: 'Adarsh Gram - Rajasthan', lat: 30, lng: 25, type: 'adarsh' },
  { id: 2, name: 'Hostel - Gujarat', lat: 45, lng: 35, type: 'hostel' },
  { id: 3, name: 'GIA - Maharashtra', lat: 55, lng: 45, type: 'gia' },
  { id: 4, name: 'Adarsh Gram - UP', lat: 35, lng: 60, type: 'adarsh' },
  { id: 5, name: 'Hostel - MP', lat: 50, lng: 55, type: 'hostel' },
  { id: 6, name: 'GIA - Karnataka', lat: 65, lng: 35, type: 'gia' },
  { id: 7, name: 'Adarsh Gram - Bihar', lat: 40, lng: 70, type: 'adarsh' },
  { id: 8, name: 'Hostel - Odisha', lat: 60, lng: 65, type: 'hostel' },
];

const getMarkerColor = (type: string) => {
  switch (type) {
    case 'adarsh': return 'bg-green-500';
    case 'hostel': return 'bg-blue-500';
    case 'gia': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};

export function MapView() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-b-lg overflow-hidden">
      {/* Simplified India Map Background */}
      <svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 30 20 Q 35 15 40 20 L 45 25 L 50 20 L 55 25 L 60 22 L 65 28 L 70 30 L 72 35 L 75 40 L 75 50 L 72 60 L 68 68 L 62 75 L 55 78 L 50 80 L 45 78 L 40 75 L 35 70 L 32 65 L 30 60 L 28 50 L 28 40 L 30 30 Z"
          fill="white"
          stroke="#3b82f6"
          strokeWidth="0.5"
        />
      </svg>

      {/* State Regions with Heatmap Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-blue-300 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-green-300 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-purple-300 opacity-30 rounded-full blur-2xl"></div>
      </div>

      {/* Location Markers */}
      {mockLocations.map((location) => (
        <div
          key={location.id}
          className="absolute group cursor-pointer"
          style={{ top: `${location.lat}%`, left: `${location.lng}%` }}
        >
          <div className={`${getMarkerColor(location.type)} w-3 h-3 rounded-full shadow-lg animate-pulse`}></div>
          <MapPin className={`w-6 h-6 ${getMarkerColor(location.type)} -translate-x-3 -translate-y-6 drop-shadow-lg`} fill="currentColor" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded shadow-lg whitespace-nowrap">
              {location.name}
            </div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-700">Adarsh Gram</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-700">Hostel</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-gray-700">GIA</span>
        </div>
      </div>
    </div>
  );
}
