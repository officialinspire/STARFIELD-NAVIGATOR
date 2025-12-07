// ============================================
// INSPIRE STARFIELD NAVIGATOR V3.1
// NASA-Style Open Source Astronomy Tool
// FIXED: Smoothed gyroscope tracking
// ============================================

// ============================================
// CELESTIAL DATA CATALOG
// ============================================

// Star type classifications with realistic colors and sizes
const STAR_TYPES = {
    'O': { color: '#9BB0FF', temp: 'Blue', size: 2.5 },        // Hot blue stars
    'B': { color: '#AABFFF', temp: 'Blue-white', size: 2.2 }, // Blue-white
    'A': { color: '#CAD7FF', temp: 'White', size: 2.0 },      // White
    'F': { color: '#F8F7FF', temp: 'Yellow-white', size: 1.8 },// Yellow-white
    'G': { color: '#FFF4EA', temp: 'Yellow', size: 1.6 },     // Yellow (like our Sun)
    'K': { color: '#FFD2A1', temp: 'Orange', size: 1.5 },     // Orange
    'M': { color: '#FFB380', temp: 'Red', size: 1.4 },        // Red dwarfs
    'RED_GIANT': { color: '#FF6B4A', temp: 'Red Giant', size: 3.0 },
    'RED_SUPERGIANT': { color: '#FF4422', temp: 'Red Supergiant', size: 3.5 },
    'BLUE_SUPERGIANT': { color: '#8AB3FF', temp: 'Blue Supergiant', size: 3.2 },
    'WHITE_DWARF': { color: '#FFFFFF', temp: 'White Dwarf', size: 1.0 }
};

