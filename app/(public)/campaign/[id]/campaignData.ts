export interface ProductItem {
  id: string;
  name: string;
  needed: string;
  price: number;
  image: string;
  count: number;
}

export interface DonorItem {
  name: string;
  amount: string;
  time: string;
  initial: string;
}

export interface CampaignData {
  id: string;
  title: string;
  category: string;
  image: string;
  raised: number;
  goal: number;
  supportersCount: number;
  ngo: {
    name: string;
    verified: boolean;
    taxBenefit: boolean;
    founder: string;
    impact: string;
    teachers: string;
    activeSince: string;
  };
  storyParagraphs: string[];
  products: ProductItem[];
  testimonials: {
    title: string;
    quote: string;
    author: string;
  }[];
  donorsRecent: DonorItem[];
  donorsGenerous: DonorItem[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const defaultCampaign: CampaignData = {
  id: "teachers-day-school",
  title: "This Teachers' Day, Help Build The School 200+ Children Have Been Waiting For.",
  category: "Education",
  image: "/images/hero-section_4c6bd5d5.png",
  raised: 847320,
  goal: 1500000,
  supportersCount: 712,
  ngo: {
    name: "Kameshwar Foundation",
    verified: true,
    taxBenefit: true,
    founder: "Kameshwar Yadav",
    impact: "200+ Students",
    teachers: "6 Dedicated Teachers",
    activeSince: "2019",
  },
  storyParagraphs: [
    "After a life-altering accident in 2019 that cost him his left leg, Kameshwar Yadav turned his recovery into a mission. He walked into the heart of Jharkhand's tribal belt and began teaching five children under a banyan tree. Today, his grassroots school serves over 200 students — offering free meals, clean water, and a safe haven from child labor and early marriage.",
    "Every monsoon, the makeshift tents collapse under heavy rains, flooding the only learning space these children have. Books get destroyed, classes stop for weeks, and students lose precious momentum. A permanent school building is not a luxury — it is survival.",
    "With your support, we are constructing five permanent brick classrooms, gender-segregated toilets, and an electrified study hall powered by clean solar energy.",
  ],
  products: [
    {
      id: "p1",
      name: "Rice (25kg)",
      needed: "80 Bags Needed",
      price: 750,
      image: "/images/product-img_7f1e44b6.png",
      count: 0,
    },
    {
      id: "p2",
      name: "Dal & Pulses (5kg)",
      needed: "60 Packs Needed",
      price: 400,
      image: "/images/product-img_7f855fc8.png",
      count: 0,
    },
    {
      id: "p3",
      name: "School Notebooks",
      needed: "500 Sets Required",
      price: 120,
      image: "/images/product-img_7bac61ec.png",
      count: 0,
    },
    {
      id: "p4",
      name: "School Bags",
      needed: "200 Bags Required",
      price: 350,
      image: "/images/product-img_4e5d9215.png",
      count: 0,
    },
    {
      id: "p5",
      name: "Atta Flour (10kg)",
      needed: "50 Bags Needed",
      price: 450,
      image: "/images/product-img_7f1e44b6.png",
      count: 0,
    },
    {
      id: "p6",
      name: "Uniforms",
      needed: "200 Sets Required",
      price: 650,
      image: "/images/product-img_7f855fc8.png",
      count: 0,
    },
  ],
  testimonials: [
    {
      title: "A Teacher Who Never Gave Up",
      quote:
        "Education is not about textbooks alone. It is about giving these children the courage to dream beyond the mines and fields they were born into.",
      author: "— Kameshwar Yadav, Founder",
    },
    {
      title: "Saving Futures, One Child at a Time",
      quote:
        "We stopped the marriage of a 13-year-old girl last year. Today she tops her class and wants to become a nurse. That is the power of this school.",
      author: "— Priya Mehta, Field Coordinator",
    },
    {
      title: "A Roof Over Their Dreams",
      quote:
        "When it rains, children sit in mud. They still come. They still want to learn. All they need is four walls and a roof. That is what we are fighting for.",
      author: "— Anjali Kumari, Lead Teacher",
    },
  ],
  donorsRecent: [
    { name: "Rajesh Khanna", amount: "₹ 25,000", time: "35 mins ago", initial: "R" },
    { name: "Neha Agarwal", amount: "₹ 10,000", time: "3 hours ago", initial: "N" },
    { name: "Amit Patel", amount: "₹ 5,000", time: "6 hours ago", initial: "A" },
    { name: "Deepa Menon", amount: "₹ 2,000", time: "1 day ago", initial: "D" },
  ],
  donorsGenerous: [
    { name: "Siddharth Birla", amount: "₹ 1,50,000", time: "2 days ago", initial: "S" },
    { name: "Aarav Capital Foundation", amount: "₹ 1,00,000", time: "4 days ago", initial: "A" },
    { name: "Rajesh Khanna", amount: "₹ 25,000", time: "35 mins ago", initial: "R" },
    { name: "Ananya Deshmukh", amount: "₹ 20,000", time: "1 week ago", initial: "A" },
  ],
  faqs: [
    {
      q: "How does Actsimpact verify this campaign is genuine?",
      a: "Every campaign on Actsimpact undergoes a rigorous 3-step verification: document authentication, on-ground visits by our field team, and regular progress audits. We publish photo and video evidence of material deliveries so you can see exactly where your contribution goes.",
    },
    {
      q: "How will donated materials reach the school?",
      a: "All purchased materials are bulk-ordered through verified local suppliers with direct delivery receipts inspected by our regional field coordinators.",
    },
    {
      q: "Is my donation eligible for 80G tax exemption?",
      a: "Yes. Kameshwar Foundation is registered under Section 80G. An official 80G tax deduction receipt will be emailed immediately after your donation is completed.",
    },
    {
      q: "Can I volunteer or visit the school in person?",
      a: "Yes! Active donors can request structured volunteer and field visits coordinated directly through our impact desk.",
    },
  ],
};
