export interface MenuItemOption {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  categoryName: string;
  price: number;
  description?: string;
  toppingsInfo?: string;
  servedWith?: string;
  image?: string;
  popular?: boolean;
  options?: MenuItemOption[];
  includedItems?: string[];
  selectionChoices?: {
    title: string;
    options: string[];
    requiredCount?: number;
  }[];
  customizable?: boolean;
}

export type MenuCategoryId =
  | "burritos"
  | "naked-burritos"
  | "tacos"
  | "quesadillas"
  | "el-crunchito"
  | "sides-fries"
  | "macho-loaded"
  | "kids"
  | "sharing-trays"
  | "churros"
  | "drinks"
  | "dips"
  // Backwards-compatibility aliases:
  | "chicken-bites"
  | "kids-sharing";

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  image: string;
  servedWith?: string;
  toppingsGuide?: {
    title: string;
    items: { fillings: string; toppings: string }[];
  };
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "burritos",
    name: "Burritos",
    badge: "Fan Favourite",
    tagline: "Big Flour Tortilla, Fully Loaded",
    description: "All burritos are rolled fresh with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-hd.jpg",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese.",
    toppingsGuide: {
      title: "Chef's Recommended Toppings",
      items: [
        { fillings: "BBQ Chicken", toppings: "Spring onion, sour cream and BBQ sauce" },
        { fillings: "Chicken Tinga / Beef", toppings: "Sour cream, cilantro lime sour cream and jalapeños" },
        { fillings: "Chilli / Fajita Veg / Halloumi", toppings: "Sour cream" },
      ],
    },
  },
  {
    id: "naked-burritos",
    name: "Naked Burritos",
    badge: "Signature Bowls",
    tagline: "All The Flavour, In A Bowl",
    description: "Packed with seasoned Mexican rice, pico de gallo, rich queso, melted cheese and your choice of protein or veggies.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese in a bowl.",
    toppingsGuide: {
      title: "Chef's Recommended Toppings",
      items: [
        { fillings: "BBQ Chicken", toppings: "Spring onion, sour cream and BBQ sauce" },
        { fillings: "Chicken Tinga / Beef", toppings: "Sour cream, cilantro lime sour cream and jalapeños" },
        { fillings: "Chilli / Fajita Veg / Halloumi", toppings: "Sour cream" },
      ],
    },
  },
  {
    id: "tacos",
    name: "Tacos (2 pcs)",
    badge: "2 Tacos Per Order",
    tagline: "Authentic Street-Style Flavour",
    description: "All taco orders are served as 2 tacos, filled with fresh Mexican seasonings and fresh garnishes.",
    image: "/images/food/real/main-attractions-tacos-hd.jpg",
    servedWith: "All taco options are served as 2 tacos.",
    toppingsGuide: {
      title: "Chef's Recommended Toppings",
      items: [
        { fillings: "BBQ Chicken", toppings: "Spring onion, sour cream and BBQ sauce" },
        { fillings: "Chicken Tinga / Beef", toppings: "Sour cream, cilantro lime sour cream and jalapeños" },
        { fillings: "Fajita Veg / Chilli / Halloumi", toppings: "Sour cream" },
      ],
    },
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    badge: "Toasted & Cheesy",
    tagline: "Golden Crisp Tortilla, Melty Cheese",
    description: "Toasted flour tortilla stuffed with melted cheeses, savoury fillings, and grilled until golden brown.",
    image: "/images/food/real/main-attractions-quesadillas-hd.jpg",
    toppingsGuide: {
      title: "Chef's Recommended Toppings",
      items: [
        { fillings: "BBQ Chicken", toppings: "Spring onion, sour cream and BBQ sauce" },
        { fillings: "Chicken Tinga / Beef", toppings: "Sour cream, cilantro lime sour cream and jalapeños" },
        { fillings: "Fajita Veg / Chilli / Halloumi", toppings: "Sour cream" },
      ],
    },
  },
  {
    id: "el-crunchito",
    name: "El Crunchito",
    badge: "Crispy & Crunchy",
    tagline: "Chicken Strips, Wings & Cheesy Bites",
    description: "Crispy chicken strips, flavour-packed chicken wings, spicy jalapeño poppers, creamy mac & cheese bites, and golden halloumi fries.",
    image: "/images/food/real/bites-chicken-strips-hd.jpg",
  },
  {
    id: "sides-fries",
    name: "Sides & Fries",
    badge: "Sides & Dips",
    tagline: "Fries, Tots, Tortillas & Esquites",
    description: "Crispy skin-on fries, golden tater tots, crunchy tortilla chips, fresh guacamole dip, and street-style esquites.",
    image: "/images/food/real/bites-fries-jpg.jpg",
  },
  {
    id: "macho-loaded",
    name: "Macho Loaded",
    badge: "Fully Loaded",
    tagline: "Smothered in Cheese & Toppings",
    description: "Loaded fries, loaded tots, and loaded nachos smothered in rich cheese. Add your choice of favourite toppings for £3.49 each.",
    image: "/images/food/real/bites-loaded-fries-png.png",
  },
  {
    id: "kids",
    name: "Kids",
    badge: "Kids Meal",
    tagline: "Mini Luchadores Meal Deals",
    description: "Kid-approved complete meal deals featuring chicken strips or mini quesadillas with side, fruit shoot and dip.",
    image: "/images/food/real/los-ninos-kids-3pcs-chicken-stripc-meal-png.png",
  },
  {
    id: "sharing-trays",
    name: "Sharing Trays",
    badge: "Feasts & Party Boxes",
    tagline: "TODO Trays & EL GRANDE 12 Tacos",
    description: "Massive sharing platters, TODO feast trays with wings, poppers, nachos, and party 12-taco boxes.",
    image: "/images/food/real/cartel-trays-meaty-cartel-tray-jpg.jpg",
  },
  {
    id: "churros",
    name: "Churros",
    badge: "Sweet Treats",
    tagline: "Cinnamon Dusted & Loaded",
    description: "Crispy fried Spanish churros dusted with sweet cinnamon sugar or loaded with Biscoff and Oreo crumbles.",
    image: "/images/food/real/churros-sweet-dips-cinnamon-churros-7-png.png",
  },
  {
    id: "drinks",
    name: "Drinks",
    badge: "Refreshing",
    tagline: "Jarritos, Chilled Cans & Cano Water",
    description: "Authentic Mexican Jarritos glass bottles, chilled 330ml soda cans, Cano Water and Fruit Shoots.",
    image: "/images/food/real/soft-drinks-jarritos-png.png",
  },
  {
    id: "dips",
    name: "Dips",
    badge: "House Salsas & Dips",
    tagline: "Guacamole, Creams & Salsas",
    description: "Fresh guacamole, cool sour cream, cilantro lime, salsa roja, salsa verde, honey jalapeño, queso and BBQ.",
    image: "/images/food/real/dips-guacamole-png.png",
  },
];