const CELESTIAL_OBJECTS = [
    {
        id: 'polaris', name: 'Polaris', commonName: 'North Star', type: 'star',
        starType: 'F', // Yellow-white supergiant
        ra: 2.53, dec: 89.26, magnitude: 2.0, distance: '433 light-years', emoji: '⭐',
        science: 'Polaris is a triple star system located roughly 433 light-years away. It\'s the brightest star in Ursa Minor and sits almost directly above Earth\'s North Pole, making it appear nearly stationary while other stars rotate around it.',
        lore: 'The North Star is your cosmic anchor—a fixed point in an ever-spinning sky. Ancient travelers used it as their GPS. INSPIRE truth: When you\'re lost, find your Polaris.'
    },
    {
        id: 'sirius', name: 'Sirius', commonName: 'Dog Star', type: 'star',
        starType: 'A', // White main sequence
        ra: 6.75, dec: -16.72, magnitude: -1.46, distance: '8.6 light-years', emoji: '💎',
        science: 'Sirius is the brightest star in Earth\'s night sky, located 8.6 light-years away in Canis Major. It\'s actually a binary star system. The "Dog Days" of summer are named after Sirius rising with the sun.',
        lore: 'Sirius burns so bright it looks like a diamond dropped in velvet. INSPIRE wisdom: Shine so bright they can\'t ignore you. Your light is your revolution.'
    },
    {
        id: 'betelgeuse', name: 'Betelgeuse', commonName: 'Alpha Orionis', type: 'star',
        starType: 'RED_SUPERGIANT',
        ra: 5.92, dec: 7.41, magnitude: 0.5, distance: '550 light-years', emoji: '🔴',
        science: 'Betelgeuse is a red supergiant in Orion, roughly 550 light-years away and nearing the end of its life. It could go supernova any time in the next 100,000 years.',
        lore: 'This dying star is 1,000 times bigger than our Sun. INSPIRE philosophy: Even stars die, but they go out in glory. Make it count.'
    },
    {
        id: 'vega', name: 'Vega', commonName: 'Alpha Lyrae', type: 'star',
        starType: 'A', // White main sequence
        ra: 18.62, dec: 38.78, magnitude: 0.03, distance: '25 light-years', emoji: '🌟',
        science: 'Vega is one of the brightest stars visible from Earth, located 25 light-years away. It\'s been a pole star in the past and will be again in 12,000 years.',
        lore: 'Vega was the North Star when the pyramids were built. INSPIRE truth: Everything cycles. Your moment comes around again.'
    },
    {
        id: 'rigel', name: 'Rigel', commonName: 'Beta Orionis', type: 'star',
        starType: 'BLUE_SUPERGIANT',
        ra: 5.24, dec: -8.20, magnitude: 0.18, distance: '860 light-years', emoji: '💠',
        science: 'Rigel is a blue supergiant in Orion\'s foot, approximately 860 light-years away. It\'s a quadruple star system with immense luminosity—40,000 times that of our Sun.',
        lore: 'Rigel is the rebel of Orion—burning blue-hot and fierce. INSPIRE energy: Be Rigel. Burn brighter than expected.'
    },
    {
        id: 'altair', name: 'Altair', commonName: 'Alpha Aquilae', type: 'star',
        starType: 'A', // White main sequence
        ra: 19.85, dec: 8.87, magnitude: 0.76, distance: '17 light-years', emoji: '⚡',
        science: 'Altair is one of the closest stars visible to the naked eye at just 17 light-years away. It rotates incredibly fast—once every 9 hours.',
        lore: 'Altair spins so fast it\'s dizzy with power. INSPIRE romance: Even cosmic forces can\'t stop true connection.'
    },
    {
        id: 'deneb', name: 'Deneb', commonName: 'Alpha Cygni', type: 'star',
        starType: 'BLUE_SUPERGIANT',
        ra: 20.69, dec: 45.28, magnitude: 1.25, distance: '2,600 light-years', emoji: '🦢',
        science: 'Deneb is one of the most luminous stars known, a blue-white supergiant 200,000 times brighter than our Sun.',
        lore: 'Deneb is the cosmic lighthouse. INSPIRE power: Your influence can reach farther than you think.'
    },
    {
        id: 'antares', name: 'Antares', commonName: 'Alpha Scorpii', type: 'star',
        starType: 'RED_SUPERGIANT',
        ra: 16.49, dec: -26.43, magnitude: 1.06, distance: '550 light-years', emoji: '♏',
        science: 'Antares is a red supergiant in Scorpius. Its name means "rival of Mars" due to its reddish color.',
        lore: 'Antares rivals Mars itself—red, fierce, unstoppable. INSPIRE rebellion: Challenge the status quo.'
    },
    {
        id: 'capella', name: 'Capella', commonName: 'Alpha Aurigae', type: 'star',
        starType: 'G', // Yellow giant
        ra: 5.28, dec: 45.99, magnitude: 0.08, distance: '43 light-years', emoji: '🐐',
        science: 'Capella is actually four stars—two giant pairs orbiting each other. It\'s the sixth-brightest star in the night sky.',
        lore: 'Capella is four stars masquerading as one. INSPIRE unity: You\'re stronger together.'
    },
    {
        id: 'arcturus', name: 'Arcturus', commonName: 'Alpha Boötis', type: 'star',
        starType: 'RED_GIANT',
        ra: 14.26, dec: 19.18, magnitude: -0.05, distance: '37 light-years', emoji: '🍊',
        science: 'Arcturus is a red giant and the fourth-brightest star in the night sky. It\'s moving through space unusually fast.',
        lore: 'Arcturus is breaking free—moving so fast it\'ll escape the Milky Way. INSPIRE freedom: Move at your own speed.'
    },
    {
        id: 'orion_nebula', name: 'Orion Nebula', commonName: 'M42', type: 'nebula',
        ra: 5.58, dec: -5.39, magnitude: 4.0, distance: '1,344 light-years', emoji: '🌌',
        science: 'The Orion Nebula is a stellar nursery where new stars are being born. It\'s visible to the naked eye in Orion\'s sword.',
        lore: 'The Orion Nebula is where stars are born. INSPIRE genesis: Never stop creating. Your potential is infinite.'
    },
    {
        id: 'andromeda', name: 'Andromeda Galaxy', commonName: 'M31', type: 'galaxy',
        ra: 0.71, dec: 41.27, magnitude: 3.44, distance: '2.5 million light-years', emoji: '🌀',
        science: 'Andromeda is our nearest major galaxy, containing about 1 trillion stars. In 4.5 billion years, it will collide with the Milky Way.',
        lore: 'Andromeda is heading straight for us. INSPIRE fate: When two forces meet, they create something new.'
    },
    {
        id: 'pleiades', name: 'Pleiades', commonName: 'Seven Sisters', type: 'cluster',
        starType: 'B', // Hot blue stars
        ra: 3.79, dec: 24.12, magnitude: 1.6, distance: '440 light-years', emoji: '✨',
        science: 'The Pleiades is an open star cluster with seven bright stars visible. These hot, blue stars are young—only 100 million years old.',
        lore: 'Seven sisters running together across the cosmos. INSPIRE tribe: Find your crew. The ones who shine with you.'
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    userLat: null,
    userLon: null,
    currentTime: new Date(),
    timeOffset: 0,
    selectedObject: null,
    canvas: null,
    ctx: null,
    clickableObjects: [],
    visibleObjectCount: 0,
    sunPosition: null,
    moonPosition: null,

    // Zoom state
    zoom: 1.5,
    minZoom: 0.5,
    maxZoom: 3.0,

    // Orientation/Gyroscope state with smoothing
    orientation: {
        enabled: false,
        alpha: 0,
        beta: 0,
        gamma: 0,
        absolute: false,
        // Smoothing parameters
        smoothedAlpha: 0,
        smoothedBeta: 0,
        smoothedGamma: 0,
        smoothingFactor: 0.15, // Lower = smoother but more lag (0.05-0.3 recommended)
        lastUpdate: Date.now()
    },

    // Touch/pinch zoom state
    touchStart: null,
    lastPinchDistance: null,

    // Animation frame for smooth updates
    animationFrameId: null,

    // Background stars cache - prevents jitter
    backgroundStars: [],
    lastZoom: null,

    // Audio system
    audio: {
        menuMusic: null,
        appMusic: null,
        clickSound: null,
        sliderSound: null,
        musicVolume: 0.5,
        sfxVolume: 0.3
    },

    // App flow state
    appState: 'tap-to-start', // 'tap-to-start', 'intro-video', 'main-menu', 'settings', 'app'

    // Settings
    settings: {
        backgroundMusicVolume: 50,
        sfxVolume: 30,
        gyroSensitivity: 15
    }
};

// ============================================
// AUDIO SYSTEM
// ============================================

function initializeAudio() {
    // Initialize audio objects
    state.audio.menuMusic = new Audio('menu-music.mp3');
    state.audio.menuMusic.loop = true;
    state.audio.menuMusic.volume = state.settings.backgroundMusicVolume / 100;

    state.audio.appMusic = new Audio('app-background-music.mp3');
    state.audio.appMusic.loop = true;
    state.audio.appMusic.volume = state.settings.backgroundMusicVolume / 100;

    // Generate simple click and slider sounds using Web Audio API
    generateSFX();
}

function generateSFX() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create click sound
    state.audio.clickSound = () => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(state.settings.sfxVolume / 100 * 0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    };

    // Create slider sound
    state.audio.sliderSound = () => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 400;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(state.settings.sfxVolume / 100 * 0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
    };
}

function playSFX(type) {
    if (type === 'click' && state.audio.clickSound) {
        state.audio.clickSound();
    } else if (type === 'slider' && state.audio.sliderSound) {
        state.audio.sliderSound();
    }
}

function fadeInAudio(audioElement, duration = 2000) {
    audioElement.volume = 0;
    audioElement.play().catch(e => console.log('Audio play failed:', e));

    const targetVolume = state.settings.backgroundMusicVolume / 100;
    const steps = 50;
    const stepDuration = duration / steps;
    const volumeStep = targetVolume / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
        if (currentStep >= steps) {
            audioElement.volume = targetVolume;
            clearInterval(interval);
        } else {
            audioElement.volume = Math.min(targetVolume, audioElement.volume + volumeStep);
            currentStep++;
        }
    }, stepDuration);
}

