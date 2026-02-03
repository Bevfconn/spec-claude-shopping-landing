import { Badge, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

interface CartBadgeProps {
  count?: number;
}

export function CartBadge({ count = 0 }: CartBadgeProps) {
  const displayCount = count > 99 ? '99+' : count;
  const showBadge = count > 0;

  return (
    <IconButton
      component={Link}
      to="/cart"
      aria-label={`Shopping cart${showBadge ? `, ${count} items` : ''}`}
      sx={{
        color: 'inherit',
      }}
    >
      <Badge
        badgeContent={showBadge ? displayCount : null}
        color="error"
        sx={{
          '& .MuiBadge-badge': {
            fontSize: '0.7rem',
            minWidth: 18,
            height: 18,
            padding: '0 4px',
          },
        }}
      >
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
}
