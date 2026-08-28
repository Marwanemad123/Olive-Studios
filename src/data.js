
// Collection 01 — placeholder roster. Menna Hossam's profile, editions
// and Star of the Month copy are preserved in src/data.archive.menna.js
// and can be restored at any time.
// Two tiers: 'standard' (edition of 10) | 'rare' (edition of 5, +20% pricing)

const STD_PRICES    = { '30×40': 1950, '50×70': 3900, '70×100': 5900 };
const STD_FRAMED    = { '30×40': 3200, '50×70': 5400, '70×100': 8500 };
const RARE_PRICES   = { '30×40': 2340, '50×70': 4680, '70×100': 7080 };
const RARE_FRAMED   = { '30×40': 3840, '50×70': 6480, '70×100': 10200 };

window.COLLECTION_NAME    = 'Collection 01';
window.COLLECTION_SUBTITLE = 'مصر اتصّورت بعيون ناسها';

// Placeholder frame used until real photography is supplied.
window.PLACEHOLDER_IMAGE = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%201000%22%3E%3Crect%20width%3D%22800%22%20height%3D%221000%22%20fill%3D%22%23221f1a%22%2F%3E%3Crect%20x%3D%2260%22%20y%3D%2260%22%20width%3D%22680%22%20height%3D%22880%22%20fill%3D%22none%22%20stroke%3D%22%233a352c%22%20stroke-width%3D%222%22%2F%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%234a4436%22%20stroke-width%3D%222%22%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22452%22%20r%3D%2254%22%2F%3E%3Cpath%20d%3D%22M330%20560h140M356%20596h88%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%22400%22%20y%3D%22700%22%20text-anchor%3D%22middle%22%20font-family%3D%22Helvetica%2CArial%2Csans-serif%22%20font-size%3D%2226%22%20letter-spacing%3D%228%22%20fill%3D%22%235c5443%22%3EIMAGE%20PENDING%3C%2Ftext%3E%3C%2Fsvg%3E';