function fadeOutAudio(audioElement, duration = 2000) {
    const startVolume = audioElement.volume;
    const steps = 50;
    const stepDuration = duration / steps;
    const volumeStep = startVolume / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
        if (currentStep >= steps) {
            audioElement.volume = 0;
            audioElement.pause();
            clearInterval(interval);
        } else {
            audioElement.volume = Math.max(0, audioElement.volume - volumeStep);
            currentStep++;
        }
    }, stepDuration);
}

function crossfadeAudio(fadeOutElement, fadeInElement, duration = 2000) {
    fadeOutAudio(fadeOutElement, duration);
    fadeInAudio(fadeInElement, duration);
}

// ============================================
// SCREEN TRANSITIONS
// ============================================

function showScreen(screenName) {
    const screens = {
        'tap-to-start': document.getElementById('tap-to-start-screen'),
        'intro-video': document.getElementById('intro-video-screen'),
        'main-menu': document.getElementById('main-menu-screen'),
        'settings': document.getElementById('app-settings-screen'),
        'app': document.getElementById('inspire-starfield-app')
    };

    // Hide all screens
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.add('hidden');
    });

    // Show requested screen
    if (screens[screenName]) {
        screens[screenName].classList.remove('hidden');
        state.appState = screenName;
    }
}

function handleTapToStart() {
    playSFX('click');
    showScreen('intro-video');
    playIntroVideo();
}

function playIntroVideo() {
    const video = document.getElementById('intro-video');
    video.currentTime = 0;
    video.play().catch(e => console.log('Video play failed:', e));

    video.addEventListener('ended', showMainMenu);
}

function skipIntroVideo() {
    playSFX('click');
    const video = document.getElementById('intro-video');
    video.pause();
    video.removeEventListener('ended', showMainMenu);
    showMainMenu();
}

function showMainMenu() {
    showScreen('main-menu');
    // Fade in menu music
    if (state.audio.menuMusic) {
        fadeInAudio(state.audio.menuMusic, 2000);
    }
}

function startApp() {
    playSFX('click');

    // Crossfade from menu music to app music
    if (state.audio.menuMusic && state.audio.appMusic) {
        crossfadeAudio(state.audio.menuMusic, state.audio.appMusic, 2000);
    }

    showScreen('app');

    // Initialize the starfield app if not already done
    const hasVisited = localStorage.getItem('starfield-visited');
    if (!hasVisited) {
        document.getElementById('instructions-overlay').classList.remove('hidden');
    } else {
        document.getElementById('instructions-overlay').classList.add('hidden');
        hideLoading();
    }
}

function openSettings() {
    playSFX('click');
    showScreen('settings');
}

function closeSettings() {
    playSFX('click');
    showScreen('main-menu');
}

function saveSettings() {
    playSFX('click');

    // Apply settings
    const bgMusicVolume = parseInt(document.getElementById('bg-music-slider').value);
    const sfxVolume = parseInt(document.getElementById('sfx-slider').value);
    const gyroSensitivity = parseInt(document.getElementById('settings-gyro-sensitivity').value);

    state.settings.backgroundMusicVolume = bgMusicVolume;
    state.settings.sfxVolume = sfxVolume;
    state.settings.gyroSensitivity = gyroSensitivity;

    // Update audio volumes
    if (state.audio.menuMusic) state.audio.menuMusic.volume = bgMusicVolume / 100;
    if (state.audio.appMusic) state.audio.appMusic.volume = bgMusicVolume / 100;

    // Update gyro sensitivity in main app
    state.orientation.smoothingFactor = gyroSensitivity / 100;
    document.getElementById('gyro-sensitivity-slider').value = gyroSensitivity;
    updateSensitivityDisplay();

    closeSettings();
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeAudio();
    setupNewEventListeners();
});

function setupNewEventListeners() {
    // Tap to start
    document.getElementById('tap-to-start-screen').addEventListener('click', handleTapToStart);

    // Intro video
    document.getElementById('skip-intro-btn').addEventListener('click', skipIntroVideo);

    // Main menu
    document.getElementById('start-app-btn').addEventListener('click', startApp);
    document.getElementById('app-settings-btn').addEventListener('click', openSettings);

    // Settings
    document.getElementById('close-settings-btn').addEventListener('click', closeSettings);
    document.getElementById('save-settings-btn').addEventListener('click', saveSettings);

    // Settings sliders
    document.getElementById('bg-music-slider').addEventListener('input', (e) => {
        playSFX('slider');
        const value = e.target.value;
        document.getElementById('bg-music-value').textContent = `${value}%`;
    });

    document.getElementById('sfx-slider').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('sfx-value').textContent = `${value}%`;
        state.settings.sfxVolume = parseInt(value);
        playSFX('slider');
    });

    document.getElementById('settings-gyro-sensitivity').addEventListener('input', (e) => {
        playSFX('slider');
        const value = parseInt(e.target.value);
        let label = 'Medium';
        if (value <= 10) label = 'Very Smooth';
        else if (value <= 17) label = 'Smooth';
        else if (value <= 23) label = 'Balanced';
        else label = 'Responsive';
        document.getElementById('settings-sensitivity-value').textContent = label;
    });

    // Initialize main app after short delay
    setTimeout(initializeApp, 100);
}

function initializeApp() {
    state.canvas = document.getElementById('starfield-canvas');
    state.ctx = state.canvas.getContext('2d');
    resizeCanvas();
    
    setupEventListeners();
    checkOrientationSupport();
    
    const hasVisited = localStorage.getItem('starfield-visited');
    if (!hasVisited) {
        document.getElementById('instructions-overlay').classList.remove('hidden');
    } else {
        document.getElementById('instructions-overlay').classList.add('hidden');
        hideLoading();
    }
    
    tryGeolocation();
    updateZoomDisplay();
    updateSensitivityDisplay();
}