// Meal Upgrade
export const UPGRADE_MEAL = {
  price: 3.99,
  title: "Upgrade Your Meal",
  description: "Pick 1 Side (Tortilla chips, Skin-on fries, or Tater tots) + Pick 1 Drink (Jarritos or Any can drink).",
  sides: ["Tortilla Chips", "Skin-on Fries", "Tater Tots"],
  drinks: ["Jarritos", "Any Can Drink"],
};

// Section Combos and Notes
export const EL_CRUNCHITO_COMBO = {
  price: 3.49,
  description: "Add fries / tots & any can of drink for £3.49",
};
export const CHICKEN_PROMOTION = EL_CRUNCHITO_COMBO; // Backwards compatibility

export const MACHO_LOADED_NOTE = {
  price: 3.49,
  description: "Just add a choice of your toppings for £3.49 each (Beef, BBQ Chicken, Chicken Tinga, Chilli, Fajita, Halloumi)",
  toppings: ["Beef", "BBQ Chicken", "Chicken Tinga", "Chilli", "Fajita", "Halloumi"],
};

export const ALLERGY_NOTICE = "Food allergies or intolerances? Please speak to a member of our team before ordering.";

// Section 2: EXTRA PROTEIN, TOPPINGS & SAUCES
export const EXTRA_PROTEINS = [
  { id: "extra-beef", name: "Beef", price: 3.49 },
  { id: "extra-bbq-chicken", name: "BBQ Chicken", price: 2.99 },
  { id: "extra-chicken-tinga", name: "Chicken Tinga", price: 2.99 },
  { id: "extra-chilli", name: "Chilli (V)", price: 3.89 },
  { id: "extra-fajita-veg", name: "Fajita Vegetables", price: 3.49 },
  { id: "extra-halloumi", name: "Halloumi", price: 3.89 },
];

export const EXTRA_TOPPINGS = [
  { id: "guacamole", name: "Guacamole", price: 2.29 },
  { id: "jalapenos", name: "Jalapeños Red / Green", price: 1.29 },
  { id: "sweet-corn", name: "Sweet Corn", price: 1.29 },
  { id: "pickled-onion", name: "Pickled Onion", price: 1.00 },
  { id: "pico-de-gallo", name: "Pico de Gallo", price: 1.00 },
  { id: "queso", name: "Queso (Nacho Cheese)", price: 1.29 },
];

export const EXTRA_SAUCES_CHEESE = [
  { id: "sour-cream", name: "Sour Cream", price: 1.00 },
  { id: "cilantro-lime-sour-cream", name: "Cilantro Lime Sour Cream", price: 1.00 },
  { id: "mixed-cheese", name: "Mixed Cheese", price: 1.00 },
  { id: "salsa-roja", name: "Salsa Roja", price: 1.49 },
  { id: "salsa-verde", name: "Salsa Verde", price: 1.49 },
  { id: "honey-jalapenos", name: "Honey Jalapeños", price: 1.49 },
];

// 1. MAINS – CHOOSE YOUR FILLING (Responsive Table Model)
export interface MainsTableRow {
  filling: string;
  isVegetarian?: boolean;
  burritoPrice: number;
  nakedPrice: number;
  tacosPrice: number | null; // null for Mixed Chicken & Beef
  quesadillaPrice: number | null; // null for Fajita Vegetable
  burritoId: string;
  nakedId: string;
  tacosId?: string;
  quesadillaId?: string;
}

