'use client';

import { MapPin, Bell, CircleHelp, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import Headerbar from '../common/headerbar';

export default function MyPage() {
  const [activeSection, setActiveSection] = useState('locations');

  const menuItems = [
    { id: 'losts', label: '관심 분실물', icon: <CircleHelp className="h-4 w-4" /> },
    { id: 'alerts', label: '알림 설정', icon: <Bell className="h-4 w-4" /> },
    { id: 'locations', label: '내 위치 설정', icon: <MapPin className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 네비게이션 */}
      <Headerbar />
      {/* 페이지 타이틀 */}
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold">username님의 마이페이지</h1>
      </div>
      {/* 메인 컨텐츠 */}
      <div className="container mx-auto flex gap-6">
        {/* 좌측 네비게이션 */}
        <div className="w-64 shrink-0">
          <Card>
            <CardContent className="p-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`mb-1 flex w-full items-center justify-between rounded-lg p-3 text-base hover:bg-gray-100 ${
                    activeSection === item.id ? 'bg-blue-50 text-primary' : ''
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
        </div>
      </div>
    </div>
  );
}
