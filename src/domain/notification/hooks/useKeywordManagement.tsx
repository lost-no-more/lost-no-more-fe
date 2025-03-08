import { useState } from 'react';

import type { KeywordItem } from '@/shared/types/keyword';
import { createKeyword, updateKeywordInList } from '@/shared/utils/keyword-helper';

export const useKeywordManagement = () => {
  const [keywords, setKeywords] = useState<KeywordItem[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordItem | null>(null);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const addKeyword = (text: string) => {
    if (text) {
      const newKeyword = createKeyword(text);
      setKeywords([...keywords, newKeyword]);
    }
  };

  const removeKeyword = (keywordId: string) => {
    setKeywords(keywords.filter((kw) => kw.id !== keywordId));
  };

  // 설정 보기
  const handleSettingsClick = (keyword: KeywordItem) => {
    setSelectedKeyword(keyword);
    setIsSettingsVisible(true);
  };

  // 설정 화면 닫기
  const handleBackClick = () => {
    setIsSettingsVisible(false);
    setSelectedKeyword(null);
  };

  const updateKeyword = (keywordId: string, updatedKeyword: Omit<KeywordItem, 'id'>) => {
    const updatedKeywords = updateKeywordInList({
      keywords,
      keywordId,
      updatedKeyword,
    });

    setKeywords(updatedKeywords);

    if (selectedKeyword && selectedKeyword.id === keywordId) {
      setSelectedKeyword({
        ...selectedKeyword,
        ...updatedKeyword,
      });
    }
  };

  return {
    keywords,
    selectedKeyword,
    isSettingsVisible,
    addKeyword,
    removeKeyword,
    handleSettingsClick,
    handleBackClick,
    updateKeyword,
  };
};

export const useNotificationSettings = () => {
  const [emailNotification, setEmailNotification] = useState(false);

  return {
    emailNotification,
    setEmailNotification,
  };
};
