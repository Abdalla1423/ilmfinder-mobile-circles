import { useState } from "react";
import { OnboardingScreen } from "@/components/OnboardingScreen";
import { EventListScreen } from "@/components/EventListScreen";
import { EventDetailScreen } from "@/components/EventDetailScreen";
import { MapScreen } from "@/components/MapScreen";
import { CalendarScreen } from "@/components/CalendarScreen";
import { BottomNavigation } from "@/components/BottomNavigation";

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

type Screen = 'onboarding' | 'list' | 'calendar' | 'map' | 'settings' | 'detail';
type Tab = 'list' | 'calendar' | 'map' | 'settings';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [activeTab, setActiveTab] = useState<Tab>('list');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [bookmarkedEvents, setBookmarkedEvents] = useState<Set<string>>(new Set());

  const handleContinueFromOnboarding = () => {
    setCurrentScreen('list');
  };

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
    setCurrentScreen('detail');
  };

  const handleBackFromDetail = () => {
    setCurrentScreen(activeTab);
    setSelectedEvent(null);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  const handleEventBookmark = (eventId: string) => {
    const newBookmarked = new Set(bookmarkedEvents);
    if (bookmarkedEvents.has(eventId)) {
      newBookmarked.delete(eventId);
    } else {
      newBookmarked.add(eventId);
    }
    setBookmarkedEvents(newBookmarked);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onContinue={handleContinueFromOnboarding} />;
      
      case 'list':
        return <EventListScreen onEventSelect={handleEventSelect} />;
      
      case 'calendar':
        return <CalendarScreen />;
      
      case 'map':
        return <MapScreen />;
      
      case 'detail':
        return selectedEvent ? (
          <EventDetailScreen 
            event={selectedEvent}
            onBack={handleBackFromDetail}
            isBookmarked={bookmarkedEvents.has(selectedEvent.id)}
            onBookmark={() => handleEventBookmark(selectedEvent.id)}
          />
        ) : null;
      
      default:
        return <EventListScreen onEventSelect={handleEventSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative max-w-md mx-auto">
      {renderCurrentScreen()}
      
      {/* Bottom Navigation - only show on main screens, not onboarding or detail */}
      {currentScreen !== 'onboarding' && currentScreen !== 'detail' && (
        <BottomNavigation 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
      )}
    </div>
  );
};

export default Index;
