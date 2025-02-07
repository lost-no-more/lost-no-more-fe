import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Bell, CircleHelp, ChevronRight } from 'lucide-react';

const menuItems = [
  { id: 'losts', label: '관심 분실물', icon: <CircleHelp className="h-4 w-4" /> },
  { id: 'notifications', label: '알림 설정', icon: <Bell className="h-4 w-4" /> },
  { id: 'locations', label: '내 위치 설정', icon: <MapPin className="h-4 w-4" /> },
];

interface SideNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const SideNavigation = ({ activeSection, onSectionChange }: SideNavigationProps) => {
  return (
    <Card>
      <CardContent className="p-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`mb-1 flex w-full items-center justify-between rounded-lg p-3 text-base hover:bg-primary/5 ${
              activeSection === item.id ? 'bg-primary/5 text-primary' : ''
            }`}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </button>
        ))}
      </CardContent>
    </Card>
  );
};
