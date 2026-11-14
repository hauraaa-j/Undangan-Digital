/**
 * =========================================================================
 * THE ROYAL WEDDING OF NAVIER & HEINREY
 * Imperial Digital Invitation Application Suite
 * The Western Empire
 * =========================================================================
 */

const { useState, useEffect, useRef } = React;

// -------------------------------------------------------------------------
// 1. REFINED INLINE SVG ICONS (Zero Encoding Corruptions, 100% Crisp)
// -------------------------------------------------------------------------

const RoyalCrest = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4D0" />
        <stop offset="50%" stopColor="#D6B875" />
        <stop offset="100%" stopColor="#876228" />
      </linearGradient>
    </defs>
    {/* Crown Top */}
    <path d="M35 24 L50 14 L65 24 L60 30 L40 30 Z" fill="url(#goldGrad)" stroke="#876228" strokeWidth="1" />
    <circle cx="50" cy="13" r="2.5" fill="#FFF" stroke="#D6B875" />
    <circle cx="34" cy="23" r="2" fill="#FFF" stroke="#D6B875" />
    <circle cx="66" cy="23" r="2" fill="#FFF" stroke="#D6B875" />
    
    {/* Shield Base */}
    <path d="M28 32 C28 32 50 28 50 28 C50 28 72 32 72 32 C72 58 50 72 50 72 C50 72 28 58 28 32 Z" 
          fill="#172B45" stroke="url(#goldGrad)" strokeWidth="2.5" />
    
    {/* Golden Royal Bird (Queen) Silhouette */}
    <path d="M50 36 C45 42 40 45 35 48 C42 49 46 51 50 58 C54 51 58 49 65 48 C60 45 55 42 50 36 Z" 
          fill="url(#goldGrad)" />
    <circle cx="50" cy="42" r="3" fill="#FFF4D0" />
    <path d="M47 46 L50 49 L53 46 Z" fill="#876228" />
    
    {/* Laurel Wreath */}
    <path d="M22 36 C18 45 20 60 32 68 M78 36 C82 45 80 60 68 68" 
          stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    
    {/* Imperial Ribbons */}
    <path d="M30 72 L18 82 L26 82 L34 75 M70 72 L82 82 L74 82 L66 75" 
          fill="url(#goldGrad)" stroke="#876228" strokeWidth="0.8" />
    <path d="M32 73 Q50 78 68 73 L66 79 Q50 84 34 79 Z" 
          fill="url(#goldGrad)" stroke="#876228" strokeWidth="0.8" />
  </svg>
);

const GoldDiamond = ({ className = "w-3 h-3 text-[#D6B875]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
  </svg>
);

const CrownIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z" />
  </svg>
);

const MusicNoteIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12Z" />
  </svg>
);

const VolumeMuteIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12M19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.62 14.91 21 13.5 21 12C21 7.72 17.84 4.15 13.72 3.65V5.72C16.72 6.2 19 8.83 19 12M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.45 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L4.27 3M12 4L9.91 6.09L12 8.18V4Z" />
  </svg>
);

const CalendarIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowLeftIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const QuillIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L3 11.5V21h9.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
);

const EnvelopeIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const FiligreeOrnament = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 2 C15 2 25 12 25 25 M2 2 C2 15 12 25 25 25 M2 2 L12 12 M20 4 C26 4 32 10 32 16 M4 20 C4 26 10 32 16 32" 
          stroke="#D6B875" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="8" r="2" fill="#D6B875" />
  </svg>
);

