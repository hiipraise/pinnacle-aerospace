export const SITE_CONFIG = {
  name: "Pinnacle Aerospace",
  tagline: "Precision Above All",
  description:
    "FAA & EASA certified aircraft maintenance, repair, and overhaul organization delivering precision engineering for commercial and private aviation.",
  email: "pinnaservice@yanemail.com",
  certifications: ["FAA Repair Station", "EASA Part-145", "AS9110C Certified"],
  founded: "2004",
  address: {
    line1: "Hangar Complex 7",
    line2: "International Aviation Park",
    city: "Atlanta",
    state: "GA",
    zip: "30337",
    country: "USA",
  },
} as const;

export const SERVICES = [
  {
    id: "maintenance",
    code: "SVC-01",
    title: "Aircraft Maintenance",
    subtitle: "A, B, C & D Checks",
    description:
      "Comprehensive scheduled maintenance programs across all check levels — from routine line-maintenance to heavy base checks. Our certified technicians follow OEM-approved procedures and regulatory compliance standards.",
    features: [
      "Transit & Daily (A Check)",
      "Service & Inspection (B Check)",
      "Heavy Maintenance (C Check)",
      "Structural Overhaul (D Check)",
      "Engine Change Programs",
      "Landing Gear Overhaul",
    ],
  },
  {
    id: "repairs-overhaul",
    code: "SVC-02",
    title: "Aircraft Repairs & Overhaul",
    subtitle: "Structural & Component",
    description:
      "Full-scope airframe and component repair capabilities including structural repairs, composite work, corrosion treatment, and complete engine overhaul programs certified to manufacturer standards.",
    features: [
      "Airframe Structural Repairs",
      "Composite Structure Repair",
      "Corrosion Treatment & Prevention",
      "Engine Overhaul Programs",
      "Component Overhaul",
      "Non-Destructive Testing (NDT)",
    ],
  },
  {
    id: "avionics",
    code: "SVC-03",
    title: "Avionics & Electrical",
    subtitle: "Systems Servicing",
    description:
      "Complete avionics installation, upgrade, and troubleshooting services. From glass cockpit upgrades to ACAS/TCAS compliance, ADS-B mandates, and full electrical system diagnostics.",
    features: [
      "Glass Cockpit Upgrades",
      "ADS-B Out Compliance",
      "ACAS/TCAS Systems",
      "Navigation System Calibration",
      "Electrical Wiring Harness",
      "Autopilot Systems",
    ],
  },
  {
    id: "inspection",
    code: "SVC-04",
    title: "Inspectors & Certification",
    subtitle: "Regulatory Compliance",
    description:
      "Independent inspection and airworthiness certification services conducted by our team of FAA-designated Airworthiness Representatives and EASA Part-66 licensed engineers.",
    features: [
      "Airworthiness Inspections",
      "Pre-Purchase Evaluations",
      "FAA Form 8130-3 Issuance",
      "EASA Form 1 Release",
      "Accident Damage Assessments",
      "Records & Documentation Audit",
    ],
  },
  {
    id: "engineering",
    code: "SVC-05",
    title: "Custom Engineering",
    subtitle: "Solutions & Design",
    description:
      "Bespoke engineering solutions for modifications, STC development, and custom installations. Our engineering team develops FAA-approved data for non-standard repairs and aircraft modifications.",
    features: [
      "STC Development",
      "FAA-Approved Engineering Data",
      "Modification Design",
      "Repair Design & DER Approval",
      "Weight & Balance Programs",
      "Performance Analysis",
    ],
  },
] as const;

export const DIRECTORS = [
  {
    id: "director-1",
    name: "James R. Holloway",
    title: "Chief Executive Officer",
    credentials: "A&P, IA, DAR",
    bio: "With over 30 years in aviation maintenance and aerospace engineering, James leads Pinnacle Aerospace with a focus on regulatory excellence and operational precision. Former Director of Maintenance at a major US carrier.",
  },
  {
    id: "director-2",
    name: "Dr. Amara N. Osei",
    title: "Director of Engineering",
    credentials: "PhD Aero Eng, EASA Part-66",
    bio: "A distinguished aerospace engineer with doctoral research in structural fatigue analysis. Dr. Osei oversees all engineering certification programs and leads the development of proprietary repair solutions.",
  },
] as const;

export const STATS = [
  { value: "20+", label: "Years in Operation" },
  { value: "4,000+", label: "Aircraft Serviced" },
  { value: "98.7%", label: "On-Time Delivery" },
  { value: "120+", label: "Certified Technicians" },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
] as const;
