import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EventCard } from "./EventCard";
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

interface EventListScreenProps {
  onEventSelect: (event: Event) => void;
}

const sampleEvents: Event[] = [
  {
    id: "1",
    title: "MJB Brüderkreis",
    description: "Die Fitna des Dajjal",
    referent: "Bruder Hojan",
    time: "17:00",
    date: "Today",
    location: "Perleberger Straße 42",
    isGerman: true,
    attendees: 12,
    maxAttendees: 20,
    category: "Study Circle"
  },
  {
    id: "2",
    title: "IJB Brüderkreis",
    description: "Die Fitna des Dajjal",
    referent: "Bruder Hojan",
    time: "18:00",
    date: "Today",
    location: "Muslimische Jugend Berlin",
    isGerman: true,
    attendees: 8,
    maxAttendees: 15,
    category: "Study Circle"
  },
  {
    id: "3",
    title: "Badr Moschee Halaqah",
    description: "Die Fitna des Dajjal",
    referent: "Bruder Hojan",
    time: "18:00",
    date: "Tomorrow",
    location: "Badr Moschee",
    isGerman: true,
    attendees: 15,
    maxAttendees: 25,
    category: "Halaqah"
  },
  {
    id: "4",
    title: "IJB Schwesternkreis",
    description: "Die Fitna des Dajjal",
    referent: "Bruder Hojan",
    time: "19:00",
    date: "Friday",
    location: "Muslimische Jugend Berlin",
    isGerman: true,
    attendees: 10,
    maxAttendees: 18,
    category: "Study Circle"
  }
];

export const EventListScreen = ({ onEventSelect }: EventListScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedEvents, setBookmarkedEvents] = useState<Set<string>>(new Set());

  const handleBookmark = (eventId: string) => {
    const newBookmarked = new Set(bookmarkedEvents);
    if (bookmarkedEvents.has(eventId)) {
      newBookmarked.delete(eventId);
    } else {
      newBookmarked.add(eventId);
    }
    setBookmarkedEvents(newBookmarked);
  };

  const filteredEvents = sampleEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.referent.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 rounded-b-3xl shadow-elevated">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Unterrichte</h1>
              <p className="text-white/80 text-sm">Find Islamic study circles near you</p>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <SlidersHorizontal size={20} />
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
            />
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="p-6 pb-4">
        <div className="flex space-x-3 overflow-x-auto pb-2">
          <Button variant="islamic" size="sm" className="flex-shrink-0">
            Today
          </Button>
          <Button variant="outline" size="sm" className="flex-shrink-0">
            This Week
          </Button>
          <Button variant="outline" size="sm" className="flex-shrink-0">
            Study Circles
          </Button>
          <Button variant="outline" size="sm" className="flex-shrink-0">
            Lectures
          </Button>
        </div>
      </div>

      {/* Events List */}
      <div className="px-6 pb-24 space-y-4">
        {filteredEvents.map((event, index) => (
          <div key={event.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <EventCard
              event={event}
              onBookmark={handleBookmark}
              onViewDetails={onEventSelect}
              isBookmarked={bookmarkedEvents.has(event.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};