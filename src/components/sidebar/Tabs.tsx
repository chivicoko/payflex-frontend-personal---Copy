'use client';

import { menuItems } from '../../data/base';
import React, { useState } from 'react';
import ButtonNeutral from '../button/ButtonNeutral';
import { useRouter } from 'next/navigation';
import DropDownMenu from './DropDownMenu';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useGeneralData } from '@/stores/useGeneralData';

interface TabsProps {
  start: number;
  stop: number;
  onItemClick: () => void;
}

interface MainTabProps {
  id: number;
  title: string;
  url: string;
}

const Tabs = ({ start, stop, onItemClick }: TabsProps) => {
  const [currentDropdownTab, setCurrentDropdownTab] = useState<string | null>(null);
  const router = useRouter();

  const updateGeneralData = useGeneralData((state) => state.updateGeneralData);
  const currentData = useGeneralData((state) => state.currentData);
  
  const handleTabClick = (title: string, tabMenu: MainTabProps[], tabUrl: string) => {
    if (tabMenu.length > 0) {
      setCurrentDropdownTab((prev) => (prev === title ? null : title));
    } else {
      router.push(tabUrl);
      updateGeneralData(tabUrl, '');
      setCurrentDropdownTab((prev) => (prev === title ? null : title));
      onItemClick();
    }
  }

  const handleSubtabClick = (title: string, tabUrl: string, subTabUrl: string) => {
    router.push(tabUrl);
    updateGeneralData(tabUrl, subTabUrl);
    setCurrentDropdownTab((prev) => (prev === title ? null : title));
    onItemClick();
  }

  return (
    <>
      {menuItems.slice(start, stop).map((item, index) => (
        <li key={index} className="w-full">
          <span className="relative">
            <ButtonNeutral
              btnText1={item.title}
              onClick={() => handleTabClick(item.title, item.dropdownMenu, item.url )}
              classes={`${
                currentData.currentTab === item.url
                  ? 'text-white bg-primary'
                  : 'text-textGray bg-transparent border-transparent'
              } flex-1 flex items-center gap-2 w-full hover:text-white hover:bg-primary py-2 px-3 rounded-radius-4 text-sm transition-all duration-300 ease-in-out`}
              icon1={<item.icon style={{ fontSize: '16px' }} />}
              icon2={
                item.dropdownMenu.length > 0 ? (
                  currentDropdownTab === item.title ? (
                    <KeyboardArrowUp style={{ fontSize: '16px' }} />
                  ) : (
                    <KeyboardArrowDown style={{ fontSize: '16px' }} />
                  )
                ) : null
              }
            />

            {currentDropdownTab === item.title && item.dropdownMenu.length > 0 && (
              <DropDownMenu
                activeSubtab={currentData.currentSubtab}
                menu={item.dropdownMenu}
                handleTabNavigation={(menuItemUrl) => handleSubtabClick(item.title, item.url, menuItemUrl)}
              />
            )}
          </span>
        </li>
      ))}
    </>
  );
};

export default Tabs;
