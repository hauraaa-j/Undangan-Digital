# The Royal Wedding of Her Majesty Empress Navier Ellie Trovi & His Majesty Emperor Heinrey Alles Lazlo
### The Western Empire Imperial Digital Invitation Website

Inspired by the Korean fantasy romance manhwa **The Remarried Empress (The Second Marriage / 재혼 황후)**.

---

## 👑 Overview

This website is a luxurious, immersive digital royal wedding invitation representing the sovereign marriage between **Her Majesty Empress Navier Ellie Trovi** and **His Majesty Emperor Heinrey Alles Lazlo** of the Western Empire.

The entire experience is crafted to feel like receiving an official royal decree directly from the imperial palace of the Western Empire.

---

## 🏛️ Project Structure

```text
undangan digital/
├── index.html           # Main entry point with full React 18 & Tailwind integration
├── app.js               # Modular React component source suite
├── styles.css           # Luxury imperial CSS (gold foil shimmer, 3D envelope, petals)
├── weddingConfig.js     # Centralized wedding dates, lore, gallery, and dress code config
├── audio.js             # Web Audio API engine: Romantic Royal Waltz & sound effects
├── assets/              # Canonical manhwa illustrations & palace backgrounds
│   ├── wedding-couple-hero.webp   # Navier & Heinrey in full wedding gown & suit
│   ├── bride-navier.jpg           # Official portrait of Empress Navier Ellie Trovi
│   ├── groom-heinrey.jpg          # Official portrait of Emperor Heinrey & Queen
│   ├── couple-royal-celestial.webp # Romantic celestial robes & imperial crowns
│   ├── couple-garden-romance.jpg  # Summer promenade in imperial rose pavilions
│   ├── palace-exterior.jpg        # Western Empire Grand Palace & rose parterres
│   └── palace-ballroom.jpg        # Grand Gilded Ballroom with Austrian chandeliers
└── README.md            # Documentation & project guide
```

---

## ✨ Features & Interactive Highlights

1. **Cinematic Opening Royal Envelope**:
   - 3D perspective ivory royal envelope with Western Empire golden wax seal.
   - Click to break the wax seal with crystal chime sound effect and golden sparkle burst.
   - Flap smoothly unfolds and reveals a miniature portrait of Navier & Heinrey before transitioning into the main palace announcement.
   - Re-openable anytime via the envelope icon in the navigation bar.

2. **Magnificent Hero Section**:
   - High-quality canon illustration of Navier and Heinrey in their royal wedding attire.
   - Imperial crest of the Western Empire with golden laurel and crown motif.
   - Text: *"Two crowns, two kingdoms, one everlasting love."*
   - Floating golden dust particles and soft royal sunbeam lighting.

3. **Meet The Bride & Groom**:
   - Two-column editorial portrait presentation with gold filigree frames.
   - **Left**: Her Majesty Empress Navier Ellie Trovi (former Empress of the Eastern Empire, sovereign of grace and wisdom).
   - **Right**: His Majesty Emperor Heinrey Alles Lazlo (beloved sovereign, master of magic, and faithful companion "Queen").
   - Detailed lore badges, royal houses, and quotes.

4. **Imperial Countdown Timer**:
   - Functional real-time countdown calculating Days, Hours, Minutes, and Seconds.
   - Automatically synchronizes with `weddingConfig.js`.
   - Direct integration with **Google Calendar** and downloadable **.ics** file for Apple Calendar & Microsoft Outlook.

5. **Wedding Details & Itinerary**:
   - **The Royal Ceremony**: 10:00 AM at The Grand Royal Palace (Hall of Sovereigns).
   - **The Imperial Reception**: 06:00 PM at The Imperial Ballroom & Gilded Salon.
   - Detailed timeline schedules, carriage protocol, and interactive venue modal.

6. **The Royal Gallery & Full-Screen Lightbox**:
   - Editorial masonry gallery displaying all 7 canon manhwa illustrations.
   - Filter categories: All, Portraits, Imperial Romance, Palace & Grounds.
   - Interactive Lightbox with keyboard navigation (← / → / Esc), captions, and smooth transitions.

7. **Dress Code: An Evening of Royal Elegance**:
   - Official imperial dress guide for Noble Ladies and Noble Lords.
   - Interactive color swatches: Ivory Cream (`#F8F4EB`), Champagne Gold (`#D6B875`), Dusty Blue (`#A8B8CC`), Royal Navy (`#172B45`), and Soft White (`#FFFFFF`).
   - Imperial court etiquette on royal crown regalia.

8. **Official RSVP Decree Form**:
   - Imperial document parchment styling with input validation.
   - Options to *Joyfully Accept with Honor* or *Regretfully Decline from Afar*.
   - Stores guest confirmation locally and generates an imperial wax-sealed certificate.

9. **Imperial Guestbook & Blessings**:
   - Preloaded with authentic character congratulations: Sir McKenna, Laura & Countess Eliza, Grand Duke Kaufman, Duke Ergi Cloud.
   - Interactive form allowing visitors to inscribe their personal blessings, which appear live on vintage parchment cards and persist in `localStorage`.

10. **Closing Acclamation & Royal Waltz Audio**:
    - *"Long Live the Emperor and Empress — May their reign be blessed with peace, prosperity, and everlasting happiness."*
    - Built-in Web Audio API Romantic Royal Waltz synthesizer that plays offline without any external streaming dependencies.
    - Floating white rose petal toggle.

---

## 🚀 How to Run & Preview

You can open the website in any modern web browser using any of the following methods:

### Method 1: Direct File Open
Simply double-click `index.html` in Windows Explorer or open it directly in Chrome, Edge, or Opera. The application is built to run smoothly directly on `file:///`.

### Method 2: VS Code Live Server
1. Open this folder in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.

### Method 3: Any Static Server
```bash
npx serve .
# or
python -m http.server 8000
```
Navigate to `http://localhost:8000`.

---

## ⚙️ Customization

All wedding dates, times, venues, couple quotes, and lore can be modified in a single location:
**`weddingConfig.js`**

```javascript
const WEDDING_CONFIG = {
  weddingDate: "2026-10-24T10:00:00",
  weddingDateFormatted: "Saturday, October 24, 2026",
  // ...
};
```
