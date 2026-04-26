// Menu data — placeholders structured for easy manual replacement.
// Pizza items use { sm, lg } pricing. All others use a single "price".

export const menuCategories = [
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
  { id: "salads", label: "Salads" },
  { id: "subs", label: "Subs" },
  { id: "seafood", label: "Seafood & Chicken" },
  { id: "sides", label: "Sides" },
  { id: "combos", label: "Combos" },
  { id: "drinks", label: "Drinks" },
  { id: "desserts", label: "Desserts" },
];

export const menu = {
  pizza: [
    { name: "Pizza Item 1", description: "Short description goes here.", sm: "$0.00", lg: "$0.00" },
    { name: "Pizza Item 2", description: "Short description goes here.", sm: "$0.00", lg: "$0.00" },
    { name: "Pizza Item 3", description: "Short description goes here.", sm: "$0.00", lg: "$0.00" },
    { name: "Pizza Item 4", description: "Short description goes here.", sm: "$0.00", lg: "$0.00" },
    { name: "Pizza Item 5", description: "Short description goes here.", sm: "$0.00", lg: "$0.00" },
    { name: "Pizza Item 6", description: "Short description goes here.", sm: "$0.00", lg: "$0.00" },
  ],
  pasta: [
    { name: "Pasta Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Pasta Item 2", description: "Short description goes here.", price: "$0.00" },
    { name: "Pasta Item 3", description: "Short description goes here.", price: "$0.00" },
  ],
  salads: [
    { name: "Salad Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Salad Item 2", description: "Short description goes here.", price: "$0.00" },
    { name: "Salad Item 3", description: "Short description goes here.", price: "$0.00" },
  ],
  subs: [
    { name: "Sub Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Sub Item 2", description: "Short description goes here.", price: "$0.00" },
    { name: "Sub Item 3", description: "Short description goes here.", price: "$0.00" },
    { name: "Sub Item 4", description: "Short description goes here.", price: "$0.00" },
  ],
  seafood: [
    { name: "Seafood Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Seafood Item 2", description: "Short description goes here.", price: "$0.00" },
    { name: "Chicken Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Chicken Item 2", description: "Short description goes here.", price: "$0.00" },
  ],
  sides: [
    { name: "Side Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Side Item 2", description: "Short description goes here.", price: "$0.00" },
    { name: "Side Item 3", description: "Short description goes here.", price: "$0.00" },
  ],
  combos: [
    { name: "Combo Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Combo Item 2", description: "Short description goes here.", price: "$0.00" },
  ],
  drinks: [
    { name: "Drink Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Drink Item 2", description: "Short description goes here.", price: "$0.00" },
    { name: "Drink Item 3", description: "Short description goes here.", price: "$0.00" },
  ],
  desserts: [
    { name: "Dessert Item 1", description: "Short description goes here.", price: "$0.00" },
    { name: "Dessert Item 2", description: "Short description goes here.", price: "$0.00" },
  ],
};
