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
    <header className="w-full border-b border-border bg-background shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-neutral-500" />
          </div>
          <input
            type="text"
            placeholder="Search something here"
            className="w-full py-2 pl-10 pr-4 rounded-full border border-primary-100 bg-primary-100 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-4 ml-4">
          {/* Notifications Dropdown */}
          <NotificationsDropdown />

          {/* Store Profile Dropdown */}
          <DropdownMenu open={profileOpen} onOpenChange={setProfileOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 h-auto p-0">
                <div className="h-10 w-10 rounded-full bg-primary-500">
                  {userStore.avatar && (
                    <img
                      src={userStore.avatar}
                      alt={userStore.store}
                      className="h-full w-full rounded-full object-cover"
                    />
                  )}
                </div>
                <span className="text-primary-900 font-bold">{userStore.store}</span>
                <ChevronDown className="h-5 w-5 text-neutral-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-primary-900">{userStore.store}</p>
                <p className="text-xs text-neutral-500 mt-1">{userStore.email}</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-neutral-500">
                <User className="mr-2 h-4 w-4" />
                <span>Store Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-neutral-500">
                <ShoppingBag className="mr-2 h-4 w-4" />
                <span>Orders</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-neutral-500">
                <Heart className="mr-2 h-4 w-4" />
                <span>Saved Items</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-neutral-500">
                <CheckCheck className="mr-2 h-4 w-4" />
                <span>Completed Orders</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-neutral-500">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-error-500">
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