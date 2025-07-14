import { Menu, Calendar, MapPin, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavigationProps {
  activeTab: 'list' | 'calendar' | 'map' | 'settings';
  onTabChange: (tab: 'list' | 'calendar' | 'map' | 'settings') => void;
}

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: 'list' as const, icon: Menu, label: 'Events' },
    { id: 'calendar' as const, icon: Calendar, label: 'Calendar' },
    { id: 'map' as const, icon: MapPin, label: 'Map' },
    { id: 'settings' as const, icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-elevated">
      <div className="flex items-center justify-around px-4 py-2 max-w-md mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            variant="ghost"
            size="sm"
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center space-y-1 p-3 h-auto min-w-0 ${
              activeTab === id 
                ? 'text-primary bg-primary/10' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs font-medium">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};