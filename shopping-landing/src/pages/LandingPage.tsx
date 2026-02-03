import { Box } from '@mui/material';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero/Hero';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts/FeaturedProducts';
import { Categories } from '@/components/sections/Categories/Categories';
import { Promotions } from '@/components/sections/Promotions/Promotions';
import { Testimonials } from '@/components/sections/Testimonials/Testimonials';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

export function LandingPage() {
  // In a real app, this would come from cart state/context
  const cartItemCount = 3;

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <Box component="main" id="main-content">
        {/* Hero Section */}
        <ErrorBoundary sectionName="Hero">
          <Hero />
        </ErrorBoundary>

        {/* Featured Products Section */}
        <ErrorBoundary sectionName="Featured Products">
          <FeaturedProducts />
        </ErrorBoundary>

        {/* Categories Section */}
        <ErrorBoundary sectionName="Categories">
          <Categories />
        </ErrorBoundary>

        {/* Promotions Section */}
        <ErrorBoundary sectionName="Promotions">
          <Promotions />
        </ErrorBoundary>

        {/* Testimonials Section */}
        <ErrorBoundary sectionName="Testimonials">
          <Testimonials />
        </ErrorBoundary>
      </Box>
      <Footer />
    </>
  );
}
