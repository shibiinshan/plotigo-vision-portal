import flatImg from "@/assets/prop-flat.jpg";
import plotImg from "@/assets/prop-plot.jpg";
import villaImg from "@/assets/prop-villa.jpg";
import commercialImg from "@/assets/prop-commercial.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

/**
 * SAMPLE DATA ONLY — placeholder listings for layout/demo purposes.
 * These are not verified Plotigo listings. Replace this module with a real
 * data source (CMS / database / API) — every component consumes the
 * `Property` type below, so the UI needs no changes when the source swaps.
 */

export type PropertyType = "Plot" | "Flat" | "Villa" | "Commercial";
export type PropertyStatus = "For Sale" | "For Rent" | "Sold";

export interface Property {
  id: string;
  title: string;
  locality: string;
  city: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number; // in INR
  priceLabel: string;
  area: string;
  areaSqft: number;
  bedrooms: number | null;
  bathrooms: number | null;
  description: string;
  highlights: string[];
  amenities: string[];
  images: string[];
  listedOn: string; // ISO date
}

export const properties: Property[] = [
  {
    id: "rds-echo-elamakkara",
    title: "RDS Echo",
    locality: "Punnakkal Junction, Elamakkara",
    city: "Kochi",
    type: "Flat",
    status: "For Sale",
    price: 14000000,
    priceLabel: "₹1.40 Cr",
    area: "1,960 sq.ft",
    areaSqft: 1960,
    bedrooms: 3,
    bathrooms: 3,
    description:
      "A spacious 3 BHK residence in a well-connected pocket of Elamakkara, minutes from Edappally and the NH bypass. Generous floor plate, cross ventilation and a quiet residential surrounding make it equally strong as a home or a long-term hold.",
    highlights: [
      "1,960 sq.ft of usable carpet-efficient layout",
      "Walkable to Punnakkal Junction amenities",
      "Covered car parking included",
      "Ready for registration and handover",
    ],
    amenities: ["Covered Parking", "Lift", "Power Backup", "24x7 Security", "Gym", "Children's Play Area"],
    images: [flatImg, interior1, interior2],
    listedOn: "2026-07-28",
  },
  {
    id: "premium-plot-edappally",
    title: "Premium Residential Plot",
    locality: "Edappally",
    city: "Kochi",
    type: "Plot",
    status: "For Sale",
    price: 7800000,
    priceLabel: "₹78 Lakhs",
    area: "10.5 Cent",
    areaSqft: 4573,
    bedrooms: null,
    bathrooms: null,
    description:
      "A clean, road-facing residential plot in Edappally with clear frontage and easy approach for construction vehicles. Well suited for an independent home or a compact villa project in one of Kochi's most established corridors.",
    highlights: [
      "10.5 cent with wide road frontage",
      "Residential zoning, construction ready",
      "Close to metro and NH connectivity",
      "Clear title documentation available on request",
    ],
    amenities: ["Road Frontage", "Water Connection", "Electricity Nearby", "Residential Zone"],
    images: [plotImg, villaImg],
    listedOn: "2026-07-15",
  },
  {
    id: "premium-villa-kakkanad",
    title: "Premium Villa",
    locality: "Kakkanad",
    city: "Kochi",
    type: "Villa",
    status: "For Sale",
    price: 16500000,
    priceLabel: "₹1.65 Cr",
    area: "2,450 sq.ft",
    areaSqft: 2450,
    bedrooms: 4,
    bathrooms: 4,
    description:
      "An independent 4 BHK villa in Kakkanad with a private garden, covered portico and double-height living. Positioned for the Infopark belt, it balances everyday convenience with the privacy of a standalone home.",
    highlights: [
      "Independent villa on its own compound",
      "Minutes from Infopark and SmartCity",
      "Double-height living with natural light",
      "Two-car covered parking",
    ],
    amenities: ["Private Garden", "Modular Kitchen", "Two-Car Parking", "Power Backup", "Gated Community", "Solar Ready"],
    images: [villaImg, interior2, interior1],
    listedOn: "2026-08-02",
  },
  {
    id: "commercial-space-aluva",
    title: "Commercial Showroom Space",
    locality: "Aluva",
    city: "Kochi",
    type: "Commercial",
    status: "For Sale",
    price: 21000000,
    priceLabel: "₹2.10 Cr",
    area: "3,200 sq.ft",
    areaSqft: 3200,
    bedrooms: null,
    bathrooms: 2,
    description:
      "High-visibility commercial frontage on a busy Aluva stretch, suitable for showroom, clinic or office use. Strong footfall and straightforward vehicle access.",
    highlights: [
      "Prime main-road visibility",
      "Flexible column-free floor plate",
      "Dedicated customer parking",
      "Suited to showroom or office fit-out",
    ],
    amenities: ["Main Road Frontage", "Customer Parking", "Three-Phase Power", "Lift Access"],
    images: [commercialImg, interior1],
    listedOn: "2026-06-30",
  },
  {
    id: "garden-plot-thrippunithura",
    title: "Garden Residential Plot",
    locality: "Thrippunithura",
    city: "Kochi",
    type: "Plot",
    status: "For Sale",
    price: 5200000,
    priceLabel: "₹52 Lakhs",
    area: "7 Cent",
    areaSqft: 3049,
    bedrooms: null,
    bathrooms: null,
    description:
      "A quiet 7 cent plot in a settled Thrippunithura neighbourhood, surrounded by independent homes and mature greenery. A practical size for a compact family home.",
    highlights: [
      "Settled residential neighbourhood",
      "Level land, ready to build",
      "Close to schools and hospitals",
      "Good water table",
    ],
    amenities: ["Road Access", "Water Connection", "Residential Zone"],
    images: [plotImg],
    listedOn: "2026-07-05",
  },
  {
    id: "skyline-flat-aluva",
    title: "Skyline Residences 2 BHK",
    locality: "Aluva",
    city: "Kochi",
    type: "Flat",
    status: "For Sale",
    price: 6900000,
    priceLabel: "₹69 Lakhs",
    area: "1,180 sq.ft",
    areaSqft: 1180,
    bedrooms: 2,
    bathrooms: 2,
    description:
      "A compact, efficient 2 BHK close to Aluva metro and railway. A sensible entry point for first-time buyers or a dependable rental asset.",
    highlights: [
      "Walking distance to Aluva metro",
      "Efficient 2 BHK layout",
      "Lift and power backup",
      "Strong rental demand corridor",
    ],
    amenities: ["Lift", "Power Backup", "Covered Parking", "24x7 Security"],
    images: [flatImg, interior2],
    listedOn: "2026-08-06",
  },
];

export const getPropertyById = (id: string) => properties.find((p) => p.id === id);

export const featuredProperties = properties.slice(0, 3);

export const locations = [
  "Kochi",
  "Edappally",
  "Elamakkara",
  "Kakkanad",
  "Aluva",
  "Thrippunithura",
] as const;

export const propertyTypes: PropertyType[] = ["Plot", "Flat", "Villa", "Commercial"];

export const budgetOptions = [
  { label: "Under ₹50 Lakhs", min: 0, max: 5000000 },
  { label: "₹50 Lakhs – ₹1 Cr", min: 5000000, max: 10000000 },
  { label: "₹1 Cr – ₹1.5 Cr", min: 10000000, max: 15000000 },
  { label: "Above ₹1.5 Cr", min: 15000000, max: Number.MAX_SAFE_INTEGER },
];