import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import ProductIMG from "../../Assets/Images/product.jpg";

const initialState = {
  products: [
    {
      id: "1",
      name: "Vitamin C 500mg Sugarless Tab X 300",
      category: "Personal Care",
      Brand: "Mape",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit excepturi maiores consequatur in voluptates quo, unde minus, quidem maxime nam adipisci? Iusto quis, aperiam possimus sequi quae sapiente similique.",
      price: 100,
      image: "https://i.ibb.co/PDdZbXy/product.jpg",
      rate: 2,
      reviews: [
        {
          user: {
            name: "Kyrillos Ezzat",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very nice price ",
          starts: 4,
          createdAt: "March 9, 2022",
        },
        {
          user: {
            name: "Mark Doe",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very Good Product",
          starts: 5,
          createdAt: "April 19, 2022",
        },
      ],
      additionalInfo: {
        Brand: "Amere",
        Condition: "Depression, Diabetes, High Cholesterol",
        Form: "Oral Suspension",
        Frequency: "Individual",
        Strength: "100 MG/5ML",
      },
    },
    {
      id: "2",
      name: "Enterosgel Tube",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit excepturi maiores consequatur in voluptates quo, unde minus, quidem maxime nam adipisci? Iusto quis, aperiam possimus sequi quae sapiente similique.",
      category: "Personal Care",
      Brand: "Mape",

      price: 20,
      image: "https://i.ibb.co/HYGG9sC/pro.jpg",
      rate: 3,
      reviews: [
        {
          user: {
            name: "Kyrillos Ezzat",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very nice price ",
          starts: 4,
          createdAt: "March 9, 2022",
        },
        {
          user: {
            name: "Mark Doe",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very Good Product",
          starts: 5,
          createdAt: "April 19, 2022",
        },
      ],
      additionalInfo: {
        Brand: "Amere",
        Condition: "Depression, Diabetes, High Cholesterol",
        Form: "Oral Suspension",
        Frequency: "Individual",
        Strength: "100 MG/5ML",
      },
    },
    {
      id: "3",
      name: "Product One",
      category: "Catgegory name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit excepturi maiores consequatur in voluptates quo, unde minus, quidem maxime nam adipisci? Iusto quis, aperiam possimus sequi quae sapiente similique.",
      price: 100,
      image: ProductIMG,
      rate: 4,
      reviews: [
        {
          user: {
            name: "Kyrillos Ezzat",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very nice price ",
          starts: 4,
          createdAt: "March 9, 2022",
        },
        {
          user: {
            name: "Mark Doe",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very Good Product",
          starts: 5,
          createdAt: "April 19, 2022",
        },
      ],
      additionalInfo: {
        Brand: "Amere",
        Condition: "Depression, Diabetes, High Cholesterol",
        Form: "Oral Suspension",
        Frequency: "Individual",
        Strength: "100 MG/5ML",
      },
    },
    {
      id: "4",
      name: "Product One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit excepturi maiores consequatur in voluptates quo, unde minus, quidem maxime nam adipisci? Iusto quis, aperiam possimus sequi quae sapiente similique.",
      category: "Catgegory name",
      price: 33,
      image: ProductIMG,
      rate: 3,
      reviews: [
        {
          user: {
            name: "Kyrillos Ezzat",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very nice price ",
          starts: 4,
          createdAt: "March 9, 2022",
        },
        {
          user: {
            name: "Mark Doe",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very Good Product",
          starts: 5,
          createdAt: "April 19, 2022",
        },
      ],
      additionalInfo: {
        Brand: "Amere",
        Condition: "Depression, Diabetes, High Cholesterol",
        Form: "Oral Suspension",
        Frequency: "Individual",
        Strength: "100 MG/5ML",
      },
    },
    {
      id: "5",
      name: "Product One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit excepturi maiores consequatur in voluptates quo, unde minus, quidem maxime nam adipisci? Iusto quis, aperiam possimus sequi quae sapiente similique.",
      category: "Catgegory name",
      price: 100,
      image: ProductIMG,
      rate: 1,
      reviews: [
        {
          user: {
            name: "Kyrillos Ezzat",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very nice price ",
          starts: 4,
          createdAt: "March 9, 2022",
        },
        {
          user: {
            name: "Mark Doe",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very Good Product",
          starts: 5,
          createdAt: "April 19, 2022",
        },
      ],
      additionalInfo: {
        Brand: "Amere",
        Condition: "Depression, Diabetes, High Cholesterol",
        Form: "Oral Suspension",
        Frequency: "Individual",
        Strength: "100 MG/5ML",
      },
    },
  ],
  relatedProducts: [
    {
      id: "1",
      name: "Vitamin C 500mg Sugarless Tab X 300",
      category: "Personal Care",
      Brand: "Mape",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit excepturi maiores consequatur in voluptates quo, unde minus, quidem maxime nam adipisci? Iusto quis, aperiam possimus sequi quae sapiente similique.",
      price: 100,
      image: "https://i.ibb.co/PDdZbXy/product.jpg",
      rate: 2,
      reviews: [
        {
          user: {
            name: "Kyrillos Ezzat",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very nice price ",
          starts: 4,
          createdAt: "March 9, 2022",
        },
        {
          user: {
            name: "Mark Doe",
            profileImage:
              "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
          },
          review: "Very Good Product",
          starts: 5,
          createdAt: "April 19, 2022",
        },
      ],
    },
    {
      id: "2",
      name: "Enterosgel Tube",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sit excepturi maiores consequatur in voluptates quo, unde minus, quidem maxime nam adipisci? Iusto quis, aperiam possimus sequi quae sapiente similique.",
      category: "Personal Care",
      Brand: "Mape",

      price: 20,
      image: "https://i.ibb.co/HYGG9sC/pro.jpg",
      rate: 3,
    },
  ],
  wishlist: [],
  compares: [],
};
const ProductReducer = createSlice({
  name: "Products",
  initialState,
  reducers: {
    AddToWishlist: (state, action) => {
      let checkPro = state.wishlist.find((pro) => pro.id === action.payload.id);
      if (!checkPro) state.wishlist = [...state.wishlist, action.payload];
      toast(`${action.payload.name} Add To Wishlist`, { type: "info" });
    },
    AddToCompares: (state, action) => {
      let checkPro = state.compares.find((pro) => pro.id === action.payload.id);
      if (state.compares.length >= 4) {
        toast("You can compare max 4 products", { type: "error" });
        return;
      }
      if (!checkPro) state.compares = [...state.compares, action.payload];
      toast(`${action.payload.name} Add To Compares`, { type: "info" });
    },
    RemoveFromCompare: (state, action) => {
      state.compares = state.compares.filter(
        (pro) => pro.id !== action.payload.id
      );
      toast(`${action.payload.name} Removed From Compares`, {
        type: "success",
      });
    },
    RemoveFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (pro) => pro.id !== action.payload.id
      );
      toast(`${action.payload.name} Removed From Wishlist`, {
        type: "success",
      });
    },
  },
});

export const {
  AddToWishlist,
  AddToCompares,
  RemoveFromCompare,
  RemoveFromWishlist,
} = ProductReducer.actions;
export default ProductReducer.reducer;
