export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  date: string;
  image: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
  toc: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "from-5-students-under-a-tree-to-200-in-a-classroom",
    title: "From 5 Students Under a Tree to 200+ in a Classroom",
    tag: "Impact Stories",
    date: "Sept 10, 2026",
    image: "/images/card_image_cb3d3c9a.png",
    excerpt:
      "How Kameshwar Yadav turned personal tragedy into a movement — building a grassroots school in Jharkhand's tribal belt that now feeds, shelters, and educates over 200 children.",
    content: {
      intro:
        "Every profound transformation begins with an unyielding choice. When Kameshwar Yadav lost his younger brother to an untreated illness due to poverty and illiteracy in rural Jharkhand, he made a vow: no child in his village would remain deprived of basic knowledge. What began in 2019 as five children sitting on burlap sacks under a banyan tree has today transformed into a fully operational community school with over 200 students.",
      sections: [
        {
          heading: "The Turning Point: When Communities Unite",
          paragraphs: [
            "In the early months, teaching under the open sky meant braving scorching summer heat, sudden monsoon downpours, and bitter winter winds. With no government building in sight and zero budget for chalk or slates, Kameshwar relied on broken charcoal from kitchen chulhas to write on flat stones.",
            "The turning point arrived when an ActImpact relief volunteer documented the school's daily struggles. Within 48 hours of launching a verified fundraiser, 712 individual donors across India chipped in micro-donations ranging from ₹200 to ₹5,000, raising enough capital to construct five brick-and-mortar classrooms, install solar-powered lighting, and secure clean drinking water borewells.",
          ],
        },
        {
          heading: "Beyond Classrooms: Nutrition and Dignity",
          paragraphs: [
            "Education cannot take root on an empty stomach. Understanding this reality, the campaign allocated a dedicated nutritional reserve fund. Today, every enrolled tribal child receives two hot, balanced meals every school day.",
            "Attendance has skyrocketed from 42% to 96%. Parents who once had to send their 8-year-old daughters to gather forest firewood now proudly walk them to morning assembly with notebooks in hand.",
          ],
        },
        {
          heading: "Transparent Disbursements: Every Rupee Documented",
          paragraphs: [
            "One of the cornerstone achievements of this campaign was ActImpact's direct vendor disbursement model. Rather than handing over cash sums, payments for cement, roofing sheets, student benches, and nutritional grains were settled directly with audited local suppliers.",
            "Donors received automated quarterly progress video reports, GST invoice receipts, and handwritten thank-you letters from the children themselves.",
          ],
        },
      ],
    },
    toc: [
      "Every Family's Journey Is Different",
      "Practical Support",
      "Questions to Ask Your Healthcare Team",
      "Small Things Can Make a Big Difference",
      "Caring for Yourself Matters Too",
      "Helpful Resources",
    ],
  },
  {
    slug: "why-indias-tribal-children-are-still-waiting-for-schools",
    title: "Why India's Tribal Children Are Still Waiting for Schools",
    tag: "Education",
    date: "Sept 5, 2026",
    image: "/images/card_image_c1c2cdaa.png",
    excerpt:
      "Over 60 million children in India lack access to quality education. We break down the systemic gaps — and how community-driven crowdfunding is stepping in where policy falls short.",
    content: {
      intro:
        "Over 60 million children across India still lack consistent access to accredited primary education. In remote tribal belts and hilly hamlets, the nearest functional school is often a treacherous 8-kilometer trek across swollen streams and unpaved forest paths.",
      sections: [
        {
          heading: "Geographic Isolation and Teacher Absenteeism",
          paragraphs: [
            "While policy mandates primary schools within a 1-kilometer radius of every settlement, rugged terrain frequently isolates tribal hamlets. Teachers assigned to remote single-teacher schools frequently face severe housing deficits and lack basic road connectivity.",
            "Grassroots crowdfunding bridges this crucial gap by empowering local educated tribal youth with digital learning kits, volunteer honorariums, and solar tablets.",
          ],
        },
        {
          heading: "Crowdfunding as a Catalyst for Structural Change",
          paragraphs: [
            "When communities mobilize around localized education fundraisers, they do more than buy textbooks — they establish accountability. Parents become active stakeholders in school management committees.",
          ],
        },
      ],
    },
    toc: [
      "The Infrastructure Void",
      "Geographic Roadblocks",
      "Decentralized Community Action",
      "How You Can Help Today",
    ],
  },
  {
    slug: "meet-the-712-strangers-who-are-building-a-school-together",
    title: "Meet the 712 Strangers Who Are Building a School Together",
    tag: "Donor Spotlights",
    date: "Aug 28, 2026",
    image: "/images/card_image_0ec6afa6.png",
    excerpt:
      "They've never met each other — but together, 712 donors have raised over ₹8 lakh to give children a permanent school. Here are some of their stories.",
    content: {
      intro:
        "They have never sat in the same room. Some are software engineers in Bengaluru, others are college students in Pune giving up their weekend coffee money, and many are retired civil servants in Kolkata. Yet, these 712 strangers have collectively built a permanent future for an entire village.",
      sections: [
        {
          heading: "Collective Empathy in Real Time",
          paragraphs: [
            "Crowdfunding dismantles the illusion that giving is the exclusive domain of high-net-worth philanthropists. When 700+ individuals each contribute small, consistent amounts, monumental social projects become reality in weeks.",
          ],
        },
      ],
    },
    toc: [
      "The Power of the Collective",
      "Stories from Donors",
      "Tracking Real-Time Progress",
    ],
  },
  {
    slug: "how-500-can-save-a-life-the-power-of-micro-donations",
    title: "How ₹500 Can Save a Life: The Power of Micro-Donations",
    tag: "Health & Medical",
    date: "Aug 20, 2026",
    image: "/images/card_image_e7898014.png",
    excerpt:
      "Small donations create massive impact. We explore how micro-contributions on Actsimpact have collectively funded 340+ life-saving medical treatments this year alone.",
    content: {
      intro:
        "When faced with an ICU treatment bill of ₹12,00,000 for a child undergoing emergency heart surgery, a donation of ₹500 might feel insignificant. But mathematics and human solidarity tell an entirely different story.",
      sections: [
        {
          heading: "The Micro-Giving Revolution in India",
          paragraphs: [
            "With the lightning-fast ubiquity of UPI and mobile banking, donating ₹500 takes less than 15 seconds. When 2,400 people do this over four days, an emergency operation is fully funded with zero delay.",
          ],
        },
      ],
    },
    toc: [
      "The Myth of High Philanthropy",
      "Speed of Execution",
      "Direct Hospital Payouts",
    ],
  },
  {
    slug: "a-first-time-donors-guide-to-crowdfunding-in-india",
    title: "A First-Time Donor's Guide to Crowdfunding in India",
    tag: "Guides",
    date: "Aug 14, 2026",
    image: "/images/card_image_1bd376a0.png",
    excerpt:
      "Everything you need to know before making your first donation — from 80G tax benefits and payment security to tracking exactly where your money goes.",
    content: {
      intro:
        "Giving online should inspire confidence, not anxiety. If you are making your first contribution on a crowdfunding platform, here is your comprehensive checklist on verification, taxation, and transparency.",
      sections: [
        {
          heading: "Verifying Campaign Legitimacy",
          paragraphs: [
            "Always ensure that the platform conducts direct hospital audits, checks doctor estimation slips, and routes funds directly to registered medical institutions.",
          ],
        },
        {
          heading: "Maximizing Section 80G Tax Deductions",
          paragraphs: [
            "Donations made to registered non-profits through ActImpact qualify for up to a 50% deduction under Section 80G of the Indian Income Tax Act. Ensure you enter your PAN during checkout to receive an instant tax certificate.",
          ],
        },
      ],
    },
    toc: [
      "Check the Verification Badges",
      "Understanding Section 80G",
      "Payment Security & Gateways",
    ],
  },
  {
    slug: "inside-actsimpacts-verification-process-how-we-ensure-zero-fraud",
    title: "Inside Actsimpact's Verification Process: How We Ensure Zero Fraud",
    tag: "Community",
    date: "Aug 7, 2026",
    image: "/images/card_image_8c54284b.png",
    excerpt:
      "Every campaign on our platform goes through a 3-step verification — document checks, on-ground visits, and progress audits. Here's a behind-the-scenes look at how we keep your trust.",
    content: {
      intro:
        "In the realm of crowdfunding, trust is not an afterthought — it is the entire foundation. At ActImpact, our zero-tolerance fraud policy is enforced by an independent audit desk consisting of medical social workers and forensic accountants.",
      sections: [
        {
          heading: "The 3-Tier Due Diligence Pipeline",
          paragraphs: [
            "Before any fundraiser is visible to the public, government ID verification, hospital billing desk validation, and local volunteer cross-checks are conducted within 6 hours.",
          ],
        },
      ],
    },
    toc: [
      "Clinical Desk Checks",
      "On-Ground Volunteer Audits",
      "Direct Vendor Disbursement",
    ],
  },
];
