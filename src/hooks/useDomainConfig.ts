// hooks/useDomainConfig.tsx
import { useState } from 'react';

interface StoreResponse {
  id: number;
  subdomain: string;
  store_name: string;
  created_at: string;
  is_active: boolean;
}

interface DomainConfigInput {
  subdomain: string;
  store_name: string;
}

export const useDomainConfig = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [stores, setStores] = useState<StoreResponse[]>([]);
  const [currentStore, setCurrentStore] = useState<StoreResponse | null>(null);

  const fetchStores = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const accessToken = localStorage.getItem('access_token');
      
      if (!accessToken) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch('http://127.0.0.1:8000/api/v1/stores/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      console.log(response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch stores');
      }

      const data = await response.json();
      setStores(data);
      
      // Set current store (first one or most recently created)
      if (data.length > 0) {
        // Sort by created_at in descending order and take the first one
        const sortedStores = [...data].sort((a, b) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setCurrentStore(sortedStores[0]);
      }
      
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching stores');
    } finally {
      setLoading(false);
    }
  };

  const configureStore = async (storeConfig: DomainConfigInput) => {
    console.log(`Configuring store: ${storeConfig.subdomain}`);
    setLoading(true);
    setError(null);
    
    try {
      console.log('Retrieving access token from localStorage');
      const accessToken = localStorage.getItem('access_token');
      
      if (!accessToken) {
        console.error('Authentication token not found');
        throw new Error('Authentication token not found');
      }
      
      console.log('Preparing to make API request');
      const response = await fetch('http://127.0.0.1:8000/api/v1/stores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          subdomain: storeConfig.subdomain,
          store_name: storeConfig.store_name
        })
      });
      
      console.log(`API response status: ${response.status}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API request failed:', errorData);
        throw new Error(errorData.message || 'Failed to configure store');
      }
      
      const data = await response.json();
      console.log('Store configured successfully:', data);
      
      // Update stores list
      console.log('Fetching updated stores list');
      await fetchStores();
      
      return data;
    } catch (err) {
      console.error('Error in configureStore:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while configuring store');
      throw err;
    } finally {
      console.log('Store configuration process completed');
      setLoading(false);
    }
  };

  const updateStoreActive = async (storeId: number, isActive: boolean) => {
    setLoading(true);
    setError(null);
    
    try {
      const accessToken = localStorage.getItem('access_token');
      
      if (!accessToken) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch(`http://127.0.0.1:8000/api/v1/stores/${storeId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          is_active: isActive
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update store active status');
      }

      // Update stores list
      await fetchStores();
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while updating store');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteStore = async (storeId: number) => {
    setLoading(true);
    setError(null);
    
    try {
      const accessToken = localStorage.getItem('access_token');
      
      if (!accessToken) {
        throw new Error('Authentication token not found');
      }

      const response = await fetch(`http://127.0.0.1:8000/api/v1/stores/${storeId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete store');
      }

      // Update stores list
      await fetchStores();
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while deleting store');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    stores,
    currentStore,
    fetchStores,
    configureStore,
    updateStoreActive,
    deleteStore
  };
};

export default useDomainConfig;