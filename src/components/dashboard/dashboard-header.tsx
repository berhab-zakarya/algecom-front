"use client"

import { useState } from "react"
import { Search, ChevronDown, Settings, LogOut, ShoppingBag, User, Heart, CheckCheck } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { NotificationsDropdown } from "./notifications-dropdown"

export function DashboardHeader() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New order received",
      description: "Order #12345 has been placed",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Payment successful",
      description: "Payment for order #12344 was successful",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "Product restocked",
      description: "Wireless Headphones are back in stock",
      time: "3 hours ago",
      read: true,
    },
    {
      id: 4,
      title: "New review",
      description: "Someone left a 5-star review on Bluetooth Speaker",
      time: "Yesterday",
      read: true,
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <header className="w-full border-b border-[#f3f5f7] shadow-sm font-['Outfit']">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#828282]" />
          </div>
          <input
            type="text"
            placeholder="Search something here"
            className="w-full py-2 pl-10 pr-4 rounded-full border border-[#f3f5f7] bg-[#f3f5f7] text-[#828282] focus:outline-none focus:ring-2 focus:ring-[#f3f5f7] focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-4 ml-4">
          {/* Notifications Dropdown */}
          <NotificationsDropdown />

          {/* Store Profile Dropdown */}
          <DropdownMenu open={profileOpen} onOpenChange={setProfileOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 h-auto p-0">
                <div className="h-10 w-10 rounded-full bg-[#f97316]"></div>
                <span className="text-[#1e3a8a] font-bold">ZJ STORE</span>
                <ChevronDown className="h-5 w-5 text-[#828282]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-4 py-3">
                <p className="text-sm font-medium">ZJ STORE</p>
                <p className="text-xs text-[#828282] mt-1">store@example.com</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Store Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShoppingBag className="mr-2 h-4 w-4" />
                <span>Orders</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                <span>Saved Items</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CheckCheck className="mr-2 h-4 w-4" />
                <span>Completed Orders</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
