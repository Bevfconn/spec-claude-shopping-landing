import { AppBar, Toolbar, Container, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import { CartBadge } from './CartBadge';
import { MobileDrawer } from './MobileDrawer';

interface HeaderProps {
  cartItemCount?: number;
}

export function Header({ cartItemCount = 0 }: HeaderProps) {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, md: 64 },
            gap: 2,
          }}
        >
          {/* Mobile menu button */}
          <MobileDrawer />

          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              flexShrink: 0,
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            ShopLogo
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Navigation />
          </Box>

          {/* Spacer for mobile */}
          <Box sx={{ flex: 1, display: { xs: 'block', md: 'none' } }} />

          {/* Actions */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <SearchBar />
            <CartBadge count={cartItemCount} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
