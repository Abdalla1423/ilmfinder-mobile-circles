import { ArrowLeft, Heart, Share2, Calendar, MapPin, Clock, Users, Globe, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

interface EventDetailScreenProps {
  event: Event;
  onBack: () => void;
  isBookmarked?: boolean;
  onBookmark?: () => void;
}

export const EventDetailScreen = ({ event, onBack, isBookmarked = false, onBookmark }: EventDetailScreenProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="bg-gradient-primary text-white relative">
        <div className="flex items-center justify-between p-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onBack}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft size={24} />
          </Button>
          
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onBookmark}
              className={`text-white hover:bg-white/10 ${isBookmarked ? 'text-red-300' : ''}`}
            >
              <Heart size={20} className={isBookmarked ? 'fill-current' : ''} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Share2 size={20} />
            </Button>
          </div>
        </div>

        {/* Event title section */}
        <div className="px-6 pb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {event.category}
              </Badge>
              {event.isGerman && (
                <Badge variant="outline" className="border-white/30 text-white">
                  De
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold leading-tight">{event.title}</h1>
            <p className="text-xl text-white/90">Thema: {event.description}</p>
            <p className="text-lg text-white/80">Referent: {event.referent}</p>
          </div>
        </div>
      </div>

      {/* Event details card */}
      <div className="p-6">
        <div className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card -mt-8 relative z-10">
          <div className="space-y-6">
            {/* Time and Date */}
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-lg">{event.time} Uhr</p>
                <p className="text-muted-foreground">{event.date}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-lg">{event.location}</p>
                <p className="text-muted-foreground">Berlin, Deutschland</p>
              </div>
            </div>

            {/* Attendees */}
            {event.attendees && (
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    {event.attendees} von {event.maxAttendees} Teilnehmern
                  </p>
                  <p className="text-muted-foreground">Plätze verfügbar</p>
                </div>
              </div>
            )}
          </div>

          <Separator className="my-6" />

          {/* Description */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Über diese Veranstaltung</h3>
            <p className="text-muted-foreground leading-relaxed">
              Brüderkreis der Muslimischen Jugend in Berlin e.V. Der Kreis ist für Brüder 
              über 16 Jahre. Teilnahme ist kostenlos und offen für alle. Bei Fragen meldet 
              euch über Instagram oder über info@mjb.de
            </p>
          </div>

          <Separator className="my-6" />

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Globe size={18} className="text-primary" />
                <span>https://muslimischejugend.de/</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Instagram size={18} className="text-primary" />
                <span>@mjd_e.v.</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>mjd_ev</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mt-6">
          <Button variant="islamic" size="lg" className="w-full">
            <Calendar className="mr-2" size={20} />
            Zu Kalender hinzufügen
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            <MapPin className="mr-2" size={20} />
            Route planen
          </Button>
        </div>
      </div>
    </div>
  );
};