/**
 * =========================================================================
 * THE ROYAL WEDDING OF THE WESTERN EMPIRE
 * Empress Navier Ellie Trovi & Emperor Heinrey Alles Lazlo
 * Centralized Wedding Configuration & Lore Data
 * =========================================================================
 */

const WEDDING_CONFIG = {
  // Royal Couple Details
  couple: {
    bride: {
      name: "Navier Ellie Trovi",
      title: "Her Majesty Empress",
      realm: "The Western Empire",
      formerRealm: "Former Empress of the Eastern Empire",
      image: "assets/bride-navier.jpg",
      quote: "Grace, wisdom, and dignity. A queen whose elegance shines as brightly as her heart.",
      description: "Daughter of the prestigious Trovi household, Her Majesty Navier is celebrated across the continent for her sovereign poise, peerless intellect, and compassionate governance. With unwavering fortitude, she ascends the throne of the Western Empire to begin an eternal golden age alongside Emperor Heinrey.",
      attributes: [
        { label: "House", value: "Trovi Dynasty" },
        { label: "Title", value: "Empress of the Western Empire" },
        { label: "Signature Flower", value: "White Imperial Rose" },
        { label: "Symbol", value: "Diamond Crown & Laurel" }
      ]
    },
    groom: {
      name: "Heinrey Alles Lazlo",
      title: "His Majesty Emperor",
      realm: "The Western Empire",
      image: "assets/groom-heinrey.jpg",
      quote: "A beloved emperor whose devotion and courage make him worthy of standing beside his empress.",
      description: "Sovereign of the Western Empire, His Majesty Emperor Heinrey is a monarch of formidable might, dazzling charisma, and legendary valor. Known affectionately to his Empress as the faithful golden royal bird 'Queen', his lifelong devotion to Navier crowns the greatest imperial alliance in continental history.",
      attributes: [
        { label: "House", value: "Lazlo Imperial Dynasty" },
        { label: "Title", value: "Emperor of the Western Empire" },
        { label: "Companion", value: "Queen (The Golden Bird)" },
        { label: "Symbol", value: "Golden Eagle & Laurel" }
      ]
    },
    combined: {
      quote: "Two crowns, two kingdoms, one everlasting love.",
      heroSubtitle: "With the blessings of the Western Empire, we joyfully invite you to witness the union of our beloved Emperor and Empress.",
      closingMessage: "May their reign be blessed with peace, prosperity, and everlasting happiness.",
      signature: "With Love, The Western Empire"
    }
  },

  // Centralized Wedding Date (Easily Editable)
  weddingDate: "2026-10-24T10:00:00",
  weddingDateFormatted: "Saturday, October 24, 2026",
  weddingBannerText: "SATURDAY, OCTOBER 24, 2026 • GRAND ROYAL PALACE",
  receptionTimeFormatted: "06:00 PM Imperial Standard Time",
  ceremonyTimeFormatted: "10:00 AM Imperial Standard Time",

  // Ceremonies and Venues
  events: [
    {
      id: "ceremony",
      title: "The Royal Ceremony",
      type: "Imperial Nuptials & Crown Consecration",
      date: "Saturday, October 24, 2026",
      time: "10:00 AM Imperial Standard Time",
      venue: "The Grand Royal Palace – Hall of Sovereigns",
      location: "Imperial Capital, Western Empire",
      description: "The official holy coronation and sacred wedding exchange of vows between Emperor Heinrey and Empress Navier in the presence of continental high dignitaries, sovereigns, and imperial priests.",
      image: "assets/palace-exterior.jpg",
      details: [
        "10:00 AM – Procession of Continental Sovereigns & Dignitaries",
        "10:30 AM – Entrance of Empress Navier Ellie Trovi",
        "11:00 AM – Imperial Vows & Sacred Crown Bestowal",
        "11:45 AM – Royal Salutation & White Dove Blessing"
      ],
      mapUrl: "https://maps.google.com/?q=Western+Empire+Palace",
      calendarData: {
        title: "Royal Wedding Ceremony: Navier & Heinrey",
        description: "Official imperial wedding ceremony of Her Majesty Empress Navier Ellie Trovi and His Majesty Emperor Heinrey Alles Lazlo.",
        location: "Hall of Sovereigns, Grand Royal Palace, Western Empire"
      }
    },
    {
      id: "reception",
      title: "The Imperial Reception",
      type: "Grand Palace Gala & Banquet",
      date: "Saturday, October 24, 2026",
      time: "06:00 PM Imperial Standard Time",
      venue: "The Imperial Ballroom & Gilded Salon",
      location: "Imperial Capital, Western Empire",
      description: "An evening of transcendent grandeur, fine continental delicacies, classical waltzes, and celebration under Austrian crystal chandeliers in the heart of the Western Empire's royal palace.",
      image: "assets/palace-ballroom.jpg",
      details: [
        "06:00 PM – Imperial Cocktail Promenade & Crystal Garden Walk",
        "07:00 PM – Grand Royal Banquet with High Continental Delicacies",
        "08:30 PM – First Imperial Waltz of Emperor Heinrey & Empress Navier",
        "10:00 PM – Midnight Fireworks over the Imperial Lake"
      ],
      mapUrl: "https://maps.google.com/?q=Imperial+Ballroom+Western+Empire",
      calendarData: {
        title: "Imperial Wedding Reception: Navier & Heinrey",
        description: "Grand banquet and ballroom celebration of Emperor Heinrey and Empress Navier's royal marriage.",
        location: "Imperial Ballroom, Grand Royal Palace, Western Empire"
      }
    }
  ],

  // Gallery Data
  gallery: [
    {
      id: "hero-wedding",
      title: "The Royal Wedding Portrait",
      caption: "Her Majesty Empress Navier in her celestial ivory bridal gown alongside His Majesty Emperor Heinrey in his sovereign white imperial uniform.",
      category: "Portraits",
      src: "assets/wedding-couple-hero.webp",
      aspect: "portrait",
      highlight: true
    },
    {
      id: "bride-portrait",
      title: "Empress Navier Ellie Trovi",
      caption: "An official royal portrait of Empress Navier radiating grace, serene dignity, and regal poise amidst blooming imperial flora.",
      category: "Portraits",
      src: "assets/bride-navier.jpg",
      aspect: "portrait",
      highlight: true
    },
    {
      id: "groom-portrait",
      title: "Emperor Heinrey Alles Lazlo",
      caption: "His Majesty Emperor Heinrey in his sovereign white and gold imperial gala uniform, surrounded by imperial red roses.",
      category: "Portraits",
      src: "assets/groom-heinrey.jpg",
      aspect: "portrait",
      highlight: true
    },
    {
      id: "groom-queen",
      title: "Emperor Heinrey & Queen",
      caption: "Emperor Heinrey with his legendary companion, the golden royal bird 'Queen', bathed in warm golden sunlight.",
      category: "Portraits",
      src: "assets/heinrey-queen.jpg",
      aspect: "portrait",
      highlight: false
    },
    {
      id: "celestial-vows",
      title: "Celestial Imperial Coronation",
      caption: "The solemn and intimate coronation of everlasting love under the star-embroidered royal crest of the Western Empire.",
      category: "Imperial Romance",
      src: "assets/couple-royal-celestial.webp",
      aspect: "portrait",
      highlight: true
    },
    {
      id: "garden-promenade",
      title: "Imperial Rose Promenade",
      caption: "A joyful summer afternoon in the secluded private rose pavilions of the Western Empire palace.",
      category: "Imperial Romance",
      src: "assets/couple-garden-romance.jpg",
      aspect: "portrait",
      highlight: false
    },
    {
      id: "palace-architecture",
      title: "The Western Empire Grand Palace",
      caption: "The sovereign residence of the Lazlo dynasty, towering gracefully under brilliant azure skies and perfumed white rose parterres.",
      category: "Palace & Grounds",
      src: "assets/palace-exterior.jpg",
      aspect: "landscape",
      highlight: false
    },
    {
      id: "ballroom-interior",
      title: "The Grand Gilded Ballroom",
      caption: "Illuminated by hand-cut Austrian crystal chandeliers and gilded arches, prepared for the imperial wedding night celebration.",
      category: "Palace & Grounds",
      src: "assets/palace-ballroom.jpg",
      aspect: "landscape",
      highlight: false
    }
  ],

  // Dress Code Guidance
  dressCode: {
    heading: "AN EVENING OF ROYAL ELEGANCE",
    subheading: "Imperial Formal / Black-Tie & Royal Court Attire",
    description: "Guests are kindly invited to dress in elegant royal-inspired attire to celebrate this extraordinary occasion. In honor of the Western Empire's court traditions, formal gowns, morning suits, or imperial court uniforms are requested.",
    palette: [
      {
        name: "Ivory Cream",
        hex: "#F8F4EB",
        textColor: "#172B45",
        border: "#D6B875",
        usage: "Silk evening gowns, tailored waistcoats, pearl brooches, and delicate lace accents."
      },
      {
        name: "Champagne Gold",
        hex: "#D6B875",
        textColor: "#172B45",
        border: "#ECC880",
        usage: "Gilded embroidery, metallic accessories, gold-threaded vests, and heirloom jewelry."
      },
      {
        name: "Dusty Blue",
        hex: "#A8B8CC",
        textColor: "#172B45",
        border: "#7E97B5",
        usage: "Flowing chiffons, velvet sashes, formal lapels, and morning coats."
      },
      {
        name: "Royal Navy",
        hex: "#172B45",
        textColor: "#F8F4EB",
        border: "#D6B875",
        usage: "Tailored evening tailcoats, imperial court suits, velvet capes, and ceremonial sashes."
      },
      {
        name: "Soft White",
        hex: "#FFFFFF",
        textColor: "#172B45",
        border: "#D6B875",
        usage: "Pleated dress shirts, cuffs, neckerchiefs, and refined imperial embellishments."
      }
    ],
    guidelines: [
      {
        title: "For Noble Ladies",
        text: "Floor-length imperial ballgowns, silk or velvet fabrics, delicate lace gloves, tiaras or floral headpieces. Warm champagne, ivory, and soft pastel undertones are encouraged."
      },
      {
        title: "For Noble Lords",
        text: "Formal royal tailcoats, dark navy or charcoal morning coats, crisp white cravats, heraldic medals, and polished leather boots or dress shoes."
      },
      {
        title: "Imperial Etiquette",
        text: "Out of reverence for Their Imperial Majesties, headpieces adorned with the grand sovereign crown motif are reserved exclusively for the Emperor and Empress."
      }
    ]
  },

  // Initial Blessings & Wishes from Manhwa Characters
  initialWishes: [
    {
      id: 1,
      author: "Sir McKenna",
      title: "Imperial Secretary & Royal Envoy",
      date: "Two days ago",
      message: "To His Majesty Emperor Heinrey and Empress Navier: Watching your journey across empires has been the honor of my life. May your union bring eternal harmony to the Western Empire. (And please, Your Majesty Heinrey, do not make me do all the paperwork during your honeymoon!)",
      avatar: "dove",
      isOfficial: true
    },
    {
      id: 2,
      author: "Laura & Countess Eliza",
      title: "Ladies-in-Waiting to Empress Navier",
      date: "Yesterday",
      message: "Our dearest Empress Navier, our hearts are overflowing with joyful tears. No sovereign has ever deserved true devotion and genuine adoration as much as you. Emperor Heinrey looks at you as though you are the only star in the heavens. We will protect and serve you always!",
      avatar: "crown",
      isOfficial: true
    },
    {
      id: 3,
      author: "Grand Duke Kaufman",
      title: "Special Envoy of the Luipt Academy",
      date: "Yesterday",
      message: "I extend my deepest and most sincere congratulations to Her Majesty Empress Navier and Emperor Heinrey. The continent has witnessed true statesmanship and profound courage. May the Western Empire prosper boundlessly under your shared reign.",
      avatar: "scroll",
      isOfficial: true
    },
    {
      id: 4,
      author: "Duke Ergi Cloud",
      title: "Grand Duke of the Blue Boar",
      date: "Today",
      message: "Well now, Heinrey, you have truly achieved what seemed impossible. To Her Majesty Navier—the Western Empire could not have dreamed of a more magnificent Empress. Raise a glass of the finest champagne for me tonight.",
      avatar: "wine",
      isOfficial: true
    }
  ]
};

// Expose on window for browser access
if (typeof window !== "undefined") {
  window.WEDDING_CONFIG = WEDDING_CONFIG;
}
