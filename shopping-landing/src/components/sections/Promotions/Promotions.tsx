import { Box, Container, Typography, Grid } from '@mui/material';
import type { Promotion } from '@/types';
import { PromotionCard } from './PromotionCard';
import { LoadingSkeleton } from '@/components/common/LoadingSkeleton';
import promotionsData from '@/data/promotions.json';

const promotions = promotionsData as Promotion[];

export function Promotions() {
  const isLoading = false;

  // Filter active promotions (those that haven't expired)
  const activePromotions = promotions.filter((promo) => {
    if (!promo.validUntil) return true; // No expiration = always active
    const endDate = new Date(promo.validUntil);
    const now = new Date();
    return now <= endDate;
  });

  if (isLoading) {
    return (
      <Box
        component="section"
        aria-label="Current Promotions"
        sx={{ py: { xs: 6, md: 8 } }}
      >
        <Container>
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
            Current Promotions
          </Typography>
          <LoadingSkeleton variant="card" count={3} />
        </Container>
      </Box>
    );
  }

  if (activePromotions.length === 0) {
    return null; // Hide section if no active promotions
  }

  return (
    <Box
      component="section"
      aria-label="Current Promotions"
      sx={{ py: { xs: 6, md: 8 } }}
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
          Current Promotions
        </Typography>
        <Grid container spacing={3}>
          {activePromotions.map((promotion) => (
            <Grid
              key={promotion.id}
              size={{ xs: 12, sm: 6, md: activePromotions.length === 2 ? 6 : 4 }}
            >
              <PromotionCard promotion={promotion} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
