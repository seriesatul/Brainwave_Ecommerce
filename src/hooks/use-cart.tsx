
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
};

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      
      addToCart: (item) => {
        const { cartItems } = get();
        const existingItem = cartItems.find((i) => i.id === item.id);
        
        if (existingItem) {
          set({
            cartItems: cartItems.map((i) => 
              i.id === item.id 
                ? { ...i, quantity: i.quantity + 1 } 
                : i
            ),
          });
        } else {
          set({
            cartItems: [...cartItems, { ...item, quantity: 1 }],
          });
        }
      },
      
      removeFromCart: (id) => {
        const { cartItems } = get();
        set({
          cartItems: cartItems.filter((i) => i.id !== id),
        });
      },
      
      updateQuantity: (id, quantity) => {
        const { cartItems } = get();
        set({
          cartItems: cartItems.map((i) => 
            i.id === id 
              ? { ...i, quantity } 
              : i
          ),
        });
      },
      
      clearCart: () => {
        set({ cartItems: [] });
      },
      
      getCartTotal: () => {
        const { cartItems } = get();
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'shopwave-cart',
    }
  )
);
