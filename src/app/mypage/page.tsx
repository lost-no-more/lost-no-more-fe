'use client';

import React, { useState } from 'react';
import Headerbar from '@/components/common/headerbar';
import { SideNavigation } from '@/components/mypage/side-navigation';
import { LostItemsSection } from '@/components/mypage/lost-items-section';
import { NotificationsSection } from '@/components/mypage/notifications-section';
import { LocationsSection } from '@/components/mypage/location-section';

export default function MyPage() {
  const [activeSection, setActiveSection] = useState('losts');

  const renderContent = () => {
    switch (activeSection) {
      case 'losts':
        return <LostItemsSection data-cid="LostItemsSection-d03Fo1" />;
      case 'notifications':
        return <NotificationsSection data-cid="NotificationsSection-FrCmMQ" />;
      case 'locations':
        return <LocationsSection data-cid="LocationsSection-ok3u42" />;
      default:
        return null;
    }
  };

  return (
    <div data-cid="div-E0B1FK" className="min-h-screen bg-gray-50">
      {/* 상단 네비게이션 */}
      <Headerbar data-cid="Headerbar-WDxQ34" />
      {/* 페이지 타이틀 */}
      <div data-cid="div-4VgePc" className="container mx-auto py-8">
        <h1 data-cid="h1-S1iqHU" className="text-2xl font-bold">
          username님의 마이페이지
        </h1>
      </div>
      {/* 메인 컨텐츠 */}
      <div data-cid="div-SzyRji" className="container mx-auto flex gap-6">
        {/* 좌측 네비게이션 */}
        <div data-cid="div-CuMShQ" className="w-64 shrink-0">
          <SideNavigation
            data-cid="SideNavigation-ANQqHh"
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>
        <div data-cid="div-epqpvX" className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
