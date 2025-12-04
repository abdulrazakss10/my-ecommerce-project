import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../store/slices/cartSlice";
import type { Product } from "../store/types";
import { toast } from "react-toastify";
import { TiStarFullOutline } from "react-icons/ti";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(ADD_TO_CART(product));
    // toast.success(`${product.title} added to cart!`);
      toast.success(`${product.title} added to cart!`, {
      position: "bottom-right",
      autoClose: 1000,
    });
  };

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        // bgcolor: "#fff2b7",
        // bgcolor: "#e9d67f",
        // padding: "7PX",
        boxShadow:
          "0px 15px 25px rgba(0,0,0,0.1), inset 0px 0px 40px rgba(255,240,180,0.5)",
        transition: "0.3s",
        "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
      }}
    >
      <Box sx={{ width: "100%", height: 200, position: "relative", 
        // background: "#e7e7e7", 
        background: "#e7e7e7", 
        // borderRadius: "10px", 
        }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain", padding: "20px", }}
        />
      </Box>

      <CardContent sx={{ p: 1 }}>

        <Typography
          sx={{
            // color: "#402000",
            mb: 1,
            fontWeight: 600,
            fontSize: "0.9rem",
            lineHeight: "1.3rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "2.6rem"
          }}
        >
          {product.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.8rem",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: "1.2rem",
            // color: "#402000",
            mb: 1,
          }}
        >
          {product.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // justifyContent: "space-around",
            alignItems: "center",
            mb: 2,
            mt: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* <Typography
                sx={{
                  fontSize: "2rem",
                  // fontWeight: 800,
                  // color: "#3A2A00",
                  // fontFamily: "'Montserrat', sans-serif",
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: "2rem",
                }}
              >
                ₹
              </Typography> */}

              <Box>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      // color: "#3A2A00",
                      lineHeight: "2.3rem",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    ₹ {Math.floor(product.price)}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "10px",
                      // color: "#A67C00",
                      // color: "#3A2A00",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    12% Discount
                  </Typography>
              </Box>        
          </Box>


          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      // bgcolor: "#E7D7A4",
                      // bgcolor: "#1976d2",
                      bgcolor: "#b3d9ff",
                      // opacity: "40%",
                      color: 'black',
                      px: 3,
                      py: 1,
                      borderRadius: "50px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        // color: "#4A2E00",
                        // color: "black",
                        fontWeight: 900,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // lineHeight: "1",
                      }}
                    >
                      {/* ★ */}
                      <TiStarFullOutline />

                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#000",
                        // color: "#4A2E00",
                      }}
                    >
                      {product.rating.rate}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 700,
                      // mt: 1,
                      // color: "#4A2E00",
                    }}
                  >
                    {product.rating.count} reviews
                  </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 600,
                    // bgcolor: "#402000",
                    // bgcolor: 'blue',
                    "&:hover": { bgcolor: "#333" },
                  }}
                // color="primary"
                onClick={handleAddToCart}
                
              >
                Add to Cart
            </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
