"use client"

import * as React from "react"
import { GalleryVerticalEnd, Home, PieChart, FileText, Package, ArrowUpDown, MessageSquare, Users, Settings, HelpCircle, Moon, Sun, Headphones, Gift, ChevronRight, LogOut } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AppSidebar() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">ALGECOM</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="#">
                    <Home className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <PieChart className="h-5 w-5" />
                    <span>Insight</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <FileText className="h-5 w-5" />
                    <span>Invoices</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Package className="h-5 w-5" />
                    <span>Products</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <ArrowUpDown className="h-5 w-5" />
                    <span>Reimburse</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <MessageSquare className="h-5 w-5" />
                    <span>Inbox</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Users className="h-5 w-5" />
                    <span>People & Teams</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Preferences</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <HelpCircle className="h-5 w-5" />
                    <span>Help & Center</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <div className="flex items-center justify-between px-3 py-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Moon className="h-5 w-5" />
                    <span>Dark Mode</span>
                  </div>
                  <div className="relative">
                    <Switch
                      id="dark-mode"
                      checked={isDarkMode}
                      onCheckedChange={setIsDarkMode}
                      className={cn(
                        isDarkMode && "bg-orange-500"
                      )}
                    />
                    {isDarkMode && (
                      <Sun className="absolute left-0.5 top-0.5 h-3.5 w-3.5 text-white" />
                    )}
                  </div>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="space-y-4">
        <Button variant="outline" className="w-full justify-start bg-blue-50 text-blue-900 hover:bg-blue-100 hover:text-blue-900">
          <Headphones className="mr-2 h-5 w-5" />
          Contact Support
        </Button>
        
        <div className="rounded-lg border border-blue-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="h-5 w-5 text-blue-900" />
            <span className="text-blue-900 font-medium">Free Gift Awaits You!</span>
          </div>
          <div className="flex items-center justify-between text-sm text-blue-600">
            <span>Upgrade your account</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
        
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut className="mr-2 h-5 w-5" />
          Log Out
        </Button>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}
