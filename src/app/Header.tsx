"use client";

import { AppBar, Toolbar, Typography, Box, IconButton, Badge, alpha, InputBase } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartPopover from "../components/CartPopover";
import SearchIcon from "@mui/icons-material/Search";


const Header = () => {
  const cartCount = useSelector((state: RootState) => state.cart.totalQuantity);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

const handleSearch = () => {
  router.push(`/?search=${encodeURIComponent(searchTerm.trim())}`);
};


 const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    router.push("/cart");
  };


  return (
    <AppBar 
    // position="sticky" 
    elevation={1} 
    // sx={{ 
    //     background: "linear-gradient(90deg, #4e54c8, #8f94fb)", 
    //     background: "linear-gradient(90deg, #e9d67f, #fff2b7)",
    //     background: "#fff2b7",
    //     color: "#402000", 

    //     }}
    sx={{ 
        background: "#1976d2",
        color: "#ffffff", 
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        }}
        >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1.5, }}>
        
        <Typography variant="h5" fontWeight={700} sx={{ cursor: "pointer", letterSpacing: "1px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            ShopNow
          </Link>
        </Typography>

        <Box
          sx={{
            flex: 1,
            mx: 4,
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            backgroundColor: alpha("#ffffff", 0.2),
            padding: "6px 15px",
            borderRadius: "30px",
            transition: "0.3s",
            "&:focus-within": {
              backgroundColor: alpha("#ffffff", 0.3),
            },
          }}
        >
          <SearchIcon 
           sx={{ color: "#ffffff", mr: 1, cursor: "pointer", "&:hover": { opacity: 0.8 },}}
           onClick={handleSearch}/>

          <InputBase
            placeholder="Search products…"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
            }}
           sx={{
              color: "#ffffff",
              fontSize: "0.95rem",
              "& ::placeholder": {
                color: alpha("#ffffff", 0.8),
                opacity: 1,
              },
              "& .MuiInputBase-input::placeholder": {
                color: alpha("#ffffff", 0.8),
                opacity: 1,
              }
            }}

            />

        </Box>


        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Link href="/" style={{ textDecoration: "none", color: "#ffffff", fontSize: "1rem", fontWeight: 500, }}>
            Home
          </Link>

          <IconButton
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            sx={{
              "&:hover": { backgroundColor: alpha("#ffffff", 0.2) },
              color: "#ffffff",
            }}
          >
            <Badge badgeContent={cartCount} color="secondary" id="cart-badge"
             sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#ff1744",
                  color: "#ffffff",
                  fontWeight: 600,
                },
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <CartPopover anchorEl={anchorEl} onClose={handleClose} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
