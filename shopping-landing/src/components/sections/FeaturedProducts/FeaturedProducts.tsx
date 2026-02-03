import { Box, Container, Typography, Grid } from '@mui/material';
import type { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { LoadingSkeleton } from '@/components/common/LoadingSkeleton';
import { ErrorState } from '@/components/common/ErrorState';
import { EmptyState } from '@/components/common/EmptyState';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { PRODUCTS_PER_VIEWPORT } from '@/theme/breakpoints';
import productsData from '@/data/products.json';

const products = productsData as Product[];

export function FeaturedProducts() {
  const { breakpoint } = useBreakpoint();
  const isLoading = false; // Using static data
  const error = null;

  // Get products count based on viewport
  const productsToShow = PRODUCTS_PER_VIEWPORT[breakpoint] || 8;
  const displayedProducts = products.slice(0, productsToShow);

  if (isLoading) {
    return (
      <Box component="section" aria-label="Featured Products" sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
            Featured Products
          </Typography>
          <LoadingSkeleton variant="card" count={4} />
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <Box component="section" aria-label="Featured Products" sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
            Featured Products
          </Typography>
          <ErrorState
            message="Unable to load products. Please try again."
            onRetry={() => window.location.reload()}
          />
        </Container>
      </Box>
    );
  }

  if (displayedProducts.length === 0) {
    return (
      <Box component="section" aria-label="Featured Products" sx={{ py: { xs: 6, md: 8 } }}>
        <Container>
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
            Featured Products
          </Typography>
          <EmptyState
            title="Coming Soon"
            description="New products are on the way. Check back soon!"
          />
        </Container>
      </Box>
    );
  }

  return (
    <Box component="section" aria-label="Featured Products" sx={{ py: { xs: 6, md: 8 } }}>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {displayedProducts.map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 6, sm: 3, md: 3, lg: 3 }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
