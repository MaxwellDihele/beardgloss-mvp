// Sample product data for the BeardGloss MVP.
// In production this would come from a CMS or commerce backend.

export const product = {
  id: 'beard-gloss-pouch',
  slug: 'beard-gloss',
  name: 'Beard Gloss',
  tagline: 'Strengthen and give shine to hair — the finishing touch for a beard that means business.',
  price: 149,
  compareAtPrice: 249,
  currency: 'ZAR',
  sku: 'BG-POUCH',
  rating: 4.8,
  reviewCount: 312,
  sizes: ['1 Pouch'],
  benefits: [
    {
      title: 'Instant sheen, zero grease',
      description: 'A weightless, fast-absorbing formula that mirrors natural sebum instead of sitting on top of it.',
    },
    {
      title: 'Softens without the shrink',
      description: 'Conditions coarse, wiry hair so it lies down and holds shape, without the stiffness of wax or balm.',
    },
    {
      title: 'Tames flyaways in one pass',
      description: 'Smooths flyaways and static in one application, even in Highveld dry air or humid coastal heat.',
    },
    
  ],
  ingredients: [
    { name: 'Argan Oil', note: 'Deep conditioning, restores shine' },
    { name: 'Jojoba Oil', note: 'Mimics natural sebum, non-greasy' },
    { name: 'Vitamin E', note: 'Antioxidant, protects hair follicles' },
    { name: 'Sandalwood Extract', note: 'Calms skin, grounds the scent' },
    { name: 'Cedarwood Oil', note: 'Adds depth, supports healthy growth' },
  ],
  howToUse: [
    {
      step: '01',
      title: 'Take a small amount',
      description: 'A little goes a long way — start small for short beards, slightly more for longer growth.',
    },
    {
      step: '02',
      title: 'Warm',
      description: 'Rub between your palms for a few seconds to activate the gloss.',
    },
    {
      step: '03',
      title: 'Work it through',
      description: 'Comb through from root to tip with your fingers, against and then with the grain.',
    },
    {
      step: '04',
      title: 'Set',
      description: 'Shape with a beard comb. No rinsing, no residue — you\'re done.',
    },
  ],
  images: [
    { src: '/images/product/beard-gloss-main.jpg', alt: 'BeardGloss pouch, front label detail' },
    { src: '/images/product/beard-gloss-cart.jpg' },
    { src: '/images/product/beard-gloss-lifestyle.jpg', alt: 'Man holding BeardGloss pouch against the Johannesburg skyline' },
  ]
};

export const testimonials = [
  {
    name: 'Thabo M.',
    location: 'Sandton, JHB',
    quote: 'Every other oil I\'ve used sits on the surface. This one actually disappears into the beard and just leaves it soft.',
    rating: 5,
  },
  {
    name: 'Ryan K.',
    location: 'Cape Town',
    quote: 'The pouch looks like it belongs on a bathroom shelf, not hidden in a drawer. The scent is the compliment-getter.',
    rating: 5,
  },
  {
    name: 'Sipho D.',
    location: 'Pretoria',
    quote: 'A small amount in the morning and I\'m not touching it again until the next day. That\'s the whole review.',
    rating: 5,
  },
];

export const valueProps = [
  {
    title: 'Grooms in seconds',
    description: 'One step, no rinse, no build-up — fits before a meeting, not instead of one.',
  },
  {
    title: 'Built for SA climate',
    description: 'Formulated to hold up from Highveld dry heat to coastal humidity.',
  },
  {
    title: 'Dermatologist tested',
    description: 'Fragrance-balanced and non-comedogenic, safe for daily use on skin and hair.',
  },
];