function updateSensitivityDisplay() {
    const slider = document.getElementById('gyro-sensitivity-slider');
    const value = parseInt(slider.value);
    const label = document.getElementById('sensitivity-value');

    if (value <= 10) {
        label.textContent = 'Very Smooth';
    } else if (value <= 17) {
        label.textContent = 'Smooth';
    } else if (value <= 23) {
        label.textContent = 'Balanced';
    } else {
        label.textContent = 'Responsive';
    }
}

function setupEventListeners() {
    document.getElementById('start-btn').addEventListener('click', () => {
        playSFX('click');
        document.getElementById('instructions-overlay').classList.add('hidden');
        localStorage.setItem('starfield-visited', 'true');
        hideLoading();
    });

    document.getElementById('geolocate-btn').addEventListener('click', () => { playSFX('click'); getGeolocation(); });
    document.getElementById('location-manual-btn').addEventListener('click', () => { playSFX('click'); openLocationModal(); });
    document.getElementById('save-location-btn').addEventListener('click', () => { playSFX('click'); saveManualLocation(); });
    document.getElementById('cancel-location-btn').addEventListener('click', () => { playSFX('click'); closeLocationModal(); });

    document.getElementById('time-slider').addEventListener('input', (e) => { playSFX('slider'); handleTimeSlider(e); });
    document.getElementById('time-back-btn').addEventListener('click', () => { playSFX('click'); adjustTime(-1); });
    document.getElementById('time-forward-btn').addEventListener('click', () => { playSFX('click'); adjustTime(1); });
    document.getElementById('reset-time-btn').addEventListener('click', () => { playSFX('click'); resetTime(); });

    document.getElementById('zoom-in-btn').addEventListener('click', () => { playSFX('click'); zoomIn(); });
    document.getElementById('zoom-out-btn').addEventListener('click', () => { playSFX('click'); zoomOut(); });
    document.getElementById('reset-zoom-btn').addEventListener('click', () => { playSFX('click'); resetZoom(); });

    document.getElementById('gyro-toggle').addEventListener('change', (e) => { playSFX('click'); toggleOrientation(e); });
    document.getElementById('gyro-sensitivity-slider').addEventListener('input', (e) => { playSFX('slider'); handleSensitivityChange(e); });
    document.getElementById('fullscreen-btn').addEventListener('click', () => { playSFX('click'); toggleFullscreen(); });

    document.getElementById('close-panel-btn').addEventListener('click', () => { playSFX('click'); closeInfoPanel(); });
    document.getElementById('panel-handle').addEventListener('click', () => { playSFX('click'); toggleInfoPanel(); });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => { playSFX('click'); switchTab(e.target.closest('.tab-btn').dataset.tab); });
    });

    state.canvas.addEventListener('click', handleCanvasClick);
    state.canvas.addEventListener('touchend', handleCanvasClick);
    state.canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    state.canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    state.canvas.addEventListener('touchend', handleTouchEnd);
    state.canvas.addEventListener('wheel', handleWheelZoom, { passive: false });

    window.addEventListener('resize', resizeCanvas);
}

// ============================================
// ORIENTATION/GYROSCOPE SUPPORT - WITH SMOOTHING
// ============================================

function checkOrientationSupport() {
    if (!window.DeviceOrientationEvent) {
        document.getElementById('orientation-section').style.display = 'none';
        document.getElementById('gyro-instruction').style.display = 'none';
        return;
    }
    
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        document.getElementById('gyro-toggle').addEventListener('change', async (e) => {
            if (e.target.checked) {
                try {
                    const permission = await DeviceOrientationEvent.requestPermission();
                    if (permission === 'granted') {
                        enableOrientation();
                    } else {
                        e.target.checked = false;
                        alert('Device orientation permission denied.');
                    }
                } catch (error) {
                    e.target.checked = false;
                    alert('Error requesting device orientation permission.');
                }
            } else {
                disableOrientation();
            }
        });
    }
}

function toggleOrientation(e) {
    if (e.target.checked) {
        enableOrientation();
    } else {
        disableOrientation();
    }
}

function enableOrientation() {
    state.orientation.enabled = true;
    state.orientation.lastUpdate = Date.now();
    
    // Start animation loop for smooth updates
    startOrientationLoop();
    
    window.addEventListener('deviceorientationabsolute', handleOrientation, true);
    window.addEventListener('deviceorientation', handleOrientation, true);
}

function disableOrientation() {
    state.orientation.enabled = false;
    
    // Stop animation loop
    if (state.animationFrameId) {
        cancelAnimationFrame(state.animationFrameId);
        state.animationFrameId = null;
    }
    
    window.removeEventListener('deviceorientationabsolute', handleOrientation, true);
    window.removeEventListener('deviceorientation', handleOrientation, true);
    
    state.orientation.alpha = 0;
    state.orientation.smoothedAlpha = 0;
    updateCompass(0);
    drawStarfield();
}

// Exponential smoothing for gyroscope values
function smoothValue(current, target, factor) {
    // Handle wraparound for compass heading (0-360 degrees)
    if (Math.abs(target - current) > 180) {
        if (target > current) {
            current += 360;
        } else {
            target += 360;
        }
    }
    
    const smoothed = current + (target - current) * factor;
    return smoothed % 360;
}

function handleOrientation(event) {
    if (!state.orientation.enabled) return;
    
    // Get raw values
    const rawAlpha = event.alpha || 0;
    const rawBeta = event.beta || 0;
    const rawGamma = event.gamma || 0;
    
    // Store raw values for smoothing
    state.orientation.alpha = rawAlpha;
    state.orientation.beta = rawBeta;
    state.orientation.gamma = rawGamma;
    state.orientation.absolute = event.absolute || false;
}

