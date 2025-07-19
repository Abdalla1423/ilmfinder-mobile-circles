import { Heart, Clock, MapPin, Users, User, UserCheck } from "lucide-react";
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
  gender?: {
    type: 'men' | 'women' | 'mixed';
  };
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
    if (!event.gender) return <Users size={16} className="text-sky-500" />;
    
    switch (event.gender.type) {
      case 'men':
        return <User size={16} className="text-sky-500" />;
      case 'women':
        return <UserCheck size={16} className="text-sky-500" />;
      case 'mixed':
        return <Users size={16} className="text-sky-500" />;
      default:
        return <Users size={16} className="text-sky-500" />;
    }
  };

  return (
    <div 
      className="relative bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-slide-up"
      onClick={handleViewDetails}
    >
      {/* Sky blue accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-400 rounded-l-2xl" />
      
      {/* Header with title and bookmark */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800 leading-tight mb-1">
            {event.title}
          </h3>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBookmark}
          className={`ml-2 flex-shrink-0 ${bookmarked ? 'text-sky-500' : 'text-gray-500'} hover:text-sky-500 border border-gray-300 rounded-lg`}
        >
          <Heart size={18} className={bookmarked ? 'fill-current' : ''} />
        </Button>
      </div>

      {/* Event details */}
      <div className="space-y-3">
        {/* Time and Location */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock size={16} className="text-sky-500" />
            <span className="font-medium">{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <MapPin size={16} className="text-sky-500" />
            <span className="truncate max-w-32">{event.location}</span>
          </div>
        </div>

        {/* Metadata chips */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Gender and Language badges */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-full px-3 py-1">
              {getGenderIcon()}
              <span className="text-xs text-gray-600 ml-1">
                {event.gender?.type === 'men' ? 'Men' : event.gender?.type === 'women' ? 'Women' : 'Mixed'}
              </span>
            </div>
            
            {event.isGerman && (
              <div className="bg-gray-100 rounded-full px-3 py-1">
                <span className="text-xs text-gray-600">DE</span>
              </div>
            )}
          </div>

          {event.attendees && (
            <div className="flex items-center space-x-1 text-sm text-gray-500 bg-gray-100 rounded-full px-3 py-1">
              <Users size={14} className="text-sky-500" />
              <span className="text-xs">{event.attendees}{event.maxAttendees ? `/${event.maxAttendees}` : ''}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};