export const MAINS_TABLE_DATA: MainsTableRow[] = [
  {
    filling: "BBQ Chicken",
    burritoPrice: 8.99,
    nakedPrice: 8.99,
    tacosPrice: 8.99,
    quesadillaPrice: 8.99,
    burritoId: "burrito-bbq-chicken",
    nakedId: "naked-bbq-chicken",
    tacosId: "tacos-bbq-chicken",
    quesadillaId: "quesadilla-bbq-chicken",
  },
  {
    filling: "Chicken Tinga",
    burritoPrice: 8.99,
    nakedPrice: 8.99,
    tacosPrice: 8.99,
    quesadillaPrice: 8.99,
    burritoId: "burrito-chicken-tinga",
    nakedId: "naked-chicken-tinga",
    tacosId: "tacos-chicken-tinga",
    quesadillaId: "quesadilla-chicken-tinga",
  },
  {
    filling: "Pulled Beef (Birria)",
    burritoPrice: 9.99,
    nakedPrice: 9.99,
    tacosPrice: 9.99,
    quesadillaPrice: 9.99,
    burritoId: "burrito-pulled-beef",
    nakedId: "naked-pulled-beef",
    tacosId: "tacos-pulled-beef",
    quesadillaId: "quesadilla-pulled-beef",
  },
  {
    filling: "Mixed Chicken & Beef",
    burritoPrice: 11.99,
    nakedPrice: 11.99,
    tacosPrice: null, // Available for Burrito, Naked Burrito, and Quesadilla only — mark Tacos as N/A or —
    quesadillaPrice: 11.99,
    burritoId: "burrito-mixed-chicken-beef",
    nakedId: "naked-mixed-chicken-beef",
    quesadillaId: "quesadilla-mixed-chicken-beef",
  },
  {
    filling: "Chilli (V)",
    isVegetarian: true,
    burritoPrice: 8.99,
    nakedPrice: 8.99,
    tacosPrice: 8.99,
    quesadillaPrice: 8.99,
    burritoId: "burrito-chilli",
    nakedId: "naked-chilli",
    tacosId: "tacos-chilli",
    quesadillaId: "quesadilla-chilli",
  },
  {
    filling: "Fajita Vegetable",
    isVegetarian: true,
    burritoPrice: 8.99,
    nakedPrice: 8.99,
    tacosPrice: 8.99,
    quesadillaPrice: null, // Not available for Quesadilla on the new menu
    burritoId: "burrito-fajita-veg",
    nakedId: "naked-fajita-veg",
    tacosId: "tacos-fajita-veg",
  },
  {
    filling: "Halloumi",
    isVegetarian: true,
    burritoPrice: 8.99,
    nakedPrice: 8.99,
    tacosPrice: 8.99,
    quesadillaPrice: 8.99,
    burritoId: "burrito-halloumi",
    nakedId: "naked-halloumi",
    tacosId: "tacos-halloumi",
    quesadillaId: "quesadilla-halloumi",
  },
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. MAINS: A. BURRITOS
  // ==========================================
  {
    id: "burrito-bbq-chicken",
    name: "BBQ Chicken Burrito",
    category: "burritos",
    categoryName: "Burritos",
    price: 8.99,
    description: "Tender chicken tossed in sweet and smoky BBQ sauce with Mexican rice, pico de gallo, queso and cheese.",
    toppingsInfo: "Spring onion, sour cream and BBQ sauce.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "burrito-chicken-tinga",
    name: "Chicken Tinga Burrito",
    category: "burritos",
    categoryName: "Burritos",
    price: 8.99,
    description: "Shredded chicken slow-cooked in smoky chipotle and tomato tinga with Mexican rice, pico de gallo, queso and cheese.",
    toppingsInfo: "Sour cream, cilantro lime sour cream and jalapeños.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "burrito-pulled-beef",
    name: "Pulled Beef (Birria) Burrito",
    category: "burritos",
    categoryName: "Burritos",
    price: 9.99,
    description: "Slow-braised Mexican birria pulled beef packed with rich spices, Mexican rice, pico de gallo, queso and cheese.",
    toppingsInfo: "Sour cream, cilantro lime sour cream and jalapeños.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "burrito-mixed-chicken-beef",
    name: "Mixed Chicken & Beef Burrito",
    category: "burritos",
    categoryName: "Burritos",
    price: 11.99,
    description: "The ultimate meat lover's burrito combining tender shredded chicken and rich pulled birria beef with Mexican rice, pico de gallo, queso and cheese.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-hd.jpg",
    customizable: true,
  },
  {
    id: "burrito-chilli",
    name: "Chilli Burrito",
    category: "burritos",
    categoryName: "Burritos",
    price: 8.99,
    description: "Classic hearty spiced chilli, Mexican rice, seasoned pico de gallo, velvety queso and melted cheese.",
    toppingsInfo: "Sour cream.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-hd.jpg",
    customizable: true,
  },
  {
    id: "burrito-fajita-veg",
    name: "Fajita Vegetables Burrito",
    category: "burritos",
    categoryName: "Burritos",
    price: 8.99,
    description: "Sizzling sauteed bell peppers and onions, seasoned Mexican rice, fresh pico de gallo, velvety queso and cheese.",
    toppingsInfo: "Sour cream.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-hd.jpg",
    customizable: true,
  },
  {
    id: "burrito-halloumi",
    name: "Halloumi Burrito",
    category: "burritos",
    categoryName: "Burritos",
    price: 8.99,
    description: "Golden grilled halloumi slices wrapped with Mexican rice, zesty pico de gallo, velvety queso and melted cheese.",
    toppingsInfo: "Sour cream.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-hd.jpg",
    customizable: true,
  },

  // ==========================================
  // 1. MAINS: B. NAKED BURRITOS
  // ==========================================
  {
    id: "naked-bbq-chicken",
    name: "BBQ Chicken Naked Burrito",
    category: "naked-burritos",
    categoryName: "Naked Burritos",
    price: 8.99,
    description: "Smoky BBQ chicken served over seasoned Mexican rice bowl with fresh pico de gallo, velvety queso and cheese.",
    toppingsInfo: "Spring onion, sour cream and BBQ sauce.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese in a bowl.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    customizable: true,
  },
  {
    id: "naked-chicken-tinga",
    name: "Chicken Tinga Naked Burrito",
    category: "naked-burritos",
    categoryName: "Naked Burritos",
    price: 8.99,
    description: "Smoky shredded chipotle chicken tinga served over Mexican rice, pico de gallo, velvety queso and cheese.",
    toppingsInfo: "Sour cream, cilantro lime sour cream and jalapeños.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese in a bowl.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "naked-pulled-beef",
    name: "Pulled Beef (Birria) Naked Burrito",
    category: "naked-burritos",
    categoryName: "Naked Burritos",
    price: 9.99,
    description: "Slow-braised spiced birria pulled beef served in a rice bowl with pico de gallo, rich queso and cheese.",
    toppingsInfo: "Sour cream, cilantro lime sour cream and jalapeños.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese in a bowl.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "naked-mixed-chicken-beef",
    name: "Mixed Chicken & Beef Naked Burrito",
    category: "naked-burritos",
    categoryName: "Naked Burritos",
    price: 11.99,
    description: "Hearty double protein bowl of chicken and birria pulled beef with Mexican rice, pico de gallo, queso and cheese.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese in a bowl.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    customizable: true,
  },
  {
    id: "naked-chilli",
    name: "Chilli Naked Burrito",
    category: "naked-burritos",
    categoryName: "Naked Burritos",
    price: 8.99,
    description: "Savory Mexican spiced chilli served over fluffy Mexican rice with zesty pico de gallo, queso and cheese.",
    toppingsInfo: "Sour cream.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese in a bowl.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    customizable: true,
  },
  {
    id: "naked-fajita-veg",
    name: "Fajita Vegetables Naked Burrito",
    category: "naked-burritos",
    categoryName: "Naked Burritos",
    price: 8.99,
    description: "Sauteed fajita peppers and onions with seasoned Mexican rice, pico de gallo, queso and melted cheese in a bowl.",
    toppingsInfo: "Sour cream.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese in a bowl.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    customizable: true,
  },
  {
    id: "naked-halloumi",
    name: "Halloumi Naked Burrito",
    category: "naked-burritos",
    categoryName: "Naked Burritos",
    price: 8.99,
    description: "Grilled squeaky halloumi layered over seasoned Mexican rice with pico de gallo, queso and cheese.",
    toppingsInfo: "Sour cream.",
    servedWith: "Served with Mexican rice, pico de gallo, queso and cheese in a bowl.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    customizable: true,
  },

  // ==========================================
  // 1. MAINS: C. TACOS (2 PCS)
  // ==========================================
  {
    id: "tacos-bbq-chicken",
    name: "BBQ Chicken Tacos",
    category: "tacos",
    categoryName: "Tacos (2 pcs)",
    price: 8.99,
    description: "2 tacos filled with BBQ seasoned chicken, fresh spring onion, cool sour cream and drizzle of smoky BBQ sauce.",
    toppingsInfo: "Spring onion, sour cream and BBQ sauce.",
    servedWith: "All taco orders are served as 2 tacos.",
    image: "/images/food/real/main-attractions-tacos-hd.jpg",
    customizable: true,
  },
  {
    id: "tacos-chicken-tinga",
    name: "Chicken Tinga Tacos",
    category: "tacos",
    categoryName: "Tacos (2 pcs)",
    price: 8.99,
    description: "2 tacos filled with chipotle shredded chicken, cooling sour cream, fresh cilantro lime sour cream and sliced jalapeños.",
    toppingsInfo: "Sour cream, cilantro lime sour cream and jalapeños.",
    servedWith: "All taco orders are served as 2 tacos.",
    image: "/images/food/real/main-attractions-tacos-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "tacos-pulled-beef",
    name: "Pulled Beef (Birria) Tacos",
    category: "tacos",
    categoryName: "Tacos (2 pcs)",
    price: 9.99,
    description: "2 tacos packed with tender braised birria beef, sour cream, cilantro lime sour cream and spicy jalapeños.",
    toppingsInfo: "Sour cream, cilantro lime sour cream and jalapeños.",
    servedWith: "All taco orders are served as 2 tacos.",
    image: "/images/food/real/main-attractions-tacos-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "tacos-chilli",
    name: "Chilli Tacos",
    category: "tacos",
    categoryName: "Tacos (2 pcs)",
    price: 8.99,
    description: "2 tacos filled with rich spiced beef chilli topped with cool sour cream and garnishes.",
    toppingsInfo: "Sour cream.",
    servedWith: "All taco orders are served as 2 tacos.",
    image: "/images/food/real/main-attractions-tacos-hd.jpg",
    customizable: true,
  },
  {
    id: "tacos-fajita-veg",
    name: "Fajita Vegetables Tacos",
    category: "tacos",
    categoryName: "Tacos (2 pcs)",
    price: 8.99,
    description: "2 tacos stuffed with colourful sauteed peppers and onions, topped with cool sour cream.",
    toppingsInfo: "Sour cream.",
    servedWith: "All taco orders are served as 2 tacos.",
    image: "/images/food/real/main-attractions-tacos-hd.jpg",
    customizable: true,
  },
  {
    id: "tacos-halloumi",
    name: "Halloumi Tacos",
    category: "tacos",
    categoryName: "Tacos (2 pcs)",
    price: 8.99,
    description: "2 tacos with grilled halloumi cheese, crisp salad and smooth sour cream.",
    toppingsInfo: "Sour cream.",
    servedWith: "All taco orders are served as 2 tacos.",
    image: "/images/food/real/main-attractions-tacos-hd.jpg",
    customizable: true,
  },

  // ==========================================
  // 1. MAINS: D. QUESADILLAS
  // ==========================================
  {
    id: "quesadilla-bbq-chicken",
    name: "BBQ Chicken Quesadilla",
    category: "quesadillas",
    categoryName: "Quesadillas",
    price: 8.99,
    description: "Toasted flour tortilla stuffed with grilled BBQ chicken and melted cheese, finished with spring onion and BBQ drizzle.",
    toppingsInfo: "Spring onion, sour cream and BBQ sauce.",
    image: "/images/food/real/main-attractions-quesadillas-hd.jpg",
    customizable: true,
  },
  {
    id: "quesadilla-chicken-tinga",
    name: "Chicken Tinga Quesadilla",
    category: "quesadillas",
    categoryName: "Quesadillas",
    price: 8.99,
    description: "Melted cheese quesadilla loaded with chipotle chicken tinga, sour cream, cilantro lime sour cream and jalapeños.",
    toppingsInfo: "Sour cream, cilantro lime sour cream and jalapeños.",
    image: "/images/food/real/main-attractions-quesadillas-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "quesadilla-pulled-beef",
    name: "Pulled Beef (Birria) Quesadilla",
    category: "quesadillas",
    categoryName: "Quesadillas",
    price: 9.99,
    description: "Crispy grilled quesadilla with savoury birria pulled beef, melted cheese, cilantro lime sour cream and jalapeños.",
    toppingsInfo: "Sour cream, cilantro lime sour cream and jalapeños.",
    image: "/images/food/real/main-attractions-quesadillas-hd.jpg",
    popular: true,
    customizable: true,
  },
  {
    id: "quesadilla-mixed-chicken-beef",
    name: "Mixed Chicken & Beef Quesadilla",
    category: "quesadillas",
    categoryName: "Quesadillas",
    price: 11.99,
    description: "Double the flavour: loaded with both shredded chicken and birria pulled beef with melted cheese.",
    image: "/images/food/real/main-attractions-quesadillas-hd.jpg",
    customizable: true,
  },
  {
    id: "quesadilla-chilli",
    name: "Chilli Quesadilla",
    category: "quesadillas",
    categoryName: "Quesadillas",
    price: 8.99,
    description: "Hearty spiced beef chilli grilled inside a crisp tortilla with melted cheese and sour cream.",
    toppingsInfo: "Sour cream.",
    image: "/images/food/real/main-attractions-quesadillas-hd.jpg",
    customizable: true,
  },
  {
    id: "quesadilla-halloumi",
    name: "Halloumi Quesadilla",
    category: "quesadillas",
    categoryName: "Quesadillas",
    price: 8.99,
    description: "Golden grilled halloumi slices with melted cheddar and mozzarella blend in a toasted tortilla.",
    toppingsInfo: "Sour cream.",
    image: "/images/food/real/main-attractions-quesadillas-hd.jpg",
    customizable: true,
  },

  // ==========================================
  // 3. EL CRUNCHITO (Combo Add-on: Add fries / tots & any can of drink for £3.49)
  // ==========================================
  {
    id: "chicken-strips",
    name: "Chicken Strips",
    category: "el-crunchito",
    categoryName: "El Crunchito",
    price: 4.49,
    description: "Golden breaded tender chicken breast strips with a crunchy coating. Combo add-on: add fries / tots & any can of drink for £3.49.",
    image: "/images/food/real/bites-chicken-strips-hd.jpg",
    options: [
      { name: "3 Pieces", price: 4.49 },
      { name: "5 Pieces", price: 6.49 },
      { name: "7 Pieces", price: 8.49 },
    ],
  },
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    category: "el-crunchito",
    categoryName: "El Crunchito",
    price: 4.49,
    description: "Crispy fried chicken wings tossed in Mexican spices. Available in 3, 5, or 7 pieces.",
    image: "/images/food/real/bites-chicken-wings-hd.jpg",
    popular: true,
    options: [
      { name: "3 Pieces", price: 4.49 },
      { name: "5 Pieces", price: 6.49 },
      { name: "7 Pieces", price: 8.49 },
    ],
  },
  {
    id: "jalapeno-poppers",
    name: "Jalapeño Poppers",
    category: "el-crunchito",
    categoryName: "El Crunchito",
    price: 4.49,
    description: "Crispy breaded spicy jalapeños stuffed with molten cream cheese.",
    image: "/images/food/real/cheesy-bites-jalapeno-poppers-hd.jpg",
    popular: true,
    options: [
      { name: "3 Pieces", price: 4.49 },
      { name: "5 Pieces", price: 6.49 },
      { name: "7 Pieces", price: 8.49 },
    ],
  },
  {
    id: "mac-cheese-bites",
    name: "Mac & Cheese Bites",
    category: "el-crunchito",
    categoryName: "El Crunchito",
    price: 4.49,
    description: "Creamy macaroni and cheddar cheese encased in a crispy golden batter.",
    image: "/images/food/real/bites-mac-n-cheese-bites-hd.jpg",
    options: [
      { name: "3 Pieces", price: 4.49 },
      { name: "5 Pieces", price: 6.49 },
      { name: "7 Pieces", price: 8.49 },
    ],
  },
  {
    id: "halloumi-fries",
    name: "Halloumi Fries",
    category: "el-crunchito",
    categoryName: "El Crunchito",
    price: 4.49,
    description: "Chunky strips of salty halloumi fried to golden perfection with a squeaky soft center.",
    image: "/images/food/real/cheesy-bites-cheesy-bites-regular-jpg.jpg",
    popular: true,
    options: [
      { name: "3 Pieces", price: 4.49 },
      { name: "5 Pieces", price: 6.49 },
      { name: "7 Pieces", price: 8.49 },
    ],
  },

  // ==========================================
  // 4. SIDES & FRIES
  // ==========================================
  {
    id: "side-fries",
    name: "Skin-on Fries",
    category: "sides-fries",
    categoryName: "Sides & Fries",
    price: 2.99,
    description: "Crispy skin-on potato fries, tossed in sea salt and Mexican seasoning.",
    image: "/images/food/real/bites-fries-jpg.jpg",
    options: [
      { name: "Regular", price: 2.99 },
      { name: "Large", price: 3.99 },
    ],
  },
  {
    id: "side-tots",
    name: "Tater Tots",
    category: "sides-fries",
    categoryName: "Sides & Fries",
    price: 2.99,
    description: "Golden crunchy grated potato bites, seasoned and fried crisp.",
    image: "/images/food/real/bites-tots-png.png",
    options: [
      { name: "Regular", price: 2.99 },
      { name: "Large", price: 3.99 },
    ],
  },
  {
    id: "side-nachos",
    name: "Tortilla (Nachos)",
    category: "sides-fries",
    categoryName: "Sides & Fries",
    price: 3.49,
    description: "Crisp corn tortilla chips served warm and seasoned.",
    image: "/images/food/real/bites-bag-of-tortilla-chips-png.png",
    options: [
      { name: "Regular", price: 3.49 },
      { name: "Large", price: 4.49 },
    ],
  },
  {
    id: "guacamole-chips-dip",
    name: "Guacamole, Chips & Dip",
    category: "sides-fries",
    categoryName: "Sides & Fries",
    price: 5.75,
    description: "Crisp seasoned tortilla chips served with fresh homemade guacamole and your choice of dip.",
    image: "/images/food/real/dips-guacamole-png.png",
    popular: true,
  },
  {
    id: "mini-cheese-quesadilla",
    name: "Mini Cheese Quesadilla",
    category: "sides-fries",
    categoryName: "Sides & Fries",
    price: 4.49,
    description: "Snack-sized toasted flour tortilla filled with melty cheddar and mozzarella.",
    image: "/images/food/real/bites-mini-cheese-quesadilla-jpg.jpg",
  },
  {
    id: "mexican-style-esquites",
    name: "Mexican Style Esquites",
    category: "sides-fries",
    categoryName: "Sides & Fries",
    price: 4.99,
    description: "Sweetcorn in a cup, cheese, sour cream, and Mexican spices.",
    image: "/images/food/real/bites-mexican-rice-png.png",
    popular: true,
  },

  // ==========================================
  // 5. MACHO LOADED
  // ==========================================
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    category: "macho-loaded",
    categoryName: "Macho Loaded",
    price: 4.99,
    description: "Crispy fries smothered in melted cheese and house toppings. Add a choice of topping for £3.49 each (Beef, BBQ Chicken, Chicken Tinga, Chilli, Fajita, Halloumi).",
    image: "/images/food/real/bites-loaded-fries-png.png",
    popular: true,
    customizable: true,
  },
  {
    id: "loaded-tots",
    name: "Loaded Tots",
    category: "macho-loaded",
    categoryName: "Macho Loaded",
    price: 4.99,
    description: "Crispy tater tots topped with melted cheese and house toppings. Add a choice of topping for £3.49 each.",
    image: "/images/food/real/bites-loaded-tots-2-png.png",
    customizable: true,
  },
  {
    id: "loaded-nachos",
    name: "Loaded Nachos",
    category: "macho-loaded",
    categoryName: "Macho Loaded",
    price: 4.99,
    description: "Warm tortilla chips smothered in melted cheese sauce and sliced jalapeños. Add a choice of topping for £3.49 each.",
    image: "/images/food/real/bites-loaded-nachos-jpg.jpg",
    customizable: true,
  },
  {
    id: "cheesy-nachos",
    name: "Cheesy Nachos",
    category: "macho-loaded",
    categoryName: "Macho Loaded",
    price: 5.99,
    description: "Topped with nacho cheese, crispy onions, sour cream and jalapeños. Add a choice of topping for £3.49 each.",
    image: "/images/food/real/bites-cheesy-nachos-jpg.jpg",
    popular: true,
    customizable: true,
  },

  // ==========================================
  // 6. KIDS
  // ==========================================
  {
    id: "kids-mini-luchadores",
    name: "Mini Luchadores (Kids Meal)",
    category: "kids",
    categoryName: "Kids",
    price: 5.99,
    description: "3x Chicken Strips OR 1x Mini Cheesy Quesadilla + Mexican Rice OR Fries OR Tots + Fruit Shoot + Dip.",
    image: "/images/food/real/los-ninos-kids-3pcs-chicken-stripc-meal-png.png",
    includedItems: [
      "Main: 3x Chicken Strips OR 1x Mini Cheesy Quesadilla",
      "Side: Mexican Rice OR Fries OR Tots",
      "Drink: Fruit Shoot",
      "Dip: Included",
    ],
    selectionChoices: [
      {
        title: "Main Choice",
        options: ["3x Chicken Strips", "1x Mini Cheesy Quesadilla"],
        requiredCount: 1,
      },
      {
        title: "Side Choice",
        options: ["Mexican Rice", "Fries", "Tots"],
        requiredCount: 1,
      },
      {
        title: "Drink Choice",
        options: ["Fruit Shoot"],
        requiredCount: 1,
      },
      {
        title: "Dip Choice",
        options: ["Sour Cream", "Cilantro Lime", "Honey Jalapeño", "BBQ Chipotle", "Queso", "Salsa Roja", "Salsa Verde"],
        requiredCount: 1,
      },
    ],
  },

  // ==========================================
  // 7. SHARING TRAYS
  // ==========================================
  {
    id: "todo-trays",
    name: "Todo Tray",
    category: "sharing-trays",
    categoryName: "Sharing Trays",
    price: 33.49,
    description: "2x Tacos, 1x Cheesy Loaded Nachos, 1x Loaded Fries, 5x Jalapeño Poppers, 5x Chicken Wings, 2x Dip (Salsa Roja / Verde, Sour Cream), 2x Jarritos. (Choose any one topping: BBQ Chicken / Tinga / Fajita / Chilli / Halloumi).",
    image: "/images/food/real/cartel-trays-meaty-cartel-tray-jpg.jpg",
    popular: true,
    includedItems: [
      "2x Tacos",
      "1x Cheesy Loaded Nachos",
      "1x Loaded Fries",
      "5x Jalapeño Poppers",
      "5x Chicken Wings",
      "2x Dip (Salsa Roja / Verde, Sour Cream)",
      "2x Jarritos",
    ],
    selectionChoices: [
      {
        title: "Choose One Topping",
        options: ["BBQ Chicken", "Chicken Tinga", "Fajita Vegetables", "Chilli", "Halloumi"],
        requiredCount: 1,
      },
      {
        title: "First Dip Choice",
        options: ["Salsa Roja", "Salsa Verde", "Sour Cream"],
        requiredCount: 1,
      },
      {
        title: "Second Dip Choice",
        options: ["Salsa Roja", "Salsa Verde", "Sour Cream"],
        requiredCount: 1,
      },
      {
        title: "Choose 2 Jarritos Drinks",
        options: ["Mango", "Guava", "Lime", "Cola", "Mandarin", "Pineapple", "Grapefruit"],
        requiredCount: 2,
      },
    ],
  },
  {
    id: "birria-todo-trays",
    name: "Birria Todo Tray",
    category: "sharing-trays",
    categoryName: "Sharing Trays",
    price: 36.99,
    description: "Same tray with Pulled Beef (Birria). 2x Birria Tacos, 1x Cheesy Loaded Nachos, 1x Loaded Fries, 5x Jalapeño Poppers, 5x Chicken Wings, 2x Dip, 2x Jarritos.",
    image: "/images/food/real/cartel-trays-veggie-cartel-tray-jpg.jpg",
    popular: true,
    includedItems: [
      "2x Birria Pulled Beef Tacos",
      "1x Cheesy Loaded Nachos",
      "1x Loaded Fries",
      "5x Jalapeño Poppers",
      "5x Chicken Wings",
      "2x Dip (Salsa Roja / Verde, Sour Cream)",
      "2x Jarritos",
    ],
    selectionChoices: [
      {
        title: "First Dip Choice",
        options: ["Salsa Roja", "Salsa Verde", "Sour Cream"],
        requiredCount: 1,
      },
      {
        title: "Second Dip Choice",
        options: ["Salsa Roja", "Salsa Verde", "Sour Cream"],
        requiredCount: 1,
      },
      {
        title: "Choose 2 Jarritos Drinks",
        options: ["Mango", "Guava", "Lime", "Cola", "Mandarin", "Pineapple", "Grapefruit"],
        requiredCount: 2,
      },
    ],
  },
  {
    id: "el-grande-12-tacos",
    name: "El Grande – 12 Tacos",
    category: "sharing-trays",
    categoryName: "Sharing Trays",
    price: 33.49,
    description: "A showstopping platter of 12 street tacos! Choice of 4 flavour fillings (Chicken Tinga / BBQ Chicken / Chilli / Fajita Vegetables / Halloumi / Beef Birria).",
    image: "/images/food/real/muchos-tacos-muchos-tacos-jpg.jpg",
    popular: true,
    options: [
      { name: "4 Flavour Fillings Mix", price: 33.49 },
      { name: "All 12 Beef Birria", price: 39.99 },
    ],
    selectionChoices: [
      {
        title: "Choose 4 Flavour Fillings (For Standard Platter)",
        options: ["Chicken Tinga", "BBQ Chicken", "Chilli", "Fajita Vegetables", "Halloumi", "Beef Birria"],
        requiredCount: 4,
      },
    ],
  },
  {
    id: "all-12-tacos-beef-birria",
    name: "All 12 Tacos Beef Birria",
    category: "sharing-trays",
    categoryName: "Sharing Trays",
    price: 39.99,
    description: "12 tacos all loaded with slow-cooked Birria pulled beef, onions, fresh cilantro and spicy jalapeños.",
    image: "/images/food/real/muchos-tacos-muchos-tacos-jpg.jpg",
  },

  // ==========================================
  // 8. CHURROS
  // ==========================================
  {
    id: "cinnamon-churros",
    name: "Cinnamon Churros",
    category: "churros",
    categoryName: "Churros",
    price: 3.49,
    description: "Golden fried Spanish pastry dusted generously in sweet aromatic cinnamon sugar.",
    image: "/images/food/real/churros-sweet-dips-cinnamon-churros-7-png.png",
    popular: true,
    options: [
      { name: "3 Pieces", price: 3.49 },
      { name: "5 Pieces", price: 5.49 },
      { name: "7 Pieces", price: 6.49 },
    ],
  },
  {
    id: "loaded-churros-biscoff",
    name: "Loaded Biscoff Churros (7 pcs)",
    category: "churros",
    categoryName: "Churros",
    price: 6.49,
    description: "7 crispy churros smothered in warm Lotus Biscoff spread and crunchy caramelized biscuit crumbs.",
    image: "/images/food/real/churros-sweet-dips-biscoff-churros-7-png.png",
    popular: true,
  },
  {
    id: "loaded-churros-oreo",
    name: "Loaded Oreo Churros (7 pcs)",
    category: "churros",
    categoryName: "Churros",
    price: 6.49,
    description: "7 crispy churros loaded with rich chocolate sauce and crushed Oreo cookies.",
    image: "/images/food/real/churros-sweet-dips-loaded-oreo-churros-jpg.jpg",
  },

  // ==========================================
  // 9. DRINKS & DIPS: DRINKS
  // ==========================================
  {
    id: "jarritos",
    name: "Jarritos",
    category: "drinks",
    categoryName: "Drinks",
    price: 2.99,
    description: "Iconic authentic Mexican soft drink in traditional glass bottles.",
    image: "/images/food/real/soft-drinks-jarritos-png.png",
    popular: true,
    options: [
      { name: "Mango", price: 2.99 },
      { name: "Guava", price: 2.99 },
      { name: "Lime", price: 2.99 },
      { name: "Cola", price: 2.99 },
      { name: "Mandarin", price: 2.99 },
      { name: "Pineapple", price: 2.99 },
      { name: "Grapefruit", price: 2.99 },
    ],
  },
  {
    id: "cano-water",
    name: "Cano Water Still | Sparkling",
    category: "drinks",
    categoryName: "Drinks",
    price: 1.49,
    description: "Pure water in an infinitely recyclable resealable can. Choose Still or Sparkling.",
    image: "/images/food/real/soft-drinks-mexi-water-jpg.jpg",
    options: [
      { name: "Still", price: 1.49 },
      { name: "Sparkling", price: 1.49 },
    ],
  },
  {
    id: "can-drinks",
    name: "Cans (330ml)",
    category: "drinks",
    categoryName: "Drinks",
    price: 1.99,
    description: "Chilled 330ml soda cans (£1.99 each).",
    image: "/images/food/real/soft-drinks-cacto-jpg.jpg",
    options: [
      { name: "Pepsi", price: 1.99 },
      { name: "Diet Pepsi", price: 1.99 },
      { name: "Pepsi Cherry", price: 1.99 },
      { name: "Tango Orange", price: 1.99 },
      { name: "Tango Apple", price: 1.99 },
      { name: "Irn-Bru", price: 1.99 },
      { name: "Trio", price: 1.99 },
      { name: "7UP", price: 1.99 },
    ],
  },
  {
    id: "fruit-shoot",
    name: "Fruit Shoot",
    category: "drinks",
    categoryName: "Drinks",
    price: 1.49,
    description: "Refreshing juice drink for kids.",
    image: "/images/food/real/soft-drinks-capri-sun-zero-jpg.jpg",
  },

  // ==========================================
  // 9. DRINKS & DIPS: DIPS
  // ==========================================
  {
    id: "dip-guacamole",
    name: "Guacamole",
    category: "dips",
    categoryName: "Dips",
    price: 2.49,
    description: "Ripe avocados mashed fresh with lime, chopped coriander and seasoning.",
    image: "/images/food/real/dips-guacamole-png.png",
    popular: true,
  },
  {
    id: "dip-sour-cream",
    name: "Sour Cream",
    category: "dips",
    categoryName: "Dips",
    price: 1.49,
    description: "Cool and velvety classic sour cream.",
    image: "/images/food/real/dips-sour-cream-png.png",
  },
  {
    id: "dip-cilantro-lime",
    name: "Cilantro Lime",
    category: "dips",
    categoryName: "Dips",
    price: 1.49,
    description: "Zesty fresh lime juice and fresh cilantro whipped into cool sour cream.",
    image: "/images/food/real/dips-chipotle-sour-cream-png.png",
  },
  {
    id: "dip-honey-jalapeno",
    name: "Honey Jalapeño",
    category: "dips",
    categoryName: "Dips",
    price: 1.49,
    description: "Sweet golden honey infused with sliced pickled jalapeños.",
    image: "/images/food/real/dips-chipotle-bbq-png.png",
  },
  {
    id: "dip-bbq-chipotle",
    name: "BBQ Chipotle",
    category: "dips",
    categoryName: "Dips",
    price: 1.49,
    description: "Sweet, rich and smoky chipotle barbecue dipping sauce.",
    image: "/images/food/real/dips-chipotle-bbq-png.png",
  },
  {
    id: "dip-queso",
    name: "Queso",
    category: "dips",
    categoryName: "Dips",
    price: 1.49,
    description: "Warm, creamy, velvety melted cheese dip.",
    image: "/images/food/real/dips-cheese-sauce-png.png",
    popular: true,
  },
  {
    id: "dip-salsa-roja",
    name: "Salsa Roja",
    category: "dips",
    categoryName: "Dips",
    price: 1.49,
    description: "Fresh red tomato salsa with onions, chillies and Mexican spices.",
    image: "/images/food/real/dips-salsa-png.png",
  },
  {
    id: "dip-salsa-verde",
    name: "Salsa Verde",
    category: "dips",
    categoryName: "Dips",
    price: 1.49,
    description: "Tangy and bright tomatillo salsa with jalapeños and herbs.",
    image: "/images/food/real/dips-pico-png.png",
  },
];
