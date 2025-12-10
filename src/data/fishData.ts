export interface Fish {
  id: string;
  name: string;
  malayalamName: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  available: boolean;
}

export const fishList: Fish[] = [
  {
    id: "1",
    name: "King Fish",
    malayalamName: "നെയ്മീൻ (Neymeen)",
    price: 850,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
    description: "Premium quality king fish, perfect for frying or curry",
    available: true,
  },
  {
    id: "2",
    name: "Pomfret",
    malayalamName: "അവോലി (Avoli)",
    price: 750,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&h=300&fit=crop",
    description: "Fresh white pomfret, ideal for fry or steam",
    available: true,
  },
  {
    id: "3",
    name: "Prawns",
    malayalamName: "ചെമ്മീൻ (Chemmeen)",
    price: 650,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
    description: "Large fresh prawns, cleaned and deveined available",
    available: true,
  },
  {
    id: "4",
    name: "Mackerel",
    malayalamName: "അയല (Ayala)",
    price: 280,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400&h=300&fit=crop",
    description: "Fresh mackerel, a Kerala favorite for curry",
    available: true,
  },
  {
    id: "5",
    name: "Sardine",
    malayalamName: "മത്തി (Mathi)",
    price: 180,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
    description: "Fresh sardines, perfect for fry or curry",
    available: true,
  },
  {
    id: "6",
    name: "Red Snapper",
    malayalamName: "ചെമ്പല്ലി (Chempalli)",
    price: 550,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    description: "Premium red snapper, great for grilling",
    available: true,
  },
  {
    id: "7",
    name: "Squid",
    malayalamName: "കണവ (Kanava)",
    price: 450,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1565680018093-aaaa71ce4e09?w=400&h=300&fit=crop",
    description: "Fresh squid, cleaned and ready to cook",
    available: true,
  },
  {
    id: "8",
    name: "Pearl Spot",
    malayalamName: "കരിമീൻ (Karimeen)",
    price: 900,
    unit: "kg",
    image:
      "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=400&h=300&fit=crop",
    description: "Famous Kerala Karimeen, backwater specialty",
    available: true,
  },
];

export const whatsappNumber = "+919048667052";

export const getWhatsAppLink = (fishName?: string) => {
  const message = fishName
    ? `Hi! I would like to order ${fishName} from Fisherman Basket for this Sunday's delivery.`
    : "Hi! I would like to place an order from Fisherman Basket for this Sunday's delivery.";
  return `https://wa.me/${whatsappNumber.replace(
    "+",
    ""
  )}?text=${encodeURIComponent(message)}`;
};
