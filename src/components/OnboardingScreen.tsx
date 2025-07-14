import { Button } from "@/components/ui/button";
import { BookOpen, Users, MapPin } from "lucide-react";

interface OnboardingScreenProps {
  onContinue: () => void;
}

export const OnboardingScreen = ({ onContinue }: OnboardingScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-islamic-secondary/20" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-sm mx-auto">
        {/* Logo and App Icon */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-elevated">
          <div className="relative">
            <BookOpen size={64} className="text-white mb-2 animate-bounce-gentle" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-islamic-accent rounded-full flex items-center justify-center">
              <Users size={14} className="text-primary" />
            </div>
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">IlmFinder</h1>
          <p className="text-lg text-white/80 font-medium">إيجاد العلم</p>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-white/90 text-lg leading-relaxed">
            Discover and connect with Islamic study circles in your community
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <BookOpen size={16} />
              <span>Learn</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>Connect</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Discover</span>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-8 w-full">
          <Button
            onClick={onContinue}
            variant="hero"
            size="hero"
            className="w-full animate-fade-in"
          >
            Tap to continue
          </Button>
        </div>

        {/* Subtle Islamic pattern decoration */}
        <div className="absolute top-20 left-4 w-20 h-20 border border-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-4 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-1000" />
      </div>
    </div>
  );
};