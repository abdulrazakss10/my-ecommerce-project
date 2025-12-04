// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   Chip,
//   Rating,
// } from "@mui/material";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { ADD_TO_CART } from "../store/slices/cartSlice";
// import type { Product } from "../store/types";
// import { toast } from "react-toastify";

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard = ({ product }: ProductCardProps) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(ADD_TO_CART(product));

//     const cartBadge = document.getElementById("cart-badge");
//     if (cartBadge) {
//       cartBadge.classList.add("cart-bounce");
//       setTimeout(() => cartBadge.classList.remove("cart-bounce"), 400);
//     }

//     toast.success(`${product.title} added to cart!`, {
//       position: "bottom-right",
//       autoClose: 2000,
//     });
//   };

//   return (
//     <Card
//       sx={{
//         height: "100%",
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         transition: "all 0.25s ease",
//         borderRadius: 2,
//         "&:hover": {
//           transform: "translateY(-6px)",
//           boxShadow: 6,
//         },
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           height: 220,
//           width: "100%",
//           p: 2,
//           backgroundColor: "#fafafa",
//           borderBottom: "1px solid #eee",
//         }}
//       >
//         <Image
//           src={product.image}
//           alt={product.title}
//           fill
//           sizes="100%"
//           style={{ objectFit: "contain", padding: "20px" }}
//         />
//       </Box>

//       <CardContent
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//           gap: 1.2,
//           pb: 1,
//         }}
//       >
//         <Chip
//           label={product.category}
//           size="small"
//           sx={{
//             textTransform: "capitalize",
//             fontSize: "0.7rem",
//             color: "grey.700",
//           }}
//         />

//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontWeight: 600,
//             fontSize: "1rem",
//             lineHeight: "1.3rem",
//             display: "-webkit-box",
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//           }}
//         >
//           {product.title}
//         </Typography>

//         <Typography
//           sx={{
//             fontSize: "0.8rem",
//             color: "text.secondary",
//             display: "-webkit-box",
//             WebkitLineClamp: 1,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             lineHeight: "1.2rem",
//           }}
//         >
//           {product.description}
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             mt: 0.5,
//           }}
//         >
//           <Rating
//             value={product.rating.rate}
//             precision={0.5}
//             readOnly
//             size="small"
//             sx={{ color: "#ffb400" }}
//           />
//           <Typography sx={{ ml: 0.7, fontSize: "0.8rem" }}>
//             ({product.rating.count})
//           </Typography>
//         </Box>

//         <Box sx={{ mt: "auto" }}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 700,
//               color: "primary.main",
//               mb: 1,
//               fontSize: "1.1rem",
//             }}
//           >
//             ₹ {Math.floor(product.price)}
//           </Typography>

//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleAddToCart}
//             sx={{
//               textTransform: "none",
//               fontWeight: 600,
//               py: 1,
//             }}
//           >
//             Add to Cart
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;




//-------------------------------------------------------------------------------------------------------
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   Chip,
// } from "@mui/material";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { ADD_TO_CART } from "../store/slices/cartSlice";
// import { Product } from "../store/types";
// import { toast } from "react-toastify";

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard = ({ product }: ProductCardProps) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(ADD_TO_CART(product));

//     const cartBadge = document.getElementById("cart-badge");
//     if (cartBadge) {
//       cartBadge.classList.add("cart-bounce");
//       setTimeout(() => cartBadge.classList.remove("cart-bounce"), 400);
//     }

//     toast.success(`${product.title} added to cart!`, {
//       position: "bottom-right",
//       autoClose: 2000,
//     });
//   };

//   return (
//     <Card
//       sx={{
//         height: "100%",
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         borderRadius: 1,
//         boxShadow: 0,
//         cursor: "pointer",
//         transition: "0.25s",
//         "&:hover": {
//           boxShadow: 4,
//         },
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           height: 200,
//           width: "100%",
//           backgroundColor: "#f5f5f5",
//         }}
//       >
//         <Image
//           src={product.image}
//           alt={product.title}
//           fill
//           sizes="100%"
//           style={{
//             objectFit: "contain",
//             padding: "20px",
//           }}
//         />
//       </Box>

//       <CardContent sx={{ flexGrow: 1, px: 1.5, py: 1, }}>
//         <Box
//           sx={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 0.5,
//             backgroundColor: "#f5f5f5",
//             px: 0.8,
//             py: 0.3,
//             borderRadius: "3px",
//             fontSize: "0.75rem",
//             fontWeight: 600,
//             mb: 1,
//           }}
//         >
//           ⭐ {product.rating.rate}
//           <span style={{ color: "#555" }}> | {product.rating.count}</span>
//         </Box>

//         <Chip
//           label={product.category}
//           size="small"
//           sx={{
//             textTransform: "capitalize",
//             fontSize: "0.7rem",
//             mb: 1,
//           }}
//         />

//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontWeight: 700,
//             fontSize: "0.95rem",
//             color: "#282828",
//             lineHeight: "1.3rem",
//             display: "-webkit-box",
//             WebkitLineClamp: 1,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//           }}
//         >
//           {product.title}
//         </Typography>

//         <Typography
//           sx={{
//             fontSize: "0.8rem",
//             color: "#555",
//             display: "-webkit-box",
//             WebkitLineClamp: 1,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             mb: 1,
//           }}
//         >
//           {product.description}
//         </Typography>

//         {/* <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//           <Rating
//             value={product.rating.rate}
//             precision={0.5}
//             readOnly
//             size="small"
//             sx={{ color: "#ffb400" }}
//           />
//           <Typography sx={{ ml: 0.7, fontSize: "0.8rem", color: "#444" }}>
//             ({product.rating.count})
//           </Typography>
//         </Box> */}

//         <Box sx={{ mt: "auto", mb: 1 }}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 700,
//               color: "#282828",
//               fontSize: "1rem",
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             ₹{Math.floor(product.price)}

//             <Typography
//               component="span"
//               sx={{
//                 textDecoration: "line-through",
//                 fontSize: "0.9rem",
//                 color: "#777",
//               }}
//             >
//               ₹{Math.floor(product.price * 1.2)}
//             </Typography>

//             <Typography
//               component="span"
//               sx={{
//                 fontSize: "0.9rem",
//                 color: "#ff3e6c",
//                 fontWeight: 600,
//               }}
//             >
//               (20% OFF)
//             </Typography>
//           </Typography>
//         </Box>

//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           onClick={handleAddToCart}
//           sx={{
//             textTransform: "none",
//             fontWeight: 600,
//             py: 1,
//           }}
//         >
//           Add to Cart
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;
//----------------------------------------------------------------------------