// Smooth orientation update loop (separate from event handler)
function startOrientationLoop() {
    function updateLoop() {
        if (!state.orientation.enabled) return;
        
        const now = Date.now();
        const deltaTime = now - state.orientation.lastUpdate;
        state.orientation.lastUpdate = now;
        
        // Apply exponential smoothing
        state.orientation.smoothedAlpha = smoothValue(
            state.orientation.smoothedAlpha,
            state.orientation.alpha,
            state.orientation.smoothingFactor
        );
        
        state.orientation.smoothedBeta = state.orientation.smoothedBeta + 
            (state.orientation.beta - state.orientation.smoothedBeta) * state.orientation.smoothingFactor;
        
        state.orientation.smoothedGamma = state.orientation.smoothedGamma + 
            (state.orientation.gamma - state.orientation.smoothedGamma) * state.orientation.smoothingFactor;
        
        // Update compass with smoothed values
        updateCompass(state.orientation.smoothedAlpha);
        
        // Redraw starfield with smoothed orientation
        drawStarfield();
        
        // Continue loop
        state.animationFrameId = requestAnimationFrame(updateLoop);
    }
    
    updateLoop();
}

function updateCompass(heading) {
    const needle = document.getElementById('compass-needle');
    const headingDisplay = document.getElementById('compass-heading');

    // Rotate needle smoothly
    needle.style.transform = `rotate(${-heading}deg)`;

    // Update heading display
    const roundedHeading = Math.round(heading);
    headingDisplay.textContent = `${roundedHeading}°`;

    // Update direction
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(heading / 45) % 8;
    const direction = directions[index];
    document.getElementById('viewing-direction').textContent = `Facing ${direction}`;
}

function handleSensitivityChange(e) {
    const value = parseInt(e.target.value);

    // Convert slider value (5-30) to smoothing factor (0.3-0.05)
    // Lower slider value = smoother (lower smoothing factor)
    // Higher slider value = more responsive (higher smoothing factor)
    state.orientation.smoothingFactor = value / 100;

    // Update label
    const label = document.getElementById('sensitivity-value');
    if (value <= 10) {
        label.textContent = 'Very Smooth';
    } else if (value <= 17) {
        label.textContent = 'Smooth';
    } else if (value <= 23) {
        label.textContent = 'Balanced';
    } else {
        label.textContent = 'Responsive';
    }
}

// ============================================
// ZOOM CONTROLS
// ============================================

function zoomIn() {
    state.zoom = Math.min(state.maxZoom, state.zoom + 0.25);
    updateZoomDisplay();
    drawStarfield();
}

function zoomOut() {
    state.zoom = Math.max(state.minZoom, state.zoom - 0.25);
    updateZoomDisplay();
    drawStarfield();
}

function resetZoom() {
    state.zoom = 1.5;
    updateZoomDisplay();
    drawStarfield();
}

function updateZoomDisplay() {
    document.getElementById('zoom-level').textContent = `${Math.round(state.zoom * 100)}%`;
    document.getElementById('zoom-indicator').textContent = `${state.zoom.toFixed(1)}x`;
}

function handleTouchStart(e) {
    if (e.touches.length === 2) {
        e.preventDefault();
        const distance = getTouchDistance(e.touches);
        state.lastPinchDistance = distance;
    } else if (e.touches.length === 1) {
        state.touchStart = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    }
}

function handleTouchMove(e) {
    if (e.touches.length === 2 && state.lastPinchDistance) {
        e.preventDefault();
        const distance = getTouchDistance(e.touches);
        const delta = distance - state.lastPinchDistance;
        const zoomDelta = delta * 0.005;
        
        state.zoom = Math.max(state.minZoom, Math.min(state.maxZoom, state.zoom + zoomDelta));
        state.lastPinchDistance = distance;
        
        updateZoomDisplay();
        drawStarfield();
    }
}

function handleTouchEnd(e) {
    if (e.touches.length < 2) {
        state.lastPinchDistance = null;
    }
    if (e.touches.length === 0) {
        state.touchStart = null;
    }
}

function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function handleWheelZoom(e) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    state.zoom = Math.max(state.minZoom, Math.min(state.maxZoom, state.zoom + delta));
    updateZoomDisplay();
    drawStarfield();
}

// ============================================
// FULLSCREEN
// ============================================

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// ============================================
// CANVAS MANAGEMENT
// ============================================

function resizeCanvas() {
    const container = state.canvas.parentElement;
    state.canvas.width = container.clientWidth;
    state.canvas.height = container.clientHeight;
    drawStarfield();
}

function clearCanvas() {
    const gradient = state.ctx.createLinearGradient(0, 0, 0, state.canvas.height);
    gradient.addColorStop(0, '#0B0E16');
    gradient.addColorStop(0.6, '#0d1117');
    gradient.addColorStop(1, '#1a1a2e');
    state.ctx.fillStyle = gradient;
    state.ctx.fillRect(0, 0, state.canvas.width, state.canvas.height);
}

// ============================================
// GEOLOCATION
// ============================================

function tryGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                state.userLat = position.coords.latitude;
                state.userLon = position.coords.longitude;
                updateLocationDisplay();
                drawStarfield();
            },
            error => {
                console.log('Geolocation unavailable:', error);
                state.userLat = 38.8462;
                state.userLon = -77.3064;
                updateLocationDisplay();
                drawStarfield();
            }
        );
    } else {
        state.userLat = 38.8462;
        state.userLon = -77.3064;
        updateLocationDisplay();
        drawStarfield();
    }
}

function getGeolocation() {
    if (navigator.geolocation) {
        showLoading();
        navigator.geolocation.getCurrentPosition(
            position => {
                state.userLat = position.coords.latitude;
                state.userLon = position.coords.longitude;
                updateLocationDisplay();
                drawStarfield();
                hideLoading();
            },
            error => {
                alert('Unable to get location. Please set manually.');
                hideLoading();
            }
        );
    }
}

function openLocationModal() {
    document.getElementById('location-modal').classList.remove('hidden');
    if (state.userLat !== null) {
        document.getElementById('latitude-input').value = state.userLat.toFixed(4);
        document.getElementById('longitude-input').value = state.userLon.toFixed(4);
    }
}

function closeLocationModal() {
    document.getElementById('location-modal').classList.add('hidden');
}

