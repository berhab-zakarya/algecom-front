"use client"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Employees Salary", value: 8000, color: "#eb7ca6" },
  { name: "Material Supplies", value: 2130, color: "#ffacc8" },
  { name: "Company tax", value: 1510, color: "#7c5cfc" },
  { name: "Maintenance system", value: 2245, color: "#a1a9fe" },
  { name: "Development System", value: 4385, color: "#5caffc" },
  { name: "Production Tools", value: 1000, color: "#b1c3fc" },
]

export function SpendingDonut() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative h-[200px] w-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-md">
                        <div className="text-xs text-muted-foreground">{payload[0].name}</div>
                        <div className="font-bold">120.2321</div>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-muted-foreground">Overall Spending</p>
            <p className="text-xl font-bold text-blue-900">$19,760.00</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-3 mt-4 md:mt-0">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
            <span className="text-sm">{item.name}</span>
            <span className="ml-auto font-medium">${item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
