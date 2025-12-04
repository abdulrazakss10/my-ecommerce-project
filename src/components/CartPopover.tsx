import { Popover, Box, Typography, Divider, Button } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useRouter } from 'next/navigation';

interface CartPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const CartPopover = ({ anchorEl, onClose }: CartPopoverProps) => {
  const { items } = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  const handleViewCart = () => {
    router.push('/cart');
    onClose();
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ width: 320, maxHeight: 400, overflow: 'auto', p: 2, }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, 
          // color: "#402000" 
          }}>
          Cart Items
        </Typography>
        
        {items.length === 0 ? (
          <Typography color="">Your cart is empty</Typography>
        ) : (
          <>
            {items.map((item) => (
              <Box key={item.id} sx={{ mb: 2, }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ position: 'relative', width: 50, height: 50, flexShrink: 0 }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="50px"
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        // color: "#402000",
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2">
                      Qty: {item.quantity}
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      ₹ {Math.floor(item.price)}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ mt: 2 }} />
              </Box>
            ))}
            
            <Button
              variant="contained"
              fullWidth
              onClick={handleViewCart}
              sx={{
              // borderRadius: "50px",
              textTransform: "none",
              fontWeight: 600,
              // bgcolor: "#402000",  
              "&:hover": { bgcolor: "#333" },
            }}
            >
              View Cart
            </Button>
          </>
        )}
      </Box>
    </Popover>
  );
};

export default CartPopover;