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
    note: "Served in an 8-inch round pan. Served with pita bread and your choice of House or Ranch dressing.",
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
  {
    id: "chicken",
    label: "Chicken Dinners",
    note: "All dinners served with fries and hushpuppies.",
  },
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
      image: "/images/menu/pizza-any-one-topping.jpg",
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
      image: "/images/menu/pizza-hawaiian-lg.jpg",
    },
    {
      name: "Vegetarian Combo (6-Toppings)",
      description:
        "Fresh mushrooms, diced tomatoes, fresh bell peppers, onions, fresh garlic & black olives",
      sm: "$12.95",
      lg: "$17.85",
      image: "/images/menu/pizza-vegetarian-combo-lg.jpg",
    },
    {
      name: "Meat Combo",
      description: "Pepperoni, beef, Italian sausage & Canadian bacon",
      sm: "$12.95",
      lg: "$18.75",
      image: "/images/menu/pizza-meat-combo.jpg",
    },
    {
      name: "Village 10-Topping Special",
      description:
        "Pepperoni, beef, Italian sausage, Canadian bacon, fresh mushrooms, onions, fresh bell peppers, black olives, diced tomatoes & fresh garlic",
      sm: "$13.85",
      lg: "$20.85",
      image: "/images/menu/pizza-10-topping-special.jpg",
    },
    {
      name: "Grilled Chicken",
      description:
        "Freshly grilled chicken with bell peppers, mushrooms & onions",
      sm: "$12.95",
      lg: "$18.85",
      image: "/images/menu/pizza-grilled-chicken-lg.jpg",
    },
    {
      name: "Philly Steak",
      description:
        "Our famous philly steak on a pizza with bell peppers, mushrooms & onions",
      sm: "$13.50",
      lg: "$19.95",
      image: "/images/menu/pizza-philly-steak-lg.jpg",
    },
  ],

  pasta: [
    {
      name: "Spaghetti with Meat Sauce",
      description:
        "Served in an 8-inch round pan. Homemade recipes. Baked with a trio of cheese. Served with Garlic Bread. Additional toppings: meatballs, Italian sausage or fresh mushrooms. Add 1.95 each.",
      price: "$10.85",
      image: "/images/menu/pasta-spaghetti.jpg",
    },
    {
      name: "Family Spaghetti with Meat Sauce",
      description:
        "Served in a 12 x 8 inch pan. Additional toppings: meatballs, Italian sausage or fresh mushrooms. Add 3.85 each.",
      price: "$22.85",
      image: "/images/menu/pasta-family-spaghetti.jpg",
    },
    {
      name: "Homemade Lasagna",
      description:
        "Served in an 8-inch round pan. Layers of ricotta cheese, ground beef & pasta baked in our delicious meat sauce & topped with cheese",
      price: "$14.85",
      image: "/images/menu/pasta-lasagna.jpg",
    },
    {
      name: "Family Size Homemade Lasagna",
      description:
        "Served in a 12 x 8 inch pan. Layers of ricotta cheese, ground beef & pasta baked in our delicious meat sauce & topped with cheese",
      price: "$28.90",
      image: "/images/menu/pasta-family-lasagna.jpg",
    },
  ],

  salads: [
    {
      name: "Garden Salad",
      description:
        "A fresh mix of romaine, iceberg lettuce, red cabbage, tomatoes, onions, cucumbers & black olives.",
      price: "$6.95",
      image: "/images/menu/salad-garden.jpg",
    },
    {
      name: "Greek Salad",
      description: "Topped with feta cheese.",
      price: "$8.95",
      image: "/images/menu/salad-greek.jpg",
    },
    {
      name: "Grilled Chicken",
      description: "Grilled on order. (Add Feta Cheese for only 2.65)",
      price: "$9.85",
      image: "/images/menu/salad-grilled-chicken.jpg",
    },
    {
      name: "Chef Salad",
      description: "Assorted cold meats & provolone cheese.",
      price: "$10.85",
      image: "/images/menu/salad-chef.jpg",
    },
  ],

  coldSubs: [
    {
      name: "Ham & Provolone Cheese",
      description: "mayo, lettuce, tomato, onion and pickle",
      price: "Small: $7.35 / Large: $8.95",
      image: "/images/menu/coldsub-ham-provolone.jpg",
    },
    {
      name: "Smoked Turkey & Provolone",
      description: "mayo, lettuce, tomato, onion and pickle",
      price: "Small: $7.35 / Large: $8.95",
      image: "/images/menu/coldsub-smoked-turkey.jpg",
    },
    {
      name: "The Club",
      description:
        "ham, smoked turkey, bacon, provolone cheese (mayo, lettuce, tomato, onion, pickle)",
      price: "Small: $8.45 / Large: $10.35",
      image: "/images/menu/coldsub-the-club.jpg",
    },
  ],

  hotSubs: [
    {
      name: "Toasted Meatball & Cheese",
      description: "Melted provolone cheese & our homemade sauce",
      price: "Small: $7.95 / Large: $9.40",
      image: "/images/menu/sub-meatball.jpg",
    },
    {
      name: "B.L.T.",
      description: "Crisp bacon, lettuce, tomato & mayo",
      price: "Small: $8.35 / Large: $10.35",
      image: "/images/menu/sub-blt.jpg",
    },
    {
      name: "Fried Chicken Fillet",
      description: "Mayo, lettuce & tomato",
      price: "Small: $8.35 / Large: $10.35",
      image: "/images/menu/sub-fried-chicken.jpg",
    },
    {
      name: "Grilled Chicken",
      description: "Sautéed onions & cheese (mayo, lettuce, tomato)",
      price: "Small: $8.35 / Large: $10.35",
      image: "/images/menu/sub-grilled-chicken.jpg",
    },
    {
      name: "Toasted Chicken Parmesan",
      description:
        "Fried chicken fillets topped with our homemade sauce and melted provolone cheese.",
      price: "Small: $9.40 / Large: $11.50",
      image: "/images/menu/sub-chicken-parmesan.jpg",
    },
    {
      name: "Philly House Steak & Cheese",
      description:
        "Top quality Philadelphia Steak, melted Swiss American cheese, sautéed onions & mushrooms (mayo, lettuce, tomatoes)",
      price: "Small: $10.85 / Large: $12.50",
      image: "/images/menu/sub-philly-steak.jpg",
    },
    {
      name: "Cheeseburger",
      description:
        "Swiss American cheese, mayo, lettuce, tomato, onion, pickle",
      price: "Small: $9.40 / Large: $11.35",
      image: "/images/menu/sub-cheeseburger.jpg",
    },
    {
      name: "Shrimp Po' Boy",
      description:
        "Fried large, butterflied shrimp (homemade tartar sauce, lettuce, tomatoes)",
      price: "Small: $10.85 / Large: $12.50",
      image: "/images/menu/sub-shrimp-po-boy.jpg",
    },
    {
      name: "Fish Po' Boy",
      description:
        "Fried Tilapia fillet (homemade tartar sauce, lettuce, tomatoes)",
      price: "Small: $8.35 / Large: $10.65",
      image: "/images/menu/sub-fish-po-boy.jpg",
    },
    {
      name: "Oyster Po' Boy",
      description: "",
      price: "MKT",
    },
    {
      name: "Popcorn Shrimp Po' Boy",
      description:
        "Fried Popcorn Shrimp, homemade tartar sauce, lettuce, tomato",
      price: "Small: $10.85 / Large: $12.50",
      image: "/images/menu/sub-popcorn-shrimp-po-boy.jpg",
    },
    {
      name: "Clam Po' Boy",
      description:
        "Fried New England Clams, homemade tartar sauce, lettuce, tomato",
      price: "Small: $12.95 / Large: $15.85",
    },
    {
      name: "Create Your Own Seafood Po' Boy",
      description:
        "Pick any two of the following items: fish, shrimp, popcorn shrimp, or clams. (homemade tartar sauce, lettuce, tomatoes)",
      price: "Small: $11.50 / Large: $14.85",
      image: "/images/menu/sub-create-your-own-seafood.jpg",
    },
  ],

  chicken: [
    {
      name: "Chicken Nugget Dinner",
      description: "Small (7 pc): $7.95 | Large (10 pc): $9.85",
      price: "",
      image: "/images/menu/chicken-nugget-dinner.jpg",
    },
    {
      name: "Chicken Fillet Dinner",
      description:
        "Served with fries, hushpuppies, pita bread & cream gravy. Small (3 pc): $9.45 | Large (4 pc): $11.45 | Family (12 pc): $29.85",
      price: "",
      image: "/images/menu/chicken-fillet-dinner.jpg",
    },
  ],

  seafood: [
    {
      name: "Fish Fillet",
      description:
        "Fried tilapia fish fillets. Ala carte (2 pc): $9.95 | Small dinner (1 pc): $9.45 | Large dinner (2 pc): $12.95 | Family dinner (6 pc): $31.85",
      price: "",
      image: "/images/menu/seafood-fish-dinner.jpg",
    },
    {
      name: "Butterfly Shrimp",
      description:
        "Large, butterflied shrimp. Ala carte (10 pc): $15.85 | Small dinner (5 pc): $11.45 | Large dinner (10 pc): $16.95 | Family dinner (20 pc): $33.85",
      price: "",
      image: "/images/menu/seafood-butterfly-shrimp.jpg",
    },
    {
      name: "Popcorn Shrimp",
      description:
        "Fried Gulf popcorn shrimp. Ala carte (1 lb.): $15.85 | Small dinner (1/2 lb.): $12.85 | Large dinner (1 lb.): $16.95 | Family dinner (2 lb.): $33.85",
      price: "",
      image: "/images/menu/seafood-popcorn-shrimp.jpg",
    },
    {
      name: "New England Clam Strips",
      description:
        "Fried New England Clam strips. Ala carte (1 lb.): $19.85 | Small dinner (1/2 lb.): $15.95 | Large dinner (1 lb.): $21.85",
      price: "",
      image: "/images/menu/seafood-clam-strips.jpg",
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
      image: "/images/menu/seafood-double-choice.jpg",
    },
    {
      name: "Triple Catch",
      description:
        "5 pc Shrimp, 1 pc fish, clams (homemade tartar sauce and cocktail sauce)",
      price: "$21.85",
      image: "/images/menu/seafood-triple-catch.jpg",
    },
    {
      name: "Seafood Platter for Two",
      description:
        "Clam strips, 6 pc shrimp, 2 pc fish, popcorn shrimp (French bread, homemade tartar sauce, and cocktail sauce)",
      price: "$32.85",
      image: "/images/menu/seafood-platter-for-two.jpg",
    },
  ],

  sides: [
    {
      name: "Fried Wings",
      description: "7 pcs",
      price: "$12.85",
      image: "/images/menu/sides-fried-wings.jpg",
    },
    {
      name: "Seasoned Curly Fries",
      description: "",
      price: "$5.85",
      image: "/images/menu/sides-curly-fries.jpg",
    },
    {
      name: "Hushpuppies",
      description: "12 pc",
      price: "$3.85",
      image: "/images/menu/sides-hushpuppies.jpg",
    },
    {
      name: "Onion Rings",
      description: "",
      price: "$7.85",
      image: "/images/menu/sides-onion-rings.jpg",
    },
    {
      name: "French Fries",
      description: "",
      price: "$4.65",
      image: "/images/menu/sides-french-fries.jpg",
    },
    {
      name: "Garlic Bread",
      description: "",
      price: "$2.65",
      image: "/images/menu/sides-garlic-bread.jpg",
    },
    {
      name: "Potato Chips",
      description: "",
      price: "$1.65",
      image: "/images/menu/sides-potato-chips.jpg",
    },
    {
      name: "Cheesy Garlic Bread",
      description: "",
      price: "$3.95",
      image: "/images/menu/sides-cheesy-garlic-bread.jpg",
    },
  ],

  combos: [
    {
      title: '#1: 6" Ham & Provolone Cheese Sub, Chips & Drink',
      price: "$8.35",
      description:
        "Served on savory French bread. Mayonnaise, lettuce, tomato, onion, and pickle.",
      image: "/images/menu/combo-1-ham-sub.jpg",
    },
    {
      title: '#2: 6" Toasted Meatball Sub, Chips & Drink',
      price: "$8.65",
      description: "Toasted with melted provolone cheese and sauce.",
      image: "/images/menu/combo-2-meatball-sub.jpg",
    },
    {
      title: '#3: 6" Fried Chicken Fillet Sub, Fries & Drink',
      price: "$8.85",
      description:
        "Comes with mayo,lettuce,tomatoes. Served with fries and drink. 24 oz cup.",
      image: "/images/menu/combo-3-fried-chicken-sub.jpg",
    },
    {
      title: '#4: 6" Cheeseburger Sub, Fries & Drink',
      price: "$8.85",
      description:
        "Served Swiss American cheese, mayonnaise, lettuce, tomato, onion, and pickle.",
      image: "/images/menu/combo-4-cheeseburger-sub.jpg",
    },
    {
      title: "#5: 6\" Shrimp Po' Boy, Fries & Drink",
      price: "$9.25",
      description:
        "Served with fried, large butterfly shrimp, tartar sauce, lettuce, tomato.",
      image: "/images/menu/combo-5-shrimp-po-boy.jpg",
    },
    {
      title: '#6: 10" Pepperoni Pizza & Drink',
      price: "$10.45",
      description: "Served with drink. 24oz cup.",
      image: "/images/menu/combo-6-pepperoni-pizza.jpg",
    },
    {
      title: "#7: 6\" Fish Po' Boy, Fries & Drink",
      price: "$8.85",
      description:
        "Served with fried tilapia, tartar sauce, lettuce and tomato.",
      image: "/images/menu/combo-7-fish-po-boy.jpg",
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
      image: "/images/menu/partyhelper-greek-salad.jpg",
    },
    {
      name: "Spaghetti & Meatballs Tray",
      description: "with Garlic Bread.",
      price: "$64.75",
      image: "/images/menu/partyhelper-spaghetti.jpg",
    },
    {
      name: "Homemade Lasagna Tray",
      description: "with Garlic Bread.",
      price: "$89.45",
      image: "/images/menu/partyhelper-lasagna.jpg",
    },
    {
      name: "Buffalo Wings",
      description: "50 Pcs. (count may vary due to size of wings).",
      price: "$79.65",
      image: "/images/menu/partyhelper-buffalo-wings.jpg",
    },
  ],

  drinks: [
    {
      name: "Fountain Drink Or Freshly Brewed Iced Tea",
      description: "",
      price: "$2.65",
      image: "/images/menu/drinks-fountain.jpg",
    },
    {
      name: "2-Liter Drink",
      description: "",
      price: "$3.65",
      image: "/images/menu/drinks-2liter.jpg",
    },
  ],

  desserts: [
    {
      name: "New York Style Cheesecake",
      description: "",
      price: "$5.45",
      image: "/images/menu/dessert-cheesecake.jpg",
    },
    {
      name: "Carrot Cake",
      description: "",
      price: "$5.45",
      image: "/images/menu/dessert-carrot-cake.jpg",
    },
    {
      name: "White & Dark Chocolate Mousse Cake",
      description: "*Prices subject to change without notice.",
      price: "$5.45",
      image: "/images/menu/dessert-chocolate-mousse-cake.jpg",
    },
  ],
};
