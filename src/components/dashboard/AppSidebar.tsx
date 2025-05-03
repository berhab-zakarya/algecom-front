"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import {
  DashboardIcon,
  InsightIcon, 
  InvoicesIcon,
  ProductsIcon,
  ReimburseIcon,
  InboxIcon,
  PeopleIcon,
  SettingsIcon,
  HelpIcon,
  DarkModeIcon,
  SupportIcon,
  GiftIcon,
  LogoutIcon
} from "@/components/icons"
import { useAuth } from "@/hooks/useAuth"
import { cn } from "@/lib/utils"

// Add this near the top of your component
const isDevelopment = process.env.NODE_ENV === 'development'

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { hasStore } = useAuth()
  
  // Only use development override if needed
  const hasStoreAccess = isDevelopment ? true : hasStore

  const router = useRouter()

  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  // Change the class name to reflect store access
  const disabledClass = !hasStoreAccess ? 'opacity-70 blur-[0.3px]' : ''

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen flex flex-col bg-white border-r border-gray-200 font-['Outfit']">
      <div className="flex-1 overflow-y-auto">
        {/* Update overlay message for store requirement */}
        {!hasStoreAccess && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/50 backdrop-blur-[1px]">
            <p className="text-gray-600 mb-4 text-center px-6">
              Please create a store to access the dashboard
            </p>
            <button
              onClick={() => router.push('/store/create')} // Update route to store creation
              className="px-6 py-2 bg-[#1e3a8a] text-white rounded-full hover:bg-[#2d4ba0] transition-colors"
            >
              Create Store
            </button>
          </div>
        )}

        {/* Existing sidebar content */}
        <div className={disabledClass}>
          <div className="p-6">
            <div className="flex justify-center mb-8">
              <a href="#" className={disabledClass}>
                <img src="logo/svg/logo.svg" alt="ALGECOM logo" />
              </a>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-4">Main Menu</h3>
                <nav className="space-y-4">
                  <Link href="#" className={`flex items-center text-[#1e3a8a] font-medium ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#1e3a8a]">
                      <DashboardIcon size={20} />
                    </div>
                    Dashboard
                  </Link>
                  <Link href="#" className={`flex items-center text-[#828282] ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                      <InsightIcon size={20} />
                    </div>
                    Insight
                  </Link>
                  <Link href="/dashboard/invoice" className={`flex items-center text-[#828282] ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                      <InvoicesIcon size={20} />
                    </div>
                    Invoices
                  </Link>
                  <Link href="#" className={`flex items-center text-[#828282] ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                      <ProductsIcon size={20} />
                    </div>
                    Products
                  </Link>
                  <Link href="#" className={`flex items-center text-[#828282] ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                      <ReimburseIcon size={20} />
                    </div>
                    Reimburse
                  </Link>
                  <Link href="#" className={`flex items-center text-[#828282] ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                      <InboxIcon size={20} />
                    </div>
                    Inbox
                  </Link>
                  <Link href="#" className={`flex items-center text-[#828282] ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                      <PeopleIcon size={20} />
                    </div>
                    People & Teams
                  </Link>
                </nav>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-4">Preferences</h3>
                <nav className="space-y-4">
                  <Link href="#" className={`flex items-center text-[#828282] ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                      <SettingsIcon size={20} />
                    </div>
                    Settings
                  </Link>
                  <Link href="#" className={`flex items-center text-[#828282] ${disabledClass}`}>
                    <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                      <HelpIcon size={20} />
                    </div>
                    Help & Center
                  </Link>
                  <div className={`flex items-center justify-between text-[#828282] ${disabledClass}`}>
                    <div className="flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                        <DarkModeIcon size={20} />
                      </div>
                      Dark Mode
                    </div>
                    <button
                      onClick={handleDarkModeToggle}
                      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2"
                    >
                      <span className={cn(
                        "inline-block h-4 w-4 transform rounded-full transition-transform duration-200 ease-in-out",
                        isDarkMode 
                          ? "translate-x-6 bg-[#1e3a8a]" 
                          : "translate-x-1 bg-[#f97316]"
                      )}>
                        <DarkModeIcon size={12} className="text-white" />
                      </span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-auto p-6 space-y-4 ${disabledClass}`}>
          <button disabled={!hasStoreAccess} className="w-full flex items-center justify-center py-3 px-4 rounded-full bg-[#f3f5f7] text-[#1e3a8a] font-medium">
            <SupportIcon size={20} className="mr-2 text-[#1e3a8a]" />
            Contact Support
          </button>

          <div className="border border-[#1e3a8a] rounded-lg p-4">
            <div className="flex items-center text-[#1e3a8a] font-medium mb-2">
              <GiftIcon size={20} className="mr-2" />
              Free Gift Awaits You!
            </div>
            <div className="flex items-center justify-between text-[#1e3a8a]">
              <span>Upgrade your account</span>
              <span className="text-lg">&rsaquo;</span>
            </div>
          </div>

          <button disabled={!hasStoreAccess} className="w-full flex items-center text-[#ff4423] font-medium">
            <LogoutIcon size={20} className="mr-2" />
            Log Out
          </button>
        </div>
      </div>
    </aside>
  )
}
