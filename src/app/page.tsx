"use client";

import {  Box } from '@mui/material';
import { Suspense } from "react";
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';

export default function HomePage() {
  return (
    <Box 
    sx={{
          pt: 8,
        }}>
      {/* <Box
        sx={{
          backgroundColor: '#f5f5f5',
          py: 3,
          textAlign: 'center',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="h4" component="h1" fontWeight={600}>
          Shop Our Products
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Discover amazing products at great prices
        </Typography>
      </Box> */}
       <Suspense fallback={<Loader />}>
          <ProductList />
       </Suspense>
    </Box>
  );
}