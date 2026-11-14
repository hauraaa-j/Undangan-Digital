/**
 * =========================================================================
 * ROYAL AUDIO SYNTHESIZER FOR THE WESTERN EMPIRE
 * Web Audio API Engine: Romantic Royal Waltz & Sound Effects
 * 100% Offline, Zero external asset dependencies, Pure Elegance
 * =========================================================================
 */

class RoyalAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.volume = 0.35;
    this.gainNode = null;
    this.timerId = null;
    this.currentStep = 0;
    this.melodyStep = 0;
    this.listeners = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.gainNode.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.isPlaying));
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  // Romantic Waltz progression (in D Major, 3/4 Time)
  // [Dmaj -> Bmin -> Gmaj -> A7 -> F#min -> Bmin -> Em7 -> A7]
  getWaltzChords() {
    return [
      // D Major (D3, F#3, A3, D4)
      { bass: 146.83, harmony: [220.00, 277.18, 369.99, 440.00] },
      // B minor (B2, F#3, B3, D4)
      { bass: 123.47, harmony: [185.00, 246.94, 293.66, 369.99] },
      // G Major (G2, G3, B3, D4)
      { bass: 98.00,  harmony: [196.00, 246.94, 293.66, 392.00] },
      // A7 (A2, G3, C#4, E4)
      { bass: 110.00, harmony: [196.00, 277.18, 329.63, 440.00] },
      // F# minor (F#2, A3, C#4, F#4)
      { bass: 92.50,  harmony: [220.00, 277.18, 369.99, 440.00] },
      // B minor (B2, D3, F#3, B3)
      { bass: 123.47, harmony: [220.00, 277.18, 293.66, 369.99] },
      // E minor 7 (E2, G3, B3, D4)
      { bass: 82.41,  harmony: [196.00, 246.94, 293.66, 329.63] },
      // A7 sus / A7 (A2, A3, C#4, E4)
      { bass: 110.00, harmony: [220.00, 277.18, 329.63, 440.00] },
    ];
  }

  // Delicate harp & flute style melody
  getMelodyNotes() {
    return [
      // Measure 1 (D Maj)
      { freq: 587.33, dur: 1.2 }, // D5
      { freq: 739.99, dur: 0.8 }, // F#5
      { freq: 880.00, dur: 0.9 }, // A5
      // Measure 2 (B Min)
      { freq: 739.99, dur: 1.0 }, // F#5
      { freq: 587.33, dur: 0.9 }, // D5
      { freq: 493.88, dur: 1.1 }, // B4
      // Measure 3 (G Maj)
      { freq: 392.00, dur: 0.8 }, // G4
      { freq: 493.88, dur: 0.8 }, // B4
      { freq: 587.33, dur: 1.3 }, // D5
      // Measure 4 (A7)
      { freq: 659.25, dur: 1.5 }, // E5
      { freq: 554.37, dur: 1.2 }, // C#5
      // Measure 5 (F# Min)
      { freq: 739.99, dur: 1.3 }, // F#5
      { freq: 880.00, dur: 0.8 }, // A5
      { freq: 1108.73, dur: 1.1 }, // C#6
      // Measure 6 (B Min)
      { freq: 987.77, dur: 1.4 }, // B5
      { freq: 880.00, dur: 0.8 }, // A5
      { freq: 739.99, dur: 1.0 }, // F#5
      // Measure 7 (Em7)
      { freq: 659.25, dur: 1.0 }, // E5
      { freq: 739.99, dur: 0.9 }, // F#5
      { freq: 587.33, dur: 1.2 }, // D5
      // Measure 8 (A7 -> resolution)
      { freq: 554.37, dur: 1.4 }, // C#5
      { freq: 587.33, dur: 2.2 }  // D5 (resolve)
    ];
  }

  // Play a single soft harp pluck
  playHarpPluck(freq, time, duration = 1.2, volumeRatio = 0.15) {
    if (!this.ctx || !this.gainNode) return;
    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Warm harp-like spectrum
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    // Filter to warm it up
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(300, time + duration);

    noteGain.gain.setValueAtTime(0.001, time);
    noteGain.gain.linearRampToValueAtTime(volumeRatio, time + 0.02);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(time);
    osc.stop(time + duration + 0.05);
  }

  // Play a soft flute/celesta melody note
  playMelodyVoice(freq, time, duration = 1.2, volumeRatio = 0.18) {
    if (!this.ctx || !this.gainNode) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(freq, time);
    // gentle shimmer chorus
    osc2.frequency.setValueAtTime(freq * 1.002, time);

    noteGain.gain.setValueAtTime(0.001, time);
    noteGain.gain.linearRampToValueAtTime(volumeRatio, time + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration);
    osc2.stop(time + duration);
  }

  scheduleWaltzMeasure() {
    if (!this.isPlaying || !this.ctx) return;

    const chords = this.getWaltzChords();
    const melody = this.getMelodyNotes();
    const chordIndex = this.currentStep % chords.length;
    const currentChord = chords[chordIndex];

    const now = this.ctx.currentTime;
    const beatLength = 0.55; // ~109 BPM waltz beat

    // Beat 1: Bass note
    this.playHarpPluck(currentChord.bass, now, 1.6, 0.22);
    this.playHarpPluck(currentChord.bass * 2, now + 0.02, 1.2, 0.12);

    // Beat 2: Light arpeggiated chord
    currentChord.harmony.slice(0, 3).forEach((n, i) => {
      this.playHarpPluck(n, now + beatLength + (i * 0.03), 0.9, 0.09);
    });

    // Beat 3: Harmonious echo
    currentChord.harmony.slice(1, 4).forEach((n, i) => {
      this.playHarpPluck(n, now + (beatLength * 2) + (i * 0.03), 0.9, 0.08);
    });

    // Melody lead
    const mel = melody[this.melodyStep % melody.length];
    this.playMelodyVoice(mel.freq, now + 0.05, mel.dur * 0.9, 0.16);

    this.currentStep++;
    this.melodyStep++;

    const measureDuration = beatLength * 3 * 1000;
    this.timerId = setTimeout(() => {
      this.scheduleWaltzMeasure();
    }, measureDuration - 20);
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.currentStep = 0;
    this.melodyStep = 0;
    this.scheduleWaltzMeasure();
    this.notify();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  // Sound Effect: Wax Seal Break & Golden Sparkles
  playSealBreakSound() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Golden chime chord glissando (E6, G#6, B6, E7)
    const chimes = [1318.51, 1661.22, 1975.53, 2637.02, 3322.44];
    chimes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + (idx * 0.06));

      gain.gain.setValueAtTime(0.001, now + (idx * 0.06));
      gain.gain.linearRampToValueAtTime(0.18, now + (idx * 0.06) + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (idx * 0.06) + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + (idx * 0.06));
      osc.stop(now + (idx * 0.06) + 0.85);
    });
  }

  // Sound Effect: Royal Bell Chime
  playRoyalChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const bellNotes = [587.33, 880.00, 1174.66]; // D5, A5, D6
    bellNotes.forEach(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.85);
    });
  }
}

// Global audio singleton
window.royalAudio = new RoyalAudioEngine();
