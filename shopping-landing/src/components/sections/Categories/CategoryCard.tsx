import { Card, CardActionArea, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Category } from '@/types';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          '@media (prefers-reduced-motion: reduce)': {
            transform: 'none',
          },
          '& .category-overlay': {
            bgcolor: 'rgba(0,0,0,0.5)',
          },
        },
      }}
    >
      <CardActionArea
        component={Link}
        to={category.link}
        sx={{
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageWithFallback
          src={category.imageUrl}
          alt={category.name}
          fallbackSrc="/images/placeholders/category-placeholder.svg"
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <Box
          className="category-overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0,0,0,0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease-in-out',
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              color: 'white',
              fontWeight: 600,
              textAlign: 'center',
              px: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {category.name}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
