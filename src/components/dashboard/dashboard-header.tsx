"use client"

import { useState } from "react"
import { Search, ChevronDown, Settings, LogOut, ShoppingBag, User, Heart, CheckCheck } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { NotificationsDropdown } from "./notifications-dropdown"
import { UserAuth } from "@/types/types"

export function DashboardHeader() {
  const [profileOpen, setProfileOpen] = useState(false)

  const userStore: UserAuth = {
    id: 1,
    email: "store@example.com",
    role: "store",
    name: "John Doe",
    store: "ZJ STORE",
    avatar: "/assets/logo/png/ptr_1.png" // Add your default avatar path
  }

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
                <div className="h-10 w-10 rounded-full bg-[#f97316]">
                  {userStore.avatar && (
                    <img
                      src={userStore.avatar}
                      alt={userStore.store}
                      className="h-full w-full rounded-full object-cover"
                    />
                  )}
                </div>
                <span className="text-[#1e3a8a] font-bold">{userStore.store}</span>
                <ChevronDown className="h-5 w-5 text-[#828282]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-4 py-3">
                <p className="text-sm font-medium">{userStore.store}</p>
                <p className="text-xs text-[#828282] mt-1">{userStore.email}</p>
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