function saveManualLocation() {
    const lat = parseFloat(document.getElementById('latitude-input').value);
    const lon = parseFloat(document.getElementById('longitude-input').value);
    
    if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
        alert('Please enter valid coordinates.\nLatitude: -90 to 90\nLongitude: -180 to 180');
        return;
    }
    
    state.userLat = lat;
    state.userLon = lon;
    updateLocationDisplay();
    closeLocationModal();
    drawStarfield();
}

function updateLocationDisplay() {
    const text = state.userLat !== null 
        ? `${Math.abs(state.userLat).toFixed(2)}°${state.userLat >= 0 ? 'N' : 'S'}, ${Math.abs(state.userLon).toFixed(2)}°${state.userLon >= 0 ? 'E' : 'W'}`
        : 'Awaiting location...';
    document.getElementById('location-text').textContent = text;
}

// ============================================
// TIME CONTROLS
// ============================================

function handleTimeSlider(e) {
    state.timeOffset = parseFloat(e.target.value);
    updateTimeDisplay();
    drawStarfield();
}

function adjustTime(hours) {
    state.timeOffset = Math.max(-12, Math.min(12, state.timeOffset + hours));
    document.getElementById('time-slider').value = state.timeOffset;
    updateTimeDisplay();
    drawStarfield();
}

function resetTime() {
    state.timeOffset = 0;
    state.currentTime = new Date();
    document.getElementById('time-slider').value = 0;
    updateTimeDisplay();
    drawStarfield();
}

function updateTimeDisplay() {
    const displayTime = new Date(state.currentTime.getTime() + state.timeOffset * 3600000);
    const formatted = displayTime.toLocaleString('en-US', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
    });
    
    const label = state.timeOffset === 0 ? 'NOW' : 
                  state.timeOffset > 0 ? `+${state.timeOffset}H` : `${state.timeOffset}H`;
    
    document.getElementById('current-time-display').textContent = `${label} // ${formatted}`;
}

// ============================================
// CELESTIAL CALCULATIONS
// ============================================

function calculateJulianDate(date) {
    return (date.getTime() / 86400000) + 2440587.5;
}

function calculateLocalSiderealTime(lon, date) {
    const jd = calculateJulianDate(date);
    const t = (jd - 2451545.0) / 36525.0;
    const gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 
                  0.000387933 * t * t - (t * t * t) / 38710000.0;
    const lst = (gmst + lon) % 360;
    return (lst / 15 + 24) % 24;
}

function raDecToAltAz(ra, dec, lat, lon, date) {
    const lst = calculateLocalSiderealTime(lon, date);
    const ha = (lst - ra) * 15;
    
    const haRad = ha * Math.PI / 180;
    const decRad = dec * Math.PI / 180;
    const latRad = lat * Math.PI / 180;
    
    const sinAlt = Math.sin(decRad) * Math.sin(latRad) + 
                   Math.cos(decRad) * Math.cos(latRad) * Math.cos(haRad);
    const alt = Math.asin(sinAlt) * 180 / Math.PI;
    
    const cosAz = (Math.sin(decRad) - Math.sin(alt * Math.PI / 180) * Math.sin(latRad)) /
                  (Math.cos(alt * Math.PI / 180) * Math.cos(latRad));
    let az = Math.acos(Math.max(-1, Math.min(1, cosAz))) * 180 / Math.PI;
    
    if (Math.sin(haRad) > 0) az = 360 - az;
    
    return { alt, az };
}

function calculateSunPosition(date) {
    const jd = calculateJulianDate(date);
    const n = jd - 2451545.0;
    const L = (280.460 + 0.9856474 * n) % 360;
    const g = (357.528 + 0.9856003 * n) % 360;
    const gRad = g * Math.PI / 180;
    
    const lambda = L + 1.915 * Math.sin(gRad) + 0.020 * Math.sin(2 * gRad);
    const epsilon = 23.439 - 0.0000004 * n;
    
    const lambdaRad = lambda * Math.PI / 180;
    const epsilonRad = epsilon * Math.PI / 180;
    
    const ra = Math.atan2(Math.cos(epsilonRad) * Math.sin(lambdaRad), Math.cos(lambdaRad)) * 180 / Math.PI;
    const dec = Math.asin(Math.sin(epsilonRad) * Math.sin(lambdaRad)) * 180 / Math.PI;
    
    return { ra: ra / 15, dec };
}

function calculateMoonPosition(date) {
    const jd = calculateJulianDate(date);
    const L = (218.316 + 13.176396 * (jd - 2451545.0)) % 360;
    const M = (134.963 + 13.064993 * (jd - 2451545.0)) % 360;
    const F = (93.272 + 13.229350 * (jd - 2451545.0)) % 360;
    
    const lambda = L + 6.289 * Math.sin(M * Math.PI / 180);
    const beta = 5.128 * Math.sin(F * Math.PI / 180);
    const epsilon = 23.439;
    
    const lambdaRad = lambda * Math.PI / 180;
    const betaRad = beta * Math.PI / 180;
    const epsilonRad = epsilon * Math.PI / 180;
    
    const ra = Math.atan2(
        Math.sin(lambdaRad) * Math.cos(epsilonRad) - Math.tan(betaRad) * Math.sin(epsilonRad),
        Math.cos(lambdaRad)
    ) * 180 / Math.PI;
    
    const dec = Math.asin(
        Math.sin(betaRad) * Math.cos(epsilonRad) + 
        Math.cos(betaRad) * Math.sin(epsilonRad) * Math.sin(lambdaRad)
    ) * 180 / Math.PI;
    
    return { ra: (ra / 15 + 24) % 24, dec };
}

