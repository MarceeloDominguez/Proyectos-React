import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductInCart {
  quantity: number;
  id: number;
}

type State = {
  productsInCart: ProductInCart[];
};

type Actions = {
  addProductsToCart: (productId: number) => void;
  removeProduct: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
};

export const useCartStore = create(
  persist<State & Actions>(
    (set) => ({
      productsInCart: [],

      addProductsToCart: (productId: number) => {
        set((state) => {
          const productInCart = state.productsInCart.find(
            (item) => item.id === productId
          );

          if (productInCart) {
            return {
              productsInCart: state.productsInCart.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              productsInCart: [
                ...state.productsInCart,
                { id: productId, quantity: 1 },
              ],
            };
          }
        });
      },

      removeProduct: (productId: number) => {
        set((state) => {
          const productToDelete = state.productsInCart.find(
            (item) => item.id === productId
          );

          if (productToDelete?.quantity! > 1) {
            return {
              productsInCart: state.productsInCart.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          } else {
            return {
              productsInCart: state.productsInCart.filter(
                (item) => item.id !== productId
              ),
            };
          }
        });
      },

      removeProductFromCart: (productId: number) => {
        set((state) => ({
          productsInCart: state.productsInCart.filter(
            (item) => item.id !== productId
          ),
        }));
      },
    }),

    {
      name: "productInCart",
    }
  )
);
