import { Category, Service } from "@/types";

export const SITE_CONFIG = {
  name: "Design Consultant Architecture & Engineering",
  description:
    "Multidisciplinary architecture, engineering, and construction firm specializing in sustainable design and innovative solutions.",
  url: "https://Design Consultant-architecture.com",
  email: "info@Design Consultant-architecture.com",
  phone: "+1 (555) 123-4567",
  locations: [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
    },
    {
      city: "New York",
      address: "456 Design Avenue, New York, NY 10001",
      phone: "+1 (555) 123-4568",
    },
    {
      city: "London",
      address: "789 Architecture Street, London, UK SW1A 1AA",
      phone: "+44 (20) 7946 0958",
    },
  ],
  social: {
    linkedin: "https://linkedin.com/company/Design Consultant-architecture",
    instagram: "https://instagram.com/Design Consultant_architecture",
    twitter: "https://twitter.com/Design Consultant_arch",
  },
};

export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Residential",
    slug: "residential",
    description:
      "Innovative residential designs combining comfort, functionality, and sustainability.",
    icon: "Home",
    image_url:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
    order_index: 1,
  },
  {
    id: "2",
    name: "Commercial",
    slug: "commercial",
    description:
      "Modern commercial spaces designed for efficiency and brand expression.",
    icon: "Building2",
    image_url:
      "https://images.pexels.com/photos/267501/pexels-photo-267501.jpeg",
    order_index: 2,
  },
  {
    id: "3",
    name: "Education",
    slug: "education",
    description:
      "Learning environments that inspire creativity and foster collaborative growth.",
    icon: "BookOpen",
    image_url:
      "https://images.pexels.com/photos/31085764/pexels-photo-31085764.jpeg",
    order_index: 3,
  },
  {
    id: "4",
    name: "Religion",
    slug: "religion",
    description:
      "Sacred spaces designed with reverence, tradition, and contemporary aesthetics.",
    icon: "Cross",
    image_url:
      "https://images.pexels.com/photos/815439/pexels-photo-815439.jpeg",
    order_index: 4,
  },
  {
    id: "5",
    name: "Healthcare",
    slug: "healthcare",
    description:
      "Healing environments that prioritize patient wellbeing and operational efficiency.",
    icon: "Heart",
    image_url:
      "https://images.pexels.com/photos/8442105/pexels-photo-8442105.jpeg",
    order_index: 5,
  },
  {
    id: "6",
    name: "Infrastructure",
    slug: "infrastructure",
    description:
      "Large-scale infrastructure projects engineered for resilience and sustainability.",
    icon: "Zap",
    image_url:
      "https://images.pexels.com/photos/31735029/pexels-photo-31735029.jpeg",
    order_index: 6,
  },
  {
    id: "7",
    name: "Landscape",
    slug: "landscape",
    description:
      "Outdoor spaces that balance human activity with ecological harmony.",
    icon: "Leaf",
    image_url:
      "https://images.pexels.com/photos/208421/pexels-photo-208421.jpeg",
    order_index: 7,
  },
  {
    id: "8",
    name: "Hospitality",
    slug: "hospitality",
    description:
      "Welcoming spaces that create memorable experiences for guests.",
    icon: "Wine",
    image_url:
      "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg",
    order_index: 8,
  },
  {
    id: "9",
    name: "Industrial Building",
    slug: "industrial-building",
    description:
      "Functional industrial facilities optimized for safety and productivity.",
    icon: "Factory",
    image_url:
      "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg",
    order_index: 9,
  },
  {
    id: "10",
    name: "Interior Design",
    slug: "interior-design",
    description:
      "Interior spaces that reflect identity, functionality, and aesthetic excellence.",
    icon: "Sofa",
    image_url:
      "https://images.pexels.com/photos/24245748/pexels-photo-24245748.jpeg",
    order_index: 10,
  },
  {
    id: "11",
    name: "Low-Cost Building",
    slug: "low-cost-building",
    description:
      "Affordable housing solutions without compromising on quality and design.",
    icon: "Home",
    image_url:
      "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg",
    order_index: 11,
  },
  {
    id: "12",
    name: "Valuation",
    slug: "valuation",
    description:
      "Professional assessment and valuation services for real estate and projects.",
    icon: "BarChart3",
    image_url:
      "https://images.pexels.com/photos/34653077/pexels-photo-34653077.jpeg",
    order_index: 12,
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    name: "Architectural Design",
    slug: "architectural-design",
    description:
      "Innovative architectural solutions that blend aesthetics and functionality.",
    detailed_description:
      "Our architectural design services encompass conceptual planning, schematic design, detailed design development, and construction documentation. We specialize in creating spaces that inspire while meeting all regulatory requirements and client objectives.",
    icon: "Pencil",
    order_index: 1,
  },
  {
    id: "2",
    name: "Structural Engineering",
    slug: "structural-engineering",
    description:
      "Robust structural systems ensuring safety, durability, and sustainability.",
    detailed_description:
      "We provide comprehensive structural engineering services including analysis, design, and consultation for new construction and retrofitting projects. Our expertise spans residential, commercial, and infrastructure projects with a focus on innovative, cost-effective solutions.",
    icon: "Pyramid",
    order_index: 2,
  },
  {
    id: "3",
    name: "Land Survey",
    slug: "land-survey",
    description:
      "Precise land survey and mapping for informed project planning.",
    detailed_description:
      "Our land survey services utilize the latest surveying technologies and methodologies to provide accurate topographical data, boundary surveys, and site analysis. Essential for project feasibility studies and masterplanning.",
    icon: "Map",
    order_index: 3,
  },
  {
    id: "4",
    name: "Infrastructure Planning",
    slug: "infrastructure-planning",
    description: "Strategic planning for sustainable infrastructure systems.",
    detailed_description:
      "We develop comprehensive infrastructure strategies including utilities planning, transportation systems, water management, and energy efficiency. Our approach prioritizes sustainability and long-term resilience.",
    icon: "Zap",
    order_index: 4,
  },
  {
    id: "5",
    name: "Landscape Architecture",
    slug: "landscape-architecture",
    description: "Beautiful outdoor environments that enhance quality of life.",
    detailed_description:
      "From masterplans to detailed design, our landscape architecture services create harmonious outdoor spaces. We integrate ecological principles with cultural sensitivity and user experience.",
    icon: "Leaf",
    order_index: 5,
  },
  {
    id: "6",
    name: "Property Valuation",
    slug: "property-valuation",
    description: "Expert property and real estate valuation services.",
    detailed_description:
      "Our valuation experts provide comprehensive assessments for investment decisions, financing, taxation, and dispute resolution. Compliant with international valuation standards.",
    icon: "BarChart3",
    order_index: 6,
  },
  {
    id: "7",
    name: "Project Management",
    slug: "project-management",
    description:
      "End-to-end project coordination ensuring success on time and budget.",
    detailed_description:
      "We manage all aspects of project delivery from planning through completion. Our experienced team ensures stakeholder coordination, quality control, and successful project outcomes.",
    icon: "ListCheck",
    order_index: 7,
  },
  {
    id: "8",
    name: "BIM Services",
    slug: "bim-services",
    description:
      "Advanced Building Information Modeling for integrated project delivery.",
    detailed_description:
      "Our BIM services include 3D modeling, clash detection, lifecycle management, and data extraction. Enabling better decision-making and improved coordination across all project phases.",
    icon: "Cube",
    order_index: 8,
  },
  {
    id: "9",
    name: "Laser Scanning",
    slug: "laser-scanning",
    description:
      "High-precision 3D scanning for existing conditions documentation.",
    detailed_description:
      "We use state-of-the-art laser scanning technology to capture precise three-dimensional data of existing structures and sites. Perfect for renovation, retrofitting, and as-built documentation.",
    icon: "Radar",
    order_index: 9,
  },
];

