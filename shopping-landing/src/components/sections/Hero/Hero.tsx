import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import type { HeroContent } from '@/types';
import heroData from '@/data/heroContent.json';

const heroContent = heroData as HeroContent;

export function Hero() {
  return (
    <Box
      component="section"
      aria-label="Hero"
      sx={{
        position: 'relative',
        minHeight: { xs: 400, sm: 450, md: 500 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: 'primary.dark',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroContent.backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          py: { xs: 6, md: 8 },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: 'white',
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {heroContent.headline}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            color: 'rgba(255,255,255,0.9)',
            mb: 4,
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
            maxWidth: 600,
            mx: 'auto',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          {heroContent.description}
        </Typography>
        <Button
          component={Link}
          to={heroContent.ctaLink}
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          {heroContent.ctaText}
        </Button>
      </Container>
    </Box>
  );
}