const CrownDivider = ({ text = "" }) => (
  <div className="flex items-center justify-center gap-4 my-8">
    <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[180px] bg-gradient-to-r from-transparent via-[#D6B875] to-transparent"></div>
    <div className="flex items-center gap-2 text-[#D6B875]">
      <GoldDiamond className="w-2.5 h-2.5" />
      <CrownIcon className="w-5 h-5" />
      {text && <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#D6B875] font-semibold">{text}</span>}
      <GoldDiamond className="w-2.5 h-2.5" />
    </div>
    <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[180px] bg-gradient-to-r from-transparent via-[#D6B875] to-transparent"></div>
  </div>
);

// -------------------------------------------------------------------------
// 2. OPENING ENVELOPE COMPONENT
// -------------------------------------------------------------------------

const OpeningEnvelope = ({ onOpenComplete }) => {
  const [sealState, setSealState] = useState("intact"); // intact, broken, opening, finished
  const [isOpeningAnim, setIsOpeningAnim] = useState(false);

  const handleOpenInvitation = () => {
    if (sealState !== "intact") return;

    if (window.royalAudio) {
      window.royalAudio.playSealBreakSound();
    }

    setSealState("broken");

    setTimeout(() => {
      setIsOpeningAnim(true);
      setSealState("opening");
    }, 500);

    setTimeout(() => {
      if (window.royalAudio) {
        window.royalAudio.start();
      }
    }, 1100);

    setTimeout(() => {
      setSealState("finished");
      if (onOpenComplete) onOpenComplete();
    }, 2200);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-1000 ${
      sealState === "finished" ? "opacity-0 pointer-events-none scale-105" : "opacity-100 bg-[#0E1A2B]/95 backdrop-blur-xl"
    }`}>
      {/* Floating Golden Dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle-particle"
            style={{
              width: `${(i % 3) * 2 + 3}px`,
              height: `${(i % 3) * 2 + 3}px`,
              top: `${(i * 5) % 100}%`,
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${(i % 4) + 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-lg envelope-perspective">
        <div className={`relative bg-[#F8F4EB] rounded-lg shadow-2xl border-2 border-[#D6B875] p-6 sm:p-10 transition-all duration-700 ${
          isOpeningAnim ? "shadow-[0_25px_60px_rgba(214,184,117,0.5)]" : "shadow-2xl"
        }`}>
          <div className="filigree-corner-tl"><FiligreeOrnament /></div>
          <div className="filigree-corner-tr"><FiligreeOrnament /></div>
          <div className="filigree-corner-bl"><FiligreeOrnament /></div>
          <div className="filigree-corner-br"><FiligreeOrnament /></div>

          <div className="border border-[#D6B875]/40 p-6 sm:p-8 rounded flex flex-col items-center text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] to-[#F8F4EB]">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url('assets/palace-exterior.jpg')` }}
            />

            <div className="relative z-10 flex flex-col items-center w-full">
              <RoyalCrest className="w-20 h-20 mb-3 drop-shadow-md" />
              
              <span className="font-cinzel text-xs tracking-[0.35em] text-[#99783D] uppercase font-bold mb-1">
                By Royal Decree
              </span>
              <h2 className="font-cinzel text-lg sm:text-xl tracking-[0.25em] text-[#172B45] font-extrabold uppercase mb-4">
                The Western Empire
              </h2>

              <div className="h-[1px] w-24 bg-[#D6B875] mb-4"></div>

              <p className="font-script text-2xl sm:text-3xl text-[#99783D] mb-1">
                His Majesty Emperor
              </p>
              <h1 className="font-cormorant text-2xl sm:text-3xl text-[#172B45] font-bold tracking-wide mb-1">
                Heinrey Alles Lazlo
              </h1>
              
              <span className="font-script text-2xl text-[#D6B875] my-0.5">&amp;</span>
              
              <p className="font-script text-2xl sm:text-3xl text-[#99783D] mb-1">
                Her Majesty Empress
              </p>
              <h1 className="font-cormorant text-2xl sm:text-3xl text-[#172B45] font-bold tracking-wide mb-5">
                Navier Ellie Trovi
              </h1>

              {/* Reveal Thumbnail when opened */}
              <div className={`transition-all duration-700 overflow-hidden mb-4 rounded border border-[#D6B875] shadow-inner ${
                isOpeningAnim ? "max-h-48 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
              }`}>
                <img 
                  src="assets/wedding-couple-hero.webp" 
                  alt="Navier and Heinrey Wedding"
                  className="w-48 h-32 object-cover object-top"
                />
              </div>

              {sealState === "intact" ? (
                <div className="mt-4 flex flex-col items-center">
                  <button
                    onClick={handleOpenInvitation}
                    className="group relative cursor-pointer focus:outline-none"
                    aria-label="Open Royal Invitation"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#876228] via-[#D6B875] to-[#FFF4D0] p-1 shadow-lg transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[#172B45] border-2 border-[#D6B875] flex flex-col items-center justify-center text-[#D6B875]">
                        <CrownIcon className="w-7 h-7 text-[#FFF4D0] drop-shadow" />
                        <span className="font-cinzel text-[8px] tracking-widest uppercase font-bold mt-0.5 text-[#FFF4D0]">
                          SEAL
                        </span>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleOpenInvitation}
                    className="mt-5 royal-btn-gold px-7 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2"
                  >
                    <GoldDiamond className="w-3 h-3 text-[#172B45]" />
                    <span>Open The Royal Invitation</span>
                    <GoldDiamond className="w-3 h-3 text-[#172B45]" />
                  </button>
                  <p className="font-montserrat text-[11px] text-[#6B7280] tracking-wider mt-2 italic">
                    Tap the golden wax seal to unseal the imperial decree
                  </p>
                </div>
              ) : (
                <div className="mt-4 flex flex-col items-center animate-pulse">
                  <span className="font-cinzel text-xs tracking-[0.25em] text-[#99783D] uppercase font-semibold">
                    Unsealing Imperial Decree...
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------
// 3. COMPLETELY REFINED NAVIGATION BAR COMPONENT
// -------------------------------------------------------------------------

const Navbar = ({ isMusicPlaying, toggleMusic, onReopenEnvelope }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "The Royal Couple", href: "#couple", id: "couple" },
    { label: "Wedding Details", href: "#details", id: "details" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Dress Code", href: "#dresscode", id: "dresscode" },
    { label: "RSVP", href: "#rsvp", id: "rsvp" },
    { label: "Blessings", href: "#wishes", id: "wishes" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section
      const scrollPos = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sec = document.querySelector(navLinks[i].href);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#172B45]/95 backdrop-blur-md shadow-md border-b border-[#D6B875]/30 py-2.5" 
        : "bg-gradient-to-b from-[#0E1A2B]/90 via-[#172B45]/60 to-transparent py-3.5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* LEFT: Western Empire Royal Emblem & Titles */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 group shrink-0"
        >
          <RoyalCrest className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-xs sm:text-[13px] tracking-[0.2em] text-[#D6B875] font-bold uppercase leading-tight">
              The Western Empire
            </span>
            <span className="font-cormorant text-xs text-[#F8F4EB]/80 tracking-wider italic">
              Navier &amp; Heinrey
            </span>
          </div>
        </a>

        {/* CENTER: Clean Equal-Spaced Desktop Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-cinzel text-xs tracking-[0.16em] uppercase transition-colors relative py-1 ${
                  isActive 
                    ? "text-[#D6B875] font-bold" 
                    : "text-[#F8F4EB]/90 hover:text-[#D6B875] font-medium"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#D6B875] after:transition-all ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Refined Royal Waltz Audio Controls & Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Royal Waltz Music Toggle Button (Refined & Compact) */}
          <button
            onClick={toggleMusic}
            title={isMusicPlaying ? "Pause Royal Waltz" : "Play Royal Waltz"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs ${
              isMusicPlaying 
                ? "bg-[#D6B875] text-[#172B45] border-[#D6B875] shadow-[0_0_12px_rgba(214,184,117,0.4)]" 
                : "bg-[#172B45]/80 text-[#D6B875] border-[#D6B875]/40 hover:border-[#D6B875]"
            }`}
          >
            {isMusicPlaying ? (
              <MusicNoteIcon className="w-3.5 h-3.5" />
            ) : (
              <VolumeMuteIcon className="w-3.5 h-3.5" />
            )}
            <span className="font-cinzel text-[11px] font-bold tracking-wider">
              {isMusicPlaying ? "Royal Waltz" : "Muted"}
            </span>

            {/* Music Wave Status Indicator */}
            {isMusicPlaying && (
              <span className="flex gap-0.5 items-end h-3 ml-0.5">
                <span className="w-0.5 h-full bg-[#172B45] animate-pulse"></span>
                <span className="w-0.5 h-2 bg-[#172B45] animate-pulse" style={{ animationDelay: '0.15s' }}></span>
                <span className="w-0.5 h-3 bg-[#172B45] animate-pulse" style={{ animationDelay: '0.3s' }}></span>
              </span>
            )}
          </button>

          {/* Re-Open Royal Envelope Button */}
          <button
            onClick={onReopenEnvelope}
            title="View Royal Decree Envelope"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-[#D6B875]/40 text-[#D6B875] hover:bg-[#D6B875] hover:text-[#172B45] transition-all"
            aria-label="Re-open envelope"
          >
            <EnvelopeIcon className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded text-[#D6B875] hover:bg-[#172B45]/80 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0E1A2B]/98 border-b border-[#D6B875]/40 px-6 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-3 text-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase py-2 border-b border-[#D6B875]/10 ${
                    isActive ? "text-[#D6B875] font-bold" : "text-[#F8F4EB] hover:text-[#D6B875]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            
            <div className="pt-3 flex justify-center">
              <button
                onClick={onReopenEnvelope}
                className="royal-btn-gold px-5 py-2 rounded-full font-cinzel text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2"
              >
                <EnvelopeIcon className="w-3.5 h-3.5" />
                <span>View Royal Envelope</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// -------------------------------------------------------------------------
// 4. HERO SECTION COMPONENT (With Refined Wedding Date Banner)
// -------------------------------------------------------------------------

const HeroSection = ({ config }) => {
  const scrollToCouple = (e) => {
    e.preventDefault();
    const elem = document.querySelector("#couple");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Palace & Royal Vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-[1px]"
        style={{ backgroundImage: `url('assets/palace-exterior.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1A2B]/85 via-[#172B45]/70 to-[#F8F4EB]" />
      <div className="sunbeam-overlay absolute inset-0" />

      {/* Floating Golden Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="sparkle-particle"
            style={{
              width: `${(i % 3) * 2 + 2}px`,
              height: `${(i % 3) * 2 + 2}px`,
              top: `${(i * 7) % 100}%`,
              left: `${(i * 9) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${(i % 4) + 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Western Empire Emblem */}
        <div className="mb-4 animate-fade-in">
          <RoyalCrest className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_10px_20px_rgba(214,184,117,0.4)]" />
        </div>

        {/* Imperial Subtitle */}
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-[#D6B875] uppercase font-bold mb-2">
          The Imperial Palace of the Western Empire
        </p>

        {/* Hero Title */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FFFFFF] font-extrabold tracking-[0.2em] uppercase mb-4 drop-shadow-md">
          The Royal Wedding
        </h1>

        {/* Couple Names */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-5">
          <span className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F4EB] tracking-wide drop-shadow">
            Navier Ellie Trovi
          </span>
          <span className="font-script text-3xl sm:text-5xl text-[#D6B875]">&amp;</span>
          <span className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F4EB] tracking-wide drop-shadow">
            Heinrey Alles Lazlo
          </span>
        </div>

        {/* Iconic Vow Tagline */}
        <p className="font-playfair italic text-lg sm:text-2xl text-[#FFF4D0] max-w-2xl mb-4 font-normal">
          &ldquo;{config.couple.combined.quote}&rdquo;
        </p>

        {/* Imperial Blessing Invitation Text */}
        <p className="font-montserrat text-xs sm:text-sm text-[#E2E8F0] max-w-xl mb-8 leading-relaxed font-light">
          {config.couple.combined.heroSubtitle}
        </p>

        {/* Hero Wedding Illustration */}
        <div className="relative w-full max-w-md sm:max-w-lg mb-8 rounded-lg p-2 bg-gradient-to-b from-[#ECC880] via-[#D6B875] to-[#99783D] shadow-2xl">
          <div className="relative rounded overflow-hidden border-2 border-[#172B45] bg-[#0E1A2B]">
            <img 
              src="assets/wedding-couple-hero.webp" 
              alt="Empress Navier and Emperor Heinrey Royal Wedding"
              className="w-full h-auto max-h-[500px] object-cover object-top transition-transform duration-700 hover:scale-102"
              loading="eager"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(23,43,69,0.5)] pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#172B45] via-[#172B45]/80 to-transparent p-4 text-center">
              <span className="font-cinzel text-xs tracking-[0.25em] text-[#D6B875] uppercase font-bold">
                Imperial Nuptials of the Western Empire
              </span>
            </div>
          </div>
        </div>

        {/* REFINED HORIZONTAL WEDDING DATE BANNER */}
        <div className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 rounded-full bg-[#172B45] border border-[#D6B875] shadow-[0_4px_25px_rgba(214,184,117,0.3)] text-[#FFF4D0] mb-8 max-w-full">
          <GoldDiamond className="w-3.5 h-3.5 text-[#D6B875] shrink-0" />
          <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-center">
            {config.weddingBannerText}
          </span>
          <GoldDiamond className="w-3.5 h-3.5 text-[#D6B875] shrink-0" />
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#couple"
            onClick={scrollToCouple}
            className="royal-btn-gold px-8 py-3.5 rounded-full font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] uppercase inline-flex items-center gap-3"
          >
            <span>View The Invitation</span>
            <ArrowRightIcon className="w-4 h-4 rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------------------
// 5. THE ROYAL COUPLE COMPONENT (With New Heinrey Portrait)
// -------------------------------------------------------------------------

const CoupleSection = ({ config }) => {
  const { bride, groom } = config.couple;

  return (
    <section id="couple" className="py-24 px-4 bg-[#F8F4EB] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B875]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8B8CC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#99783D] uppercase font-bold">
            Their Imperial Majesties
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-[#172B45] font-bold tracking-wide mt-2 mb-3">
            Meet The Bride &amp; Groom
          </h2>
          <div className="h-[1px] w-24 bg-[#D6B875] mx-auto mb-4"></div>
          <p className="font-playfair italic text-lg sm:text-xl text-[#6B7280]">
            Two souls, two crowns, one everlasting promise.
          </p>
        </div>

        {/* Symmetrical Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT: THE BRIDE (Empress Navier Ellie Trovi) */}
          <div className="parchment-card rounded-lg p-6 sm:p-8 flex flex-col justify-between gold-box-glow hover:shadow-xl transition-all duration-500">
            <div className="filigree-corner-tl"><FiligreeOrnament /></div>
            <div className="filigree-corner-tr"><FiligreeOrnament /></div>
            <div className="filigree-corner-bl"><FiligreeOrnament /></div>
            <div className="filigree-corner-br"><FiligreeOrnament /></div>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 p-2 rounded-lg bg-gradient-to-b from-[#ECC880] to-[#99783D] shadow-lg w-full max-w-sm">
                <div className="w-full h-80 sm:h-96 rounded overflow-hidden bg-[#172B45]">
                  <img 
                    src={bride.image} 
                    alt={bride.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 inset-x-8 bg-[#172B45] border border-[#D6B875] py-1 px-3 rounded-full text-center shadow">
                  <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#FFF4D0] uppercase font-bold">
                    The Empress
                  </span>
                </div>
              </div>

              <span className="font-cinzel text-xs tracking-[0.3em] text-[#99783D] uppercase font-bold mt-2">
                {bride.title}
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl text-[#172B45] font-bold mt-1 mb-3">
                {bride.name}
              </h3>

              <p className="font-playfair italic text-[#876228] text-base mb-4 px-4 font-medium">
                &ldquo;{bride.quote}&rdquo;
              </p>

              <p className="font-montserrat text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-6 font-light">
                {bride.description}
              </p>
            </div>

            <div className="border-t border-[#D6B875]/30 pt-4 grid grid-cols-2 gap-3 text-left">
              {bride.attributes.map((attr, idx) => (
                <div key={idx} className="bg-[#FFFDF9] p-2.5 rounded border border-[#D6B875]/25">
                  <span className="block font-cinzel text-[10px] tracking-widest text-[#99783D] uppercase font-semibold">
                    {attr.label}
                  </span>
                  <span className="font-montserrat text-xs text-[#172B45] font-medium">
                    {attr.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE GROOM (Emperor Heinrey Alles Lazlo - New Canonical Portrait) */}
          <div className="parchment-card rounded-lg p-6 sm:p-8 flex flex-col justify-between gold-box-glow hover:shadow-xl transition-all duration-500">
            <div className="filigree-corner-tl"><FiligreeOrnament /></div>
            <div className="filigree-corner-tr"><FiligreeOrnament /></div>
            <div className="filigree-corner-bl"><FiligreeOrnament /></div>
            <div className="filigree-corner-br"><FiligreeOrnament /></div>

            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 p-2 rounded-lg bg-gradient-to-b from-[#ECC880] to-[#99783D] shadow-lg w-full max-w-sm">
                <div className="w-full h-80 sm:h-96 rounded overflow-hidden bg-[#172B45]">
                  <img 
                    src={groom.image} 
                    alt={groom.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 inset-x-8 bg-[#172B45] border border-[#D6B875] py-1 px-3 rounded-full text-center shadow">
                  <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#FFF4D0] uppercase font-bold">
                    The Emperor
                  </span>
                </div>
              </div>

              <span className="font-cinzel text-xs tracking-[0.3em] text-[#99783D] uppercase font-bold mt-2">
                {groom.title}
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl text-[#172B45] font-bold mt-1 mb-3">
                {groom.name}
              </h3>

              <p className="font-playfair italic text-[#876228] text-base mb-4 px-4 font-medium">
                &ldquo;{groom.quote}&rdquo;
              </p>

              <p className="font-montserrat text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-6 font-light">
                {groom.description}
              </p>
            </div>

            <div className="border-t border-[#D6B875]/30 pt-4 grid grid-cols-2 gap-3 text-left">
              {groom.attributes.map((attr, idx) => (
                <div key={idx} className="bg-[#FFFDF9] p-2.5 rounded border border-[#D6B875]/25">
                  <span className="block font-cinzel text-[10px] tracking-widest text-[#99783D] uppercase font-semibold">
                    {attr.label}
                  </span>
                  <span className="font-montserrat text-xs text-[#172B45] font-medium">
                    {attr.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------------------
// 6. COUNTDOWN TO THE ROYAL WEDDING
// -------------------------------------------------------------------------

const CountdownSection = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isReached: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isReached: false
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isReached: true });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const downloadIcsFile = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Western Empire//Royal Wedding//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:The Royal Wedding: Empress Navier Ellie Trovi & Emperor Heinrey Alles Lazlo
DESCRIPTION:The official imperial wedding ceremony and reception of Navier Ellie Trovi and Heinrey Alles Lazlo of the Western Empire.
LOCATION:The Grand Royal Palace, Imperial Capital, Western Empire
DTSTART:20261024T030000Z
DTEND:20261024T180000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Navier_Heinrey_Royal_Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGoogleCalendar = () => {
    const url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Royal+Wedding:+Navier+%26+Heinrey&dates=20261024T100000/20261024T230000&details=The+official+imperial+wedding+of+Empress+Navier+Ellie+Trovi+and+Emperor+Heinrey+Alles+Lazlo.&location=The+Grand+Royal+Palace,+Western+Empire";
    window.open(url, "_blank");
  };

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 px-4 bg-[#172B45] text-[#F8F4EB] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <CrownDivider text="Imperial Timekeeper" />

        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-[0.2em] uppercase text-[#FFF4D0] mb-3">
          Countdown to the Royal Union
        </h2>
        
        <p className="font-montserrat text-xs sm:text-sm text-[#A8B8CC] max-w-lg mx-auto mb-10 font-light tracking-wide">
          Until the sacred hour when Her Majesty Navier Ellie Trovi and His Majesty Heinrey Alles Lazlo join their reigns under heaven.
        </p>

        {/* Counter Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {timeUnits.map((unit, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-b from-[#243D5E]/80 to-[#0E1A2B]/90 border border-[#D6B875]/50 rounded-lg p-5 sm:p-6 shadow-xl relative overflow-hidden group hover:border-[#D6B875] transition-all"
            >
              <GoldDiamond className="absolute top-2 left-2 w-2 h-2 text-[#D6B875]/30" />
              <GoldDiamond className="absolute bottom-2 right-2 w-2 h-2 text-[#D6B875]/30" />

              <span className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFF4D0] tracking-wider block drop-shadow-md">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#D6B875] uppercase font-semibold mt-2 block">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar Integration Action */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={openGoogleCalendar}
            className="royal-btn-gold px-6 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-[0.18em] uppercase inline-flex items-center gap-2"
          >
            <CalendarIcon className="w-3.5 h-3.5 text-[#172B45]" />
            <span>Add to Google Calendar</span>
          </button>
          <button
            onClick={downloadIcsFile}
            className="royal-btn-navy px-6 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-[0.18em] uppercase inline-flex items-center gap-2 border border-[#D6B875]"
          >
            <CalendarIcon className="w-3.5 h-3.5 text-[#D6B875]" />
            <span>Download iCal / Outlook (.ics)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------------------
// 7. WEDDING DETAILS & CEREMONY COMPONENT
// -------------------------------------------------------------------------

const CeremonySection = ({ config }) => {
  const [modalVenue, setModalVenue] = useState(null);

  return (
    <section id="details" className="py-24 px-4 bg-[#F8F4EB] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#99783D] uppercase font-bold">
            The Imperial Itinerary
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-[#172B45] font-bold tracking-wide mt-2 mb-3">
            Wedding Details &amp; Ceremonies
          </h2>
          <div className="h-[1px] w-24 bg-[#D6B875] mx-auto mb-4"></div>
          <p className="font-playfair italic text-lg sm:text-xl text-[#6B7280]">
            An unforgettable day of sovereign vows, imperial banquets, and midnight waltzes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {config.events.map((event) => (
            <div 
              key={event.id}
              className="parchment-card rounded-lg overflow-hidden gold-box-glow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#172B45]">
                  <img 
                    src={event.image} 
                    alt={event.venue}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172B45] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-[#172B45]/90 border border-[#D6B875] px-3.5 py-1 rounded-full">
                    <span className="font-cinzel text-[10px] tracking-widest text-[#FFF4D0] uppercase font-bold">
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide text-[#FFF4D0]">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="space-y-2.5 mb-6 text-sm font-montserrat">
                    <div className="flex items-center gap-3 text-[#172B45]">
                      <CalendarIcon className="w-4 h-4 text-[#99783D]" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#172B45]">
                      <ClockIcon className="w-4 h-4 text-[#99783D]" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#172B45]">
                      <CrownIcon className="w-4 h-4 text-[#99783D]" />
                      <span className="font-semibold text-[#876228]">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#4A5568] text-xs">
                      <MapPinIcon className="w-4 h-4 text-[#99783D]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="font-montserrat text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-6 font-light">
                    {event.description}
                  </p>

                  <div className="bg-[#FFFDF9] border border-[#D6B875]/30 rounded p-4 mb-6">
                    <span className="font-cinzel text-[11px] tracking-widest text-[#99783D] uppercase font-bold block mb-3">
                      Order of Events:
                    </span>
                    <ul className="space-y-2 font-montserrat text-xs text-[#2D3748]">
                      {event.details.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <GoldDiamond className="w-2.5 h-2.5 text-[#D6B875] mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex flex-wrap gap-3">
                <button
                  onClick={() => setModalVenue(event)}
                  className="royal-btn-navy flex-1 py-2.5 px-4 rounded font-cinzel text-xs font-semibold tracking-wider text-center"
                >
                  View Venue Map &amp; Protocol
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalVenue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#F8F4EB] rounded-lg border-2 border-[#D6B875] p-6 max-w-lg w-full relative parchment-card animate-zoom-in">
            <button
              onClick={() => setModalVenue(null)}
              className="absolute top-4 right-4 text-[#172B45] hover:text-[#99783D] p-1"
              aria-label="Close modal"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
            <div className="text-center mb-4">
              <RoyalCrest className="w-14 h-14 mx-auto mb-2" />
              <h3 className="font-cinzel text-xl font-bold text-[#172B45]">{modalVenue.venue}</h3>
              <p className="font-montserrat text-xs text-[#99783D] uppercase tracking-widest">{modalVenue.location}</p>
            </div>
            <div className="rounded overflow-hidden mb-4 border border-[#D6B875]">
              <img src={modalVenue.image} alt={modalVenue.venue} className="w-full h-48 object-cover" />
            </div>
            <div className="space-y-3 font-montserrat text-xs text-[#2D3748] mb-6">
              <p><strong>Imperial Carriages &amp; Parking:</strong> Reserved at the South Grand Gates of the palace grounds. Royal guards will direct carriages.</p>
              <p><strong>Reception Hall:</strong> Cloakrooms and formal greeting pavilions are located adjacent to the Imperial Fountain.</p>
            </div>
            <button
              onClick={() => setModalVenue(null)}
              className="w-full royal-btn-gold py-2.5 rounded font-cinzel text-xs font-bold uppercase tracking-wider"
            >
              Return to Invitation
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// -------------------------------------------------------------------------
// 8. THE ROYAL GALLERY COMPONENT (REDESIGNED: Editorial Showcase + Grid)
// -------------------------------------------------------------------------

const GallerySection = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const categories = ["All", "Portraits", "Imperial Romance", "Palace & Grounds"];

  const filteredItems = activeCategory === "All" 
    ? config.gallery 
    : config.gallery.filter(item => item.category === activeCategory);

  const currentShowcase = config.gallery[showcaseIndex] || config.gallery[0];

  const handleShowcaseNext = () => {
    setShowcaseIndex((prev) => (prev + 1) % config.gallery.length);
  };

  const handleShowcasePrev = () => {
    setShowcaseIndex((prev) => (prev - 1 + config.gallery.length) % config.gallery.length);
  };

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const handleLightboxNext = (e) => {
    e.stopPropagation();
    const currIdx = config.gallery.findIndex(item => item.id === selectedPhoto.id);
    const nextIdx = (currIdx + 1) % config.gallery.length;
    setSelectedPhoto(config.gallery[nextIdx]);
  };

  const handleLightboxPrev = (e) => {
    e.stopPropagation();
    const currIdx = config.gallery.findIndex(item => item.id === selectedPhoto.id);
    const prevIdx = (currIdx - 1 + config.gallery.length) % config.gallery.length;
    setSelectedPhoto(config.gallery[prevIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") handleLightboxNext(e);
      if (e.key === "ArrowLeft") handleLightboxPrev(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-[#172B45] via-[#1A314E] to-[#172B45] text-[#F8F4EB] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#D6B875] uppercase font-bold">
            The Imperial Chronicle
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-[#FFF4D0] font-bold tracking-wide mt-2 mb-3">
            The Royal Gallery
          </h2>
          <div className="h-[1px] w-24 bg-[#D6B875] mx-auto mb-4"></div>
          <p className="font-playfair italic text-lg sm:text-xl text-[#A8B8CC]">
            Moments of devotion, majestic palace halls, and sacred coronation memories.
          </p>
        </div>

        {/* 1. FEATURED EDITORIAL CAROUSEL SHOWCASE (No Excessive Black Background) */}
        <div className="relative mb-16 parchment-card rounded-xl p-4 sm:p-8 gold-box-glow border-2 border-[#D6B875] text-[#172B45]">
          <div className="filigree-corner-tl"><FiligreeOrnament /></div>
          <div className="filigree-corner-tr"><FiligreeOrnament /></div>
          <div className="filigree-corner-bl"><FiligreeOrnament /></div>
          <div className="filigree-corner-br"><FiligreeOrnament /></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Featured Image Container (Centered, Large, High Quality) */}
            <div className="lg:col-span-7 relative">
              <div 
                onClick={() => openLightbox(currentShowcase)}
                className="relative rounded-lg overflow-hidden border border-[#D6B875] shadow-lg cursor-pointer group bg-[#F8F4EB]"
              >
                <div className="h-[380px] sm:h-[460px] w-full flex items-center justify-center p-2 bg-[#F8F4EB]">
                  <img
                    src={currentShowcase.src}
                    alt={currentShowcase.title}
                    className="max-h-full max-w-full object-contain object-center transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                
                {/* Subtle Hover Pill */}
                <div className="absolute bottom-4 right-4 bg-[#172B45]/90 border border-[#D6B875] text-[#FFF4D0] px-3.5 py-1.5 rounded-full font-cinzel text-[11px] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                  <span>Enlarge Artwork</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Symmetrical Carousel Arrow Controls */}
              <button
                onClick={handleShowcasePrev}
                className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#172B45] border border-[#D6B875] text-[#D6B875] hover:bg-[#D6B875] hover:text-[#172B45] transition-all flex items-center justify-center shadow-lg z-20"
                aria-label="Previous artwork"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>

              <button
                onClick={handleShowcaseNext}
                className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#172B45] border border-[#D6B875] text-[#D6B875] hover:bg-[#D6B875] hover:text-[#172B45] transition-all flex items-center justify-center shadow-lg z-20"
                aria-label="Next artwork"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Showcase Caption & Details (Visually Connected) */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left px-2 sm:px-4">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="bg-[#172B45] text-[#FFF4D0] border border-[#D6B875] text-[10px] font-cinzel px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  {currentShowcase.category}
                </span>
                <span className="font-cinzel text-xs text-[#99783D] tracking-widest uppercase">
                  {showcaseIndex + 1} of {config.gallery.length}
                </span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#172B45] mb-3">
                {currentShowcase.title}
              </h3>

              <p className="font-montserrat text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-6 font-light">
                {currentShowcase.caption}
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#D6B875]/30">
                <button
                  onClick={() => openLightbox(currentShowcase)}
                  className="royal-btn-gold px-5 py-2.5 rounded-full font-cinzel text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2"
                >
                  <span>View High-Res Lightbox</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. CATEGORY FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-cinzel text-xs tracking-[0.16em] uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#D6B875] text-[#172B45] font-bold shadow-[0_0_15px_rgba(214,184,117,0.4)]"
                  : "bg-[#172B45] text-[#A8B8CC] border border-[#D6B875]/30 hover:border-[#D6B875] hover:text-[#FFF4D0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. CURATED EDITORIAL GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((photo) => (
            <div
              key={photo.id}
              onClick={() => {
                const idx = config.gallery.findIndex(item => item.id === photo.id);
                if (idx !== -1) setShowcaseIndex(idx);
                openLightbox(photo);
              }}
              className="group cursor-pointer rounded-lg overflow-hidden border border-[#D6B875]/40 hover:border-[#D6B875] bg-[#F8F4EB] transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F8F4EB] p-1">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover object-top rounded transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-3 bg-[#F8F4EB] border-t border-[#D6B875]/20 flex flex-col justify-between text-left">
                <span className="font-cinzel text-[9px] tracking-widest text-[#99783D] uppercase font-semibold">
                  {photo.category}
                </span>
                <h4 className="font-cormorant text-sm sm:text-base text-[#172B45] font-bold truncate mt-0.5">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[#D6B875] hover:text-[#FFF4D0] p-2 z-50 transition-colors"
            aria-label="Close Lightbox"
          >
            <CloseIcon className="w-7 h-7" />
          </button>

          <button
            onClick={handleLightboxPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6B875] hover:text-[#FFF4D0] bg-[#172B45]/80 hover:bg-[#172B45] border border-[#D6B875]/50 rounded-full p-3 z-50 transition-all"
            aria-label="Previous Photo"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={handleLightboxNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D6B875] hover:text-[#FFF4D0] bg-[#172B45]/80 hover:bg-[#172B45] border border-[#D6B875]/50 rounded-full p-3 z-50 transition-all"
            aria-label="Next Photo"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center bg-[#172B45] border-2 border-[#D6B875] rounded-lg overflow-hidden shadow-2xl animate-zoom-in"
          >
            <div className="relative max-h-[70vh] overflow-hidden flex items-center justify-center bg-black/40 p-2">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[68vh] w-auto max-w-full object-contain"
              />
            </div>
            
            <div className="p-6 text-center w-full bg-[#172B45] border-t border-[#D6B875]/30">
              <span className="font-cinzel text-xs tracking-[0.25em] text-[#D6B875] uppercase font-bold block mb-1">
                The Western Empire Chronicle &bull; {selectedPhoto.category}
              </span>
              <h3 className="font-cormorant text-2xl sm:text-3xl text-[#FFF4D0] font-bold">
                {selectedPhoto.title}
              </h3>
              <p className="font-montserrat text-xs sm:text-sm text-[#A8B8CC] max-w-2xl mx-auto mt-2 font-light">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// -------------------------------------------------------------------------
// 9. DRESS CODE COMPONENT
// -------------------------------------------------------------------------

const DressCodeSection = ({ config }) => {
  const { dressCode } = config;

  return (
    <section id="dresscode" className="py-24 px-4 bg-[#F8F4EB] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#99783D] uppercase font-bold">
            Imperial Attire Etiquette
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-[#172B45] font-bold tracking-wide mt-2 mb-3">
            {dressCode.heading}
          </h2>
          <div className="h-[1px] w-24 bg-[#D6B875] mx-auto mb-4"></div>
          <p className="font-playfair italic text-lg sm:text-xl text-[#876228] mb-2 font-medium">
            {dressCode.subheading}
          </p>
          <p className="font-montserrat text-xs sm:text-sm text-[#4A5568] max-w-2xl mx-auto font-light leading-relaxed">
            {dressCode.description}
          </p>
        </div>

        {/* Color Palette Swatches */}
        <div className="mb-16">
          <h3 className="font-cinzel text-center text-sm tracking-[0.25em] uppercase text-[#99783D] font-bold mb-6">
            Recommended Imperial Color Palette
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {dressCode.palette.map((color, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFDF9] border border-[#D6B875]/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full shadow-inner mb-3 border-2 transition-transform duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: color.hex, 
                    borderColor: color.border 
                  }}
                />
                <span className="font-cinzel text-xs font-bold text-[#172B45] tracking-wider mb-0.5">
                  {color.name}
                </span>
                <span className="font-montserrat text-[10px] text-[#876228] font-mono mb-2">
                  {color.hex}
                </span>
                <p className="font-montserrat text-[11px] text-[#4A5568] leading-tight font-light">
                  {color.usage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dressCode.guidelines.map((guide, idx) => (
            <div 
              key={idx} 
              className="parchment-card rounded-lg p-6 gold-box-glow border border-[#D6B875]/50 flex flex-col justify-start"
            >
              <div className="flex items-center gap-2 mb-3">
                <GoldDiamond className="w-3 h-3 text-[#D6B875]" />
                <h4 className="font-cinzel text-sm font-bold text-[#172B45] tracking-widest uppercase">
                  {guide.title}
                </h4>
              </div>
              <p className="font-montserrat text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">
                {guide.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------------------
// 10. RSVP SECTION COMPONENT
// -------------------------------------------------------------------------

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    title: "Noble Guest",
    email: "",
    guests: "1",
    attendance: "joyfully_accept",
    dietary: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("royal_wedding_rsvp");
      if (saved) {
        const parsed = JSON.parse(saved);
        setSubmittedData(parsed);
        setIsSubmitted(true);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full noble name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please provide an email address for imperial correspondence.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    if (window.royalAudio) {
      window.royalAudio.playRoyalChime();
    }

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString()
    };

    try {
      localStorage.setItem("royal_wedding_rsvp", JSON.stringify(payload));
    } catch (err) {
      console.error(err);
    }

    setSubmittedData(payload);
    setIsSubmitted(true);
  };

  const handleEditRsvp = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-[#172B45] text-[#F8F4EB] relative">
      <div className="max-w-3xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <RoyalCrest className="w-16 h-16 mx-auto mb-3" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#D6B875] uppercase font-bold">
            Official Attendance Decree
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-[#FFF4D0] font-bold tracking-wide mt-2 mb-3">
            Your Presence Is Our Honor
          </h2>
          <div className="h-[1px] w-24 bg-[#D6B875] mx-auto mb-4"></div>
          <p className="font-montserrat text-xs sm:text-sm text-[#A8B8CC] max-w-lg mx-auto font-light">
            Kindly respond by October 1, 2026, so the Western Empire imperial court may prepare your reception with highest honors.
          </p>
        </div>

        <div className="bg-[#F8F4EB] text-[#172B45] rounded-lg p-6 sm:p-10 border-2 border-[#D6B875] shadow-2xl relative parchment-card">
          <div className="filigree-corner-tl"><FiligreeOrnament /></div>
          <div className="filigree-corner-tr"><FiligreeOrnament /></div>
          <div className="filigree-corner-bl"><FiligreeOrnament /></div>
          <div className="filigree-corner-br"><FiligreeOrnament /></div>

          {isSubmitted ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#876228] to-[#D6B875] mx-auto mb-5 flex items-center justify-center shadow-lg border-2 border-[#FFF]">
                <CrownIcon className="w-9 h-9 text-white" />
              </div>

              <span className="font-cinzel text-xs tracking-[0.3em] text-[#99783D] uppercase font-bold">
                Royal Seal of Confirmation
              </span>
              <h3 className="font-cormorant text-3xl font-bold text-[#172B45] mt-1 mb-2">
                Imperial Confirmation Recorded
              </h3>
              <p className="font-montserrat text-xs sm:text-sm text-[#4A5568] max-w-md mx-auto mb-6">
                Thank you, <strong>{submittedData.title} {submittedData.fullName}</strong>. Your royal response has been joyfully registered with the Imperial Secretariat of the Western Empire.
              </p>

              <div className="bg-[#FFFDF9] border border-[#D6B875]/50 rounded-lg p-5 max-w-md mx-auto text-left text-xs font-montserrat space-y-2 mb-6 shadow-sm">
                <div className="flex justify-between border-b border-[#D6B875]/20 pb-1.5">
                  <span className="text-[#876228] font-semibold">Attendance:</span>
                  <span className="font-bold text-[#172B45]">
                    {submittedData.attendance === "joyfully_accept" ? "Joyfully Accept with Honor" : "Regretfully Decline from Afar"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#D6B875]/20 pb-1.5">
                  <span className="text-[#876228] font-semibold">Guests Registered:</span>
                  <span>{submittedData.guests} Person(s)</span>
                </div>
                <div className="flex justify-between border-b border-[#D6B875]/20 pb-1.5">
                  <span className="text-[#876228] font-semibold">Contact Email:</span>
                  <span>{submittedData.email}</span>
                </div>
                {submittedData.message && (
                  <div className="pt-1">
                    <span className="text-[#876228] font-semibold block mb-1">Your Personal Blessing:</span>
                    <p className="italic text-[#4A5568] bg-[#F8F4EB] p-2 rounded border border-[#D6B875]/20">
                      &ldquo;{submittedData.message}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              <div className="w-48 h-32 mx-auto rounded overflow-hidden border border-[#D6B875] mb-6 shadow">
                <img 
                  src="assets/wedding-couple-hero.webp" 
                  alt="Navier and Heinrey" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <button
                onClick={handleEditRsvp}
                className="royal-btn-navy px-6 py-2 rounded-full font-cinzel text-xs font-semibold tracking-wider"
              >
                Modify My Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-cinzel text-xs tracking-wider uppercase text-[#876228] font-bold mb-2">
                    Imperial Title
                  </label>
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded bg-[#FFFDF9] border border-[#D6B875] font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]"
                  >
                    <option value="Noble Guest">Noble Guest</option>
                    <option value="Lord">Lord</option>
                    <option value="Lady">Lady</option>
                    <option value="Duke">Duke</option>
                    <option value="Duchess">Duchess</option>
                    <option value="Count">Count</option>
                    <option value="Countess">Countess</option>
                    <option value="Ambassador">Ambassador</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-cinzel text-xs tracking-wider uppercase text-[#876228] font-bold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Duke McKenna of the Western Court"
                    className={`w-full px-4 py-2.5 rounded bg-[#FFFDF9] border ${
                      errors.fullName ? "border-red-500" : "border-[#D6B875]"
                    } font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 font-montserrat mt-1 block">{errors.fullName}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-cinzel text-xs tracking-wider uppercase text-[#876228] font-bold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@empire.org"
                    className={`w-full px-4 py-2.5 rounded bg-[#FFFDF9] border ${
                      errors.email ? "border-red-500" : "border-[#D6B875]"
                    } font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600 font-montserrat mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block font-cinzel text-xs tracking-wider uppercase text-[#876228] font-bold mb-2">
                    Number of Attendees
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded bg-[#FFFDF9] border border-[#D6B875] font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]"
                  >
                    <option value="1">1 Person (Honored Self)</option>
                    <option value="2">2 Persons (With Esteemed Companion)</option>
                    <option value="3">3 Persons (With Family Retinue)</option>
                    <option value="4">4 Persons (Imperial Delegation)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-cinzel text-xs tracking-wider uppercase text-[#876228] font-bold mb-3">
                  Will You Attend Their Imperial Majesties' Nuptials?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-all ${
                    formData.attendance === "joyfully_accept"
                      ? "bg-[#FFF4D0]/60 border-[#99783D] shadow-sm font-semibold"
                      : "bg-[#FFFDF9] border-[#D6B875]/40 hover:border-[#D6B875]"
                  }`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="joyfully_accept"
                      checked={formData.attendance === "joyfully_accept"}
                      onChange={handleChange}
                      className="accent-[#99783D]"
                    />
                    <div className="text-xs font-montserrat">
                      <span className="block font-cinzel font-bold text-[#172B45]">Joyfully Accept</span>
                      <span className="text-[#6B7280] text-[11px]">I shall attend the ceremonies with honor</span>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition-all ${
                    formData.attendance === "regretfully_decline"
                      ? "bg-[#FFF4D0]/60 border-[#99783D] shadow-sm font-semibold"
                      : "bg-[#FFFDF9] border-[#D6B875]/40 hover:border-[#D6B875]"
                  }`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="regretfully_decline"
                      checked={formData.attendance === "regretfully_decline"}
                      onChange={handleChange}
                      className="accent-[#99783D]"
                    />
                    <div className="text-xs font-montserrat">
                      <span className="block font-cinzel font-bold text-[#172B45]">Regretfully Decline</span>
                      <span className="text-[#6B7280] text-[11px]">I send blessings from afar</span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-cinzel text-xs tracking-wider uppercase text-[#876228] font-bold mb-2">
                  Dietary Preferences or Special Requests
                </label>
                <input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  placeholder="e.g. Vegetarian, Gluten-free, Carriage assistance"
                  className="w-full px-4 py-2.5 rounded bg-[#FFFDF9] border border-[#D6B875] font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]"
                />
              </div>

              <div>
                <label className="block font-cinzel text-xs tracking-wider uppercase text-[#876228] font-bold mb-2">
                  Personal Message for the Emperor &amp; Empress
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Inscribe your personal words of congratulation for Navier and Heinrey..."
                  className="w-full px-4 py-2.5 rounded bg-[#FFFDF9] border border-[#D6B875] font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]"
                ></textarea>
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full royal-btn-gold py-3.5 rounded font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <GoldDiamond className="w-3 h-3 text-[#172B45]" />
                  <span>Send Royal Confirmation</span>
                  <GoldDiamond className="w-3 h-3 text-[#172B45]" />
                </button>
                <p className="font-montserrat text-[10px] text-[#6B7280] mt-2">
                  * Official attendance records are saved for confirmation.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------------------
// 11. BLESSINGS & WISHES SECTION (GUESTBOOK)
// -------------------------------------------------------------------------

const WishesSection = ({ config }) => {
  const [wishes, setWishes] = useState(config.initialWishes);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("royal_wedding_wishes");
      if (stored) {
        const parsed = JSON.parse(stored);
        setWishes([...parsed, ...config.initialWishes]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) {
      setError("Please provide your name and your blessing message.");
      return;
    }
    setError("");

    const newWish = {
      id: Date.now(),
      author: author.trim(),
      title: title.trim() || "Continental Dignitary",
      date: "Just now",
      message: message.trim(),
      avatar: "scroll",
      isOfficial: false
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);

    try {
      const userWishes = updated.filter(w => !w.isOfficial);
      localStorage.setItem("royal_wedding_wishes", JSON.stringify(userWishes));
    } catch (err) {
      console.error(err);
    }

    setAuthor("");
    setTitle("");
    setMessage("");

    if (window.royalAudio) {
      window.royalAudio.playRoyalChime();
    }
  };

  const renderAvatarIcon = (avatarType) => {
    switch(avatarType) {
      case 'crown': return <CrownIcon className="w-4 h-4 text-[#FFF4D0]" />;
      case 'dove': return <RoyalCrest className="w-4 h-4" />;
      case 'wine': return <GoldDiamond className="w-4 h-4 text-[#FFF4D0]" />;
      default: return <QuillIcon className="w-4 h-4 text-[#FFF4D0]" />;
    }
  };

  return (
    <section id="wishes" className="py-24 px-4 bg-[#F8F4EB] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#99783D] uppercase font-bold">
            The Imperial Guestbook
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl text-[#172B45] font-bold tracking-wide mt-2 mb-3">
            Blessings for the Royal Couple
          </h2>
          <div className="h-[1px] w-24 bg-[#D6B875] mx-auto mb-4"></div>
          <p className="font-playfair italic text-lg sm:text-xl text-[#6B7280]">
            Heartfelt letters, sovereign tributes, and everlasting wishes for Emperor Heinrey and Empress Navier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-1">
            <div className="parchment-card rounded-lg p-6 sm:p-8 gold-box-glow sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <QuillIcon className="w-5 h-5 text-[#876228]" />
                <h3 className="font-cinzel text-sm font-bold tracking-wider uppercase text-[#172B45]">
                  Inscribe Your Blessing
                </h3>
              </div>

              <form onSubmit={handleAddWish} className="space-y-4">
                <div>
                  <label className="block font-cinzel text-[11px] tracking-wider uppercase text-[#876228] font-bold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Lady Charlotte of Trovi"
                    className="w-full px-3 py-2 rounded bg-[#FFFDF9] border border-[#D6B875] font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]"
                  />
                </div>

                <div>
                  <label className="block font-cinzel text-[11px] tracking-wider uppercase text-[#876228] font-bold mb-1">
                    Title / Affiliation (Optional)
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Royal Knight / Well-Wisher"
                    className="w-full px-3 py-2 rounded bg-[#FFFDF9] border border-[#D6B875] font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]"
                  />
                </div>

                <div>
                  <label className="block font-cinzel text-[11px] tracking-wider uppercase text-[#876228] font-bold mb-1">
                    Your Letter of Blessing
                  </label>
                  <textarea
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Inscribe your heartfelt message for Navier and Heinrey..."
                    className="w-full px-3 py-2 rounded bg-[#FFFDF9] border border-[#D6B875] font-montserrat text-xs text-[#172B45] focus:outline-none focus:ring-1 focus:ring-[#D6B875]"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-[11px] text-red-600 font-montserrat">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full royal-btn-gold py-2.5 rounded font-cinzel text-xs font-bold tracking-[0.18em] uppercase transition-all shadow flex items-center justify-center gap-2"
                >
                  <QuillIcon className="w-3.5 h-3.5 text-[#172B45]" />
                  <span>Present Blessing to Court</span>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {wishes.map((wish) => (
              <div 
                key={wish.id}
                className="bg-[#FFFDF9] border border-[#D6B875]/60 rounded-lg p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#172B45] border border-[#D6B875] flex items-center justify-center shadow">
                  {renderAvatarIcon(wish.avatar)}
                </div>

                <div className="flex flex-col mb-3">
                  <div className="flex items-center gap-2">
                    <h4 className="font-cormorant text-2xl font-bold text-[#172B45]">
                      {wish.author}
                    </h4>
                    {wish.isOfficial && (
                      <span className="bg-[#D6B875]/20 text-[#876228] border border-[#D6B875] text-[9px] font-cinzel px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                        Imperial Court
                      </span>
                    )}
                  </div>
                  <span className="font-cinzel text-[10px] tracking-widest text-[#99783D] uppercase">
                    {wish.title} &bull; {wish.date}
                  </span>
                </div>

                <div className="border-t border-[#D6B875]/20 pt-3">
                  <p className="font-playfair italic text-[#2D3748] text-sm sm:text-base leading-relaxed">
                    &ldquo;{wish.message}&rdquo;
                  </p>
                </div>

                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D6B875]/40 to-transparent mt-4"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------------------
// 12. CLOSING SECTION & FOOTER
// -------------------------------------------------------------------------

const ClosingSection = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0E1A2B] text-[#F8F4EB] pt-24 pb-16 px-4 overflow-hidden border-t-2 border-[#D6B875]">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 filter brightness-90"
        style={{ backgroundImage: `url('assets/couple-royal-celestial.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2B] via-[#0E1A2B]/80 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <RoyalCrest className="w-24 h-24 sm:w-28 sm:h-28 mb-6 drop-shadow-[0_10px_25px_rgba(214,184,117,0.5)]" />

        <span className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-[#D6B875] uppercase font-bold mb-2">
          Imperial Acclamation
        </span>
        <h2 className="font-cinzel text-3xl sm:text-5xl text-[#FFF4D0] font-extrabold tracking-[0.25em] uppercase mb-4 drop-shadow">
          Long Live The Emperor And Empress
        </h2>

        <div className="h-[1px] w-32 bg-[#D6B875] mb-6"></div>

        <p className="font-playfair italic text-lg sm:text-2xl text-[#E2E8F0] max-w-2xl mb-4 font-light leading-relaxed">
          &ldquo;{config.couple.combined.closingMessage}&rdquo;
        </p>

        <p className="font-script text-3xl sm:text-4xl text-[#D6B875] mb-8">
          {config.couple.combined.signature}
        </p>

        <button
          onClick={scrollToTop}
          className="royal-btn-gold px-8 py-3 rounded-full font-cinzel text-xs font-bold tracking-[0.25em] uppercase inline-flex items-center gap-2 mb-12 shadow-xl"
        >
          <span>Return To Top</span>
          <span>&uarr;</span>
        </button>

        <div className="border-t border-[#D6B875]/30 pt-8 w-full max-w-2xl font-montserrat text-xs text-[#A8B8CC] leading-relaxed">
          <p className="mb-2">
            Inspired by the Korean Fantasy Romance Manhwa <strong>The Remarried Empress (재혼 황후)</strong>.
          </p>
          <p className="text-[11px] text-[#A8B8CC]/70">
            Featuring Her Majesty Empress Navier Ellie Trovi &amp; His Majesty Emperor Heinrey Alles Lazlo.
            All canonical illustrations belong to the original creators and MstoryHub / WEBTOON.
          </p>
        </div>
      </div>
    </footer>
  );
};

// -------------------------------------------------------------------------
// 13. ROOT APPLICATION COMPONENT
// -------------------------------------------------------------------------

const App = () => {
  const config = window.WEDDING_CONFIG;
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    if (window.royalAudio) {
      const unsub = window.royalAudio.subscribe((playing) => {
        setIsMusicPlaying(playing);
      });
      return unsub;
    }
  }, []);

  const toggleMusic = () => {
    if (window.royalAudio) {
      window.royalAudio.toggle();
    }
  };

  const handleReopenEnvelope = () => {
    setEnvelopeOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EB] text-[#172B45] selection:bg-[#D6B875] selection:text-[#172B45]">
      {/* 1. Opening Royal Envelope Screen */}
      {!envelopeOpen && (
        <OpeningEnvelope onOpenComplete={() => setEnvelopeOpen(true)} />
      )}

      {/* 2. Completely Refined Sticky Navigation Bar */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        onReopenEnvelope={handleReopenEnvelope}
      />

      {/* 3. Hero Section with Refined Wedding Date Banner */}
      <HeroSection config={config} />

      {/* 4. The Royal Couple (With New Heinrey Portrait) */}
      <CoupleSection config={config} />

      {/* 5. Real-Time Countdown to Wedding */}
      <CountdownSection targetDate={config.weddingDate} />

      {/* 6. Wedding Details & Schedule */}
      <CeremonySection config={config} />

      {/* 7. Redesigned Royal Editorial Gallery & Lightbox */}
      <GallerySection config={config} />

      {/* 8. Dress Code & Etiquette */}
      <DressCodeSection config={config} />

      {/* 9. Interactive Official RSVP */}
      <RsvpSection />

      {/* 10. Guest Blessings & Wishes */}
      <WishesSection config={config} />

      {/* 11. Closing Section & Imperial Footer */}
      <ClosingSection config={config} />
    </div>
  );
};

// Expose App globally
window.RoyalWeddingApp = App;
