// import axios from 'axios';
// import { toast } from 'react-toastify';

// export const fetchProducts = async () => {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products');
//     // console.log('API Response:', response.data);
//     toast.success("Products loaded successfully!",{autoClose: 1000,});
//     return response.data;
//   } catch (error: unknown) {
//     console.error('API Error:', error);
//     if (axios.isAxiosError(error)) {
//       toast.error(
//         (error.response?.data as { message?: string })?.message ||
//           "Failed to load products!",{autoClose: 2000,}
//       );
//     } else {
//       toast.error("An unexpected error occurred!",{autoClose: 2000,});
//     }

//     throw error;
//   }
// };
import axios from "axios";
import { toast } from "react-toastify";
import type { Product } from "../store/types";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get("https://dummyjson.com/products");

    const products: Product[] = response.data.products.map(
      (product: any) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,

        // DummyJSON thumbnail → your existing image field
        image: product.thumbnail,

        // Convert DummyJSON rating → your existing rating structure
        rating: {
          rate: product.rating,
          count: product.stock,
        },
      })
    );

    toast.success("Products loaded successfully!", {
      autoClose: 1000,
    });

    return products;
  } catch (error: unknown) {
    console.error("API Error:", error);

    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message || "Failed to load products!",
        {
          autoClose: 2000,
        }
      );
    } else {
      toast.error("An unexpected error occurred!", {
        autoClose: 2000,
      });
    }

    throw error;
  }
};