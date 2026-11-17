"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartCustomization {
  selectedOption?: string;
  fillings?: string[];
  toppings?: string[];
  extraProteins?: string[];
  upgradeMeal?: {
    side: string;
    drink: string;
    price: number;
  };
  notes?: string;
}

export interface CartItem {
  id: string; // unique cart entry id
  menuItemId: string;
  name: string;
  price: number; // unit price including selected options/upgrades
  quantity: number;
  image?: string;
  categoryName?: string;
  customization?: CartCustomization;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "mexicano_express_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Failed to load cart from localStorage", e);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to save cart to localStorage", e);
    }
  }, [items, mounted]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (newItem: Omit<CartItem, "id">) => {
    setItems((prev) => {
      // Check if identical item already exists
      const existingIndex = prev.findIndex(
        (it) =>
          it.menuItemId === newItem.menuItemId &&
          it.price === newItem.price &&
          JSON.stringify(it.customization || {}) === JSON.stringify(newItem.customization || {})
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }

      const cartEntry: CartItem = {
        ...newItem,
        id: `${newItem.menuItemId}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      };
      return [...prev, cartEntry];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((it) => {
          if (it.id === id) {
            const nextQty = it.quantity + delta;
            return nextQty > 0 ? { ...it, quantity: nextQty } : null;
          }
          return it;
        })
        .filter((it): it is CartItem => it !== null)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
