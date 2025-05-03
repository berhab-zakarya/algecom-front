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