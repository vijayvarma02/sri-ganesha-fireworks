export const business = {
  name: "Sri Ganesha Fireworks",
  whatsapp: "",
  phone: "",
  email: "",
  address: "",
  hours: "",
  serviceAreas: [] as string[],
  orderingEnabled: false,
};
export const categories = [
  {
    id: "sparklers",
    name: "Sparklers",
    note: "Little sparks. Lasting memories.",
    image: 0,
  },
  {
    id: "fountains",
    name: "Flower Pots",
    note: "A fountain of festive wonder.",
    image: 2,
  },
  {
    id: "chakras",
    name: "Ground Chakras",
    note: "Watch the celebration unfold.",
    image: 3,
  },
  {
    id: "rockets",
    name: "Sky Rockets",
    note: "Send your celebrations skyward.",
    image: 4,
  },
  {
    id: "aerial",
    name: "Aerial Effects",
    note: "Paint a little magic in the sky.",
    image: 5,
  },
  {
    id: "crackers",
    name: "Sound Crackers",
    note: "Traditional celebration assortments.",
    image: 6,
  },
  {
    id: "garlands",
    name: "Garlands & Laris",
    note: "Catalog awaiting owner verification.",
    image: 6,
  },
  {
    id: "novelties",
    name: "Novelties",
    note: "Discover something a little different.",
    image: 9,
  },
  {
    id: "family",
    name: "Family Packs",
    note: "Bring your celebration together.",
    image: 7,
  },
  {
    id: "combos",
    name: "Festival Combos",
    note: "A thoughtfully assorted celebration.",
    image: 8,
  },
].map((c) => ({ ...c, confirmed: false }));
export type Product = {
  id: string;
  name: string;
  category: string;
  image: number;
  description: string;
  price: number | null;
  pack: string | null;
  verified: boolean;
  available: boolean;
  orderable: boolean;
  mockPrice: number;
};
export const products: Product[] = [
  [
    "classic-sparklers",
    "Classic Sparklers",
    "sparklers",
    0,
    "A timeless golden sparkle for festive evenings.",
  ],
  [
    "color-sparklers",
    "Color Sparklers",
    "sparklers",
    1,
    "A colorful interpretation of a celebration classic.",
  ],
  [
    "flower-pots",
    "Flower Pot Fountains",
    "fountains",
    2,
    "An illustrative collection of traditional fountain effects.",
  ],
  [
    "ground-chakras",
    "Ground Chakras",
    "chakras",
    3,
    "Spinning light effects for an open outdoor setting.",
  ],
  [
    "sky-rockets",
    "Sky Rockets",
    "rockets",
    4,
    "An illustrative selection of skyward celebration effects.",
  ],
  [
    "aerial-effects",
    "Aerial Celebration Effects",
    "aerial",
    5,
    "Explore a proposed collection of aerial effects.",
  ],
  [
    "assorted-crackers",
    "Assorted Crackers",
    "crackers",
    6,
    "A proposed assortment of traditional sound fireworks.",
  ],
  [
    "family-combo",
    "Family Festival Combo",
    "family",
    7,
    "A proposed selection to bring a festive evening together.",
  ],
  [
    "premium-combo",
    "Premium Celebration Combo",
    "combos",
    8,
    "A beautifully presented concept for a festival assortment.",
  ],
  [
    "kids-collection",
    "Kids’ Celebration Collection",
    "novelties",
    9,
    "A proposed merchandising collection. The name does not indicate suitability for children; fireworks require appropriate adult handling and supervision.",
  ],
].map(([id, name, category, image, description]) => ({
  id: String(id),
  name: String(name),
  category: String(category),
  image: Number(image),
  description: String(description),
  price: null,
  pack: null,
  verified: false,
  available: false,
  orderable: false,
  mockPrice: [90, 120, 240, 160, 320, 850, 140, 1490, 2490, 590][Number(image)],
}));

