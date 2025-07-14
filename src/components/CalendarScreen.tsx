import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const CalendarScreen = () => {
  const [currentDate] = useState(new Date());
  
  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
  };

  const events = [
    { date: 'Heute', title: 'MJB Brüderkreis', time: '17:00', color: 'bg-primary' },
    { date: 'Heute', title: 'IJB Brüderkreis', time: '18:00', color: 'bg-islamic-secondary' },
    { date: 'Morgen', title: 'Badr Moschee Halaqah', time: '18:00', color: 'bg-primary' },
    { date: 'Freitag', title: 'IJB Schwesternkreis', time: '19:00', color: 'bg-islamic-secondary' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 rounded-b-3xl shadow-elevated">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Kalender</h1>
            <p className="text-white/80 text-sm">Your Islamic learning schedule</p>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Plus size={20} />
          </Button>
        </div>

        {/* Month navigation */}
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <ChevronLeft size={20} />
          </Button>
          <h2 className="text-lg font-semibold capitalize">{formatMonth(currentDate)}</h2>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>

      {/* Mini calendar */}
      <div className="p-6">
        <div className="bg-gradient-card border border-border rounded-2xl p-4 shadow-card">
          {/* Calendar grid header */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Previous month days */}
            {[30, 31].map((day) => (
              <div key={`prev-${day}`} className="text-center p-2 text-muted-foreground/50">
                {day}
              </div>
            ))}
            
            {/* Current month days */}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const hasEvent = [4, 5, 8].includes(day);
              const isToday = day === 4;
              
              return (
                <div
                  key={day}
                  className={`text-center p-2 rounded-lg transition-colors ${
                    isToday
                      ? 'bg-primary text-white font-bold'
                      : hasEvent
                      ? 'bg-islamic-muted text-primary font-semibold'
                      : 'hover:bg-accent'
                  }`}
                >
                  {day}
                  {hasEvent && (
                    <div className="w-1 h-1 bg-primary rounded-full mx-auto mt-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming events */}
      <div className="px-6 pb-24">
        <h3 className="font-semibold text-lg mb-4">Kommende Veranstaltungen</h3>
        
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-card border border-border rounded-xl p-4 shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-12 rounded-full ${event.color}`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{event.title}</h4>
                    <span className="text-sm text-muted-foreground">{event.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <Calendar size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};