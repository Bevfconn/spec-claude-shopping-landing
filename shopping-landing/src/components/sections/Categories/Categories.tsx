import { Box, Container, Typography, Grid } from '@mui/material';
import type { Category } from '@/types';
import { CategoryCard } from './CategoryCard';
import { LoadingSkeleton } from '@/components/common/LoadingSkeleton';
import categoriesData from '@/data/categories.json';

const categories = categoriesData as Category[];

export function Categories() {
  const isLoading = false; // Using static data
  const displayedCategories = categories;

  if (isLoading) {
    return (
      <Box
        component="section"
        aria-label="Shop by Category"
        sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}
      >
        <Container>
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
            Shop by Category
          </Typography>
          <LoadingSkeleton variant="card" count={4} />
        </Container>
      </Box>
    );
  }

  if (displayedCategories.length === 0) {
    return null; // Hide section if no categories
  }

  return (
    <Box
      component="section"
      aria-label="Shop by Category"
      sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}
    >
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
          Shop by Category
        </Typography>
        <Grid container spacing={3}>
          {displayedCategories.map((category) => (
            <Grid
              key={category.id}
              size={{ xs: 6, sm: 4, md: 4, lg: 2 }}
            >
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
