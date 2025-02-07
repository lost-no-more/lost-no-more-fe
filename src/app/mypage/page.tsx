'use client';

import React, { useState } from 'react';
import Headerbar from '@/components/common/headerbar';
import { SideNavigation } from '@/components/mypage/side-navigation';
import { LocationsSection } from '@/components/mypage/location-section';
import { NotificationsSection } from '@/components/mypage/notifications-section';

export default function MyPage() {
  const [activeSection, setActiveSection] = useState('locations');

  const renderContent = () => {
    switch (activeSection) {
      case 'locations':
        return <LocationsSection />;
      case 'notifications':
        return <NotificationsSection />;
      default:
        return null;
    }
  };

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
          <SideNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  );
}
