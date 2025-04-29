"use client"

import * as React from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", value: 8000 },
  { name: "Feb", value: 3500 },
  { name: "Mar", value: 9000 },
  { name: "Apr", value: 5500 },
  { name: "May", value: 3500 },
  { name: "Jun", value: 15030 },
  { name: "Jul", value: 4500 },
  { name: "Aug", value: 5500 },
  { name: "Sep", value: 9000 },
  { name: "Oct", value: 5500 },
  { name: "Nov", value: 4500 },
  { name: "Dec", value: 1500 },
]

export function SpendingChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const month = payload[0].payload.name
                const value = payload[0].value
                const isJune = month === "Jun"
                
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-md">
                    <div className="text-xs text-muted-foreground">
                      {isJune ? "Expense" : "Value"}
                    </div>
                    <div className="font-bold">${value}</div>
                  </div>
                )
              }
              
              return null
            }}
          />
          <Bar
            dataKey="value"
            fill={"#1E3A8A"}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
