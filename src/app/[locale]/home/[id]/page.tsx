'use client';
import { useEffect, useState, useCallback } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../../../amplify/data/resource'; 
import CustomCard from '@/components/Card/Card';

// amplifyConfig.js
import { Amplify } from 'aws-amplify';
import outputs from '../../../../../amplify_outputs.json';

Amplify.configure(outputs);

const client = generateClient<Schema>();

// Definir interfaces para Market y MarketOption
interface MarketOption {
  optionText: string;
}

interface Market {
  id: string;
  title?: string | null;
  description?: string | null;
  expiryDate?: string | null;
  rules?: string | null;
  imgurl?: string | null;
  createdAt?: string;
  updatedAt?: string;
  marketOptions?: MarketOption[];
}

export default function MarketDetailPage({ params }: { readonly params: { readonly id: string } }) {
  const { id } = params;
  const [market, setMarket] = useState<Market | null>(null);
  const [loading, setLoading] = useState(true);

  

  const fetchMarketDetails = useCallback(async () => {

    // Definir el selectionSet para traer las opciones asociadas
    const selectionSet = [
      'id', 
      'title', 
      'description', 
      'expiryDate', 
      'rules', 
      'imgurl',
      'createdAt',
      'updatedAt',
      'marketOptions.optionText'  // Incluir opciones del mercado
    ] as const;

    try {
      const { data: marketData, errors } = await client.models.Markets.get(
        { id },
        { selectionSet }  // Pasar selectionSet a la operación get
      );
      if (marketData) {
        console.log(marketData);
        setMarket(marketData as Market);
      }
      if (errors) {
        console.error(errors);
      }
    } catch (error) {
      console.error('Error fetching market details:', error);
    } finally {
      setLoading(false);
    }
  }, [id]); // Agregamos selectionSet al array de dependencias

  useEffect(() => {
    fetchMarketDetails();
  }, [fetchMarketDetails]);

  if (loading) {
    return <div>Loading market detail...</div>;
  }

  if (!market) {
    return <div>No market detail found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <CustomCard
          title={market.title ?? 'Sin título'}
          description={market.description ?? 'Sin descripción'}
          imageUrl={market.imgurl ?? "https://nextui.org/avatars/avatar-2.png"}
          // Mostrar las opciones del mercado en el botón
          options={market.marketOptions?.map((option: MarketOption) => option.optionText) || []}
          expiryDate={market.expiryDate ?? 'Sin fecha de expiración'}
        />
      </div>
      <div className="mt-8">
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Descripción</h2>
          <p>{market.description ?? 'Sin descripción disponible.'}</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Reglas</h2>
          <p>{market.rules ?? 'No rules available.'}</p>
        </div>
      </div>
    </div>
  );
}
