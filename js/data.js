/**
 * Discovery Adventures — Central Tour Database
 * Single source of truth for all tour data across the entire site.
 * Modifying this file updates content site-wide automatically.
 */

const TOURS_DB = [

  /* ─── TOUR 1: NIAGARA FALLS ─────────────────────────────────────────── */
  {
    id: 'niagara-falls',
    title: 'Niagara Falls Day Trip',
    subtitle: 'From Toronto · Departs 7:30 AM · Returns ~7:30 PM',
    shortDesc: 'Experience the thundering power of one of the world\'s most iconic natural wonders — sail to the base on a Hornblower Cruise and walk tunnels carved behind 2,800 m³/s of cascading water.',
    price: 65,
    duration: 12,
    maxCapacity: 10,
    difficulty: 'Easy',
    emoji: '🌊',
    accentColor: '#2cc7c1',
    gradient: 'linear-gradient(135deg, #2cc7c1 0%, #4ea7ff 100%)',
    highlights: ['Hornblower Niagara Cruise', 'Journey Behind the Falls', 'Niagara-on-the-Lake'],
    itinerary: [
      { time: '7:30 AM', title: 'Meet & Roll Out', desc: 'Meet your guide at the pickup point in downtown Toronto. Van departs sharp — grab your coffee before!' },
      { time: '9:15 AM', title: 'Arrive at Niagara Falls', desc: 'First look at the Falls from the Niagara Parkway. Group photo time — this view never gets old.' },
      { time: '9:30 AM', title: 'Hornblower Cruise 🚢', desc: 'Get soaked (in the best way) on a boat ride right to the base of the Falls. Ponchos provided.' },
      { time: '11:00 AM', title: 'Journey Behind the Falls', desc: 'Walk the tunnels carved into the rock and emerge behind a curtain of 2,800 m³/s of thundering water.' },
      { time: '12:30 PM', title: 'Lunch Break (on your own)', desc: 'Explore Clifton Hill and the Fallsview district. Dozens of restaurants for every taste & budget.' },
      { time: '2:00 PM', title: 'Table Rock & Skylon Tower', desc: 'Up-close Falls views from Table Rock, then an optional trip up Skylon Tower for the full panorama (own cost).' },
      { time: '3:30 PM', title: 'Niagara-on-the-Lake Stop 🍷', desc: 'Quick scenic detour through NOTL\'s charming main street. Wineries and ice cream stops encouraged.' },
      { time: '5:30 PM', title: 'Head Back to Toronto', desc: 'Settle in for the return drive. Share stories, relive your favourite moments, and nap if you need to.' },
      { time: '7:30 PM', title: 'Drop-off in Toronto 🎉', desc: 'Back where we started — tired, grinning, and already planning your next adventure.' }
    ],
    inclusions: [
      'Return van transport from Toronto',
      'Expert guide all day',
      'Hornblower Niagara Cruise ticket',
      'Journey Behind the Falls entry',
      'Poncho for the boat cruise',
      'Niagara-on-the-Lake scenic stop'
    ],
    exclusions: 'Lunch not included. You\'ll have a free 1.5-hour break in the Fallsview district with tons of restaurant options for every budget — from grab-and-go to fine dining.',
    importantNotes: 'Minimum 4 guests required to run. Wear comfortable walking shoes. Bring a change of clothes for the Hornblower Cruise — you will get wonderfully wet!',
    availableDates: [
      '2026-01-10','2026-01-24',
      '2026-02-07','2026-02-21',
      '2026-03-07','2026-03-21',
      '2026-04-04','2026-04-18',
      '2026-05-02','2026-05-16','2026-05-30',
      '2026-06-06','2026-06-20',
      '2026-07-04','2026-07-18',
      '2026-08-01','2026-08-15','2026-08-29',
      '2026-09-05','2026-09-19',
      '2026-10-03','2026-10-17',
      '2026-11-07','2026-11-21',
      '2026-12-05'
    ]
  },

  /* ─── TOUR 2: BANFF & LAKE LOUISE ───────────────────────────────────── */
  {
    id: 'banff-lake-louise',
    title: 'Banff & Lake Louise Explorer',
    subtitle: 'From Calgary · Departs 7:00 AM · Returns ~7:00 PM',
    shortDesc: 'Discover surreal turquoise glacier lakes, hike Johnston Canyon\'s dramatic waterfalls, and ride the Banff Gondola for 360° panoramic views of six breathtaking mountain ranges.',
    price: 120,
    duration: 10,
    maxCapacity: 12,
    difficulty: 'Moderate',
    emoji: '🏔️',
    accentColor: '#b14ad6',
    gradient: 'linear-gradient(135deg, #b14ad6 0%, #ec3a6b 100%)',
    highlights: ['Moraine Lake Viewpoint', 'Johnston Canyon Hike', 'Banff Gondola Ride'],
    itinerary: [
      { time: '7:00 AM', title: 'Depart Calgary', desc: 'Meet at the designated pickup spot in downtown Calgary. Coffee stop en route to the mountains.' },
      { time: '8:30 AM', title: 'Johnston Canyon Hike', desc: 'Hike the iconic canyon trail past cascading waterfalls to the Lower Falls and Upper Ink Pots. ~2 hours.' },
      { time: '10:45 AM', title: 'Moraine Lake Arrival 🏔️', desc: 'Walk the Rockpile Trail for that iconic Valley of the Ten Peaks view. Bring your camera — this is the shot.' },
      { time: '12:00 PM', title: 'Lake Louise Lakeshore Walk', desc: 'Wander the emerald lakeshore with views of the Victoria Glacier reflecting in perfect turquoise water.' },
      { time: '1:30 PM', title: 'Lunch Break', desc: 'Enjoy lunch at your own pace in Lake Louise Village — cafés, delis, and scenic picnic spots available.' },
      { time: '2:30 PM', title: 'Banff Gondola Ride 🚡', desc: 'Ride to the summit of Sulphur Mountain for 360° views of six mountain ranges. Gondola tickets included.' },
      { time: '4:00 PM', title: 'Banff Townsite Explore', desc: 'Free time in the charming Banff townsite — boutique shops, galleries, and the famous Bow River views.' },
      { time: '5:30 PM', title: 'Return Drive to Calgary', desc: 'Scenic Trans-Canada highway drive back as golden hour paints the Rockies in warm orange light.' },
      { time: '7:00 PM', title: 'Arrive Back in Calgary 🎉', desc: 'Return to downtown Calgary, full of mountain memories and fresh Rocky Mountain air.' }
    ],
    inclusions: [
      'Return transport from Calgary',
      'Certified mountain guide',
      'Banff Gondola tickets (both ways)',
      'Johnston Canyon guided hike',
      'Moraine Lake & Lake Louise access stops',
      'Banff National Park entry fee'
    ],
    exclusions: 'Lunch is on your own. Gondola summit snack bar available. Comfortable hiking boots or trail runners strongly recommended.',
    importantNotes: 'Moderate fitness required — Johnston Canyon hike is ~4km round trip with uneven terrain. Layers are essential as mountain temperatures change dramatically throughout the day.',
    availableDates: [
      '2026-01-17','2026-01-31',
      '2026-02-14','2026-02-28',
      '2026-03-14','2026-03-28',
      '2026-04-11','2026-04-25',
      '2026-05-09','2026-05-23',
      '2026-06-06','2026-06-20',
      '2026-07-04','2026-07-11','2026-07-18','2026-07-25',
      '2026-08-08','2026-08-22',
      '2026-09-12','2026-09-26',
      '2026-10-10','2026-10-24',
      '2026-11-14'
    ]
  },

  /* ─── TOUR 3: ALGONQUIN PARK ─────────────────────────────────────────── */
  {
    id: 'algonquin-canoe',
    title: 'Algonquin Canoe & Wildlife Safari',
    subtitle: 'From Toronto · Departs 6:30 AM · Returns ~7:30 PM',
    shortDesc: 'Paddle through pristine Algonquin waterways, spot moose and loons with an expert naturalist guide, and enjoy a magical campfire lunch cooked fresh on a secluded island.',
    price: 95,
    duration: 11,
    maxCapacity: 8,
    difficulty: 'Moderate',
    emoji: '🛶',
    accentColor: '#84d850',
    gradient: 'linear-gradient(135deg, #84d850 0%, #2cc7c1 100%)',
    highlights: ['Canoe & Gear Included', 'Expert Naturalist Guide', 'Campfire Island Lunch'],
    itinerary: [
      { time: '6:30 AM', title: 'Depart Toronto', desc: 'Early start from downtown Toronto. It\'s worth every minute — the park is calling your name.' },
      { time: '9:00 AM', title: 'Enter Algonquin Park', desc: 'Arrive at the East Gate and stop at the iconic Visitor Centre to spot birds and get your bearings.' },
      { time: '9:30 AM', title: 'Canoe Launch 🛶', desc: 'Paddle onto calm Canoe Lake with your certified guide. Paddling instruction provided for beginners.' },
      { time: '11:00 AM', title: 'Wildlife Spotting Route', desc: 'Navigate through lily-pad bays and marshy channels — prime territory for moose, beaver, and common loons.' },
      { time: '12:30 PM', title: 'Campfire Island Lunch 🔥', desc: 'Beach your canoes on a secluded island for a cooked campfire lunch. Fully included in your package.' },
      { time: '2:00 PM', title: 'Afternoon Paddle & Lookout Trail', desc: 'Continue exploring the waterways, then hike the Lookout Trail for sweeping panoramic views over the park.' },
      { time: '4:00 PM', title: 'Return to Launch Point', desc: 'Paddle back to the dock. Return canoes and gear, and share your favourite wildlife sightings of the day.' },
      { time: '4:30 PM', title: 'Head Back to Toronto', desc: 'Comfortable return drive with stops as needed. Watch for moose along the highway edges at dusk!' },
      { time: '7:30 PM', title: 'Arrive Back in Toronto 🎉', desc: 'Home again — with mud on your boots and memories that\'ll last a lifetime.' }
    ],
    inclusions: [
      'Return transport from Toronto',
      'Expert naturalist guide all day',
      'Canoe & double paddle rental',
      'PFD life jackets & all safety gear',
      'Freshly cooked campfire island lunch',
      'Algonquin Provincial Park entry fees'
    ],
    exclusions: 'Snacks and extra beverages not included. Waterproof dry bags for electronics strongly recommended. Bug spray is absolutely essential — especially in June and July.',
    importantNotes: 'Maximum group of 8 people for an intimate, immersive experience. No prior paddling experience required — your guide will have you comfortable on the water within minutes.',
    availableDates: [
      '2026-05-16','2026-05-30',
      '2026-06-13','2026-06-27',
      '2026-07-04','2026-07-11','2026-07-18','2026-07-25',
      '2026-08-01','2026-08-08','2026-08-15','2026-08-22','2026-08-29',
      '2026-09-05','2026-09-12','2026-09-19','2026-09-26',
      '2026-10-03','2026-10-10'
    ]
  },

  /* ─── TOUR 4: BRUCE PENINSULA ────────────────────────────────────────── */
  {
    id: 'bruce-peninsula',
    title: 'Bruce Peninsula & Flowerpot Island',
    subtitle: 'From Toronto · Departs 6:00 AM · Returns ~7:00 PM',
    shortDesc: 'Cruise over crystal-clear Georgian Bay waters, hike to the legendary Grotto sea cave, and explore the iconic Flowerpot Island sea stacks on this ultimate Ontario day adventure.',
    price: 110,
    duration: 13,
    maxCapacity: 10,
    difficulty: 'Easy–Moderate',
    emoji: '⛵',
    accentColor: '#ec3a6b',
    gradient: 'linear-gradient(135deg, #ec3a6b 0%, #b14ad6 100%)',
    highlights: ['Glass-Bottom Boat Cruise', 'The Grotto Sea Cave', 'Tobermory Village'],
    itinerary: [
      { time: '6:00 AM', title: 'Depart Toronto', desc: 'An early start for this epic full-day adventure up the Bruce Peninsula. Coffee stop included en route.' },
      { time: '9:30 AM', title: 'Arrive Tobermory Harbour', desc: 'Welcome to "Little Tub" — the jumping-off point for the most beautiful waters in Ontario.' },
      { time: '10:00 AM', title: 'Glass-Bottom Boat Cruise 🚢', desc: 'Board the iconic glass-bottom boat to Flowerpot Island. Spot historic shipwrecks in crystal-clear Georgian Bay.' },
      { time: '11:30 AM', title: 'Flowerpot Island Explore', desc: 'Hike the island trails, see the famous sea-stack "flowerpots," and visit the restored historic lighthouse.' },
      { time: '1:00 PM', title: 'Tobermory Lunch Break', desc: 'Back in Tobermory for a free 1.5-hour lunch break. Fresh harbour-side fish & chips are legendary here.' },
      { time: '2:30 PM', title: 'The Grotto at Cyprus Lake 🏊', desc: 'Hike 1.5km to the legendary Grotto — a sea cave with surreal turquoise water. Swim if you dare!' },
      { time: '4:00 PM', title: 'Indian Head Cove', desc: 'A short walk to this breathtaking rocky shoreline with jaw-dropping Georgian Bay views. Perfect for photos.' },
      { time: '5:00 PM', title: 'Head Back to Toronto', desc: 'Long but scenic drive home. Relive the highlights — you\'ll need the photos to convince people the water is that blue.' },
      { time: '7:00 PM', title: 'Arrive Back in Toronto 🎉', desc: 'Back in the city, already planning your next escape to the Peninsula.' }
    ],
    inclusions: [
      'Return transport from Toronto',
      'Expert guide throughout the day',
      'Glass-bottom boat cruise ticket',
      'Flowerpot Island landing fee',
      'Fathom Five National Marine Park entry',
      'Guided Grotto & Indian Head Cove hike'
    ],
    exclusions: 'Lunch is on your own in Tobermory. Swimwear recommended for the Grotto in summer months. Water shoes are helpful but not required at the Grotto.',
    importantNotes: 'Grotto hike involves rocky terrain — sturdy, closed-toe footwear is essential. Bring swimwear and a towel May–September. The water is cold but unbelievably clear!',
    availableDates: [
      '2026-05-09','2026-05-23',
      '2026-06-06','2026-06-13','2026-06-27',
      '2026-07-04','2026-07-11','2026-07-18','2026-07-25',
      '2026-08-01','2026-08-08','2026-08-15','2026-08-22',
      '2026-09-05','2026-09-19',
      '2026-10-03','2026-10-17'
    ]
  }

];