export const BLOG_CATEGORIES = [
  { name: "News", slug: "news" },
  { name: "Case Studies", slug: "case-studies" },
  { name: "Industry Insights", slug: "industry-insights" },
  { name: "Innovations", slug: "innovations" },
  { name: "Sustainability", slug: "sustainability" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Design Consultant transformed our vision into reality. Their attention to detail and commitment to sustainability exceeded our expectations.",
    author: "Sarah Chen",
    role: "CEO, EcoTech Industries",
    project: "Corporate Headquarters Renovation",
  },
  {
    quote:
      "Working with Design Consultant on our campus expansion was seamless. Their innovative approach and project management excellence were outstanding.",
    author: "Prof. Michael Turner",
    role: "Director, Metropolitan University",
    project: "Educational Campus Expansion",
  },
  {
    quote:
      "The healthcare facility designed by Design Consultant created an environment that truly supports patient recovery and staff efficiency.",
    author: "Dr. Elizabeth Wong",
    role: "Hospital Administrator",
    project: "Medical Center Design",
  },
];

export const AWARDS = [
  {
    name: "International Architecture Excellence Award",
    year: 2023,
    category: "Sustainability",
  },
  {
    name: "Engineering Innovation Prize",
    year: 2022,
    category: "Infrastructure",
  },
  {
    name: "Green Building Certification Leadership",
    year: 2022,
    category: "Environmental",
  },
  {
    name: "Design Excellence in Public Projects",
    year: 2021,
    category: "Design",
  },
];
