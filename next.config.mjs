import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nextui.org'], // Permite imágenes desde nextui.org
  },
};
 
export default withNextIntl(nextConfig);
