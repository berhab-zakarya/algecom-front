"use client"


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  DashboardIcon, InsightIcon, InvoicesIcon, ProductsIcon, 
  ReimburseIcon, InboxIcon, PeopleIcon, SettingsIcon,
  HelpIcon, DarkModeIcon, SupportIcon, GiftIcon, LogoutIcon
} from '@/components/icons';
import { DarkModeToggle } from '@/components/ui/dark-mode-toggle';

interface SidebarItem {
    icon: string;
    label: string;
    href: string;
    section?: string;
  }
const sidebarItems: SidebarItem[] = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    href: '/dashboard',
    section: 'Main Menu'
  },
  {
    icon: 'insight',
    label: 'Insight',
    href: '/insight',
    section: 'Main Menu'
  },
  {
    icon: 'invoices',
    label: 'Invoices',
    href: '/invoices',
    section: 'Main Menu'
  },
  {
    icon: 'products',
    label: 'Products',
    href: '/products',
    section: 'Main Menu'
  },
  {
    icon: 'reimburse',
    label: 'Reimburse',
    href: '/reimburse',
    section: 'Main Menu'
  },
  {
    icon: 'inbox',
    label: 'Inbox',
    href: '/inbox',
    section: 'Main Menu'
  },
  {
    icon: 'people',
    label: 'People & Teams',
    href: '/people-teams',
    section: 'Main Menu'
  },
  {
    icon: 'settings',
    label: 'Settings',
    href: '/settings',
    section: 'Preferences'
  },
  {
    icon: 'help',
    label: 'Help & Center',
    href: '/help-center',
    section: 'Preferences'
  }
];

export const Sidebar = () => {
  const pathname = usePathname();

  const groupedItems = sidebarItems.reduce((acc: Record<string, SidebarItem[]>, item) => {
    const section = item.section || 'Other';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(item);
    return acc;
  }, {});

  const renderIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      'dashboard': <DashboardIcon />,
      'insight': <InsightIcon />,
      'invoices': <InvoicesIcon />,
      'products': <ProductsIcon />,
      'reimburse': <ReimburseIcon />,
      'inbox': <InboxIcon />,
      'people': <PeopleIcon />,
      'settings': <SettingsIcon />,
      'help': <HelpIcon />
    };
    
    return icons[iconName] || null;
  };

  return (
    <aside className="w-64 bg-white h-screen flex flex-col">
      <div className="p-6 pb-6">
        <Image src="/assets/images/logo.svg" alt="Algecom" width={120} height={40} />
      </div>
      
      <div className="flex-1 overflow-y-auto px-6">
        {Object.entries(groupedItems).map(([section, items]) => (
          <div key={section} className="mb-8">
            <h3 className="text-sm text-gray-500 mb-4">{section}</h3>
            <div className="space-y-5">
              {items.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`flex items-center text-sm ${
                    pathname === item.href
                      ? 'text-blue-700 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className={`mr-3 ${pathname === item.href ? 'text-blue-700' : 'text-gray-400'}`}>
                    {renderIcon(item.icon)}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <div className="flex items-center mb-5">
          <span className={`mr-3 text-gray-400`}><DarkModeIcon /></span>
          <DarkModeToggle />
        </div>
        
        <Link 
          href="/support" 
          className="flex items-center text-sm text-[#1e3b8a] bg-[#1E3A8A]/10 border-black border py-3 px-4 rounded-[72px] mb-5"
        >
          <span className="mr-3">
            <SupportIcon />
          </span>
          <span>Contact Support</span>
        </Link>
        
        <div className="border border-blue-100 rounded-lg p-4 mb-5 bg-white">
          <div className="flex items-center mb-2">
            <GiftIcon className="mr-2 text-blue-700" />
            <span className="text-sm font-medium text-blue-700">Free Gift Awaits You!</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-700">Upgrade your account</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
        
        <button className="flex items-center text-sm text-red-500 w-full">
          <LogoutIcon className="mr-3" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};