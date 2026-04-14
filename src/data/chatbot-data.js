/**
 * Centralized conversation data for the demo chatbot.
 * Kept as a separate module for maintainability (per PRD risk mitigation).
 */

export const INTRO_MESSAGE = {
  text: "Hi! I'm a demo assistant for Mechanically Inclined. This is a preview of what an AI chatbot could do for your business website. How can I help you today?",
  quickReplies: [
    { label: 'Our Services', action: 'services' },
    { label: 'Contact & Hours', action: 'contact' },
    { label: 'FAQs', action: 'faq' },
  ],
};

export const CONVERSATION_TREE = {
  // --- Services Branch ---
  services: {
    text: "We offer a wide range of outdoor services. What are you interested in?",
    quickReplies: [
      { label: 'Sprinkler Repair', action: 'services_sprinkler' },
      { label: 'Lawn & Landscape', action: 'services_lawn' },
      { label: 'Drainage & Concrete', action: 'services_drainage' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },
  services_sprinkler: {
    text: "We specialize in sprinkler system installation, repair, and maintenance — from broken heads and leaking valves to full controller replacements. We service residential and commercial properties in the Forney area.",
    quickReplies: [
      { label: 'Get a Quote', action: 'contact_quote' },
      { label: 'Other Services', action: 'services' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },
  services_lawn: {
    text: "We provide professional lawn care and landscape design services. Whether you need regular maintenance, seasonal treatments, or a complete landscape transformation, we've got you covered.",
    quickReplies: [
      { label: 'Get a Quote', action: 'contact_quote' },
      { label: 'Other Services', action: 'services' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },
  services_drainage: {
    text: "We install French drains to protect your property from water damage, and handle concrete work including patios, walkways, and driveways. We also offer outdoor lighting installation.",
    quickReplies: [
      { label: 'Get a Quote', action: 'contact_quote' },
      { label: 'Other Services', action: 'services' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },

  // --- Contact & Scheduling Branch ---
  contact: {
    text: "Here's how to reach us:\n\n📞 (972) 800-7000\n✉️ jesse@iammechanicallyinclined.com\n📍 309 Long Prairie Dr, Forney, TX\n\n🕐 Mon–Sat: 8 AM – 8 PM\n🚫 Sunday: Closed",
    quickReplies: [
      { label: 'Request a Quote', action: 'contact_quote' },
      { label: 'View Contact Page', action: 'nav_contact' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },
  contact_quote: {
    text: "The best way to get a quote is to reach out with details about your project. You can call us at (972) 800-7000 or fill out our contact form and we'll get back to you promptly.",
    quickReplies: [
      { label: 'Go to Contact Form', action: 'nav_contact' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },

  // --- FAQ Branch ---
  faq: {
    text: "Here are some common questions. What would you like to know?",
    quickReplies: [
      { label: 'Service Area', action: 'faq_area' },
      { label: 'How Long in Business?', action: 'faq_experience' },
      { label: 'Licensed & Insured?', action: 'faq_license' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },
  faq_area: {
    text: "We're based in Forney, TX and serve the surrounding neighborhoods including Rockwall, Heath, Mesquite, and the greater East Dallas area.",
    quickReplies: [
      { label: 'More FAQs', action: 'faq' },
      { label: 'Get in Touch', action: 'contact' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },
  faq_experience: {
    text: "We've been proudly serving the Forney community and have been recognized as a Nextdoor Neighborhood Favorite four years in a row (2021–2024). Our team brings deep hands-on experience to every project.",
    quickReplies: [
      { label: 'More FAQs', action: 'faq' },
      { label: 'Get in Touch', action: 'contact' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },
  faq_license: {
    text: "Yes! We are fully licensed and insured. We carry all the necessary certifications to perform sprinkler, irrigation, and outdoor construction work in the state of Texas.",
    quickReplies: [
      { label: 'More FAQs', action: 'faq' },
      { label: 'Get in Touch', action: 'contact' },
      { label: 'Back to Menu', action: 'restart' },
    ],
  },

  // --- Navigation Actions ---
  nav_contact: {
    text: "Taking you to our contact page now...",
    navigate: '/contact',
    quickReplies: [],
  },
  nav_services: {
    text: "Taking you to our services section...",
    navigate: '/#services',
    quickReplies: [],
  },

  // --- Restart ---
  restart: {
    text: "What else can I help you with?",
    quickReplies: [
      { label: 'Our Services', action: 'services' },
      { label: 'Contact & Hours', action: 'contact' },
      { label: 'FAQs', action: 'faq' },
    ],
  },
};

/**
 * Keyword map for free-text matching.
 * Keys are action IDs from CONVERSATION_TREE.
 * Values are arrays of keywords/phrases that trigger that action.
 */
export const KEYWORD_MAP = [
  { keywords: ['sprinkler', 'irrigation', 'spray', 'head', 'valve', 'controller', 'water system'], action: 'services_sprinkler' },
  { keywords: ['lawn', 'grass', 'mow', 'landscape', 'yard', 'garden', 'plant'], action: 'services_lawn' },
  { keywords: ['drain', 'french drain', 'concrete', 'patio', 'driveway', 'walkway', 'light', 'lighting'], action: 'services_drainage' },
  { keywords: ['service', 'what do you do', 'offerings', 'help with'], action: 'services' },
  { keywords: ['phone', 'call', 'email', 'address', 'location', 'where', 'reach'], action: 'contact' },
  { keywords: ['hour', 'open', 'close', 'schedule', 'time', 'when'], action: 'contact' },
  { keywords: ['quote', 'price', 'cost', 'estimate', 'how much', 'pricing', 'rate'], action: 'contact_quote' },
  { keywords: ['area', 'city', 'cities', 'forney', 'rockwall', 'dallas', 'mesquite', 'serve'], action: 'faq_area' },
  { keywords: ['experience', 'long', 'years', 'history', 'established'], action: 'faq_experience' },
  { keywords: ['license', 'insured', 'insurance', 'certified', 'certification'], action: 'faq_license' },
  { keywords: ['faq', 'question', 'info', 'information', 'about'], action: 'faq' },
  { keywords: ['hi', 'hello', 'hey', 'start', 'menu', 'home'], action: 'restart' },
  { keywords: ['contact form', 'message', 'send message', 'reach out'], action: 'nav_contact' },
];

export const FALLBACK_MESSAGE = {
  text: "I'm not sure I understand that. I'm a simple demo bot with limited responses. Try using the buttons below, or contact us directly for anything specific!",
  quickReplies: [
    { label: 'Our Services', action: 'services' },
    { label: 'Contact & Hours', action: 'contact' },
    { label: 'FAQs', action: 'faq' },
  ],
};
