"use client";

import { Card, CardContent, Skeleton } from "@mui/material";

const ProductCardSkeleton = () => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f5f5f5",
        p: 2,
        borderRadius: 3,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Skeleton variant="rectangular" height={180} 
        sx={{ 
          borderRadius: 2,
          bgcolor: "#e0e0e0",
        }} 
      />
      <CardContent sx={{ flexGrow: 1, px: 0 }}>
        <Skeleton width="30%" height={24} sx={{ mb: 1, bgcolor: "#e0e0e0" }} />

        <Skeleton width="90%" height={24} sx={{ bgcolor: "#e0e0e0" }} />
        <Skeleton width="80%" height={24} sx={{ mb: 2, bgcolor: "#e0e0e0" }} />
        <Skeleton width="95%" height={18} sx={{ bgcolor: "#e0e0e0" }} />
        <Skeleton width="75%" height={18} sx={{ mb: 2, bgcolor: "#e0e0e0" }}   />
        
        <Skeleton width="40%" height={32} sx={{ mb: 2, bgcolor: "#e0e0e0" }} />
        
        <Skeleton width="100%" height={40} 
          sx={{ 
            borderRadius: 2,
            bgcolor: "#bbdefb",
          }} 
        />
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;