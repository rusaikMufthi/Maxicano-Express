export interface BaseMealType {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  image: string;
  includedBase: string;
}

export const BASE_MEAL_TYPES: BaseMealType[] = [
  {
    id: "burrito",
    name: "Classic Burrito",
    basePrice: 8.99,
    description: "Rolled in a large warm flour tortilla with Mexican rice, pico de gallo, queso and cheese.",
    image: "/images/food/real/main-attractions-burrito-png.png",
    includedBase: "Mexican rice, pico de gallo, queso and melted cheese",
  },
  {
    id: "naked-burrito",
    name: "Naked Burrito Bowl",
    basePrice: 8.99,
    description: "Fresh Mexican bowl packed with seasoned rice, pico de gallo, queso and melted cheese.",
    image: "/images/food/real/main-attractions-naked-burrito-hd.jpg",
    includedBase: "Mexican rice, pico de gallo, queso and melted cheese",
  },
  {
    id: "tacos",
    name: "2 Street Tacos",
    basePrice: 8.99,
    description: "2 soft tortillas filled with your protein, fresh garnishes and signature crema.",
    image: "/images/food/real/main-attractions-tacos-hd.jpg",
    includedBase: "2 soft corn/flour tortillas with fresh Mexican garnishes",
  },
  {
    id: "quesadilla",
    name: "Crispy Quesadilla",
    basePrice: 8.99,
    description: "Toasted and folded flour tortilla with rich melted cheese and savoury fillings.",
    image: "/images/food/real/main-attractions-quesadilla-2-png.png",
    includedBase: "Toasted flour tortilla with cheddar and mozzarella blend",
  },
];

export interface FillingChoice {
  id: string;
  name: string;
  extraCost: number;
  description: string;
  chefToppings: string;
}

export const FILLING_CHOICES: FillingChoice[] = [
  {
    id: "bbq-chicken",
    name: "BBQ Chicken",
    extraCost: 0,
    description: "Tender chicken tossed in sweet and smoky BBQ glaze",
    chefToppings: "Spring onion, sour cream and BBQ sauce",
  },
  {
    id: "chicken-tinga",
    name: "Chicken Tinga",
    extraCost: 0,
    description: "Smoky chipotle braised shredded chicken",
    chefToppings: "Sour cream, cilantro lime sour cream and jalapeños",
  },
  {
    id: "pulled-beef",
    name: "Pulled Beef (Birria)",
    extraCost: 1.00,
    description: "Slow-cooked spiced Mexican birria pulled beef (+£1.00)",
    chefToppings: "Sour cream, cilantro lime sour cream and jalapeños",
  },
  {
    id: "mixed-chicken-beef",
    name: "Mixed Chicken & Beef",
    extraCost: 3.00,
    description: "Double protein combination of chicken and birria pulled beef (+£3.00)",
    chefToppings: "Sour cream, cilantro lime sour cream and jalapeños",
  },
  {
    id: "chilli",
    name: "Mexican Chilli",
    extraCost: 0,
    description: "Hearty seasoned beef chilli with rich spices",
    chefToppings: "Sour cream",
  },
  {
    id: "fajita-veg",
    name: "Fajita Vegetables",
    extraCost: 0,
    description: "Sizzling sauteed bell peppers and sweet red onions",
    chefToppings: "Sour cream",
  },
  {
    id: "halloumi",
    name: "Grilled Halloumi",
    extraCost: 0,
    description: "Golden grilled halloumi cheese slices",
    chefToppings: "Sour cream",
  },
];
