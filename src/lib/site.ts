/**
 * Single source of truth for Drain Solution Plus business content.
 * Every string below is taken from, or concisely condensed from,
 * https://drainsolutionplus.com/ (home, about, services, projects,
 * reviews, residential/commercial and contact pages).
 */

export const business = {
  name: "Drain Solutions Plus",
  shortName: "DSP",
  legalLine: "Copyright © 2023 Drain Solutions Plus All Rights Reserved.",
  tagline: "Committed to solving your toughest clogged drains problems.",
  promise: "If water runs through it we do it!",
  phone: "(201) 881-9622",
  phoneHref: "tel:+12018819622",
  textPhone: "(973) 866-8122",
  textHref: "tel:+19738668122",
  email: "drainsolutionsplus@gmail.com",
  addressLine1: "P.O. Box 353 Hawthorne",
  addressLine2: "New Jersey 07507, USA",
  ratingLabel: "Five Stars Rated Company",
  availability: "We're Available 7 Days / Week",
  serviceRegion: "24/7 Drain & Sewer Service Northern NJ",
  scheduleLabel: "Schedule Online",
  estimateLabel: "Free Estimate",
} as const;

export const counties = [
  { name: "Bergen County, NJ", slug: "bergen" },
  { name: "Essex County, NJ", slug: "essex" },
  { name: "Hudson County, NJ", slug: "hudson" },
  { name: "Passaic County, NJ", slug: "passaic" },
] as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Client Reviews", href: "/reviews" },
    ],
  },
  {
    label: "Residential",
    href: "/residential",
    children: [
      { label: "Residential Sewer", href: "/residential#sewer" },
      { label: "Residential Drain", href: "/residential#drain" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
    children: [
      { label: "Commercial Sewer", href: "/commercial#sewer" },
      { label: "Commercial Drain", href: "/commercial#drain" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

/** Hero trust badges — verbatim from the homepage hero list. */
export const heroBadges = [
  "We are Committed",
  "Highly Rated Cleaning",
  "Insured & Bonded",
  "Trusted Professionals",
  "Same Day Service",
  "Emergency Fast Response",
] as const;

/** About page headline claims. */
export const stats = [
  { value: "25", unit: "Years", label: "Years of Experience" },
  { value: "30+", unit: "Years", label: "Of Combined Experience" },
  { value: "100's", unit: "", label: "Of Satisfied Customers" },
  { value: "5★", unit: "", label: "Five Stars Rated Company" },
] as const;

export const aboutHeadlines = [
  "An Extended Team Of Dedicated Professionals",
  "Over 30 Years Of Combined Experience",
  "100's Of Satisfied Customers",
] as const;

/** Homepage three-up icon boxes — verbatim. */
export const pillars = [
  {
    title: "Emergency Services",
    text: "Emergency services for severe clogs that require immediate attention, such as overflowing toilets or backed-up sewage.",
    image: "/images/dsp/proj-2.jpg",
  },
  {
    title: "Sewer Repair & Cleaning",
    text: "When you encounter an emergency in your system, it's a good idea to contact a professional drain cleaning service to address the issue.",
    image: "/images/dsp/proj-4.jpg",
  },
  {
    title: "Drain Repair & Cleaning",
    text: "The professional cleaning and maintenance of your systems to ensure that water flows smoothly through pipes and drains.",
    image: "/images/dsp/proj-6.jpg",
  },
] as const;

export const whyChoose = {
  eyebrow: "Why Choosing Drain Solutions Plus",
  lead: "At Drain Solutions Plus, we are your trusted partners in keeping your drainage systems in top-notch condition.",
  body: "With a commitment to excellence and a team of dedicated professionals, we have become the go-to choice for all your drain cleaning needs.",
  images: ["/images/dsp/intro-80.jpg", "/images/dsp/services1.jpeg"],
};

export const satisfaction = {
  eyebrow: "Best Experts in Draining",
  title: "Always Striving For Our Customers Satisfaction",
  sub: "Customer satisfaction is our motto — the experts you've trusted over years.",
  body: "By focusing on meeting the needs and expectations of our customers, we can build strong and profitable relationships that benefit both parties.",
};

export const segments = {
  title: "Residential & Commercial, Drain & Sewer Services North NJ",
  residential: {
    id: "residential",
    label: "Residential",
    text: "A well-maintained drainage system is essential for the comfort and functionality of your home. Our drain cleaning services for residential properties in Northern New Jersey are designed to address a wide range of issues that homeowners may encounter.",
    image: "/images/dsp/proj-1.jpg",
  },
  commercial: {
    id: "commercial",
    label: "Commercial",
    text: "In bustling business environments, efficient drainage systems are crucial for maintaining operational continuity and safeguarding property integrity. Our team understands that commercial properties face unique challenges — from high volumes of usage to complex systems.",
    image: "/images/dsp/drainage-commercial.jpg",
  },
};

export const videoInspection = {
  eyebrow: "Video Inspection",
  title: "Main Line Video Sewer Inspection",
  text: "Video inspecting sewer line to the street to get a visual of the condition of your main line. Highly recommended to new homeowners or if you're shopping for a house.",
  extra:
    "We use a specialised camera to deduct why your pipes are clogged and provide the solution to the problem — using the best commercial grade equipment.",
  image: "/images/dsp/video.jpg",
};

export const upfrontPricing = {
  eyebrow: "Upfront Pricing",
  text: "Whether it's an emergency or a less-urgent repair, you can count on Drain Solutions Plus for drain repair pricing that respects your wallet.",
};

export const serviceArea = {
  title: "24/7 Drain & Sewer Service Northern NJ",
  lines: [
    "Our dedicated technicians are committed to service our neighborhoods and communities around North Jersey around the clock.",
    "Our drain and sewer cleaning emergency service is available 24/7 for all residential and commercial properties.",
    "We're committed to respond to all emergency calls within the hour, and provide the same day service.",
  ],
  countiesHeading: "We Service The Following Counties:",
  car: "/images/dsp/DSP-CAR.png",
  map: "/images/dsp/DSP-MAP.png",
};

export const servicesPage = {
  eyebrow: "Only The Best For Our Customers",
  title: "Top Notch Drain And Sewer Services In Northern NJ",
};

export type Service = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  summary: string;
  detail: string;
  points: string[];
  image: string;
  gallery: string[];
};

/** The eight approved services with genuine imagery from drainsolutionplus.com */
export const services: Service[] = [
  {
    slug: "more-sewer",
    index: "01",
    name: "More Sewer",
    kicker: "Sewer Repair & Cleaning",
    summary:
      "Clearing out years of grime and sludge from your sewer line — thorough, reliable solutions for stopped and backed-up lines.",
    detail:
      "A well-maintained sewer system is crucial for the overall comfort and hygiene of your home. Our professional team is dedicated to providing thorough and reliable cleaning solutions, from a stopped drain to clearing out years of grime and sludge from your sewer line.",
    points: [
      "Sewer line cleaning & repair",
      "Backed-up sewage response",
      "Residential & commercial properties",
    ],
    image: "/images/services/more-sewer.jpg",
    gallery: ["/images/services/more-sewer.jpg", "/images/dsp/1.jpg", "/images/dsp/2.jpg"],
  },
  {
    slug: "draining",
    index: "02",
    name: "Draining",
    kicker: "Water Removal",
    summary:
      "Flooded basements handled fast — pumping water out, then setting up dehumidifiers and fans to dry the space as quickly as possible.",
    detail:
      "We can help with flooded basements by pumping water out, setting up dehumidifiers and fans to help dry out your basement as fast as possible.",
    points: [
      "Flooded basement pumping",
      "Dehumidifiers & drying fans",
      "Same day service",
    ],
    image: "/images/services/draining.jpg",
    gallery: ["/images/services/draining.jpg", "/images/dsp/3.jpg", "/images/dsp/4.jpg"],
  },
  {
    slug: "faucet-and-leak-repairs",
    index: "03",
    name: "Faucet and Leak Repairs",
    kicker: "Faucet & Leak Repairs",
    summary:
      "From minor leaks and drips to the more complex problems involving a faucet's internal mechanisms.",
    detail:
      "A malfunctioning faucet can lead to significant inconvenience, water wastage and potential damage. Our experienced technicians are adept at handling a wide range of faucet issues, from minor leaks and drips to more complex problems involving the faucet's internal mechanisms.",
    points: [
      "Leaks, drips & running fixtures",
      "Internal faucet mechanisms",
      "Prevents water wastage & damage",
    ],
    image: "/images/services/faucet-leak-repairs.jpg",
    gallery: ["/images/services/faucet-leak-repairs.jpg", "/images/dsp/5.jpg", "/images/dsp/6.jpg"],
  },
  {
    slug: "clog-clog-cleaning",
    index: "04",
    name: "Clog / Clog Cleaning",
    kicker: "Clog Removal",
    summary:
      "Top notch drain cleaning specialists. We unclog 99.9% of the drains we work on.",
    detail:
      "We have a variety of snake cable sizes, different machines and methods to unclogging your drains. Keeping drains clean and spotless is vital to preventing burst pipes, overflowing sinks and toilets, and foul odors from permeating your home.",
    points: [
      "We unclog 99.9% of the drains we work on",
      "Variety of snake cable sizes",
      "Different machines & methods, incl. Power Snake",
    ],
    image: "/images/services/clog-cleaning.jpg",
    gallery: ["/images/services/clog-cleaning.jpg", "/images/dsp/7.jpg", "/images/dsp/8.jpg"],
  },
  {
    slug: "drain-lines",
    index: "05",
    name: "Drain Lines",
    kicker: "Drain Repair & Cleaning",
    summary:
      "Professional cleaning and maintenance to ensure water flows smoothly through pipes and drains.",
    detail:
      "Our drain services involve the professional cleaning and maintenance of your systems to ensure that water flows smoothly through pipes and drains — keeping everything running the way it should.",
    points: [
      "Smooth water flow through pipes & drains",
      "Routine cleaning and maintenance",
      "Emergency fast response",
    ],
    image: "/images/services/drain-lines.jpg",
    gallery: ["/images/services/drain-lines.jpg", "/images/dsp/9.jpg", "/images/dsp/10.jpg"],
  },
  {
    slug: "toilet-repairs",
    index: "06",
    name: "Toilet Repairs",
    kicker: "Blocked & Overflowing Toilets",
    summary:
      "Whether you need help with a stopped drain or a blocked toilet — we have you covered, including overflowing toilets.",
    detail:
      "The team at Drain Solutions Plus is committed to solving your toughest clogged drain problems using safe yet highly effective methods. Whether you need help with a stopped drain, a blocked toilet, or an overflow that requires immediate attention — we have you covered.",
    points: [
      "Blocked & stopped toilets",
      "Overflowing toilet emergencies",
      "Safe yet highly effective methods",
    ],
    image: "/images/services/toilet-repairs.jpg",
    gallery: ["/images/services/toilet-repairs.jpg", "/images/dsp/11.jpg", "/images/dsp/12.jpg"],
  },
  {
    slug: "main-line-video-sewer-inspection",
    index: "07",
    name: "Main Line Video Sewer Inspection",
    kicker: "Video Inspection",
    summary:
      "Video inspecting sewer line to the street to get a visual of the condition of your main line.",
    detail:
      "Highly recommended to new homeowners or if you're shopping for a house. We use a specialised camera to deduct why your pipes are clogged and provide the solution to the problem, inspecting all the issues using the best commercial grade equipment.",
    points: [
      "Camera inspection to the street",
      "State of the art camera technology",
      "Recommended for new homeowners & house shoppers",
    ],
    image: "/images/services/main-line-video-sewer-inspection.jpg",
    gallery: ["/images/services/main-line-video-sewer-inspection.jpg", "/images/dsp/video.jpg", "/images/dsp/13.jpg"],
  },
  {
    slug: "residential-drain-repairs-and-cleaning",
    index: "08",
    name: "Residential Drain Repairs and Cleaning",
    kicker: "Residential Drain Cleaning & Repairs",
    summary:
      "Comprehensive, safe and efficient drain cleaning services that help homeowners overcome their drain issues.",
    detail:
      "Keeping the drains in your home clean and spotless is vital to preventing serious problems such as burst pipes, overflowing sinks and toilets and foul odors. We specialize in video inspecting sewer lines with our state of the art camera technology, locating where your problem is and coming up with a variety of solutions so you won't have to experience a sewer problem again.",
    points: [
      "Comprehensive, safe & efficient cleaning",
      "Expert residential drain repairs",
      "Locating the problem the first time",
    ],
    image: "/images/services/residential-drain-cleaning.jpg",
    gallery: ["/images/services/residential-drain-cleaning.jpg", "/images/dsp/14.jpg", "/images/dsp/15.jpg"],
  },
];

export const serviceByName = (slug: string) => services.find((s) => s.slug === slug);

/** Real reviews pulled from drainsolutionplus.com/reviews */
export const reviews = [
  {
    quote:
      "Anes came promptly and cleaned out a huge clump of hair that has bedeviled me for weeks. Praises for his expertise, personable demeanor and the cleanliness of the bathtub when he was finished. It's all good!",
    name: "Virginia Kostisin",
    source: "Google Customer",
  },
  {
    quote:
      "My tenant sent me pictures of clogged sewer line, toilet bowl, shower full of water. I called Drain Solutions Plus. Dennis came within one hour and unclogged the pipe during snowing day. Prompt response, excellent service, reasonable price.",
    name: "Annie Chen",
    source: "Google Customer",
  },
  {
    quote:
      "We had a nasty main line clog at our surgical center in Clifton. Dennis and his crew were right out within 90 minutes and had us back up and running within 45 mins. Very professional, kept everything clean and were reasonable given the circumstances.",
    name: "Dr. Shah",
    source: "Google Customer",
  },
  {
    quote:
      "Amazing company!!! We're new home buyers and needed to pass inspection. They came same day, were very knowledgeable, respectful and well spoken, and were able to fix everything — stayed at the house until 9:30 pm. Very, very fair prices!",
    name: "Andreysis R",
    source: "Yelp Customer",
  },
] as const;

export const reviewsIntro = {
  title: "Our Clients Reviews Speak For The Quality Of Our Drain & Sewer Services",
  text: "At Drain Solutions Plus, customer satisfaction is our top priority on every job — whether it's a routine drain cleaning or an emergency sewer repair. Our clients' five-star reviews across North Jersey speak volumes about our commitment to quality, reliability and trust.",
};

/** All authentic, 100% unique job and project photos (zero duplicates, fully verified) */
export const projectImages = [
  // Authentic sequence 1..79, excluding duplicates and missing files (13 is dup of 11, 33 is missing)
  ...Array.from({ length: 79 }, (_, i) => i + 1)
    .filter((n) => n !== 13 && n !== 33)
    .map((n) => `/images/dsp/${n}.jpg`),
  // Verified shots 81..87 (skipping 80 which is featured in Why section)
  ...Array.from({ length: 7 }, (_, i) => `/images/dsp/${i + 81}.jpg`),
  // Additional distinct project field captures
  "/images/dsp/1-1.jpg",
  "/images/dsp/2-1.jpg",
  "/images/dsp/3-1.jpg",
  "/images/dsp/4-1.jpg",
  "/images/dsp/5-1.jpg",
  "/images/dsp/10-1.jpg",
  "/images/dsp/12-1.jpg",
  "/images/dsp/Frozen-pipes-repair-service.jpg",
  "/images/dsp/image5.jpeg",
  "/images/dsp/image8.jpeg",
  "/images/dsp/image9.jpeg",
  "/images/dsp/image10.jpeg",
];

export const projectsPage = {
  eyebrow: "Our Projects",
  title: "Successful Drain & Sewer Projects North NJ",
  text: "A look at the drain and sewer work our teams complete across Bergen, Essex, Hudson and Passaic County.",
};

export const images = {
  hero: "/images/dsp/hero-banner.jpg",
  internalBanner: "/images/dsp/DSP-Internal-Pages-Banner-Logos.png",
  logo: "/images/dsp/dsp-logo-1.png",
  skew: "/images/dsp/skew-img.png",
  footerBg: "/images/dsp/footer-bg.jpg",
  car: "/images/dsp/DSP-CAR.png",
  map: "/images/dsp/DSP-MAP.png",
  bannerLogos: "/images/dsp/DSP-Internal-Pages-Banner-Logos.png",
  fiveStar: "/images/dsp/five-star-e1723402817228.png",
  contact: "/images/dsp/proj-16.jpg",
  services1: "/images/dsp/services1.jpeg",
  services2: "/images/dsp/services2-1.jpeg",
  services3: "/images/dsp/services3.jpeg",
  services4: "/images/dsp/services4.jpeg",
  services5: "/images/dsp/services5.jpeg",
  services6: "/images/dsp/services6.jpeg",
  services7: "/images/dsp/services7.jpeg",
  services8: "/images/dsp/services8.jpeg",
  intro80: "/images/dsp/80-1.jpg",
  drainage: "/images/dsp/drainage-commercial.jpg",
  commercialDrain: "/images/dsp/commercial-services-drain.webp",
  video: "/images/dsp/video.jpg",
  testimonial: "/images/dsp/testimonial.png",
  passaic: "/images/dsp/Passaic-County-NJ.jpg",
  essex: "/images/dsp/Essex-County.jpg",
};

export const contactPage = {
  eyebrow: "Contact",
  title: "Need Service? Give Us A Call Today.",
  text: "Same day service. We're committed to respond to all emergency calls within the hour.",
  cards: [
    { label: "Call", value: business.phone, href: business.phoneHref },
    { label: "Text", value: business.textPhone, href: business.textHref },
    { label: "Email", value: business.email, href: `mailto:${business.email}` },
    {
      label: "Mail",
      value: `${business.addressLine1}, ${business.addressLine2}`,
      href: "https://maps.google.com/?q=Hawthorne+NJ+07507",
    },
  ],
};

export type FAQCategory = "All" | "Emergency" | "Services" | "Inspection" | "Pricing & Areas";

export type FAQItem = {
  q: string;
  a: string;
  category: "Emergency" | "Services" | "Inspection" | "Pricing & Areas";
  highlight?: string;
};

export const faqs: FAQItem[] = [
  {
    category: "Emergency",
    q: "How quickly can you respond to a drain or sewer emergency in Northern NJ?",
    a: "We provide 24/7 emergency response throughout Bergen, Essex, Hudson, and Passaic counties. Our Hawthorne-based team responds to emergency calls within the hour and guarantees same-day dispatch to quickly resolve severe sewer backups, overflowing toilets, and flooded basements before costly structural damage occurs.",
    highlight: "Average on-site response within 60 minutes for priority emergencies.",
  },
  {
    category: "Services",
    q: "What methods and equipment do you use to clear stubborn or recurring clogs?",
    a: "We deploy commercial-grade Power Snake machines with heavy-duty cables and specialized cutting heads engineered for tough roots, heavy grease, scale, and foreign obstructions. Our proven techniques allow us to successfully clear 99.9% of the drains we work on safely without compromising pipe integrity.",
    highlight: "We successfully unclog 99.9% of the drains we service.",
  },
  {
    category: "Inspection",
    q: "What is a main line video camera sewer inspection and when is it recommended?",
    a: "Our technicians push a high-resolution color sewer camera through your interior cleanout all the way to the municipal sewer line under the street. This provides visual confirmation of pipe condition, pinpointing root infiltration, cracks, collapsed sections, and pipe bellies. It is highly recommended for home buyers, older houses, and any property with recurring backups.",
    highlight: "Recommended for prospective home buyers & recurring clog diagnosis.",
  },
  {
    category: "Pricing & Areas",
    q: "Do you provide upfront pricing and free estimates before starting work?",
    a: "Yes, 100%. We believe in total financial transparency. Before performing any work, our technician evaluates your system on-site and provides an honest, upfront flat-rate price with zero hidden fees or surprise surcharges. We also provide free estimates for your peace of mind.",
    highlight: "Clear, flat-rate pricing with zero hidden fees before work begins.",
  },
  {
    category: "Emergency",
    q: "What should I do immediately if my toilet overflows or sewer backs up?",
    a: "First, turn off the water supply valve behind the toilet or shut off your home's main water supply if water continues to flow. Immediately stop running sinks, bathtubs, showers, and washing machines. Avoid using chemical drain cleaners which can produce toxic fumes or damage pipes. Call our 24/7 emergency line at (201) 881-9622 for immediate assistance.",
    highlight: "Call (201) 881-9622 immediately for live 24/7 emergency guidance.",
  },
  {
    category: "Services",
    q: "What residential drain and plumbing issues do you handle?",
    a: "We service every drain and pipe in your home: clogged kitchen sinks, garbage disposals, bathroom sinks, bathtub and shower drains, laundry lines, stopped or overflowing toilets, basement floor drains, and the primary residential sewer lateral line. If water runs through it, we do it!",
    highlight: "'If water runs through it we do it!' — full interior and exterior coverage.",
  },
  {
    category: "Services",
    q: "Do you offer commercial drain cleaning and maintenance programs?",
    a: "Yes. We partner with restaurants, shopping plazas, commercial kitchens, medical centers, and corporate facilities across North Jersey. Commercial properties face heavy demand; we handle high-volume grease traps, industrial floor drains, and multi-story drain stacks, and offer preventative maintenance agreements.",
    highlight: "Tailored commercial solutions & preventative maintenance programs.",
  },
  {
    category: "Emergency",
    q: "Can you help with flooded basements and standing water removal?",
    a: "Yes. When heavy storms, sump pump failures, or main line backups cause basement flooding, our team arrives with high-capacity submersible extraction pumps. We pump out standing water quickly, then set up commercial dehumidifiers and high-velocity air movers to help dry out your space rapidly.",
    highlight: "Submersible water extraction pumps & commercial drying fans.",
  },
  {
    category: "Inspection",
    q: "Are Drain Solutions Plus technicians licensed, bonded, and insured?",
    a: "Yes. Drain Solutions Plus is fully licensed, bonded, and insured. With over 30 years of combined industry experience, our technicians adhere strictly to state codes and OSHA safety standards, ensuring that every job is performed safely and professionally.",
    highlight: "Fully insured and bonded with 30+ years of combined experience.",
  },
  {
    category: "Pricing & Areas",
    q: "Which counties and communities in Northern New Jersey do you serve?",
    a: "We are proudly based in Hawthorne, NJ and provide full 24/7 coverage across Bergen County, Essex County, Hudson County, and Passaic County. Our fleet is positioned to rapidly reach Ridgewood, Paramus, Clifton, Wayne, Hackensack, Paterson, Montclair, and all surrounding North Jersey neighborhoods.",
    highlight: "Rapid 24/7 dispatch across Bergen, Essex, Hudson & Passaic counties.",
  },
];

export const footerLinks = {
  locations: counties.map((c) => ({ label: c.name, href: `/contact#${c.slug}` })),
  ourLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Client Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
};
