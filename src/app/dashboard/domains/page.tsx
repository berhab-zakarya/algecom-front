"use client"
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/layout/HeaderDashboard';
// import { TrialNotification } from '@/components/layout/trial-notification';
import { Search, Globe, AlertCircle, Check, Loader2 } from 'lucide-react';
import {useAuth} from '@/hooks/useAuth';
import useDomainConfig from '@/hooks/useDomainConfig';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface TrialInfo {
  daysLeft: number;
  endDate: string;
  offers: Array<{ title: string; value: string }>;
}

export default function StoresPage() {
  const { user, isAuthenticated } = useAuth();
  const { 
    loading, 
    error, 
    stores, 
    currentStore, 
    fetchStores, 
    configureStore, 
    updateStoreActive,
    deleteStore 
  } = useDomainConfig();
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subdomain, setSubdomain] = useState<string>('boutique');
  const [storeName, setStoreName] = useState<string>('Admin Algecom');
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [configuring, setConfiguring] = useState<boolean>(false);
  const [configError, setConfigError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string[]}>({});

  // Trial info (would typically come from an API)
  const trialInfo: TrialInfo = {
    daysLeft: 2,
    endDate: 'April 21',
    offers: [
      { title: 'First 3 months for', value: '9.99 DZD/month' },
      { title: '1500 DZD', value: 'Domain discount' }
    ]
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchStores();
    }
  }, [isAuthenticated]);

  const handleStoreSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setConfiguring(true);
    setConfigError(null);
    setValidationErrors({});
    
    try {
      // Validate form fields
      if (!subdomain) {
        throw new Error('Please enter a subdomain');
      }
      
      if (!storeName) {
        throw new Error('Please enter a store name');
      }
      
      await configureStore({
        subdomain: subdomain,
        store_name: storeName
      });
      
      setIsDialogOpen(false);
      setSubdomain('');
      setStoreName('');
    } catch (err) {
      if (err instanceof Error) {
        setConfigError(err.message);
      } else if (typeof err === 'object' && err !== null) {
        // Handle validation errors from API
        setValidationErrors(err as {[key: string]: string[]});
      } else {
        setConfigError('Failed to configure store');
      }
    } finally {
      setConfiguring(false);
    }
  };

  const handleSetActive = async (storeId: number) => {
    try {
      await updateStoreActive(storeId, true);
    } catch (err) {
      console.error('Failed to set active store:', err);
    }
  };

  const handleDeleteStore = async (storeId: number) => {
    try {
      await deleteStore(storeId);
    } catch (err) {
      console.error('Failed to delete store:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user!} pageTitle="Boutiques" />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Store configuration card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Configurer une boutique</CardTitle>
            <CardDescription>
              Créez une boutique avec un sous-domaine personnalisé que vos clients pourront facilement trouver.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className='text-white' >Configurer une nouvelle boutique</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Configurer une nouvelle boutique</DialogTitle>
                    <DialogDescription>
                      Entrez les informations pour votre boutique.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleStoreSubmit}>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="subdomain">Sous-domaine</Label>
                        <Input
                          id="subdomain"
                          placeholder="boutique"
                          value={subdomain}
                          onChange={(e) => setSubdomain(e.target.value)}
                        />
                        {validationErrors.subdomain && (
                          <p className="text-sm text-red-500">{validationErrors.subdomain.join(', ')}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="store_name">Nom de la boutique</Label>
                        <Input
                          id="store_name"
                          placeholder="Ma boutique en ligne"
                          value={storeName}
                        
                          onChange={(e) => setStoreName(e.target.value)}
                        />
                        {validationErrors.store_name && (
                          <p className="text-sm text-red-500">{validationErrors.store_name.join(', ')}</p>
                        )}
                      </div>
                      
                      {configError && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Erreur</AlertTitle>
                          <AlertDescription>{configError}</AlertDescription>
                        </Alert>
                      )}
                    </div>
                    
                    <DialogFooter>
                      <Button className='text-white' type="submit" disabled={configuring}>
                        {configuring ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Configuration...
                          </>
                        ) : (
                          'Configurer'
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <div className="hidden sm:flex justify-end gap-2">
              <div className="w-16 h-16 bg-blue-100 rounded-md"></div>
              <div className="w-16 h-16 bg-purple-100 rounded-md"></div>
              <div className="w-24 h-16 bg-red-100 rounded-md"></div>
            </div>
          </CardFooter>
        </Card>
        
        {/* Stores list */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Vos boutiques</CardTitle>
            <CardDescription>Gérez les boutiques associées à votre compte</CardDescription>
          </CardHeader>
          
          <div className="px-6 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input
                placeholder="Rechercher des boutiques"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
              </div>
            ) : error ? (
              <Alert variant="destructive" className="my-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : stores.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Globe className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2">Aucune boutique configurée</p>
              </div>
            ) : (
              <div className="space-y-4">
                {stores
                  .filter(store => store.subdomain.includes(searchQuery) || store.store_name.includes(searchQuery))
                  .map((store) => (
                    <div key={store.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-blue-50 p-2 rounded-md mr-4">
                          <Link href={`http://${store.subdomain}.lvh.me:8000`}>
                          <Globe href={store.subdomain} className="h-5 w-5 cursor-pointer text-blue-600" />
                          </Link>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">{store.store_name}</h3>
                            <Badge 
                              variant={store.is_active ? "default" : "secondary"} 
                              className="ml-2 text-white"
                            >
                              {store.is_active ? 'Actif' : 'Inactif'}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">
                            {store.subdomain}.lvh.me:8000
                          </p>
                          <p className="text-sm text-gray-500">
                            Ajouté le {new Date(store.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <TooltipProvider>
                          {!store.is_active && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                className='text-white'
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleSetActive(store.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Activer cette boutique</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                          
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                              className='text-white'
                                variant="destructive"
                                size="sm"
                                onClick={() => handleDeleteStore(store.id)}
                              >
                                <AlertCircle className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Supprimer cette boutique</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {/* <TrialNotification trialInfo={trialInfo} /> */}
    </div>
  );
}