/* ─── BLOG POSTS DATABASE ──────────────────────────────────────────────── */
const BLOG_DB = [
  {
    id: 'niagara-packing-guide',
    title: 'What to Pack for Your First Niagara Cruise',
    excerpt: 'Getting soaked at the base of Niagara Falls is a rite of passage — but only if you\'re prepared. Our guide breaks down exactly what to bring so you enjoy every spray-filled moment.',
    category: 'Travel Tips',
    categoryColor: '#f08a2e',
    emoji: '🎒',
    readTime: '5 min read',
    date: 'Jan 12, 2026',
    tags: ['Niagara', 'Packing', 'Travel Tips']
  },
  {
    id: 'banff-photo-spots',
    title: 'Top 5 Photo Spots in Banff National Park',
    excerpt: 'From the iconic Valley of the Ten Peaks reflection at Moraine Lake to the sweeping panorama atop Sulphur Mountain — these are the shots you\'ll be talking about for years.',
    category: 'Destination Guides',
    categoryColor: '#b14ad6',
    emoji: '📸',
    readTime: '7 min read',
    date: 'Feb 3, 2026',
    tags: ['Banff', 'Photography', 'Destination Guides']
  },
  {
    id: 'wilderness-safety-tips',
    title: 'Safety Tips for Wilderness Day Hikes',
    excerpt: 'The backcountry is incredible, but only when you respect it. Our certified guides share the 10 safety principles they live by — from bear awareness to hydration and navigation.',
    category: 'Safety',
    categoryColor: '#2cc7c1',
    emoji: '🛡️',
    readTime: '6 min read',
    date: 'Feb 18, 2026',
    tags: ['Safety', 'Hiking', 'Wilderness']
  },
  {
    id: 'bruce-peninsula-hidden-gems',
    title: 'Hidden Gems of the Bruce Peninsula',
    excerpt: 'Beyond the famous Grotto, the Bruce Peninsula hides sea caves, painted cliffs, and secret swimming holes that most visitors never find. We\'re spilling all our favourite secrets.',
    category: 'Destination Guides',
    categoryColor: '#b14ad6',
    emoji: '💎',
    readTime: '8 min read',
    date: 'Mar 5, 2026',
    tags: ['Bruce Peninsula', 'Hidden Gems', 'Destination Guides']
  },
  {
    id: 'algonquin-first-timer',
    title: 'First-Timer\'s Guide to Algonquin Park',
    excerpt: 'Algonquin in summer is magical. Algonquin in fall is transcendent. Here\'s everything a first-time visitor needs to know — what to expect, what to bring, and what will surprise you.',
    category: 'Destination Guides',
    categoryColor: '#b14ad6',
    emoji: '🗺️',
    readTime: '9 min read',
    date: 'Mar 22, 2026',
    tags: ['Algonquin', 'First Timer', 'Destination Guides']
  },
  {
    id: 'wildlife-spotting-guide',
    title: 'How to Spot Wildlife Like a Pro Naturalist',
    excerpt: 'Moose, loons, beavers, and even black bears — our expert naturalists share the techniques, timing, and patience strategies that make all the difference in the wild.',
    category: 'Travel Tips',
    categoryColor: '#f08a2e',
    emoji: '🦌',
    readTime: '6 min read',
    date: 'Apr 8, 2026',
    tags: ['Wildlife', 'Nature', 'Travel Tips']
  }
];

/* ─── UTILITY FUNCTIONS ─────────────────────────────────────────────────── */

/** Find a tour by its ID string */
function getTourById(id) {
  return TOURS_DB.find(t => t.id === id) || null;
}

/** Format a date string (YYYY-MM-DD) into a human-readable format */
function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const date = new Date(y, m - 1, d);
  return `${days[date.getDay()]}, ${months[m-1]} ${d}, ${y}`;
}

/** Generate a random booking confirmation number */
function generateBookingId() {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `#DA-${num}`;
}

/** Get all unique dates across all tours, mapped to their tour IDs */
function getAllTourDates() {
  const map = {}; // key: 'YYYY-MM-DD', value: array of tour IDs
  TOURS_DB.forEach(tour => {
    tour.availableDates.forEach(date => {
      if (!map[date]) map[date] = [];
      map[date].push(tour.id);
    });
  });
  return map;
}

/** Get URL query parameters as an object */
function getQueryParams() {
  const params = {};
  new URLSearchParams(window.location.search).forEach((v, k) => { params[k] = v; });
  return params;
}
