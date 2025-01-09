import { useRouter } from 'next/router';
import enTranslations from "@/../../messages/en.json";
import esTranslations from "@/../../messages/es.json";

export const useTranslations = () => {
  const { locale } = useRouter();
  const translations = locale === 'es' ? esTranslations : enTranslations;
  return translations;
};
