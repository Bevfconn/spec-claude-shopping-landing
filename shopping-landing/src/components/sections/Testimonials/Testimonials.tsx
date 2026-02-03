import { Box, Container, Typography, Grid } from '@mui/material';
import type { Testimonial } from '@/types';
import { TestimonialCard } from './TestimonialCard';
import { LoadingSkeleton } from '@/components/common/LoadingSkeleton';
import testimonialsData from '@/data/testimonials.json';

const testimonials = testimonialsData as Testimonial[];

export function Testimonials() {
  const isLoading = false;

  // Show top rated testimonials (sorted by rating, take top 3)
  const displayedTestimonials = [...testimonials]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  if (isLoading) {
    return (
      <Box
        component="section"
        aria-label="Customer Testimonials"
        sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}
      >
        <Container>
          <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 4 }}>
            What Our Customers Say
          </Typography>
          <LoadingSkeleton variant="testimonial" count={3} />
        </Container>
      </Box>
    );
  }

  if (displayedTestimonials.length === 0) {
    return null; // Hide section if no testimonials
  }

  return (
    <Box
      component="section"
      aria-label="Customer Testimonials"
      sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 1,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            What Our Customers Say
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Don't just take our word for it — hear from our satisfied customers
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {displayedTestimonials.map((testimonial) => (
            <Grid
              key={testimonial.id}
              size={{ xs: 12, md: 4 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
