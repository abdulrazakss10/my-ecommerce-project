"use client"

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { REMOVE_FROM_CART, UPDATE_QUANTITY } from '../../store/slices/cartSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { MdInfoOutline } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';


export default function CartPage() {
  const { items, totalQuantity } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRemoveItem = (id: number) => {
    dispatch(REMOVE_FROM_CART(id));
    toast.info("Item removed from cart!", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  const handleUpdateQuantity = (id: number, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      dispatch(UPDATE_QUANTITY({ id, quantity: newQuantity }));
    }
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + Math.floor(item.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          🛒 Your Cart is Empty
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Looks like you haven&apos;t added anything yet.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ px: 4, py: 1.5, fontSize: "1rem", bgcolor: "#1976d2" }}
          onClick={() => router.push('/')}
        >
          Start Shopping
        </Button>
      </Container>
    );
  }


  return (
    <Container maxWidth="xl" sx={{ py: 4, maxWidth: "2200px", }}>
      <Typography variant="h4" fontWeight={600} sx={{ mb: 3, pt: 8, color: "" }}>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          
          <Box
            sx={{
              pt: 2,
              background: "#e3f2fd",
              color: "",
              borderRadius: "20px",
              boxShadow: 4
            }}
          >
            <Box sx={{ px: 2, mb: 3, display: "flex", alignItems: "center", gap: 3 }}>
              <MdInfoOutline size={32} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Check your products before checkout
                </Typography>
                <Typography variant="body2">
                  Ensure every detail is perfect before completing your purchase.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ background: "#bbdefb", p: 2, borderRadius: "20px" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
                <Typography variant="h5" fontWeight={700} color="">
                  Cart
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {items.length} items
                </Typography>
              </Box>

              {items.map((item, index) => (
                <Box key={item.id}>
                  <Box
                    sx={{
                      background: "#e3f2fd",
                      transition: "0.2s",
                      "&:hover": { boxShadow: 4, borderRadius: 2 },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        gap: 2,
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "center", sm: "flex-start" },
                      }}
                    >
                      
                      <Box
                        sx={{
                          position: "relative",
                          width: { xs: 80, sm: 100, md: 120 },
                          height: { xs: 80, sm: 100, md: 120 },
                          backgroundColor: "#f1f8ff",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          style={{ objectFit: "contain", padding: 10 }}
                          sizes="120px"
                        />
                      </Box>

                      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: { xs: "1rem", sm: "1.1rem" },
                              fontWeight: 600,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              flex: 1,
                              color: ""
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              // backgroundColor: "#bbdefb",
                              backgroundColor: "#c1e3ff",
                              px: 1.6,
                              py: 0.6,
                              borderRadius: 2,
                            }}
                          >
                            <IconButton
                              size="small"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                            >
                              <RemoveIcon />
                            </IconButton>

                            <Typography sx={{ width: 30, textAlign: "center", fontWeight: 600 }}>
                              {item.quantity}
                            </Typography>

                            <IconButton
                              size="small"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography sx={{ fontWeight: 600, fontSize: "0.95rem", color: "" }}>
                            ₹ {Math.floor(item.price)} per item
                          </Typography>

                          <IconButton color="error" onClick={() => handleRemoveItem(item.id)}>
                            <RiDeleteBin5Line />
                          </IconButton>
                        </Box>
                      </Box>

                    </CardContent>
                  </Box>

                  {index < items.length - 1 && <Divider sx={{ my: 2 }} />}
                </Box>
              ))}

            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              background: "#e3f2fd",
              p: 2,
              borderRadius: 3,
              position: "sticky",
              top: 20,
              boxShadow: 4,
            }}
          >
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: "" }}>
              Order Summary
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Items:</Typography>
                <Typography fontWeight={600}>{totalQuantity}</Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Products:</Typography>
                <Typography fontWeight={600}>{items.length}</Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography variant="h6" fontWeight={700}>
                Total:
              </Typography>
              <Typography variant="h6" fontWeight={700} color="">
                ₹ {totalPrice}
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                bgcolor: "#1976d2",
                "&:hover": { bgcolor: "#115293" },
              }}
              size="large"
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
}
