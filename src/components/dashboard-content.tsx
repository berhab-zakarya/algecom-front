"use client"

import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { SpendingChart } from "@/components/spending-chart"
import { SpendingDonut } from "@/components/spending-donut"

export function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Income Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Total Income</CardTitle>
            <ArrowUp className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">
              $50,530.00
              <span className="text-sm font-normal text-muted-foreground ml-2">(DZD)</span>
            </div>
            <p className="text-sm mt-2">
              <span className="text-green-500 font-medium">20%</span>
              <span className="text-muted-foreground"> increase compared to last week</span>
            </p>
          </CardContent>
        </Card>

        {/* Total Expense Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Total Expense</CardTitle>
            <ArrowDown className="h-5 w-5 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">
              $19,760.00
              <span className="text-sm font-normal text-muted-foreground ml-2">(DZD)</span>
            </div>
            <p className="text-sm mt-2">
              <span className="text-red-500 font-medium">10%</span>
              <span className="text-muted-foreground"> decrease compared to last week</span>
            </p>
          </CardContent>
        </Card>

        {/* Your Balance Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Your balance</CardTitle>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900 mb-2">
              $120,435.00
              <span className="text-sm font-normal text-muted-foreground ml-2">(DZD)</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              From Jan 01, 2025 to Jan 31, 2025
            </p>
            <div className="flex gap-4">
              <Button className="flex-1 bg-blue-900 hover:bg-blue-800">
                <ArrowUp className="mr-2 h-4 w-4" />
                Top Up
              </Button>
              <Button variant="outline" className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-50">
                <ArrowRight className="mr-2 h-4 w-4" />
                Transfer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Spending Statistics */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-medium">Spending statistics</CardTitle>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium">2024</span>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <SpendingChart />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Spend by Category */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">Spend by category</CardTitle>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <SpendingDonut />
          </CardContent>
        </Card>

        {/* Order Details */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">Order details</CardTitle>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer name</TableHead>
                  <TableHead>Order delivery</TableHead>
                  <TableHead>Order date</TableHead>
                  <TableHead>Order total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Cocorella Out</TableCell>
                  <TableCell>Les dahlias,<br />Tiemcen, Algérie</TableCell>
                  <TableCell>12.09.2019 -<br />12.53 PM</TableCell>
                  <TableCell className="font-medium">34,295 DZD</TableCell>
                  <TableCell>
                    <Badge className="bg-green-500 hover:bg-green-600">Delivered</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cocorella Out</TableCell>
                  <TableCell>Les dahlias,<br />Tiemcen, Algérie</TableCell>
                  <TableCell>12.09.2019 -<br />12.53 PM</TableCell>
                  <TableCell className="font-medium">34,295 DZD</TableCell>
                  <TableCell>
                    <Badge className="bg-orange-500 hover:bg-orange-600">Pending</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cocorella Out</TableCell>
                  <TableCell>Les dahlias,<br />Tiemcen, Algérie</TableCell>
                  <TableCell>12.09.2019 -<br />12.53 PM</TableCell>
                  <TableCell className="font-medium">34,295 DZD</TableCell>
                  <TableCell>
                    <Badge className="bg-red-500 hover:bg-red-600">Rejected</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Missing ArrowRight component, let's add it
function ArrowRight(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
