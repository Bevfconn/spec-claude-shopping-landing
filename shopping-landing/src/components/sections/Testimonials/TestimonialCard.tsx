import { Box, Card, CardContent, Typography, Rating, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bgcolor: 'background.paper',
      }}
    >
      {/* Quote icon */}
      <FormatQuoteIcon
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontSize: 40,
          color: 'primary.light',
          opacity: 0.3,
          transform: 'rotate(180deg)',
        }}
      />

      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
        }}
      >
        {/* Rating */}
        <Rating
          value={testimonial.rating}
          readOnly
          precision={0.5}
          size="small"
          aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
          sx={{ mb: 2 }}
        />

        {/* Quote text */}
        <Typography
          variant="body1"
          sx={{
            flex: 1,
            mb: 3,
            fontStyle: 'italic',
            color: 'text.secondary',
            lineHeight: 1.7,
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          "{testimonial.reviewText}"
        </Typography>

        {/* Author info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={testimonial.avatarUrl}
            alt={testimonial.customerName}
            sx={{
              width: 48,
              height: 48,
              bgcolor: 'primary.main',
              fontSize: '1rem',
            }}
          >
            {getInitials(testimonial.customerName)}
          </Avatar>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, lineHeight: 1.3 }}
            >
              {testimonial.customerName}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Verified Buyer
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