function projectToHorizonCanvas(alt, az) {
    const centerX = state.canvas.width / 2;
    const horizonY = state.canvas.height - 160;
    const baseRadius = Math.min(state.canvas.width, horizonY) * 0.45;
    const maxRadius = baseRadius * state.zoom;
    
    if (alt < 0) return { x: 0, y: 0, visible: false };
    
    const altitudeRatio = alt / 90;
    const r = maxRadius * (1 - altitudeRatio);
    
    // Apply smoothed orientation offset if enabled
    let adjustedAz = az;
    if (state.orientation.enabled) {
        adjustedAz = (az - state.orientation.smoothedAlpha + 360) % 360;
    }
    
    const azRad = (adjustedAz - 90) * Math.PI / 180;
    const x = centerX + r * Math.cos(azRad);
    const y = horizonY - r * Math.sin(azRad) * 0.7;
    
    return { x, y, visible: true };
}

// ============================================
// STARFIELD RENDERING
// ============================================

function drawStarfield() {
    if (!state.userLat || !state.userLon) return;
    
    clearCanvas();
    state.clickableObjects = [];
    state.visibleObjectCount = 0;
    
    const currentDate = new Date(state.currentTime.getTime() + state.timeOffset * 3600000);
    
    drawBackgroundStars();
    drawMilkyWay();
    
    const sunPos = calculateSunPosition(currentDate);
    const moonPos = calculateMoonPosition(currentDate);
    state.sunPosition = raDecToAltAz(sunPos.ra, sunPos.dec, state.userLat, state.userLon, currentDate);
    state.moonPosition = raDecToAltAz(moonPos.ra, moonPos.dec, state.userLat, state.userLon, currentDate);
    
    drawSun(state.sunPosition, currentDate);
    drawMoon(state.moonPosition, currentDate);
    
    CELESTIAL_OBJECTS.forEach(obj => {
        drawCelestialObject(obj, currentDate);
    });
    
    document.getElementById('object-count').textContent = state.visibleObjectCount;
}

// Seeded random number generator for consistent star positions
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function generateBackgroundStars() {
    const numStars = 400;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            alt: seededRandom(i * 3) * 90,
            az: seededRandom(i * 3 + 1) * 360,
            brightness: seededRandom(i * 3 + 2) * 0.7 + 0.2,
            baseSize: seededRandom(i * 3 + 3) * 1.5 + 0.5
        });
    }

    return stars;
}

function drawBackgroundStars() {
    // Generate stars only once or when zoom level changes significantly
    if (state.backgroundStars.length === 0 || state.lastZoom === null || Math.abs(state.zoom - state.lastZoom) > 0.5) {
        state.backgroundStars = generateBackgroundStars();
        state.lastZoom = state.zoom;
    }

    for (const star of state.backgroundStars) {
        const { x, y, visible } = projectToHorizonCanvas(star.alt, star.az);

        if (!visible || x < 0 || x > state.canvas.width || y < 0 || y > state.canvas.height - 160) continue;

        const size = star.baseSize * Math.min(state.zoom, 1.5);

        state.ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        state.ctx.beginPath();
        state.ctx.arc(x, y, size, 0, Math.PI * 2);
        state.ctx.fill();
    }
}

function drawMilkyWay() {
    const centerX = state.canvas.width / 2;
    const horizonY = state.canvas.height - 160;
    
    state.ctx.save();
    state.ctx.globalAlpha = 0.12;
    
    const gradient = state.ctx.createLinearGradient(
        centerX - 250, horizonY - 100,
        centerX + 250, horizonY - 400
    );
    gradient.addColorStop(0, 'rgba(74, 158, 255, 0.3)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 212, 255, 0.3)');
    
    state.ctx.fillStyle = gradient;
    state.ctx.fillRect(centerX - 350, 0, 700, horizonY);
    state.ctx.restore();
}

function drawSun(sunAltAz, date) {
    const { x, y, visible } = projectToHorizonCanvas(sunAltAz.alt, sunAltAz.az);
    
    if (!visible || sunAltAz.alt < -6) return;
    if (x < 0 || x > state.canvas.width || y < 0 || y > state.canvas.height - 160) return;
    
    const size = 20 * Math.min(state.zoom, 2);
    const glowSize = 50 * Math.min(state.zoom, 2);
    
    const gradient = state.ctx.createRadialGradient(x, y, 0, x, y, glowSize);
    gradient.addColorStop(0, 'rgba(255, 220, 100, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 180, 50, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 120, 0, 0)');
    
    state.ctx.fillStyle = gradient;
    state.ctx.beginPath();
    state.ctx.arc(x, y, glowSize, 0, Math.PI * 2);
    state.ctx.fill();
    
    state.ctx.fillStyle = '#ffdd00';
    state.ctx.beginPath();
    state.ctx.arc(x, y, size, 0, Math.PI * 2);
    state.ctx.fill();
    
    state.clickableObjects.push({
        obj: {
            name: 'Sun', commonName: 'Sol', type: 'star', magnitude: -26.74,
            distance: '8 light-minutes', emoji: '☀️',
            science: 'The Sun is our local star, containing 99.86% of the solar system\'s mass. It\'s about 4.6 billion years old.',
            lore: 'The Sun is life itself. INSPIRE energy: You carry solar power in your DNA. You\'re literally made of stardust.'
        },
        x, y, radius: 25 * Math.min(state.zoom, 2)
    });
    
    state.visibleObjectCount++;
}

