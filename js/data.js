/**
 * Discovery Adventures — Central Database
 * All tours depart from the Greater Toronto Area.
 * Destinations: Ontario day-trips only.
 */

/* ══════════════════════════════════════════════
   TOURS DATABASE
   ══════════════════════════════════════════════ */
const TOURS_DB = [

  /* ─── 1. NIAGARA FALLS ──────────────────────────────── */
  {
    id: 'niagara-falls',
    title: 'Niagara Falls Day Trip',
    subtitle: 'From Toronto · Departs 7:30 AM · Returns ~7:30 PM',
    shortDesc: 'Experience the thundering power of Niagara Falls — sail to the base on the Hornblower Niagara Cruise and walk tunnels carved behind 2,800 m³/s of roaring water.',
    price: 65,
    duration: 12,
    maxCapacity: 10,
    difficulty: 'Easy',
    emoji: '🌊',
    accentColor: '#2cc7c1',
    gradient: 'linear-gradient(135deg, #2cc7c1 0%, #4ea7ff 100%)',
    highlights: ['Hornblower Niagara Cruise', 'Journey Behind the Falls', 'Niagara-on-the-Lake'],
    itinerary: [
      { time: '7:30 AM', title: 'Meet & Roll Out', desc: 'Meet your guide at Union Station, Toronto. Van departs sharp — grab your coffee before!' },
      { time: '9:15 AM', title: 'Arrive at Niagara Falls', desc: 'First look at the Falls from the Niagara Parkway. Group photo time — this view never gets old.' },
      { time: '9:30 AM', title: 'Hornblower Cruise 🚢', desc: 'Sail right to the base of the Falls. Ponchos provided — and yes, you will get wet.' },
      { time: '11:00 AM', title: 'Journey Behind the Falls', desc: 'Descend into bedrock tunnels and emerge behind a curtain of 2,800 m³/s of thundering water.' },
      { time: '12:30 PM', title: 'Lunch Break (own)', desc: 'Explore Clifton Hill and the Fallsview district. Dozens of restaurants for every taste and budget.' },
      { time: '2:00 PM', title: 'Table Rock & Skylon Tower', desc: 'Up-close views from Table Rock. Optional Skylon Tower visit for the full panorama (own cost).' },
      { time: '3:30 PM', title: 'Niagara-on-the-Lake 🍷', desc: 'Scenic detour through NOTL\'s charming main street. Wine tasting and ice cream stops encouraged.' },
      { time: '5:30 PM', title: 'Head Back to Toronto', desc: 'Settle in for the return drive up the QEW. Share stories and nap if you need to.' },
      { time: '7:30 PM', title: 'Drop-off in Toronto 🎉', desc: 'Back at Union Station — tired, grinning, and already planning your next trip.' }
    ],
    inclusions: [
      'Return van transport from Toronto',
      'Expert guide all day',
      'Hornblower Niagara Cruise ticket',
      'Journey Behind the Falls entry',
      'Poncho for the boat cruise',
      'Niagara-on-the-Lake scenic stop'
    ],
    exclusions: 'Lunch not included. You\'ll have a free 1.5-hour break in the Fallsview district with tons of options from quick bites to sit-down restaurants.',
    importantNotes: 'Minimum 4 guests required. Wear comfortable walking shoes. Bring a change of clothes for the cruise — you will get wonderfully soaked!',
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

  /* ─── 2. MUSKOKA LAKES ──────────────────────────────── */
  {
    id: 'muskoka-lakes',
    title: 'Muskoka Lakes & Steamship Cruise',
    subtitle: 'From Toronto · Departs 7:00 AM · Returns ~7:00 PM',
    shortDesc: 'Cruise Lake Muskoka aboard the historic RMS Segwun steamship, wander the charming Gravenhurst Wharf, and wind through Ontario\'s most iconic cottage country.',
    price: 85,
    duration: 12,
    maxCapacity: 12,
    difficulty: 'Easy',
    emoji: '🛳️',
    accentColor: '#b14ad6',
    gradient: 'linear-gradient(135deg, #b14ad6 0%, #4ea7ff 100%)',
    highlights: ['RMS Segwun Steamship Cruise', 'Gravenhurst Wharf', 'Bracebridge Falls Walk'],
    itinerary: [
      { time: '7:00 AM', title: 'Depart Toronto', desc: 'Meet at Union Station and head north on the 400. Watch the city skyline give way to boreal forest.' },
      { time: '9:15 AM', title: 'Arrive Gravenhurst Wharf', desc: 'Welcome to the gateway of Muskoka. Browse the boutique shops along the beautifully restored waterfront.' },
      { time: '10:00 AM', title: 'RMS Segwun Steamship 🛳️', desc: 'Board Canada\'s oldest operating steamship for a scenic 2-hour cruise on Lake Muskoka. Commentary included.' },
      { time: '12:00 PM', title: 'Lunch Free Time', desc: 'Enjoy lunch in Gravenhurst or Bracebridge. The Muskoka Brewery and local patios are favourites.' },
      { time: '1:30 PM', title: 'Bracebridge Falls Walk', desc: 'A short, easy walk to the beautiful Bracebridge Falls in the heart of the town. Perfect photo stop.' },
      { time: '2:30 PM', title: 'Cottage Country Scenic Drive', desc: 'Wind through Muskoka\'s back roads past iconic white-pine forests, granite outcrops, and glittering lakes.' },
      { time: '3:30 PM', title: 'Windermere & Lake Rosseau', desc: 'Stop at the Windermere House dock for a look at Lake Rosseau — the jewel of Muskoka.' },
      { time: '4:30 PM', title: 'Head Back to Toronto', desc: 'South on the 400, watching the granite shield give way to the Oak Ridges Moraine as you return.' },
      { time: '7:00 PM', title: 'Arrive Back in Toronto 🎉', desc: 'Back at Union Station, with the scent of pine and fresh lake air still in your memory.' }
    ],
    inclusions: [
      'Return transport from Toronto',
      'Expert local guide',
      'RMS Segwun Steamship cruise ticket',
      'Bracebridge Falls guided walk',
      'Cottage country scenic tour',
      'Muskoka Wharf welcome stop'
    ],
    exclusions: 'Lunch is on your own in Gravenhurst or Bracebridge. Plenty of waterfront patios, casual cafés, and the Muskoka Brewery available.',
    importantNotes: 'The steamship cruise is fully accessible. Comfortable walking shoes recommended for the Bracebridge Falls trail. Bring sunscreen and layers — lake breezes can be cool.',
    availableDates: [
      '2026-05-09','2026-05-23',
      '2026-06-06','2026-06-20',
      '2026-07-04','2026-07-11','2026-07-18','2026-07-25',
      '2026-08-01','2026-08-08','2026-08-15','2026-08-22','2026-08-29',
      '2026-09-05','2026-09-12','2026-09-19','2026-09-26',
      '2026-10-03','2026-10-17'
    ]
  },

  /* ─── 3. ALGONQUIN PARK ─────────────────────────────── */
  {
    id: 'algonquin-canoe',
    title: 'Algonquin Park Canoe & Wildlife Safari',
    subtitle: 'From Toronto · Departs 6:30 AM · Returns ~7:30 PM',
    shortDesc: 'Paddle through pristine Algonquin waterways, spot moose and loons with an expert Ontario naturalist, and enjoy a campfire lunch cooked fresh on a secluded island.',
    price: 95,
    duration: 11,
    maxCapacity: 8,
    difficulty: 'Moderate',
    emoji: '🛶',
    accentColor: '#84d850',
    gradient: 'linear-gradient(135deg, #84d850 0%, #2cc7c1 100%)',
    highlights: ['Canoe & Gear Included', 'Ontario Naturalist Guide', 'Campfire Island Lunch'],
    itinerary: [
      { time: '6:30 AM', title: 'Depart Toronto', desc: 'Early start heading northeast on Hwy 60 toward the park. The drive itself is beautiful once you clear the city.' },
      { time: '9:00 AM', title: 'Enter Algonquin Park', desc: 'Arrive at the East Gate and stop at the iconic Visitor Centre — the wildlife exhibits alone are worth it.' },
      { time: '9:30 AM', title: 'Canoe Launch 🛶', desc: 'Paddle onto calm Canoe Lake with your certified guide. Beginner instruction provided — you\'ll be gliding in minutes.' },
      { time: '11:00 AM', title: 'Wildlife Spotting Route', desc: 'Navigate lily-pad bays and marshy inlets — prime Algonquin territory for moose, beaver, loons, and great blue herons.' },
      { time: '12:30 PM', title: 'Campfire Island Lunch 🔥', desc: 'Beach your canoes on a secluded island and enjoy a hot campfire lunch, fully included in your package.' },
      { time: '2:00 PM', title: 'Lookout Trail Hike', desc: 'Stash the paddles for a short forest hike up the Lookout Trail for sweeping views over the Algonquin interior.' },
      { time: '4:00 PM', title: 'Return to Launch Point', desc: 'Paddle back to the dock. Return gear, swap wildlife stories, and watch for moose on the lake edge at dusk.' },
      { time: '4:30 PM', title: 'Head Back to Toronto', desc: 'Comfortable return drive with stops. The back roads through Whitney and Bancroft are gorgeous.' },
      { time: '7:30 PM', title: 'Arrive Back in Toronto 🎉', desc: 'Home again — mud on your boots, a loon call still in your ears, and memories that last forever.' }
    ],
    inclusions: [
      'Return transport from Toronto',
      'Expert Ontario naturalist guide',
      'Canoe & double paddle rental',
      'PFD life jackets & all safety gear',
      'Freshly cooked campfire island lunch',
      'Algonquin Provincial Park entry fees'
    ],
    exclusions: 'Snacks and extra beverages not included. A waterproof dry bag for your phone is strongly recommended. Bug spray is essential — especially in June and July.',
    importantNotes: 'Maximum 8 guests for an intimate wilderness experience. No prior paddling experience needed — your guide will have you confident on the water within minutes.',
    availableDates: [
      '2026-05-16','2026-05-30',
      '2026-06-13','2026-06-27',
      '2026-07-04','2026-07-11','2026-07-18','2026-07-25',
      '2026-08-01','2026-08-08','2026-08-15','2026-08-22','2026-08-29',
      '2026-09-05','2026-09-12','2026-09-19','2026-09-26',
      '2026-10-03','2026-10-10'
    ]
  },

  /* ─── 4. BRUCE PENINSULA ────────────────────────────── */
  {
    id: 'bruce-peninsula',
    title: 'Bruce Peninsula & Flowerpot Island',
    subtitle: 'From Toronto · Departs 6:00 AM · Returns ~7:00 PM',
    shortDesc: 'Cruise over crystal-clear Georgian Bay waters, hike to the legendary Grotto sea cave, and explore Flowerpot Island\'s iconic sea stacks on the ultimate Ontario day adventure.',
    price: 110,
    duration: 13,
    maxCapacity: 10,
    difficulty: 'Easy–Moderate',
    emoji: '⛵',
    accentColor: '#ec3a6b',
    gradient: 'linear-gradient(135deg, #ec3a6b 0%, #b14ad6 100%)',
    highlights: ['Glass-Bottom Boat Cruise', 'The Grotto Sea Cave', 'Tobermory Village'],
    itinerary: [
      { time: '6:00 AM', title: 'Depart Toronto', desc: 'Early start for this epic full-day adventure. Take the 400 North through Barrie, then up the beautiful Bruce.' },
      { time: '9:30 AM', title: 'Arrive Tobermory Harbour', desc: 'Welcome to "Little Tub" — the most charming harbour in Ontario and gateway to Fathom Five National Marine Park.' },
      { time: '10:00 AM', title: 'Glass-Bottom Boat Cruise 🚢', desc: 'Board the iconic glass-bottom boat to Flowerpot Island. Spot historic shipwrecks in crystal-clear Georgian Bay.' },
      { time: '11:30 AM', title: 'Flowerpot Island Explore', desc: 'Hike the island trails, marvel at the famous sea-stack "flowerpots," and visit the restored 1885 lighthouse.' },
      { time: '1:00 PM', title: 'Tobermory Lunch Break', desc: 'Free 1.5 hours in Tobermory. The harbour-side fish & chips are legendary — don\'t skip them.' },
      { time: '2:30 PM', title: 'The Grotto at Cyprus Lake 🏊', desc: 'Hike 1.5km to the Grotto — a dramatic sea cave with surreal turquoise Georgian Bay water. Swim if you dare!' },
      { time: '4:00 PM', title: 'Indian Head Cove', desc: 'A short walk to this breathtaking rocky shoreline with towering limestone cliffs. The best photo stop on the trip.' },
      { time: '5:00 PM', title: 'Head Back to Toronto', desc: 'Long but gorgeous drive home along the Bruce Peninsula. Watch for deer and turkeys on the highway edges.' },
      { time: '7:00 PM', title: 'Arrive Back in Toronto 🎉', desc: 'Back in the city, already planning your next escape. The water really is that blue — and you have the photos to prove it.' }
    ],
    inclusions: [
      'Return transport from Toronto',
      'Expert guide throughout the day',
      'Glass-bottom boat cruise ticket',
      'Flowerpot Island landing fee',
      'Fathom Five National Marine Park entry',
      'Guided Grotto & Indian Head Cove hike'
    ],
    exclusions: 'Lunch is on your own in Tobermory. Swimwear recommended for the Grotto in summer. Water shoes are helpful but not required.',
    importantNotes: 'Grotto hike involves rocky terrain — sturdy, closed-toe footwear is essential. Bring swimwear and a towel May–September. Georgian Bay water is cold but stunningly clear!',
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

/* ══════════════════════════════════════════════
   BLOG DATABASE — Full Article Content
   ══════════════════════════════════════════════ */
const BLOG_DB = [
  {
    id: 'niagara-packing-guide',
    title: 'What to Pack for Your First Niagara Falls Cruise',
    excerpt: 'Getting soaked at the base of Niagara Falls is a rite of passage — but only if you\'re prepared. Our guide breaks down exactly what to bring for a perfect spray-filled day.',
    category: 'Travel Tips',
    categoryColor: '#f08a2e',
    emoji: '🎒',
    readTime: '5 min read',
    date: 'Jan 12, 2026',
    tags: ['Niagara', 'Packing', 'Travel Tips'],
    article: {
      lead: 'Standing at the railing of the Hornblower Niagara Cruise as 2,800 cubic metres of water per second thunders past your face is one of those experiences you\'ll never forget. But arriving unprepared — soaked through your only layer, phone destroyed, photos ruined — is equally memorable, and not in the good way. After running this trip hundreds of times, here\'s exactly what our guides recommend you bring.',
      sections: [
        {
          h2: 'Clothing: Layers are Everything',
          body: 'Ontario weather is famously unpredictable, and the mist from the Falls adds a whole extra dimension. In summer, wear a light moisture-wicking base layer — not cotton, which stays wet and cold — topped with something you don\'t mind getting completely soaked. A poncho is provided on the Hornblower cruise, but it won\'t keep your shoes dry. Waterproof trail runners or sandals with back straps are ideal. In spring and fall, add a packable fleece underneath your poncho layer. The spray zone at the base of the Falls is significantly cooler than the surrounding air.',
          tip: 'Pack a full change of clothes in a dry bag at the bottom of your backpack. After the cruise, changing into dry gear transforms the rest of the day.'
        },
        {
          h2: 'Protecting Your Phone & Camera',
          body: 'The mist from Horseshoe Falls reaches far — including the viewing platform at Table Rock. A waterproof phone case (the zip-lock pouch style works perfectly and costs about $10) is non-negotiable if you want photos. For camera users, a small microfibre cloth in your jacket pocket lets you wipe the lens between shots. Keep your camera bag in a dry bag until you\'re ready to shoot. GoPros and action cameras are perfect for the cruise — mount one to your chest strap and capture everything hands-free while you live in the moment.',
          tip: 'The best Horseshoe Falls photos are taken from the Canadian side, looking at the curve of the falls. Arrive at Table Rock at 9:15 AM before the tour buses get there.'
        },
        {
          h2: 'What to Bring in Your Day Pack',
          body: 'You\'ll be on your feet for 10-12 hours, so pack smart. Essentials include: sunscreen (the open boat deck has no shade), a reusable water bottle (there are fill stations throughout the park), cash or a credit card for lunch and optional extras like the Skylon Tower, a small first-aid kit with blister bandages, and light snacks for the van ride. If you wear glasses, a retention strap is worth the $5 investment — gusts near the Falls can be surprisingly strong. Photo ID is required for the Hornblower cruise check-in.',
          list: [
            'Waterproof phone case or pouch',
            'Change of clothes in a dry bag',
            'Sunscreen (SPF 30+)',
            'Reusable water bottle',
            'Cash + credit card for lunch',
            'Comfortable, closed-toe footwear',
            'Light snacks for the drive',
            'Glasses strap (if applicable)',
            'Small microfibre cloth for lenses'
          ]
        },
        {
          h2: 'What NOT to Bring',
          body: 'Leave the expensive leather bag at home — the mist reaches everything. Avoid bringing valuable jewellery (the spray zone is not the place to discover a clasp has opened). Heavy DSLR camera kits can be a burden for the full day of walking, so consider travelling light with just your phone. Don\'t bring an opened umbrella onto the boat deck — the wind will destroy it and annoy everyone nearby. And resist the urge to bring a full-size beach towel; a compact microfibre travel towel takes up a fraction of the space.'
        },
        {
          h2: 'A Note on Timing',
          body: 'The Hornblower cruise is most dramatic when the light is soft — early morning or late afternoon. On our 7:30 AM departures, you hit the Falls before the main tourist crowds arrive, and the morning mist creates stunning golden-hour photo conditions. Travelling in July and August? Book the cruise first thing on arrival. By noon, the queues are significant and the boat fills up fast.'
        }
      ],
      closing: 'The Niagara Falls Day Trip runs year-round from Toronto — even in winter, the frozen formations around the Falls are extraordinary. Whatever season you choose, pack smart, leave your valuables secure, and get ready for one of Ontario\'s most iconic natural spectacles.'
    }
  },

  {
    id: 'bruce-peninsula-viewpoints',
    title: 'Top 5 Viewpoints on the Bruce Peninsula',
    excerpt: 'From the Grotto\'s surreal turquoise water to the sweeping panoramas of Indian Head Cove — these are the shots you\'ll still be talking about years from now.',
    category: 'Destination Guides',
    categoryColor: '#b14ad6',
    emoji: '📸',
    readTime: '7 min read',
    date: 'Feb 3, 2026',
    tags: ['Bruce Peninsula', 'Photography', 'Destination Guides'],
    article: {
      lead: 'The Bruce Peninsula doesn\'t look like Ontario. The water is the kind of turquoise you expect in the Caribbean, the limestone cliffs could pass for the Mediterranean coast, and the old-growth cedar forests feel ancient in a way that slows you down. But it\'s only three hours from Toronto — and on a clear summer day, it\'s one of the most beautiful places on earth. Here are the five viewpoints every first-time visitor needs to experience.',
      sections: [
        {
          h2: '1. The Grotto at Cyprus Lake',
          body: 'The Grotto is the Bruce Peninsula\'s crown jewel and the most photographed spot in the entire Georgian Bay region. A 1.5-kilometre hike through silver maple and cedar forest brings you to a collapsed sea cave where Georgian Bay enters through underwater passages, creating a pool of unreal aquamarine water. In summer, brave swimmers plunge in from the surrounding ledges. The best photos are taken from the rocks above the cave entrance looking down into the pool — arrive before 10 AM to have it without crowds.',
          tip: 'The Grotto is located within Cyprus Lake Provincial Park. A day-use parking fee applies, but it\'s included in your Discovery Adventures trip package.'
        },
        {
          h2: '2. Indian Head Cove',
          body: 'A five-minute walk from the Grotto brings you to Indian Head Cove — and many visitors argue it\'s even more spectacular. A broad flat limestone shelf overlooks the open Georgian Bay, with views of Flowerpot Island in the distance. The water here is glass-clear down to 6 metres, and on calm days the colours shift between pale mint, turquoise, and deep navy as the depth increases. This is the spot for wide-angle landscape shots, particularly in the golden hour before the tour boats arrive.',
          tip: 'The rock shelf can be slippery when wet. Wear closed-toe footwear with good grip — sandals are a recipe for a painful slip.'
        },
        {
          h2: '3. Flowerpot Island Sea Stacks',
          body: 'Reachable only by boat from Tobermory\'s Little Tub Harbour, Flowerpot Island is named for its two famous sea stacks — columns of dolomite rock sculpted by wave action over thousands of years. The larger "flowerpot" stands 12 metres tall. The island trail loops past both formations, through cedar woods, and up to a viewpoint with sweeping vistas of the Fathom Five National Marine Park. The glass-bottom boat ride to get there also reveals the ghostly silhouettes of several 19th-century shipwrecks in the crystal-clear water below.',
          list: [
            'Big Flowerpot: 12m tall, visible from the dock',
            'Small Flowerpot: more delicate, best photographed in morning light',
            'Lighthouse viewpoint: panoramic view of Georgian Bay',
            'Cave beneath the big flowerpot: accessible at low water',
            'Shipwrecks visible from the glass-bottom boat on the way over'
          ]
        },
        {
          h2: '4. Lion\'s Head Lookout',
          body: 'If you have the option to stop at Lion\'s Head on your way up the peninsula, take it. A 30-minute hike up a well-maintained trail rewards you with one of the most dramatic cliff-edge views in Ontario — a sheer 50-metre limestone escarpment overlooking Georgian Bay, with the Niagara Escarpment stretching north as far as you can see. In fall, the forests below turn brilliant red and gold. Bring a tripod for sunrise shots if you\'re ambitious — the east-facing cliff catches the first light of dawn.'
        },
        {
          h2: '5. Tobermory Harbour at Sunset',
          body: 'Often overlooked because most visitors head home in the late afternoon, the Tobermory harbour at sunset is quietly magnificent. The fleet of dive boats, glass-bottom cruisers, and kayaks return to Little Tub as the sun drops over the treeline, painting the water gold and copper. The harbourfront restaurants and ice cream shops are in full swing, and the energy of a small town at golden hour is something special. If your trip schedule allows even 30 extra minutes, stay for this.'
        }
      ],
      closing: 'Our Bruce Peninsula & Flowerpot Island day trip hits all five of these locations in a single day — the Grotto, Indian Head Cove, Flowerpot Island, and Tobermory harbour — departing from Toronto every weekend from May through October. Spots sell out fast in peak summer, so book early.'
    }
  },

  {
    id: 'ontario-wilderness-safety',
    title: 'Safety Tips for Ontario Wilderness Day Hikes',
    excerpt: 'The backcountry is extraordinary — but only when you respect it. Our certified guides share the principles they live by, from bear awareness to navigation and hydration.',
    category: 'Safety',
    categoryColor: '#2cc7c1',
    emoji: '🛡️',
    readTime: '6 min read',
    date: 'Feb 18, 2026',
    tags: ['Safety', 'Hiking', 'Wilderness', 'Ontario'],
    article: {
      lead: 'Every year, Ontario\'s provincial parks and conservation areas welcome millions of day hikers — and every year, a small number of them end up in situations that a little preparation could have prevented. We\'re not talking about catastrophes. We\'re talking about the hiker who ran out of water on the Lookout Trail in Algonquin, the family who took a wrong turn on the Cyprus Lake loop and added 3 hours to their day, or the person whose phone died with their offline map on it. These are fixable problems. Here\'s how to fix them before they happen.',
      sections: [
        {
          h2: 'Tell Someone Where You\'re Going',
          body: 'This sounds obvious, but it\'s the single most important thing a solo hiker or small group can do. Before leaving, text a friend or family member with: the park name, the specific trail you\'re hiking, your estimated return time, and what vehicle you\'re in. If you\'re on a guided trip, this is handled for you — your guide registers with the park and carries emergency communication gear. If you\'re hiking independently in Algonquin or the Bruce, leave a written note on your dashboard too. Park rangers check.',
          tip: 'Download the AllTrails or Gaia GPS app before you leave home, and download your route for offline use. Cell service is non-existent in most of Algonquin Park and spotty on the Bruce.'
        },
        {
          h2: 'Water: More Than You Think You Need',
          body: 'The standard guideline is 500ml of water per hour of hiking in moderate conditions. On a hot Ontario summer day with high humidity, that goes up significantly. Bring more than you think you\'ll need. A 2-litre bottle for a 4-hour trail is the absolute minimum. Collapsible bottles are great for saving pack space. If you\'re going deep into backcountry, a Sawyer Squeeze filter or iodine tablets let you drink from the pristine lakes and streams of Algonquin safely. Don\'t drink untreated surface water — even in the cleanest-looking Ontario wilderness, giardia is a real risk.',
          list: [
            '500ml per hour minimum in moderate weather',
            '750ml–1L per hour in summer heat or strenuous terrain',
            'Electrolyte tablets are worth packing for long days',
            'Water filter for any hike over 4 hours in backcountry'
          ]
        },
        {
          h2: 'Bear Awareness in Algonquin Park',
          body: 'Algonquin Provincial Park has one of Ontario\'s healthiest black bear populations — a good thing for the ecosystem, and something every visitor should be aware of. Black bears are generally shy and avoidant of humans, but an encounter with a food-habituated bear or a mother with cubs requires confident handling. Store all food and scented items (including sunscreen and lip balm) in a bear box or hung cache, never in your tent or canoe. If you encounter a bear on a trail, speak calmly, make yourself appear large, back away slowly, and never run. Our guides are trained in bear awareness and carry bear spray on all Algonquin trips.',
          tip: 'Bear bells are largely considered ineffective by wildlife biologists. Talk loudly on the trail instead — especially around blind corners and dense bush. Surprise encounters are the main cause of bear incidents.'
        },
        {
          h2: 'Weather and Trail Conditions',
          body: 'Ontario weather changes fast — especially near Georgian Bay and in the elevated terrain of the Algonquin highlands. A morning that starts sunny and 24°C can turn into thunderstorms by 2 PM. Check the Environment Canada forecast the evening before and again the morning of your hike. Lightning is the most serious weather hazard; if you hear thunder, get off exposed ridges and cliff tops immediately. On the Bruce Peninsula, limestone rock becomes extremely slippery when wet — reduce your pace and take the time to test each foothold.',
          list: [
            'Check Environment Canada forecast the night before',
            'Bring a packable rain shell even on sunny days',
            'Get off exposed ridges and clifftops at the first sign of lightning',
            'Wet limestone on the Bruce is glass-smooth — slow down',
            'Hypothermia is possible in Ontario even in summer — layers matter'
          ]
        },
        {
          h2: 'The 10 Essentials for Ontario Day Hiking',
          body: 'You don\'t need a massive pack for a day hike, but these 10 items should always come with you: navigation (downloaded offline map + compass), sun protection (SPF 30+), insulation (extra layer), illumination (phone flashlight or headlamp), first-aid supplies, fire starting tools (waterproof matches in a dry bag), repair tools and knife, nutrition (extra food beyond what you think you\'ll eat), hydration (filter + plenty of water), and emergency shelter (a space blanket weighs 60 grams and can save your life).'
        }
      ],
      closing: 'All Discovery Adventures guides are certified in Wilderness First Aid and carry full emergency kits on every single trip. We handle the safety logistics so you can focus on the experience — but even on a guided trip, knowing the basics makes you a more confident and capable outdoor adventurer.'
    }
  },

  {
    id: 'muskoka-hidden-gems',
    title: 'Beyond the Steamship: Hidden Gems of Muskoka',
    excerpt: 'Everyone knows about the lakes. But Muskoka has a quieter, more local side — cascading waterfalls, century-old opera houses, and family farms that most tourists drive right past.',
    category: 'Destination Guides',
    categoryColor: '#b14ad6',
    emoji: '💎',
    readTime: '8 min read',
    date: 'Mar 5, 2026',
    tags: ['Muskoka', 'Hidden Gems', 'Destination Guides', 'Ontario'],
    article: {
      lead: 'Ask most Torontonians about Muskoka and they\'ll mention the same things: the Segwun steamship, the big resort lakes, the Sunday traffic on the 400. All fair — but scratch beneath the surface of cottage country and you\'ll find a Muskoka that moves at a different pace. Charming small towns, thundering waterfalls right in the middle of downtown streets, artist studios, family-run farm stands, and views that have inspired Canadian painters for over a century. This is the Muskoka we love showing people.',
      sections: [
        {
          h2: 'Bracebridge Falls: Downtown Drama',
          body: 'Most visitors drive through Bracebridge on their way to a resort and barely slow down. But parked on Manitoba Street and walking two minutes to the Muskoka River, they\'d find Bracebridge Falls — a powerful cascade that drops 18 metres through a rocky gorge right in the centre of the town. The falls powered early Muskoka industries and today power a small hydro station, but they remain wild and beautiful. The viewing platform on the west bank gives you face-level with the torrent. In spring snowmelt, the roar is overwhelming.',
          tip: 'Visit the falls at the end of May or beginning of June when snowmelt from the highlands pushes maximum flow through the river. The difference from summer levels is extraordinary.'
        },
        {
          h2: 'The Gravenhurst Opera House',
          body: 'Built in 1901, the Gravenhurst Opera House is one of the oldest operating theatres in Ontario and one of Muskoka\'s most beloved cultural landmarks. The intimate 300-seat hall hosts concerts, plays, and community events year-round, and the building itself — with its tin ceiling, heritage woodwork, and perfect sightlines — is worth the visit even if no show is on. If you\'re in Gravenhurst on a Friday evening in summer, check the events calendar. Local musicians and touring acts fill the summer season.',
          tip: 'The Gravenhurst Opera House is two blocks from the Muskoka Wharf. Walk it in under five minutes.'
        },
        {
          h2: 'The Muskoka Wharf Artisan District',
          body: 'The Muskoka Wharf in Gravenhurst has been beautifully restored from its industrial origins into a waterfront district of artisan shops, galleries, and waterside restaurants. Local potters, jewellers, weavers, and painters have studios here, and on summer weekends the promenade fills with an outdoor market. It\'s an ideal spot to pick up something handmade and locally significant as a souvenir — far more interesting than a mass-produced Muskoka chair magnet.',
          list: [
            'Steamship Landing Gallery: rotating exhibits by Muskoka artists',
            'The Wharf Boat Rentals: kayaks and paddleboards by the hour',
            'Muskoka Brewery Taproom: craft lagers and ales with lake views',
            'The Wharf Patio: best patio for watching the Segwun return to dock',
            'Weekend farmer\'s market: local honey, preserves, fresh produce'
          ]
        },
        {
          h2: 'The McMichael Canadian Art Collection',
          body: 'Technically just south of Muskoka in Kleinburg (an easy stop on the drive back to Toronto), the McMichael is one of Canada\'s great art institutions. Its 6,500-work collection focuses on the Group of Seven — the painters who came to Ontario\'s Shield country in the early 20th century and changed how Canadians understood their landscape. Seeing Tom Thomson\'s "The Jack Pine" or A.Y. Jackson\'s Algonquin scenes in person, after spending a day paddling the exact lakes they painted, is a uniquely moving experience.',
          tip: 'Admission is included in your Discovery Adventures Muskoka trip on select dates. Check current availability when booking.'
        },
        {
          h2: 'Lake Rosseau at Sunset',
          body: 'Windermere, on the eastern shore of Lake Rosseau, is one of the quietest and most beautiful places in Muskoka. The historic Windermere House (a grand Victorian resort that has operated since 1870) sits on a sweeping lawn that runs to a boat dock, with views west over the full length of the lake. At sunset, the light turns the water every shade of gold, orange, and rose. There are no crowds, no tour buses, no gift shops. Just the lake, the treeline, and the sound of loons calling from the far shore.'
        }
      ],
      closing: 'Our Muskoka Lakes & Steamship Cruise day trip takes you to the Gravenhurst Wharf, the RMS Segwun cruise, Bracebridge Falls, and the Lake Rosseau scenic drive — all from Toronto in a single long summer day. Running every weekend from May to October.'
    }
  },

  {
    id: 'algonquin-first-timer',
    title: 'First-Timer\'s Complete Guide to Algonquin Park',
    excerpt: 'Ontario\'s most famous park has been welcoming visitors since 1893. Here\'s everything a first-time day-tripper needs to know before they arrive — what to expect, when to go, and why it\'s worth the early start.',
    category: 'Destination Guides',
    categoryColor: '#b14ad6',
    emoji: '🗺️',
    readTime: '9 min read',
    date: 'Mar 22, 2026',
    tags: ['Algonquin', 'First Timer', 'Destination Guides', 'Ontario'],
    article: {
      lead: 'Algonquin Provincial Park is 7,653 square kilometres of boreal forest, 2,400 lakes, and some of the best wildlife-watching in eastern Canada. Established in 1893, it\'s Ontario\'s oldest and most celebrated provincial park — and it sits just 2.5 hours north of downtown Toronto. If you\'ve never been, here\'s everything you need to know before your first visit.',
      sections: [
        {
          h2: 'The Highway 60 Corridor: What It Is and Why It Matters',
          body: 'Most day visitors to Algonquin experience the park via the Highway 60 corridor — a 55-kilometre stretch of road that runs east-west through the southern portion of the park. Along this corridor you\'ll find the main Visitor Centre, 14 day-use areas with canoe launches, several short hiking trails, and the most accessible wildlife-watching terrain in the park. The vast majority of Algonquin\'s 2,400 lakes and its true wilderness interior are only accessible by portage canoe — that\'s the backcountry experience. The Hwy 60 corridor is the day-tripper\'s Algonquin, and it is more than enough for a full, rewarding day.',
          tip: 'Stop at the Algonquin Visitor Centre (Km 43 on Hwy 60) first. The building has a spectacular elevated deck overlooking a beaver pond and boreal forest, and the exhibits inside give crucial context for what you\'re about to see in the park.'
        },
        {
          h2: 'When to Go: A Season-by-Season Guide',
          body: 'Every season in Algonquin is a genuinely different experience. Summer (June–August) is peak wildlife activity — moose calves are out, loons are nesting, and the park is lush green. The Hwy 60 corridor can get busy on summer weekends. Fall (mid-September to mid-October) is arguably the most spectacular: the maples, birches, and aspens turn brilliant red and gold, and moose are in rut, making them much more active and visible from the road. The crowds thin significantly after Labour Day. Spring (May–early June) is excellent for birding — warblers, thrushes, and sandpipers flood the park on their northward migration — but the bugs are intense.',
          list: [
            'Summer: best for canoeing, swimming, maximum wildlife activity',
            'Fall: best for foliage, moose rut, photography, fewer crowds',
            'Spring: best for birds, wildflowers, spring waterfalls',
            'Winter: cross-country skiing and snowshoeing on select trails'
          ]
        },
        {
          h2: 'Wildlife: What You\'re Most Likely to See',
          body: 'Algonquin has around 2,000 moose — one of the highest densities in Ontario. The best moose viewing is early morning and evening along the Hwy 60 corridor, particularly at the marshy lake edges at Kilometres 10, 14, and 30. Moose feed on aquatic plants in the shallows at these times. Common loons are on nearly every lake; listen for their haunting tremolo call at dusk. Beavers are active at dawn and dusk near their lodge complexes. Wolves are present in good numbers but rarely seen by day visitors. Black bears are common but shy; seeing one is a bonus, not a guarantee.',
          tip: 'The dawn window (30 minutes before sunrise to 1 hour after) is by far the best time for wildlife. On our 6:30 AM Toronto departures, you arrive in the park right at the peak activity window.'
        },
        {
          h2: 'Day Hiking Trails from the Hwy 60 Corridor',
          body: 'The Lookout Trail (Km 39.7) is the most rewarding short hike in the park — a 1.9km loop with a steep final climb to a granite-rock viewpoint over the Algonquin interior. The view stretches for 30+ kilometres over an endless sea of boreal forest. The Beaver Pond Trail (Km 45.2) is flat, easy, and almost guaranteed to show you active beaver infrastructure. The Spruce Bog Boardwalk (Km 42.5) is a 1.5km loop through a rare sphagnum bog ecosystem — surreal and worth the 45 minutes.'
        },
        {
          h2: 'What to Pack for an Algonquin Day Trip',
          body: 'Layers are non-negotiable — even in July, morning temperatures can be 10–15°C cooler than the afternoon. Bug spray is essential from May through August; blackflies in May and June are genuinely challenging. A dry bag for your phone protects it on the canoe. Binoculars transform the wildlife experience — even a basic 8×42 pair makes the difference between "I saw something brown" and "that\'s a cow moose with a calf." And always bring more water than you think you need.',
          list: [
            'Bug spray (DEET-based for serious protection in June–July)',
            'Binoculars (8×42 or 10×42)',
            'Waterproof layer / rain shell',
            'Water: minimum 2L per person',
            'Trail snacks and lunch (no services at most launch points)',
            'Dry bag for phone and electronics',
            'Headlamp (for early starts or late returns)',
            'Wildlife ID guide or iNaturalist app'
          ]
        }
      ],
      closing: 'Our Algonquin Park Canoe & Wildlife Safari runs May through October from Toronto. It\'s a long, rewarding day that covers the best of the Hwy 60 corridor, gives you 4 hours on the water with a certified naturalist guide, and gets you back to the city by 7:30 PM. Maximum 8 guests means genuine wildlife immersion, not a bus tour.'
    }
  },

  {
    id: 'ontario-wildlife-spotting',
    title: 'How to Spot Ontario Wildlife Like a Pro Naturalist',
    excerpt: 'Moose, loons, beavers, great blue herons, osprey — Ontario is extraordinary for wildlife. Our expert guides share the techniques and timing that make all the difference.',
    category: 'Travel Tips',
    categoryColor: '#f08a2e',
    emoji: '🦌',
    readTime: '6 min read',
    date: 'Apr 8, 2026',
    tags: ['Wildlife', 'Nature', 'Travel Tips', 'Ontario'],
    article: {
      lead: 'The difference between a visitor who sees a moose and one who doesn\'t usually isn\'t luck. It\'s timing, positioning, patience, and knowing what to look for before the animal itself comes into view. Our naturalist guides have spent thousands of hours in Algonquin Park, the Bruce Peninsula, and Muskoka\'s waterways, and these are the techniques that make consistent wildlife observation possible for anyone.',
      sections: [
        {
          h2: 'The Golden Hours: When Wildlife Are Most Active',
          body: 'In Ontario\'s boreal and mixed forests, the two most productive wildlife windows are the hour around sunrise and the hour before sunset. During these periods, temperatures are lower, there are fewer human disturbances, and most of Ontario\'s larger mammals and birds are actively feeding. Moose feed in shallow lake edges and marshes at dawn. Beavers emerge to repair their lodges at dusk. Loons call most vocally in the late evening. Great blue herons stalk shallow water throughout the day but are most active at dawn. If you want to see Algonquin\'s wildlife, the 6:30 AM departure is not optional — it\'s the whole game.',
          tip: 'On our Algonquin canoe trips, we\'re on the water by 9:30 AM — which, having driven 2.5 hours from Toronto, still catches the tail end of the morning activity window. Every minute of that early start matters.'
        },
        {
          h2: 'Reading the Landscape for Moose',
          body: 'Moose are the signature wildlife of Algonquin and Muskoka, and with roughly 2,000 in the park, your odds of a sighting on a full day trip are genuinely good — if you know where to look. Moose favour the interface between open water and forest: the lily-pad edges of lakes, slow-moving rivers with aquatic vegetation, and roadside ditches with standing water in early morning. They\'re most visible in May (calves just born), in September (bulls in rut are highly active), and on overcast days when they avoid the midday heat. Watch for "the dark post that moves" — moose are so tall that at distance their legs look like fence posts and their body like a tree trunk.',
          tip: 'Never approach a moose, especially a cow with a calf. Moose are responsible for more wildlife-related injuries in Ontario than bears. Observe from your canoe or a respectful distance of at least 50 metres.'
        },
        {
          h2: 'Listening for Loons',
          body: 'The common loon is perhaps the most evocative sound in the Canadian wilderness — a haunting tremolo wail that carries for kilometres across still lake water. Loons mate for life and are fiercely territorial on their nesting lakes. Listen for four distinct calls: the wail (long-distance communication between pairs), the tremolo (alarm call, also given in flight), the yodel (male territorial call — loud, complex, unmistakable), and the hoot (quiet contact call between close family members). On Canoe Lake in Algonquin, you\'ll almost certainly hear loons. Seeing one up close — a bird as large as a goose, with its stunning black-and-white breeding plumage — is one of Ontario\'s genuine wildlife thrills.',
          list: [
            'Wail: long, rising and falling — pairs communicating across lakes',
            'Tremolo: rapid, laughing sound — alarm or flight call',
            'Yodel: complex, loud — male territorial defence',
            'Hoot: soft, brief — close contact between family members'
          ]
        },
        {
          h2: 'Reading Beaver Evidence',
          body: 'You\'re more likely to see beaver evidence than the animal itself, since beavers are largely nocturnal. But learning to read their landscape is deeply satisfying. A lodge is a mound of sticks and mud with no visible entrance (the entrance is always underwater). A food cache — a pile of sticks anchored underwater near the lodge — tells you beavers are actively using this site. Fresh chewing marks on tree stumps are pale yellow or white; old marks are grey. A dam with water lapping over its lip is intact and maintained. If you see all of these signs, slow down and scan the water around dusk — your chances of a sighting are excellent.',
          tip: 'Beavers create a loud tail slap on the water surface when alarmed — usually as they dive. If you hear a sharp crack while paddling quietly through a marshy bay, you were just spotted first.'
        },
        {
          h2: 'Respecting Wildlife: The Ethical Framework',
          body: 'All wildlife observation in Ontario provincial parks operates under a simple ethical framework: the animal\'s welfare comes before your photo. Never bait wildlife with food (it\'s illegal, harmful, and creates dangerous habituation). Don\'t pursue an animal for a better shot — let it move on. Stay in your canoe when observing from the water; disembarking and approaching is stressful for most species. Share sightings with other visitors rather than keeping the location to yourself — Ontario\'s wildlife heritage belongs to everyone. And report injured or extremely habituated animals to park staff rather than trying to help them yourself.'
        }
      ],
      closing: 'Our Ontario naturalist guides have decades of combined field experience in Algonquin, Muskoka, and the Bruce Peninsula. On every canoe trip, they bring spotting scopes, a library of field guides, and the patience and skill to turn a morning on the water into a genuine wildlife education. Book the Algonquin Park Canoe & Wildlife Safari to experience the difference a great guide makes.'
    }
  }
];

/* ══════════════════════════════════════════════
   UTILITY FUNCTIONS
   ══════════════════════════════════════════════ */

function getTourById(id) {
  return TOURS_DB.find(t => t.id === id) || null;
}

function getBlogById(id) {
  return BLOG_DB.find(b => b.id === id) || null;
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const days   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const date   = new Date(y, m - 1, d);
  return `${days[date.getDay()]}, ${months[m-1]} ${d}, ${y}`;
}

function generateBookingId() {
  return `#DA-${Math.floor(1000 + Math.random() * 9000)}`;
}

function getAllTourDates() {
  const map = {};
  TOURS_DB.forEach(tour => {
    tour.availableDates.forEach(date => {
      if (!map[date]) map[date] = [];
      map[date].push(tour.id);
    });
  });
  return map;
}

function getQueryParams() {
  const params = {};
  new URLSearchParams(window.location.search).forEach((v, k) => { params[k] = v; });
  return params;
}
