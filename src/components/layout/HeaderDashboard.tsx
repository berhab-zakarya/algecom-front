import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { NotificationIcon, SearchIcon } from "../icons";
import { UserAuth } from "@/types";

interface HeaderProps {
  user: UserAuth;
  pageTitle: string;
}

export const Header = ({ user, pageTitle }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
      <div className="relative w-64 lg:w-96">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full pl-10 py-2 pr-4 bg-gray-50 border border-gray-200 rounded-full text-sm"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <SearchIcon />
        </div>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <div className="relative cursor-pointer">
          <NotificationIcon />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
        </div>

        <div className="flex items-center cursor-pointer">
          <Avatar className="w-10 h-10 flex justify-center items-center bg-orange-500 text-white">
            <span>{user.name}</span>
          </Avatar>
          <div className="ml-2 flex justify-center items-center">
            <span className="block text-sm font-medium text-gray-800">
              {user.store}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline ml-1"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
