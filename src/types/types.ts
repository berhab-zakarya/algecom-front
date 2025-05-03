export type SpendingCategory = {
    id: string
    name: string
    amount: number
    color: string
  }
  
export type SpendingData = {
    categories: SpendingCategory[]
    totalSpending: number
  }

export type MonthlySpending = {
    month: string
    amount: number
    maxAmount: number
  }

export type SpendingStatistics = {
    monthlyData: MonthlySpending[]
    categories: SpendingCategory[]
    totalSpending: number
    year: number
  }

export interface SubscriptionData {
    cardHolderName: string;
    paymentMethod: string;
    billingAddress: {
      country: string;
      zipCode: string;
      city: string;
    };
    plan: {
      type: string;
      price: number;
      duration: number;
    };
    billingSameAsShipping: boolean;
    yearlyBilling: boolean;
  }
  
export type SubscriptionResponse = {
    success: boolean;
    message: string;
    subscriptionId?: string;
    error?: string;
  }


  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface UserAuth {
    id: number;
    email: string;
    role: string;
    name: string;
    store: string;
    avatar?: string;
  }
  
  export interface AuthResponse {
    refresh: string;
    access: string;
    user: UserAuth;
  }


