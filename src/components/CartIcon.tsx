"use client";
    
import { useState } from 'react';
import { Badge, IconButton, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CartPopover from './CartPopover';
import { useRouter } from 'next/navigation';

const CartIcon = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { totalQuantity } = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    router.push('/cart');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <IconButton
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        sx={{
          backgroundColor: 'white',
          boxShadow: 3,
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Badge badgeContent={totalQuantity} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      
      <CartPopover anchorEl={anchorEl} onClose={handleClose} />
    </Box>
  );
};

export default CartIcon;