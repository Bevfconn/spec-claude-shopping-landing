import { Card, CardContent, CardActionArea, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Product } from '@/types';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import { formatPrice, isOnSale } from '@/utils/formatPrice';
import { getLineClampStyles } from '@/utils/truncateText';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const onSale = isOnSale(product.price, product.originalPrice);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
        },
      }}
    >
      <CardActionArea
        component={Link}
        to={product.link}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <Box sx={{ position: 'relative' }}>
          <ImageWithFallback
            src={product.imageUrl}
            alt={product.name}
            fallbackSrc="/images/placeholders/product-placeholder.svg"
            height={200}
            objectFit="cover"
          />
          {onSale && (
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                bgcolor: 'error.main',
                color: 'white',
                px: 1,
                py: 0.5,
                borderRadius: 1,
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              Sale
            </Box>
          )}
        </Box>
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="body1"
            component="h3"
            sx={{
              fontWeight: 500,
              mb: 1,
              ...getLineClampStyles(2),
            }}
          >
            {product.name}
          </Typography>
          <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 600,
                color: onSale ? 'error.main' : 'text.primary',
              }}
            >
              {formatPrice(product.price)}
            </Typography>
            {onSale && product.originalPrice && (
              <Typography
                variant="body2"
                component="span"
                sx={{
                  textDecoration: 'line-through',
                  color: 'text.secondary',
                }}
              >
                {formatPrice(product.originalPrice)}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
