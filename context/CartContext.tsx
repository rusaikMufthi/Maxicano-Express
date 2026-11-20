"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface BundleSelection {
  title: string;
  choice: string;
}

export interface CartCustomization {
  selectedOption?: string;
  fillings?: string[];
  toppings?: string[];
  extraProteins?: string[];
  sauces?: string[];
  bundleSelections?: BundleSelection[];
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
  addItems: (items: Omit<CartItem, "id">[]) => void;
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

  const addItems = (newItems: Omit<CartItem, "id">[]) => {
    if (newItems.length === 0) return;
    setItems((prev) => {
      const updated = [...prev];
      for (const newItem of newItems) {
        const existingIndex = updated.findIndex(
          (it) =>
            it.menuItemId === newItem.menuItemId &&
            it.name === newItem.name &&
            it.price === newItem.price &&
            JSON.stringify(it.customization || {}) === JSON.stringify(newItem.customization || {})
        );

        if (existingIndex > -1) {
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + newItem.quantity,
          };
        } else {
          updated.push({
            ...newItem,
            id: `${newItem.menuItemId}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          });
        }
      }
      return updated;
    });
    setIsOpen(true);
  };

  const addItem = (newItem: Omit<CartItem, "id">) => {
    addItems([newItem]);
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
        addItems,
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
