"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Home,
  BarChart2,
  FileText,
  Package,
  Wallet,
  MessageSquare,
  Users,
  Settings,
  HelpCircle,
  Moon,
  Sun,
  Headphones,
  Gift,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <aside className="w-64 h-screen flex flex-col bg-white border-r border-gray-200 font-['Outfit']">
      <div className="p-6">
        <div className="flex justify-center mb-8">
          <a href="#">
            <img src="logo/svg/logo.svg" alt="ALGECOM logo" />
          </a>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4">Main Menu</h3>
            <nav className="space-y-4">
              <Link href="#" className="flex items-center text-[#1e3a8a] font-medium">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#1e3a8a]">
                  <Home className="w-5 h-5" />
                </div>
                Dashboard
              </Link>
              <Link href="#" className="flex items-center text-[#828282]">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                  <BarChart2 className="w-5 h-5" />
                </div>
                Insight
              </Link>
              <Link href="/dashboard/invoice" className="flex items-center text-[#828282]">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                  <FileText className="w-5 h-5" />
                </div>
                Invoices
              </Link>
              <Link href="#" className="flex items-center text-[#828282]">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                  <Package className="w-5 h-5" />
                </div>
                Products
              </Link>
              <Link href="#" className="flex items-center text-[#828282]">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                  <Wallet className="w-5 h-5" />
                </div>
                Reimburse
              </Link>
              <Link href="#" className="flex items-center text-[#828282]">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                Inbox
              </Link>
              <Link href="#" className="flex items-center text-[#828282]">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                  <Users className="w-5 h-5" />
                </div>
                People & Teams
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4">Preferences</h3>
            <nav className="space-y-4">
              <Link href="#" className="flex items-center text-[#828282]">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                  <Settings className="w-5 h-5" />
                </div>
                Settings
              </Link>
              <Link href="#" className="flex items-center text-[#828282]">
                <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                Help & Center
              </Link>
              <div className="flex items-center justify-between text-[#828282]">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center mr-3 text-[#828282]">
                    <Moon className="w-5 h-5" />
                  </div>
                  Dark Mode
                </div>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="relative inline-flex h-6 w-11 items-center rounded-full border border-gray-300"
                >
                  <span
                    className={`${isDarkMode ? "translate-x-5" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full transition-transform duration-200 ease-in-out ${isDarkMode ? "bg-[#1e3a8a]" : "bg-[#f97316]"}`}
                  >
                    {isDarkMode ? <Moon className="h-4 w-4 text-white" /> : <Sun className="h-4 w-4 text-white" />}
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <button className="w-full flex items-center justify-center py-3 px-4 rounded-full bg-[#f3f5f7] text-[#1e3a8a] font-medium">
          <Headphones className="w-5 h-5 mr-2 text-[#1e3a8a]" />
          Contact Support
        </button>

        <div className="border border-[#1e3a8a] rounded-lg p-4">
          <div className="flex items-center text-[#1e3a8a] font-medium mb-2">
            <Gift className="w-5 h-5 mr-2" />
            Free Gift Awaits You!
          </div>
          <div className="flex items-center justify-between text-[#1e3a8a]">
            <span>Upgrade your account</span>
            <span className="text-lg">&rsaquo;</span>
          </div>
        </div>

        <button className="w-full flex items-center text-[#ff4423] font-medium">
          <LogOut className="w-5 h-5 mr-2" />
          Log Out
        </button>
      </div>
    </aside>
  )
}