// Fictional sample variants and prices for UI demonstration only.
// These do not establish local inventory, approved products, or sale eligibility.
const sampleGroups: {
  category: string;
  image: number;
  names: string[];
  prices: number[];
  packs: string[];
}[] = [
  {
    category: "sparklers",
    image: 0,
    names: [
      "Golden Sparklers 15 cm",
      "Silver Sparklers 30 cm",
      "Color Sparklers 15 cm",
      "Crackling Sparklers 30 cm",
    ],
    prices: [80, 180, 110, 210],
    packs: ["10 pieces", "5 pieces", "10 pieces", "5 pieces"],
  },
  {
    category: "fountains",
    image: 2,
    names: [
      "Golden Flower Pots Small",
      "Golden Flower Pots Medium",
      "Golden Flower Pots Large",
      "Color Fountain Collection",
      "Crackling Fountain Collection",
    ],
    prices: [180, 280, 420, 360, 490],
    packs: ["10 pieces", "10 pieces", "5 pieces", "5 pieces", "5 pieces"],
  },
  {
    category: "chakras",
    image: 3,
    names: [
      "Ground Chakras Small",
      "Ground Chakras Medium",
      "Ground Chakras Large",
      "Color Wheel Collection",
      "Golden Wheel Collection",
    ],
    prices: [90, 150, 240, 290, 320],
    packs: ["10 pieces", "10 pieces", "10 pieces", "5 pieces", "5 pieces"],
  },
  {
    category: "rockets",
    image: 4,
    names: [
      "Golden Sky Rocket Collection",
      "Color Rocket Collection",
      "Whistling Rocket Collection",
      "Silver Trail Rocket Collection",
      "Festival Rocket Assortment",
    ],
    prices: [240, 320, 390, 420, 590],
    packs: ["10 pieces", "10 pieces", "5 pieces", "5 pieces", "10 pieces"],
  },
  {
    category: "aerial",
    image: 5,
    names: [
      "Golden Sky Effects Collection",
      "Color Sky Effects Collection",
      "Silver Sky Effects Collection",
      "Festival Aerial Assortment",
      "Premium Sky Effects Collection",
    ],
    prices: [690, 890, 1090, 1490, 2190],
    packs: [
      "Sample pack",
      "Sample pack",
      "Sample pack",
      "Sample assortment",
      "Sample assortment",
    ],
  },
  {
    category: "crackers",
    image: 6,
    names: [
      "Traditional Sound Collection",
      "Festival Sound Assortment",
      "Celebration Sound Pack",
      "Classic Sound Assortment",
      "Mixed Sound Collection",
    ],
    prices: [120, 190, 260, 340, 460],
    packs: [
      "Sample pack",
      "Sample pack",
      "Sample assortment",
      "Sample assortment",
      "Sample collection",
    ],
  },
  {
    category: "garlands",
    image: 6,
    names: [
      "Classic Garland Collection",
      "Traditional Lari Collection",
      "Festival Garland Assortment",
      "Celebration Lari Pack",
      "Golden Festival Garlands",
      "Mixed Garland Collection",
    ],
    prices: [140, 220, 360, 490, 690, 890],
    packs: [
      "Sample pack",
      "Sample pack",
      "Sample assortment",
      "Sample pack",
      "Sample collection",
      "Sample collection",
    ],
  },
  {
    category: "novelties",
    image: 9,
    names: [
      "Colorful Novelty Assortment",
      "Festive Light Collection",
      "Celebration Novelty Box",
      "Golden Novelty Collection",
      "Festival Surprise Assortment",
    ],
    prices: [190, 290, 390, 490, 690],
    packs: [
      "Sample assortment",
      "Sample pack",
      "Sample box",
      "Sample collection",
      "Sample assortment",
    ],
  },
  {
    category: "family",
    image: 7,
    names: [
      "Family Celebration Mini",
      "Family Celebration Classic",
      "Family Celebration Plus",
      "Family Celebration Grand",
      "Family Festival Assortment",
    ],
    prices: [790, 1290, 1890, 2590, 3290],
    packs: [
      "Sample assortment",
      "Sample assortment",
      "Sample assortment",
      "Sample assortment",
      "Sample assortment",
    ],
  },
  {
    category: "combos",
    image: 8,
    names: [
      "Budget Festival Combo",
      "Golden Festival Combo",
      "Color Festival Combo",
      "Grand Celebration Combo",
      "Signature Festival Hamper",
    ],
    prices: [990, 1690, 2290, 3490, 4990],
    packs: [
      "Sample combo",
      "Sample combo",
      "Sample combo",
      "Sample combo",
      "Sample hamper",
    ],
  },
];
for (const group of sampleGroups) {
  group.names.forEach((name, index) =>
    products.push({
      id: name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-$/, ""),
      name,
      category: group.category,
      image: group.image,
      description: `${name} is a fictional sample in our ${categories.find((c) => c.id === group.category)?.name} collection. Category imagery is illustrative; exact contents, current Hyderabad availability, and actual prices have not been verified.`,
      price: null,
      mockPrice: group.prices[index],
      pack: group.packs[index],
      verified: false,
      available: false,
      orderable: false,
    }),
  );
}
products.forEach((p) => {
  p.pack ??= "Sample pack";
});
export const money = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
