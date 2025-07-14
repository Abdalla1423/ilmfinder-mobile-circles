import { Heart, Clock, MapPin, Users, Info } from "lucide-react";
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
          <p className="text-sm text-muted-foreground">
            {event.description} • {event.referent}
          </p>
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
      <div className="space-y-3">
        {/* Time and Date */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock size={16} className="text-primary" />
          <span className="font-medium">{event.time}</span>
          <span>•</span>
          <span>{event.date}</span>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin size={16} className="text-primary" />
          <span>{event.location}</span>
        </div>

        {/* Attendees and language badges */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {event.attendees && (
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Users size={16} className="text-primary" />
                <span>{event.attendees}{event.maxAttendees ? `/${event.maxAttendees}` : ''}</span>
              </div>
            )}
            
            <div className="flex space-x-2">
              <Badge variant="secondary" className="text-xs">
                {event.category}
              </Badge>
              {event.isGerman && (
                <Badge variant="outline" className="text-xs">
                  De
                </Badge>
              )}
            </div>
          </div>

          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            <Info size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};