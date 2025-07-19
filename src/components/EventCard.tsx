import { Heart, Clock, MapPin, Users, Info, UserCheck, UserX, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Event {
  id: string;
  title: string;
  description: string;
  referent: string;
  time: string;
  date: string;
  location: string;
  isGerman?: boolean;
  attendees?: number;
  maxAttendees?: number;
  category: string;
  genderType?: "men" | "women" | "mixed";
}

interface EventCardProps {
  event: Event;
  onBookmark?: (eventId: string) => void;
  onViewDetails?: (event: Event) => void;
  isBookmarked?: boolean;
}

export const EventCard = ({ event, onBookmark, onViewDetails, isBookmarked = false }: EventCardProps) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
    onBookmark?.(event.id);
  };

  const handleViewDetails = () => {
    onViewDetails?.(event);
  };

  const getGenderIcon = () => {
    switch (event.genderType) {
      case "men":
        return <UserCheck size={16} className="text-primary" />;
      case "women":
        return <UserX size={16} className="text-primary" />;
      case "mixed":
        return <Users2 size={16} className="text-primary" />;
      default:
        return <Users2 size={16} className="text-primary" />;
    }
  };

  return (
    <div 
      className="bg-gradient-card border border-border rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer animate-slide-up"
      onClick={handleViewDetails}
    >
      {/* Header with title and bookmark */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground leading-tight mb-1">
            {event.title}
          </h3>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBookmark}
          className={`ml-2 flex-shrink-0 ${bookmarked ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500`}
        >
          <Heart size={20} className={bookmarked ? 'fill-current' : ''} />
        </Button>
      </div>

      {/* Event details */}
      <div className="space-y-2">
        {/* Lecturer */}
        <p className="text-sm text-muted-foreground">{event.referent}</p>
        
        {/* Time and Location */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-primary" />
            <span className="font-medium">{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-primary" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Gender and Language */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              {getGenderIcon()}
            </div>
            
            {event.isGerman && (
              <Badge variant="outline" className="text-xs">
                De
              </Badge>
            )}
          </div>

          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            <Info size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};