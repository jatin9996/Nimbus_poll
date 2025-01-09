'use client';

import { Amplify } from 'aws-amplify';
import outputs from '../../../../amplify_outputs.json';
Amplify.configure(outputs);

import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../../amplify/data/resource';
import VoteCard from "@/components/Card/Card";
import Link from 'next/link';

const client = generateClient<Schema>();

// Definimos las interfaces necesarias
interface Translation {
  language: string;
  title?: string | null;
  description?: string | null;
}

interface MarketOption {
  optionText: string;
}

interface Market {
  id: string;
  title?: string | null;
  description?: string | null;
  expiryDate?: string | null;
  imgurl?: string | null;
  marketOptions?: MarketOption[];
  translations?: Translation[] | null;
}

const HomePage = () => {
  const [markets, setMarkets] = useState<Market[]>([]);

  

  

  // Usamos useEffect para traer los mercados cuando se carga la página
  useEffect(() => {
    // Actualizamos el selectionSet para incluir todos los campos necesarios
  const selectionSet = [
    'id',
    'title',
    'description',
    'expiryDate',
    'imgurl',
    'marketOptions.optionText',
    'translations.language',
    'translations.title',
    'translations.description',
  ] as const;
    // Función para obtener los mercados con sus opciones
  const fetchMarkets = async () => {
    try {
      const { data: marketsData, errors } = await client.models.Markets.list({
        selectionSet,
      });
      if (marketsData) {
        console.log(marketsData);
        setMarkets(marketsData as Market[]);
      }
      if (errors) {
        console.error(errors);
      }
    } catch (error) {
      console.error('Error fetching markets:', error);
    }
  }; // Agregamos selectionSet al array de dependencias
    fetchMarkets();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {markets.map((market) => (
          <Link key={market.id} href={`/en/home/${market.id}`}>
            <VoteCard
              title={
                market.translations?.find((t: Translation) => t?.language === 'en')?.title ??
                market.title ??
                'No title'
              }
              description={
                market.translations?.find((t: Translation) => t?.language === 'en')?.description ??
                market.description ??
                'No description'
              }
              imageUrl={market.imgurl ?? 'https://nextui.org/avatars/avatar-1.png'}
              options={
                market.marketOptions?.map((option: MarketOption) => option.optionText) || []
              }
              expiryDate={market.expiryDate ?? 'No expiry date'}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
