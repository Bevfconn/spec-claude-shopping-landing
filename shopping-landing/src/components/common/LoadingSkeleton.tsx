import { Skeleton, Box, Card, CardContent } from '@mui/material';

interface LoadingSkeletonProps {
  variant?: 'card' | 'text' | 'image' | 'hero' | 'testimonial';
  count?: number;
}

export function LoadingSkeleton({ variant = 'card', count = 1 }: LoadingSkeletonProps) {
  const items = Array.from({ length: count }, (_, i) => i);

  switch (variant) {
    case 'hero':
      return (
        <Box sx={{ width: '100%', height: { xs: 400, md: 500 }, position: 'relative' }}>
          <Skeleton variant="rectangular" width="100%" height="100%" />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              textAlign: 'center',
            }}
          >
            <Skeleton variant="text" width="80%" height={60} sx={{ mx: 'auto', mb: 2 }} />
            <Skeleton variant="text" width="60%" height={24} sx={{ mx: 'auto', mb: 3 }} />
            <Skeleton variant="rectangular" width={150} height={48} sx={{ mx: 'auto' }} />
          </Box>
        </Box>
      );

    case 'image':
      return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {items.map((i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={200}
              height={200}
              sx={{ borderRadius: 2 }}
            />
          ))}
        </Box>
      );

    case 'text':
      return (
        <Box>
          {items.map((i) => (
            <Skeleton key={i} variant="text" width="100%" height={24} sx={{ mb: 1 }} />
          ))}
        </Box>
      );

    case 'testimonial':
      return (
        <Box sx={{ display: 'flex', gap: 3 }}>
          {items.map((i) => (
            <Card key={i} sx={{ flex: 1, minWidth: 280 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Skeleton variant="circular" width={48} height={48} sx={{ mr: 2 }} />
                  <Box sx={{ flex: 1 }}>
                    <Skeleton variant="text" width="60%" height={24} />
                    <Skeleton variant="text" width="40%" height={20} />
                  </Box>
                </Box>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="70%" />
              </CardContent>
            </Card>
          ))}
        </Box>
      );

    case 'card':
    default:
      return (
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {items.map((i) => (
            <Card key={i} sx={{ width: { xs: '100%', sm: 280 } }}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <CardContent>
                <Skeleton variant="text" width="80%" height={28} sx={{ mb: 1 }} />
                <Skeleton variant="text" width="40%" height={24} />
              </CardContent>
            </Card>
          ))}
        </Box>
      );
  }
}
