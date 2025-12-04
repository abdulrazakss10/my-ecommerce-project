import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    // console.log('API Response:', response.data);
    toast.success("Products loaded successfully!",{autoClose: 1000,});
    return response.data;
  } catch (error: unknown) {
    console.error('API Error:', error);
    if (axios.isAxiosError(error)) {
      toast.error(
        (error.response?.data as { message?: string })?.message ||
          "Failed to load products!",{autoClose: 2000,}
      );
    } else {
      toast.error("An unexpected error occurred!",{autoClose: 2000,});
    }

    throw error;
  }
};