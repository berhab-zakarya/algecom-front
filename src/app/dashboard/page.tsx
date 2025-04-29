import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gift,
  HelpCircle,
  Home,
  Inbox,
  LogOut,
  Moon,
  MoreHorizontal,
  Package,
  PieChart,
  Settings,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f6f7f9]">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <Image src="/images/algecom-logo.png" alt="ALGECOM" width={159} height={32} className="h-[40px] w-[159px]" />
        </div>

        <div className="flex-1 flex flex-col px-4 py-6 space-y-8">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-4">Main Menu</p>
            <nav className="space-y-2">
              <Link href="/dashboard" className="flex items-center px-3 py-2 text-[#1e3a8a] bg-blue-50 rounded-lg font-medium">
                <Home className="h-5 w-5 mr-3" />
                Dashboard
              </Link>
              <Link href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <PieChart className="h-5 w-5 mr-3" />
                Insight
              </Link>
              <Link href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 17H15M9 13H15M9 9H15M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Invoices
              </Link>
              <Link href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Package className="h-5 w-5 mr-3" />
                Products
              </Link>
              <Link href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 9H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Reimburse
              </Link>
              <Link href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Inbox className="h-5 w-5 mr-3" />
                Inbox
              </Link>
              <Link href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Users className="h-5 w-5 mr-3" />
                People & Teams
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 mb-4">Preferences</p>
            <nav className="space-y-2">
              <Link href="/settings" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Settings className="h-5 w-5 mr-3" />
              Settings
              </Link>
              <Link href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <HelpCircle className="h-5 w-5 mr-3" />
                Help & Center
              </Link>
              <div className="flex items-center px-3 py-2 text-gray-600 gap">
                <Moon className="h-5 w-5 mr-3" />
                <div className="flex items-center gap-8">
                <h3>Dark Mode</h3>
                <Switch className="data-[state=checked]:bg-orange-500" />
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-auto p-4 space-y-4">
          <button className="flex items-center justify-center w-full py-2.5 px-4 bg-blue-50 text-[#1e3a8a] rounded-lg">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 10C20 13.866 16.866 17 13 17C9.13401 17 6 13.866 6 10C6 6.13401 9.13401 3 13 3C16.866 3 20 6.13401 20 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.16406 15.9902C6.41301 17.8286 7.18349 19.5652 8.38901 21.0018C8.93132 21.6741 9.80693 22 10.7241 22H15.2761C16.1933 22 17.0689 21.6741 17.6112 21.0018C18.8167 19.5652 19.5872 17.8286 19.8361 15.9902C19.944 15.2339 19.3254 14.5 18.5611 14.5H7.43894C6.67462 14.5 6.05597 15.2339 6.16406 15.9902Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Contact Support
          </button>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-start">
              <Gift className="h-5 w-5 text-[#1e3a8a] mr-2" />
              <div>
                <p className="text-[#1e3a8a] font-medium">Free Gift Awaits You!</p>
                <div className="flex items-center mt-2 text-sm text-blue-700">
                  <span>Upgrade your account</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center text-[#ff4423] font-medium">
            <LogOut className="h-5 w-5 mr-2" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search something here"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-[#f97316] rounded-full"></span>
            </button>

            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-[#f97316] flex items-center justify-center text-white font-medium">
                ZJ
              </div>
              <div className="ml-2 flex items-center">
                <span className="font-medium">ZJ STORE</span>
                <ChevronDown className="h-5 w-5 ml-1 text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Total Income Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-700">Total Income</h3>
                <div className="text-green-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-end">
                <h2 className="text-3xl font-bold text-[#1e3a8a]">$50,530.00</h2>
                <span className="ml-2 text-gray-500 text-sm">(DZD)</span>
              </div>
              <p className="mt-2 text-sm">
                <span className="text-green-500 font-medium">20%</span> increase compared to last week
              </p>
            </div>

            {/* Total Expense Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-700">Total Expense</h3>
                <div className="text-red-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 5V19M12 19L5 12M12 19L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-end">
                <h2 className="text-3xl font-bold text-[#1e3a8a]">$19,760.00</h2>
                <span className="ml-2 text-gray-500 text-sm">(DZD)</span>
              </div>
              <p className="mt-2 text-sm">
                <span className="text-red-500 font-medium">10%</span> decrease compared to last week
              </p>
            </div>

            {/* Your Balance Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-700">Your balance</h3>
                <button>
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="flex items-end">
                <h2 className="text-3xl font-bold text-[#1e3a8a]">$120,435.00</h2>
                <span className="ml-2 text-gray-500 text-sm">(DZD)</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">From Jan 01, 2025 to Jan 31, 2025</p>
              <div className="mt-4 flex gap-4">
                <button className="flex-1 bg-[#1e3a8a] text-white py-2 px-4 rounded-lg flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Top Up
                </button>
                <button className="flex-1 border border-[#1e3a8a] text-[#1e3a8a] py-2 px-4 rounded-lg flex items-center justify-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Transfer
                </button>
              </div>
            </div>
          </div>

          {/* Spending Statistics */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-700">Spending statistics</h3>
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded-md border border-gray-300">
                  <ChevronLeft className="h-5 w-5 text-gray-500" />
                </button>
                <span className="font-medium">2024</span>
                <button className="p-1 rounded-md border border-gray-300">
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="relative h-64">
              {/* Chart would go here - using a placeholder */}
              <div className="absolute inset-0 flex items-end">
                {/* Jan */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-32 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Jan</span>
                </div>
                {/* Feb */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-16 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Feb</span>
                </div>
                {/* Mar */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-40 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Mar</span>
                </div>
                {/* Apr */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-24 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Apr</span>
                </div>
                {/* May */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-16 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">May</span>
                </div>
                {/* Jun */}
                <div className="flex-1 flex flex-col items-center relative">
                  <div className="h-48 w-6 bg-[#1e3a8a] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Jun</span>

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#1e3a8a] text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    <p className="text-xs font-medium">Expense</p>
                    <p className="text-sm font-bold">$15,030</p>
                  </div>
                </div>
                {/* Jul */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-20 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Jul</span>
                </div>
                {/* Aug */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-24 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Aug</span>
                </div>
                {/* Sep */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-36 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Sep</span>
                </div>
                {/* Oct */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-24 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Oct</span>
                </div>
                {/* Nov */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-20 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Nov</span>
                </div>
                {/* Dec */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="h-8 w-6 bg-[#f97316] rounded-t-sm"></div>
                  <span className="mt-2 text-xs text-gray-500">Dec</span>
                </div>
              </div>

              {/* Y-axis labels */}
              <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-xs text-gray-500">
                <span>$15k</span>
                <span>$10k</span>
                <span>$5k</span>
                <span>$1k</span>
                <span>$500</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Spend by category */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-700">Spend by category</h3>
                <button>
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="flex">
                <div className="w-1/2 relative">
                  {/* Donut chart placeholder */}
                  <div className="relative h-48 w-48 mx-auto">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#eb7ca6"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#7c5cfc"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        strokeDashoffset="188.4"
                        transform="rotate(-90 50 50)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#5caffc"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        strokeDashoffset="213.52"
                        transform="rotate(-45 50 50)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#a1a9fe"
                        strokeWidth="20"
                        strokeDasharray="251.2"
                        strokeDashoffset="225.6"
                        transform="rotate(45 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-sm text-gray-500">Overall Spending</p>
                      <p className="text-xl font-bold text-[#1e3a8a]">$19,760.00</p>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#eb7ca6] mr-2"></div>
                    <span className="text-sm">Employees Salary</span>
                    <span className="ml-auto font-medium">$8,000.00</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#ffacc8] mr-2"></div>
                    <span className="text-sm">Material Supplies</span>
                    <span className="ml-auto font-medium">$2,130.00</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#cc6ff8] mr-2"></div>
                    <span className="text-sm">Company tax</span>
                    <span className="ml-auto font-medium">$1,510.00</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#7c5cfc] mr-2"></div>
                    <span className="text-sm">Maintenance system</span>
                    <span className="ml-auto font-medium">$2,245.00</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#5caffc] mr-2"></div>
                    <span className="text-sm">Development System</span>
                    <span className="ml-auto font-medium">$4,385.00</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#a1a9fe] mr-2"></div>
                    <span className="text-sm">Production Tools</span>
                    <span className="ml-auto font-medium">$1,000.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order details */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-700">Order details</h3>
                <button>
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-3 text-left font-medium text-gray-500 flex items-center">
                        Customer name
                        <svg
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 10L12 15L17 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </th>
                      <th className="pb-3 text-left font-medium text-gray-500 flex items-center">
                        Odre delivry
                        <svg
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 10L12 15L17 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </th>
                      <th className="pb-3 text-left font-medium text-gray-500 flex items-center">
                        Order date
                        <svg
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 10L12 15L17 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </th>
                      <th className="pb-3 text-left font-medium text-gray-500 flex items-center">
                        Order total
                        <svg
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 10L12 15L17 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </th>
                      <th className="pb-3 text-left font-medium text-gray-500 flex items-center">
                        Status
                        <svg
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 10L12 15L17 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4">Cocorella Out</td>
                      <td className="py-4">
                        <div className="text-sm">
                          <p>Les dahlias,</p>
                          <p>Tiemcen, Algérie</p>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="text-sm">
                          <p>12.09.2019 -</p>
                          <p>12.53 PM</p>
                        </div>
                      </td>
                      <td className="py-4 font-medium">34,295 DZD</td>
                      <td className="py-4">
<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
  Delivered
</span>
</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4">Cocorella Out</td>
                      <td className="py-4">
                        <div className="text-sm">
                          <p>Les dahlias,</p>
                          <p>Tiemcen, Algérie</p>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="text-sm">
                          <p>12.09.2019 -</p>
                          <p>12.53 PM</p>
                        </div>
                      </td>
                      <td className="py-4 font-medium">34,295 DZD</td>
                      <td className="py-4">
                        <span className="px-3 py-1 bg-[#f97316] text-white rounded-full text-xs font-medium">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">Cocorella Out</td>
                      <td className="py-4">
                        <div className="text-sm">
                          <p>Les dahlias,</p>
                          <p>Tiemcen, Algérie</p>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="text-sm">
                          <p>12.09.2019 -</p>
                          <p>12.53 PM</p>
                        </div>
                      </td>
                      <td className="py-4 font-medium">34,295 DZD</td>
                      <td className="py-4">
                        <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium">
                          Rejected
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
