import { Grid, Container, Box, Stack, Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { useEffect, useState } from 'react';
import { getProducts } from '../store/slices/productsSlice';
// import Loader from './Loader';
import ProductCardSkeleton from './ProductCardSkeleton';
import { useSearchParams } from "next/navigation";

const ProductList = () => {
    const { products, loading } = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch<AppDispatch>();

    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;



  useEffect(() => {
    // dispatch(getProducts());
    if (products.length === 0) {
      dispatch(getProducts());  // Dispatch only if products are empty
    }
  }, [dispatch, products.length]);

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

   if (loading) {
    // return <Loader />;
    return (
    <Container 
    maxWidth= {false}
     sx={{ py: 4, maxWidth: "1800px", mx: "auto", }}>
      <Grid container spacing={3}>
        {[...Array(8)].map((_, i) => (
          <Grid
            key={i}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 2.4,
            }}
          >
            <ProductCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Container>
    )
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4,}}>
      <Grid container spacing={3}>
         {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <Grid
            key={product.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
              xl: 2.4
            }}
          >
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              py: 10,
              fontSize: "20px",
              color: "#777",
              // background: "#fff2b7",
              background: "primary.main",
              borderRadius: "15px",
              height: "100%",
            }}
          >
            No products found
          </Box>
        )}
      </Grid>
      {filteredProducts.length > 0 && (
        <Stack alignItems="center" sx={{ mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            size="medium"
            shape="rounded"
            //  sx={{
            //     "& .MuiPaginationItem-root": {
            //       color: "#4A2E00",
            //       borderColor: "#4A2E00",
            //     },
            //     "& .MuiPaginationItem-root:hover": {
            //       backgroundColor: "rgba(74,46,0,0.1)",
            //     },
            //     "& .Mui-selected": {
            //       backgroundColor: "#4A2E00 !important",
            //       color: "#fff !important",
            //     },
            //     "& .Mui-selected:hover": {
            //       backgroundColor: "#3A2200 !important",
            //     }
            //   }}
          />
        </Stack>
      )}
    </Container>
  );
};

export default ProductList;