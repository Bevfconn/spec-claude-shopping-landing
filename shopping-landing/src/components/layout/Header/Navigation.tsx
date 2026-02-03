import { useState } from 'react';
import { Box, Button, Menu, MenuItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import type { NavigationItem } from '@/types';
import navigationData from '@/data/navigation.json';

const navItems = (navigationData as NavigationItem[]).sort((a, b) => a.order - b.order);

export function Navigation() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<{ [key: string]: HTMLElement | null }>({});

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, itemId: string) => {
    setAnchorEl({ ...anchorEl, [itemId]: event.currentTarget });
  };

  const handleMenuClose = (itemId: string) => {
    setAnchorEl({ ...anchorEl, [itemId]: null });
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    if (event.key === 'Escape') {
      handleMenuClose(itemId);
    }
  };

  const isActive = (link: string) => location.pathname === link;

  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
      }}
    >
      {navItems.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = Boolean(anchorEl[item.id]);

        if (hasChildren) {
          return (
            <Box key={item.id}>
              <Button
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls={isOpen ? `menu-${item.id}` : undefined}
                onClick={(e) => handleMenuOpen(e, item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: 'text.primary',
                  fontWeight: isActive(item.link) ? 600 : 400,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                {item.label}
              </Button>
              <Menu
                id={`menu-${item.id}`}
                anchorEl={anchorEl[item.id]}
                open={isOpen}
                onClose={() => handleMenuClose(item.id)}
                MenuListProps={{
                  'aria-labelledby': `button-${item.id}`,
                  onKeyDown: (e) => handleKeyDown(e, item.id),
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {item.children?.sort((a, b) => a.order - b.order).map((child) => (
                  <MenuItem
                    key={child.id}
                    component={Link}
                    to={child.link}
                    onClick={() => handleMenuClose(item.id)}
                    selected={isActive(child.link)}
                  >
                    <ListItemText>{child.label}</ListItemText>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          );
        }

        return (
          <Button
            key={item.id}
            component={Link}
            to={item.link}
            sx={{
              color: 'text.primary',
              fontWeight: isActive(item.link) ? 600 : 400,
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Box>
  );
}
