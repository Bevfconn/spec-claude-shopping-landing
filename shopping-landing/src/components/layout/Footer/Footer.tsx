import { Box, Container, Typography, Grid, Link as MuiLink, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import type { FooterLink } from '@/types';
import { NewsletterForm } from './NewsletterForm';
import footerLinksData from '@/data/footerLinks.json';

const footerLinks = footerLinksData as FooterLink[];

const getSocialIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'facebook':
      return <FacebookIcon />;
    case 'instagram':
      return <InstagramIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'pinterest':
      return <PinterestIcon />;
    default:
      return null;
  }
};

export function Footer() {
  const groupedLinks = {
    about: footerLinks.filter((link) => link.section === 'about'),
    support: footerLinks.filter((link) => link.section === 'support'),
    legal: footerLinks.filter((link) => link.section === 'legal'),
    social: footerLinks.filter((link) => link.section === 'social'),
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'grey.300',
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container>
        {/* Newsletter Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
            pb: 6,
            borderBottom: 1,
            borderColor: 'grey.800',
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: 'common.white',
              mb: 1,
              fontWeight: 600,
            }}
          >
            Subscribe to Our Newsletter
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 3, color: 'grey.400' }}
          >
            Get the latest updates on new products and upcoming sales
          </Typography>
          <NewsletterForm />
        </Box>

        {/* Links Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* About Column */}
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                color: 'common.white',
                fontWeight: 600,
                mb: 2,
              }}
            >
              About
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {groupedLinks.about.map((link) => (
                <Box component="li" key={link.id} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    to={link.url}
                    color="inherit"
                    underline="hover"
                    sx={{
                      fontSize: '0.875rem',
                      '&:hover': { color: 'common.white' },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Support Column */}
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                color: 'common.white',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Support
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {groupedLinks.support.map((link) => (
                <Box component="li" key={link.id} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    to={link.url}
                    color="inherit"
                    underline="hover"
                    sx={{
                      fontSize: '0.875rem',
                      '&:hover': { color: 'common.white' },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Legal Column */}
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                color: 'common.white',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Legal
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {groupedLinks.legal.map((link) => (
                <Box component="li" key={link.id} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    to={link.url}
                    color="inherit"
                    underline="hover"
                    sx={{
                      fontSize: '0.875rem',
                      '&:hover': { color: 'common.white' },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Social Column */}
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                color: 'common.white',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {groupedLinks.social.map((link) => (
                <IconButton
                  key={link.id}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.label}`}
                  sx={{
                    color: 'grey.400',
                    '&:hover': {
                      color: 'common.white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {getSocialIcon(link.label)}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'grey.800', mb: 3 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            © {currentYear} ShopLogo. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <MuiLink
              component={Link}
              to="/accessibility"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: '0.75rem',
                color: 'grey.500',
                '&:hover': { color: 'grey.300' },
              }}
            >
              Accessibility
            </MuiLink>
            <MuiLink
              component={Link}
              to="/sitemap"
              color="inherit"
              underline="hover"
              sx={{
                fontSize: '0.75rem',
                color: 'grey.500',
                '&:hover': { color: 'grey.300' },
              }}
            >
              Sitemap
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
