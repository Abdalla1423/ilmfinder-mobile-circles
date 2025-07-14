import { MapPin, Navigation, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const MapScreen = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 rounded-b-3xl shadow-elevated">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Karte</h1>
            <p className="text-white/80 text-sm">Discover events near you</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Navigation size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Filter size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Map placeholder with pins */}
      <div className="p-6">
        <div className="bg-muted rounded-2xl h-96 relative overflow-hidden shadow-card">
          {/* Map background simulation */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200">
            {/* Streets simulation */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gray-300"></div>
            <div className="absolute top-40 left-0 right-0 h-1 bg-gray-300"></div>
            <div className="absolute left-20 top-0 bottom-0 w-1 bg-gray-300"></div>
            <div className="absolute left-40 top-0 bottom-0 w-1 bg-gray-300"></div>
            <div className="absolute left-60 top-0 bottom-0 w-1 bg-gray-300"></div>
          </div>

          {/* Event pins */}
          <div className="absolute top-16 left-16">
            <div className="bg-primary text-white p-2 rounded-full shadow-elevated animate-bounce-gentle">
              <MapPin size={16} />
            </div>
            <div className="bg-white rounded-lg p-2 mt-1 shadow-card text-xs font-medium">
              MJB Brüderkreis
            </div>
          </div>

          <div className="absolute top-32 left-48">
            <div className="bg-primary text-white p-2 rounded-full shadow-elevated">
              <MapPin size={16} />
            </div>
            <div className="bg-white rounded-lg p-2 mt-1 shadow-card text-xs font-medium">
              Badr Moschee
            </div>
          </div>

          <div className="absolute top-24 left-32">
            <div className="bg-islamic-secondary text-white p-2 rounded-full shadow-elevated">
              <MapPin size={16} />
            </div>
            <div className="bg-white rounded-lg p-2 mt-1 shadow-card text-xs font-medium">
              IJB Schwesternkreis
            </div>
          </div>

          {/* Current location */}
          <div className="absolute bottom-20 right-20">
            <div className="bg-blue-500 p-3 rounded-full shadow-elevated">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Event list overlay */}
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-lg">Events in der Nähe</h3>
        
        <div className="space-y-3">
          <div className="bg-gradient-card border border-border rounded-xl p-4 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">MJB Brüderkreis</h4>
                <p className="text-sm text-muted-foreground">17:00 • 0.8 km entfernt</p>
              </div>
              <Badge variant="secondary">Study Circle</Badge>
            </div>
          </div>

          <div className="bg-gradient-card border border-border rounded-xl p-4 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">Badr Moschee Halaqah</h4>
                <p className="text-sm text-muted-foreground">18:00 • 1.2 km entfernt</p>
              </div>
              <Badge variant="secondary">Halaqah</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};