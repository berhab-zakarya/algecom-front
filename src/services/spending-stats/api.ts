import type { SpendingStatistics } from "@/types/types"

const mockData: SpendingStatistics = {
  year: 2024,
  totalSpending: 12500,
  monthlyData: [
    { month: "Jan", amount: 2500, maxAmount: 5000 },
    { month: "Feb", amount: 3000, maxAmount: 5000 },
    { month: "Mar", amount: 4500, maxAmount: 5000 },
    { month: "Apr", amount: 2800, maxAmount: 5000 },
    { month: "May", amount: 3200, maxAmount: 5000 },
    { month: "Jun", amount: 5000, maxAmount: 5000 },
    { month: "Jul", amount: 2900, maxAmount: 5000 },
    { month: "Aug", amount: 3100, maxAmount: 5000 },
    { month: "Sep", amount: 3800, maxAmount: 5000 },
    { month: "Oct", amount: 4200, maxAmount: 5000 },
    { month: "Nov", amount: 3600, maxAmount: 5000 },
    { month: "Dec", amount: 4100, maxAmount: 5000 },
  ],
  categories: [
    {
      id: "1",
      name: "Groceries",
      amount: 5000,
      color: "#4F46E5"
    },
    {
      id: "2", 
      name: "Transportation",
      amount: 3000,
      color: "#EC4899"
    },
    {
      id: "3",
      name: "Entertainment",
      amount: 2500,
      color: "#10B981"
    },
    {
      id: "4",
      name: "Bills",
      amount: 2000,
      color: "#F59E0B"
    }
  ]
}

export async function fetchSpendingData(): Promise<SpendingStatistics> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return mockData
}


