import { useState } from 'react';
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from 'react-router-dom';
import type { NavigationItem } from '@/types';
import navigationData from '@/data/navigation.json';

const navItems = (navigationData as NavigationItem[]).sort((a, b) => a.order - b.order);

export function MobileDrawer() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setExpandedItems({});
    }
  };

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const isActive = (link: string) => location.pathname === link;

  const handleNavigation = () => {
    setIsOpen(false);
    setExpandedItems({});
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Open menu"
        onClick={toggleDrawer}
        sx={{ display: { xs: 'flex', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Typography variant="h6" component="span">
            Menu
          </Typography>
          <IconButton
            onClick={toggleDrawer}
            aria-label="Close menu"
            edge="end"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box component="nav" aria-label="Mobile navigation" role="navigation">
          <List>
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedItems[item.id] || false;

              if (hasChildren) {
                return (
                  <Box key={item.id}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => toggleExpand(item.id)}
                        aria-expanded={isExpanded}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontWeight: isActive(item.link) ? 600 : 400,
                          }}
                        />
                        {isExpanded ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </ListItem>
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children?.sort((a, b) => a.order - b.order).map((child) => (
                          <ListItem key={child.id} disablePadding>
                            <ListItemButton
                              component={Link}
                              to={child.link}
                              onClick={handleNavigation}
                              selected={isActive(child.link)}
                              sx={{ pl: 4 }}
                            >
                              <ListItemText
                                primary={child.label}
                                primaryTypographyProps={{
                                  fontSize: '0.875rem',
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                    <Divider />
                  </Box>
                );
              }

              return (
                <Box key={item.id}>
                  <ListItem disablePadding>
                    <ListItemButton
                      component={Link}
                      to={item.link}
                      onClick={handleNavigation}
                      selected={isActive(item.link)}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: isActive(item.link) ? 600 : 400,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </Box>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
