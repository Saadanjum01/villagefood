export const menuCategories = [
  { id: "pizza", label: "Pizza" },
  {
    id: "pasta",
    label: "Pasta",
    note: "Homemade recipes. Baked with a trio of cheese. Served with Garlic Bread.",
  },
  {
    id: "salads",
    label: "Salads",
    note: "Served with pita bread and your choice of House or Ranch dressing.",
  },
  {
    id: "coldSubs",
    label: "Cold Subs",
    note: "Small: 8 inch. Large: 12 inch. All subs served on our savory French bread rolls.",
  },
  {
    id: "hotSubs",
    label: "Hot Subs",
    note: "Small: 8 inch. Large: 12 inch. All subs are served on our savory French bread.",
  },
  { id: "chicken", label: "Chicken Dinners" },
  {
    id: "seafood",
    label: "Seafood Dinners",
    note: "All dinners served with fries and hushpuppies.",
  },
  { id: "sides", label: "Sides" },
  {
    id: "combos",
    label: "Combos",
    note: "Dine-in & Pickup Only",
  },
  {
    id: "partyHelper",
    label: "Party Helper",
    note: "Serves Approximately 10 People",
  },
  { id: "drinks", label: "Drinks" },
  { id: "desserts", label: "Desserts" },
];

export const menu = {
  pizza: [
    {
      name: "Any One Topping",
      description: "",
      sm: "$9.20",
      lg: "$14.35",
    },
    {
      name: "Additional Toppings",
      description:
        "Choose from: Pepperoni, beef, Italian sausage, Canadian bacon, mushrooms, onions, bell peppers, tomatoes, fresh garlic, pineapple, jalapeño, anchovies",
      sm: "$1.65",
      lg: "$2.45",
    },
    {
      name: "Specialty Toppings",
      description: "Extra cheese or real bacon",
      sm: "$3.30",
      lg: "$4.90",
    },
    {
      name: "Hawaiian",
      description: "Pineapple & Canadian bacon",
      sm: "$10.80",
      lg: "$16.80",
    },
    {
      name: "Vegetarian Combo (6-Toppings)",
      description:
        "Fresh mushrooms, diced tomatoes, fresh bell peppers, onions, fresh garlic & black olives",
      sm: "$12.95",
      lg: "$17.85",
    },
    {
      name: "Meat Combo",
      description: "Pepperoni, beef, Italian sausage & Canadian bacon",
      sm: "$12.95",
      lg: "$18.75",
    },
    {
      name: "Village 10-Topping Special",
      description:
        "Pepperoni, beef, Italian sausage, Canadian bacon, fresh mushrooms, onions, fresh bell peppers, black olives, diced tomatoes & fresh garlic",
      sm: "$13.85",
      lg: "$20.85",
    },
    {
      name: "Grilled Chicken",
      description: "Freshly grilled chicken with bell peppers, mushrooms & onions",
      sm: "$12.95",
      lg: "$18.85",
    },
    {
      name: "Philly Steak",
      description:
        "Our famous philly steak on a pizza with bell peppers, mushrooms & onions",
      sm: "$13.50",
      lg: "$19.95",
    },
  ],

  pasta: [
    {
      name: "Spaghetti with Meat Sauce",
      description:
        "Homemade recipes. Baked with a trio of cheese. Served with Garlic Bread. Additional toppings: meatballs, Italian sausage or fresh mushrooms. Add 1.95 each.",
      price: "$10.85",
    },
    {
      name: "Family Spaghetti with Meat Sauce",
      description:
        "Served in a 12 x 10 inch pan. Additional toppings: meatballs, Italian sausage or fresh mushrooms. Add 3.85 each.",
      price: "$22.85",
    },
    {
      name: "Homemade Lasagna",
      description:
        "Layers of ricotta cheese, ground beef & pasta baked in our delicious meat sauce & topped with cheese",
      price: "$14.85",
    },
    {
      name: "Family Size Homemade Lasagna",
      description:
        "Served in a 12 x 10 inch pan. Layers of ricotta cheese, ground beef & pasta baked in our delicious meat sauce & topped with cheese",
      price: "$28.90",
    },
  ],

  salads: [
    {
      name: "Garden Salad",
      description:
        "A fresh mix of romaine, iceberg lettuce, red cabbage, tomatoes, onions, cucumbers & black olives.",
      price: "$6.95",
    },
    {
      name: "Greek Salad",
      description: "Topped with feta cheese.",
      price: "$8.95",
    },
    {
      name: "Grilled Chicken",
      description: "Grilled on order. (Add Feta Cheese for only 2.65)",
      price: "$9.85",
    },
    {
      name: "Chef Salad",
      description: "Assorted cold meats & provolone cheese.",
      price: "$10.85",
    },
  ],

  coldSubs: [
    {
      name: "Ham & Provolone Cheese",
      description: "mayo, lettuce, tomato, onion and pickle",
      price: "Small: $7.35 / Large: $8.95",
    },
    {
      name: "Smoked Turkey & Provolone",
      description: "mayo, lettuce, tomato, onion and pickle",
      price: "Small: $7.35 / Large: $8.95",
    },
    {
      name: "The Club",
      description:
        "ham, smoked turkey, bacon, provolone cheese (mayo, lettuce, tomato, onion, pickle)",
      price: "Small: $8.45 / Large: $10.35",
    },
  ],

  hotSubs: [
    {
      name: "Toasted Meatball & Cheese",
      description: "Melted provolone cheese & our homemade sauce",
      price: "Small: $7.95 / Large: $9.40",
    },
    {
      name: "B.L.T.",
      description: "Crisp bacon, lettuce, tomato & mayo",
      price: "Small: $8.35 / Large: $10.35",
    },
    {
      name: "Fried Chicken Fillet",
      description: "Mayo, lettuce & tomato",
      price: "Small: $8.35 / Large: $10.35",
    },
    {
      name: "Grilled Chicken",
      description: "Sautéed onions & cheese (mayo, lettuce, tomato)",
      price: "Small: $8.35 / Large: $10.35",
    },
    {
      name: "Toasted Chicken Parmesan",
      description:
        "Fried chicken fillets topped with our homemade sauce and melted provolone cheese.",
      price: "Small: $9.40 / Large: $11.50",
    },
    {
      name: "Philly House Steak & Cheese",
      description:
        "Top quality Philadelphia Steak, melted Swiss American cheese, sautéed onions & mushrooms (mayo, lettuce, tomatoes)",
      price: "Small: $10.85 / Large: $12.50",
    },
    {
      name: "Cheeseburger",
      description: "Swiss American cheese, mayo, lettuce, tomato, onion, pickle",
      price: "Small: $9.40 / Large: $11.35",
    },
    {
      name: "Shrimp Po' Boy",
      description:
        "Fried large, butterflied shrimp (homemade tartar sauce, lettuce, tomatoes)",
      price: "Small: $10.85 / Large: $12.50",
    },
    {
      name: "Fish Po' Boy",
      description: "Fried Tilapia fillet (homemade tartar sauce, lettuce, tomatoes)",
      price: "Small: $8.35 / Large: $10.65",
    },
    {
      name: "Oyster Po' Boy",
      description: "",
      price: "MKT",
    },
    {
      name: "Popcorn Shrimp Po' Boy",
      description: "Fried Popcorn Shrimp, homemade tartar sauce, lettuce, tomato",
      price: "Small: $10.85 / Large: $12.50",
    },
    {
      name: "Clam Po' Boy",
      description: "Fried New England Clams, homemade tartar sauce, lettuce, tomato",
      price: "Small: $12.95 / Large: $15.85",
    },
    {
      name: "Create Your Own Seafood Po' Boy",
      description:
        "Pick any two of the following items: fish, shrimp, popcorn shrimp, or clams. (homemade tartar sauce, lettuce, tomatoes)",
      price: "Small: $11.50 / Large: $14.85",
    },
  ],

  chicken: [
    {
      name: "Chicken Nugget Dinner",
      description: "Small (7 pc): $7.95 | Large (10 pc): $9.85",
      price: "",
    },
    {
      name: "Chicken Fillet Dinner",
      description:
        "Served with fries, hushpuppies, pita bread & cream gravy. Small (3 pc): $9.45 | Large (4 pc): $11.45 | Family (12 pc): $29.85",
      price: "",
    },
  ],

  seafood: [
    {
      name: "Fish Fillet",
      description:
        "Fried tilapia fish fillets. Ala carte (2 pc): $9.95 | Small dinner (1 pc): $9.45 | Large dinner (2 pc): $12.95 | Family dinner (6 pc): $31.85",
      price: "",
    },
    {
      name: "Butterfly Shrimp",
      description:
        "Large, butterflied shrimp. Ala carte (10 pc): $15.85 | Small dinner (5 pc): $11.45 | Large dinner (10 pc): $16.95 | Family dinner (20 pc): $33.85",
      price: "",
    },
    {
      name: "Popcorn Shrimp",
      description:
        "Fried Gulf popcorn shrimp. Ala carte (1 lb.): $15.85 | Small dinner (1/2 lb.): $12.85 | Large dinner (1 lb.): $16.95 | Family dinner (2 lb.): $33.85",
      price: "",
    },
    {
      name: "New England Clam Strips",
      description:
        "Fried New England Clam strips. Ala carte (1 lb.): $19.85 | Small dinner (1/2 lb.): $15.95 | Large dinner (1 lb.): $21.85",
      price: "",
    },
    {
      name: "Fried Oysters",
      description: "Domestic",
      price: "MKT",
    },
    {
      name: "Shrimp & Clams",
      description: "5 pc shrimp & 1/2 lb clams",
      price: "$21.85",
    },
    {
      name: "Double Choice",
      description:
        "Pick any 2 of the following: 5 pc Shrimp, 1 pc fish, 2 pc chicken fillet or popcorn shrimp (homemade tartar sauce and cocktail sauce)",
      price: "$15.95",
    },
    {
      name: "Triple Catch",
      description:
        "5 pc Shrimp, 1 pc fish, clams (homemade tartar sauce and cocktail sauce)",
      price: "$21.85",
    },
    {
      name: "Seafood Platter for Two",
      description:
        "Clam strips, 6 pc shrimp, 2 pc fish, popcorn shrimp (French bread, homemade tartar sauce, and cocktail sauce)",
      price: "$32.85",
    },
  ],

  sides: [
    {
      name: "Fried Wings",
      description: "7 pcs",
      price: "$12.85",
    },
    {
      name: "Seasoned Curly Fries",
      description: "",
      price: "$5.85",
    },
    {
      name: "Hushpuppies",
      description: "12 pc",
      price: "$3.85",
    },
    {
      name: "Onion Rings",
      description: "",
      price: "$7.85",
    },
    {
      name: "French Fries",
      description: "",
      price: "$4.65",
    },
    {
      name: "Garlic Bread",
      description: "",
      price: "$2.65",
    },
    {
      name: "Potato Chips",
      description: "",
      price: "$1.65",
    },
    {
      name: "Cheesy Garlic Bread",
      description: "",
      price: "$3.95",
    },
  ],

  combos: [
    {
      title: "#1: 6\" Ham & Provolone Cheese Sub, Chips & Drink",
      price: "$8.35",
      description: "",
    },
    {
      title: "#2: 6\" Toasted Meatball Sub, Chips & Drink",
      price: "$8.65",
      description: "",
    },
    {
      title: "#3: 6\" Fried Chicken Fillet Sub, Fries & Drink",
      price: "$8.85",
      description: "",
    },
    {
      title: "#4: 6\" Cheeseburger Sub, Fries & Drink",
      price: "$8.85",
      description: "",
    },
    {
      title: "#5: 6\" Shrimp Po' Boy, Fries & Drink",
      price: "$9.25",
      description: "",
    },
    {
      title: "#6: 10\" Pepperoni Pizza & Drink",
      price: "$10.45",
      description: "",
    },
    {
      title: "#7: 6\" Fish Po' Boy, Fries & Drink",
      price: "$8.85",
      description: "",
    },
  ],

  partyHelper: [
    {
      name: "Party Subs",
      description: "Twenty, 3 inch Subs: an assortment of cold subs.",
      price: "$44.75",
    },
    {
      name: "Greek Salad Tray",
      description: "with Pita Bread.",
      price: "$42.75",
    },
    {
      name: "Spaghetti & Meatballs Tray",
      description: "with Garlic Bread.",
      price: "$64.75",
    },
    {
      name: "Homemade Lasagna Tray",
      description: "with Garlic Bread.",
      price: "$89.45",
    },
    {
      name: "Buffalo Wings",
      description: "50 Pcs. (count may vary due to size of wings).",
      price: "$79.65",
    },
  ],

  drinks: [
    {
      name: "Fountain Drink Or Freshly Brewed Iced Tea",
      description: "",
      price: "$2.65",
    },
    {
      name: "2-Liter Drink",
      description: "",
      price: "$3.65",
    },
  ],

  desserts: [
    {
      name: "New York Style Cheesecake",
      description: "",
      price: "$5.45",
    },
    {
      name: "Carrot Cake",
      description: "",
      price: "$5.45",
    },
    {
      name: "White & Dark Chocolate Mousse Cake",
      description: "*Prices subject to change without notice.",
      price: "$5.45",
    },
  ],
};
