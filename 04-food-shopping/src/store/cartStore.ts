import { Product } from "@/interface/product";
import { create } from "zustand";

type State = {
  productsCart: Product[];
};

type Actions = {
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  removeProductOneFromCart: (productId: string) => void;
};

export const useCartStore = create<State & Actions>((set) => ({
  productsCart: [],

  addProductToCart: (product: Product) => {
    set((state) => {
      const productInCart = state.productsCart.find(
        (item) => item.id === product.id
      );

      if (productInCart) {
        return {
          productsCart: state.productsCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          productsCart: [...state.productsCart, { ...product, quantity: 1 }],
        };
      }
    });
  },

  removeProductFromCart: (productId: string) => {
    set((state) => ({
      productsCart: state.productsCart.filter((item) => item.id !== productId),
    }));
  },

  //eliminar de a un producto del carrito
  removeProductOneFromCart: (productId: string) => {
    set((state) => {
      const productToDelete = state.productsCart.find(
        (item) => item.id === productId
      );

      if (productToDelete?.quantity! > 1) {
        return {
          productsCart: state.productsCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          productsCart: state.productsCart.filter(
            (item) => item.id !== productId
          ),
        };
      }
    });
  },
}));
