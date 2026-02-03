import { Box, Card, CardContent, Typography, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Promotion } from '@/types';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';

interface PromotionCardProps {
  promotion: Promotion;
}

export function PromotionCard({ promotion }: PromotionCardProps) {
  const isExpiringSoon = () => {
    if (!promotion.validUntil) return false;
    const endDate = new Date(promotion.validUntil);
    const now = new Date();
    const daysRemaining = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysRemaining <= 3 && daysRemaining > 0;
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
          '@media (prefers-reduced-motion: reduce)': {
            transform: 'none',
          },
        },
      }}
    >
      {/* Expiring soon badge */}
      {isExpiringSoon() && (
        <Chip
          label="Ending Soon"
          color="warning"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 1,
            fontWeight: 600,
            fontSize: '0.7rem',
          }}
        />
      )}

      {/* Image */}
      <Box
        sx={{
          position: 'relative',
          paddingTop: '56.25%', // 16:9 aspect ratio
          bgcolor: 'grey.100',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <ImageWithFallback
            src={promotion.imageUrl}
            alt={promotion.headline}
          />
        </Box>
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 2.5,
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: '1.1rem',
            lineHeight: 1.3,
          }}
        >
          {promotion.headline}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {promotion.description}
        </Typography>

        <Button
          component={Link}
          to={promotion.ctaLink}
          variant="contained"
          fullWidth
          sx={{
            mt: 'auto',
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          {promotion.ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}