function drawMoon(moonAltAz, date) {
    const { x, y, visible } = projectToHorizonCanvas(moonAltAz.alt, moonAltAz.az);
    
    if (!visible) return;
    if (x < 0 || x > state.canvas.width || y < 0 || y > state.canvas.height - 160) return;
    
    const size = 16 * Math.min(state.zoom, 2);
    const glowSize = 35 * Math.min(state.zoom, 2);
    
    const gradient = state.ctx.createRadialGradient(x, y, 0, x, y, glowSize);
    gradient.addColorStop(0, 'rgba(200, 220, 255, 0.6)');
    gradient.addColorStop(0.5, 'rgba(150, 180, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
    
    state.ctx.fillStyle = gradient;
    state.ctx.beginPath();
    state.ctx.arc(x, y, glowSize, 0, Math.PI * 2);
    state.ctx.fill();
    
    state.ctx.fillStyle = '#e0e0f0';
    state.ctx.beginPath();
    state.ctx.arc(x, y, size, 0, Math.PI * 2);
    state.ctx.fill();
    
    state.clickableObjects.push({
        obj: {
            name: 'Moon', commonName: 'Luna', type: 'satellite', magnitude: -12.74,
            distance: '238,855 miles', emoji: '🌙',
            science: 'Earth\'s only natural satellite, tidally locked and causing ocean tides.',
            lore: 'The Moon pulls the tides and pulls at your soul. INSPIRE cycles: Honor your phases.'
        },
        x, y, radius: 22 * Math.min(state.zoom, 2)
    });
    
    state.visibleObjectCount++;
}

function drawCelestialObject(obj, date) {
    const { alt, az } = raDecToAltAz(obj.ra, obj.dec, state.userLat, state.userLon, date);
    const { x, y, visible } = projectToHorizonCanvas(alt, az);

    if (!visible) return;
    if (x < 0 || x > state.canvas.width || y < 0 || y > state.canvas.height - 160) return;

    state.visibleObjectCount++;

    const hitRadius = 20 * Math.min(state.zoom, 2);
    state.clickableObjects.push({ obj, x, y, radius: hitRadius });

    // Get star type properties for realistic rendering
    let starColor = '#FFFFFF';
    let starSizeMultiplier = 1.0;

    if (obj.type === 'star' && obj.starType && STAR_TYPES[obj.starType]) {
        const typeData = STAR_TYPES[obj.starType];
        starColor = typeData.color;
        starSizeMultiplier = typeData.size;
    }

    const glowSize = 20 * Math.min(state.zoom, 1.8) * (starSizeMultiplier * 0.8);
    const gradient = state.ctx.createRadialGradient(x, y, 0, x, y, glowSize);

    if (obj.type === 'star') {
        // Use star color for glow
        const rgb = hexToRgb(starColor);
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.9)`);
        gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`);
    } else if (obj.type === 'nebula') {
        gradient.addColorStop(0, 'rgba(236, 72, 153, 0.7)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.3)');
    } else if (obj.type === 'cluster') {
        const rgb = obj.starType ? hexToRgb(STAR_TYPES[obj.starType].color) : { r: 170, g: 191, b: 255 };
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`);
        gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`);
    } else {
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.7)');
        gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.3)');
    }
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    state.ctx.fillStyle = gradient;
    state.ctx.beginPath();
    state.ctx.arc(x, y, glowSize, 0, Math.PI * 2);
    state.ctx.fill();

    // Render star with realistic size based on type
    const baseSize = Math.max(2.5, (6 - obj.magnitude)) * Math.min(state.zoom, 1.5);
    const size = baseSize * starSizeMultiplier;
    state.ctx.fillStyle = starColor;
    state.ctx.beginPath();
    state.ctx.arc(x, y, size, 0, Math.PI * 2);
    state.ctx.fill();

    // Add labels to ALL visible celestial objects (not just bright ones)
    if (alt > 10 && state.zoom >= 1.0) {
        // Determine label color based on object type
        let labelColor = '#00D4FF';
        if (obj.type === 'star' && obj.starType && STAR_TYPES[obj.starType]) {
            labelColor = starColor;
        } else if (obj.type === 'nebula') {
            labelColor = '#EC4899';
        } else if (obj.type === 'cluster') {
            labelColor = '#A855F7';
        } else if (obj.type === 'galaxy') {
            labelColor = '#10B981';
        }

        const fontSize = Math.max(8, 10 * Math.min(state.zoom, 1.5));
        state.ctx.fillStyle = labelColor;
        state.ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        state.ctx.textAlign = 'center';
        state.ctx.shadowColor = labelColor;
        state.ctx.shadowBlur = 6;
        state.ctx.fillText(obj.name, x, y - (15 * Math.min(state.zoom, 1.5) + size));
        state.ctx.shadowBlur = 0;
    }
}

// Helper function to convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 255, g: 255, b: 255 };
}

// ============================================
// INTERACTION
// ============================================

function handleCanvasClick(e) {
    e.preventDefault();
    const rect = state.canvas.getBoundingClientRect();
    const x = (e.clientX || e.changedTouches?.[0]?.clientX) - rect.left;
    const y = (e.clientY || e.changedTouches?.[0]?.clientY) - rect.top;
    
    for (const item of state.clickableObjects) {
        const distance = Math.sqrt(Math.pow(x - item.x, 2) + Math.pow(y - item.y, 2));
        if (distance < item.radius) {
            showObjectInfo(item.obj);
            return;
        }
    }
}

function showObjectInfo(obj) {
    state.selectedObject = obj;
    
    document.getElementById('object-image').innerHTML = `<div class="image-placeholder">${obj.emoji}</div>`;
    document.getElementById('object-name').textContent = obj.name.toUpperCase();
    document.getElementById('object-type').textContent = `TYPE: ${obj.type}`;
    document.getElementById('object-magnitude').textContent = `MAG: ${obj.magnitude}`;
    document.getElementById('object-distance').textContent = `DIST: ${obj.distance}`;
    document.getElementById('science-text').textContent = obj.science;
    document.getElementById('lore-text').textContent = obj.lore;
    
    const panel = document.getElementById('info-panel');
    panel.classList.remove('collapsed');
    panel.classList.add('expanded');
}

function closeInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('expanded');
    panel.classList.add('collapsed');
}

function toggleInfoPanel() {
    const panel = document.getElementById('info-panel');
    if (panel.classList.contains('collapsed')) {
        panel.classList.remove('collapsed');
        panel.classList.add('expanded');
    } else {
        panel.classList.remove('expanded');
        panel.classList.add('collapsed');
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `${tabName}-tab`);
    });
}

// ============================================
// LOADING STATE
// ============================================

function showLoading() {
    document.getElementById('loading-overlay').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading-overlay').classList.add('hidden');
}

// Initialize
updateTimeDisplay();