window.ARTWORKS = [
  {
    id: 'p1-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #1', artistId: 'photographer-1',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'architecture', featured: true, number: 'OE-001',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p1-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #1', artistId: 'photographer-1',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'portrait', featured: true, number: 'OE-002',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p2-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #2', artistId: 'photographer-2',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'portrait', featured: true, number: 'OE-003',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p2-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #2', artistId: 'photographer-2',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'landscape', featured: true, number: 'OE-004',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p3-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #3', artistId: 'photographer-3',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'landscape', featured: true, number: 'OE-005',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p3-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #3', artistId: 'photographer-3',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'architecture', featured: true, number: 'OE-006',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p4-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #4', artistId: 'photographer-4',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'architecture', featured: true, number: 'OE-007',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p4-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #4', artistId: 'photographer-4',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'portrait', featured: true, number: 'OE-008',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p5-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #5', artistId: 'photographer-5',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'portrait', featured: false, number: 'OE-009',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p5-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #5', artistId: 'photographer-5',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'landscape', featured: false, number: 'OE-010',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p6-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #6', artistId: 'photographer-6',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'landscape', featured: false, number: 'OE-011',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p6-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #6', artistId: 'photographer-6',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'architecture', featured: false, number: 'OE-012',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p7-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #7', artistId: 'photographer-7',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'architecture', featured: false, number: 'OE-013',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p7-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #7', artistId: 'photographer-7',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'portrait', featured: false, number: 'OE-014',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p8-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #8', artistId: 'photographer-8',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'portrait', featured: false, number: 'OE-015',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p8-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #8', artistId: 'photographer-8',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'landscape', featured: false, number: 'OE-016',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p9-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #9', artistId: 'photographer-9',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'landscape', featured: false, number: 'OE-017',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p9-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #9', artistId: 'photographer-9',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'architecture', featured: false, number: 'OE-018',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'p10-work-1',
    tier: 'standard',
    title: 'Untitled I', titleAr: 'بلا عنوان ١',
    artist: 'Photographer #10', artistId: 'photographer-10',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 10, editionsSold: 0, category: 'architecture', featured: false, number: 'OE-019',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'p10-work-2',
    tier: 'rare',
    title: 'Untitled II', titleAr: 'بلا عنوان ٢',
    artist: 'Photographer #10', artistId: 'photographer-10',
    image: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the work's own description
    description: 'Description pending. Add the story of this piece here — what it shows, where it was made, and why it belongs in the collection.',
    descriptionAr: 'الوصف قيد الإضافة. أضف هنا قصة هذا العمل — ما يصوّره، وأين التُقط، ولماذا ينتمي إلى المجموعة.',
    editionSize: 5, editionsSold: 0, category: 'portrait', featured: false, number: 'OE-020',
    fit: 'cover', aspectRatio: '4 / 5',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
];

window.ARTISTS = [
  {
    id: 'photographer-1', name: 'Photographer #1',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p1-work-1', 'p1-work-2'],
  },
  {
    id: 'photographer-2', name: 'Photographer #2',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p2-work-1', 'p2-work-2'],
  },
  {
    id: 'photographer-3', name: 'Photographer #3',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p3-work-1', 'p3-work-2'],
  },
  {
    id: 'photographer-4', name: 'Photographer #4',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p4-work-1', 'p4-work-2'],
  },
  {
    id: 'photographer-5', name: 'Photographer #5',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p5-work-1', 'p5-work-2'],
  },
  {
    id: 'photographer-6', name: 'Photographer #6',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p6-work-1', 'p6-work-2'],
  },
  {
    id: 'photographer-7', name: 'Photographer #7',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p7-work-1', 'p7-work-2'],
  },
  {
    id: 'photographer-8', name: 'Photographer #8',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p8-work-1', 'p8-work-2'],
  },
  {
    id: 'photographer-9', name: 'Photographer #9',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p9-work-1', 'p9-work-2'],
  },
  {
    id: 'photographer-10', name: 'Photographer #10',
    heroImage: window.PLACEHOLDER_IMAGE,
    // TODO — replace with the photographer's city and country
    location: 'Location pending', locationAr: 'الموقع قيد الإضافة',
    // TODO — replace with the photographer's biography
    bio: 'Biography pending. Add a short profile here: where they work, what they photograph, how they came to it, and anything a collector should know before buying a print.',
    bioAr: 'السيرة قيد الإضافة. أضف هنا نبذة قصيرة: أين يعمل المصوّر، وماذا يصوّر، وكيف بدأ، وما الذي يهمّ المقتني معرفته قبل الشراء.',
    artworkIds: ['p10-work-1', 'p10-work-2'],
  },
];

// ── Hybrid purchase model ──────────────────────────────────────
// Single curator WhatsApp line, used everywhere.
window.CURATOR_WA = '201001161776';

// Tier routing. Returns 'direct' (cart-first) or 'concierge' (curator-first).
// Standard + unframed → direct.  Rare (any format) OR any framed order → concierge.
window.purchaseTier = function (artwork, framed) {
  if (!artwork) return 'direct';
  if (artwork.tier === 'rare') return 'concierge';
  if (framed) return 'concierge';
  return 'direct';
};

// Shipping brackets (EGP). Framed pieces ship in a custom crate → per-item surcharge.
window.SHIPPING = {
  regions: {
    cairo:  { base: 150,  crate: 400,  labelEn: 'Cairo',          labelAr: 'القاهرة',            etaEn: '3–5 business days',   etaAr: '٣–٥ أيام عمل' },
    egypt:  { base: 300,  crate: 600,  labelEn: 'Nationwide',     labelAr: 'باقي أنحاء البلاد',            etaEn: '5–8 business days',   etaAr: '٥–٨ أيام عمل' },
    intl:   { base: 1800, crate: 3500, labelEn: 'International',   labelAr: 'دولي',                etaEn: '10–15 business days', etaAr: '١٠–١٥ يوم عمل' },
  },
  cost: function (region, framedCount) {
    const r = window.SHIPPING.regions[region] || window.SHIPPING.regions.egypt;
    return r.base + (framedCount || 0) * r.crate;
  },
};

// Price for a given artwork configuration.
window.priceFor = function (artwork, size, framed) {
  if (!artwork) return 0;
  return framed ? artwork.framedPrices[size] : artwork.prices[size];
};

// ── Currency display ────────────────────────────────────────────
// All charges settle in EGP. USD/EUR are indicative estimates only,
// shown to reduce friction for international collectors.
window.CURRENCY = {
  order: ['EGP', 'USD', 'EUR'],
  symbols: { EGP: 'EGP', USD: '$', EUR: '€' },
  rates: { EGP: 1, USD: 0.0205, EUR: 0.019 }, // EGP → currency, indicative
};

// Returns { primary, secondary }. When a foreign currency is selected,
// primary is the converted estimate and secondary discloses the true EGP charge.
window.formatPrice = function (amountEGP, currency) {
  const cur = currency || 'EGP';
  if (cur === 'EGP') return { primary: `EGP ${Math.round(amountEGP).toLocaleString()}`, secondary: null };
  const rate = window.CURRENCY.rates[cur] || 1;
  const symbol = window.CURRENCY.symbols[cur] || '';
  const converted = Math.round(amountEGP * rate).toLocaleString();
  return { primary: `${symbol}${converted}`, secondary: `EGP ${Math.round(amountEGP).toLocaleString()} · indicative` };
};

// ── Consistent scarcity language ────────────────────────────────
// One convention everywhere: "3 of 5 remaining". Never a bare fraction.
window.editionLabel = function (artwork, lang) {
  const remaining = artwork.editionSize - artwork.editionsSold;
  return lang === 'AR'
    ? `${remaining} من ${artwork.editionSize} متبقية`
    : `${remaining} of ${artwork.editionSize} remaining`;
};
