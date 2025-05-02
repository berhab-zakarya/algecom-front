"use client"

import { useState, useEffect } from "react"

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState("light")
  const isDarkMode = theme === "dark"

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4 8.8H13.6V14.4H1.6V3.2H7.2V2.4H0.8V15.2H14.4V8.8Z" fill="#6B7280"/>
          <path d="M10.4 1.6H5.6V0.8H10.4V1.6Z" fill="#6B7280"/>
          <path d="M8.8 7.2H8V1.6H8.8V7.2Z" fill="#6B7280"/>
        </svg>
        <span className="text-sm text-gray-600">Dark Mode</span>
        <div className="w-[60px] h-[30px] rounded-full relative cursor-pointer border border-gray-300">
          {/* Placeholder to maintain layout */}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-8">
     
      <span className="text-sm text-gray-600">Dark Mode</span>
      <div className="w-[68px] h-[34px] rounded-full relative cursor-pointer border border-gray-400 flex items-center">
        <div className={`absolute w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? "right-0" : "left-0"} ${isDarkMode ? "" : "bg-orange-500"}`}>
          {!isDarkMode && (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.00011 13.7271C11.6107 13.7271 13.7271 11.6108 13.7271 9.00014C13.7271 6.38952 11.6107 4.27319 9.00011 4.27319C6.38949 4.27319 4.27316 6.38952 4.27316 9.00014C4.27316 11.6108 6.38949 13.7271 9.00011 13.7271Z"
                fill="white"
              />
              <path
                d="M14.1925 14.1924L14.0979 14.0979M14.0979 3.90224L14.1925 3.8077L14.0979 3.90224ZM3.80773 14.1924L3.90227 14.0979L3.80773 14.1924ZM9.0001 1.78602V1.72784V1.78602ZM9.0001 16.2723V16.2141V16.2723ZM1.78605 9.00007H1.72787H1.78605ZM16.2723 9.00007H16.2141H16.2723ZM3.90227 3.90224L3.80773 3.8077L3.90227 3.90224Z"
                stroke="white"
                strokeWidth="1.87"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <div className="absolute right-0 w-[30px] h-[30px] rounded-full flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.83958 8.26329C2.06398 11.4735 4.78794 14.0852 8.04798 14.2286C10.3481 14.3283 12.4051 13.2562 13.6393 11.567C14.1504 10.8751 13.8761 10.4138 13.0222 10.5696C12.6045 10.6444 12.1744 10.6756 11.7256 10.6569C8.67754 10.5322 6.18421 7.98279 6.17174 4.97209C6.16551 4.16176 6.33381 3.39506 6.63924 2.69692C6.97584 1.92399 6.57068 1.55622 5.79151 1.88659C3.32311 2.92756 1.63388 5.41466 1.83958 8.26329Z"
              stroke="#1A202C"
              strokeWidth="1.24667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div 
          className="absolute w-full h-full cursor-pointer"
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        ></div>
      </div>
    </div>
  )
}