// ============================================
// INSPIRE STARFIELD NAVIGATOR V3
// NASA-Style Open Source Astronomy Tool
// With Gyroscope, Zoom, and Compass Support
// ============================================

// ============================================
// CELESTIAL DATA CATALOG
// ============================================

const CELESTIAL_OBJECTS = [
    {
        id: 'polaris', name: 'Polaris', commonName: 'North Star', type: 'star',
        ra: 2.53, dec: 89.26, magnitude: 2.0, distance: '433 light-years', emoji: '⭐',
        science: 'Polaris is a triple star system located roughly 433 light-years away. It\'s the brightest star in Ursa Minor and sits almost directly above Earth\'s North Pole, making it appear nearly stationary while other stars rotate around it.',
        lore: 'The North Star is your cosmic anchor—a fixed point in an ever-spinning sky. Ancient travelers used it as their GPS. INSPIRE truth: When you\'re lost, find your Polaris.'
    },
    {
        id: 'sirius', name: 'Sirius', commonName: 'Dog Star', type: 'star',
        ra: 6.75, dec: -16.72, magnitude: -1.46, distance: '8.6 light-years', emoji: '💎',
        science: 'Sirius is the brightest star in Earth\'s night sky, located 8.6 light-years away in Canis Major. It\'s actually a binary star system. The "Dog Days" of summer are named after Sirius rising with the sun.',
        lore: 'Sirius burns so bright it looks like a diamond dropped in velvet. INSPIRE wisdom: Shine so bright they can\'t ignore you. Your light is your revolution.'
    },
    {
        id: 'betelgeuse', name: 'Betelgeuse', commonName: 'Alpha Orionis', type: 'star',
        ra: 5.92, dec: 7.41, magnitude: 0.5, distance: '550 light-years', emoji: '🔴',
        science: 'Betelgeuse is a red supergiant in Orion, roughly 550 light-years away and nearing the end of its life. It could go supernova any time in the next 100,000 years.',
        lore: 'This dying star is 1,000 times bigger than our Sun. INSPIRE philosophy: Even stars die, but they go out in glory. Make it count.'
    },
    {
        id: 'vega', name: 'Vega', commonName: 'Alpha Lyrae', type: 'star',
        ra: 18.62, dec: 38.78, magnitude: 0.03, distance: '25 light-years', emoji: '🌟',
        science: 'Vega is one of the brightest stars visible from Earth, located 25 light-years away. It\'s been a pole star in the past and will be again in 12,000 years.',
        lore: 'Vega was the North Star when the pyramids were built. INSPIRE truth: Everything cycles. Your moment comes around again.'
    },
    {
        id: 'rigel', name: 'Rigel', commonName: 'Beta Orionis', type: 'star',
        ra: 5.24, dec: -8.20, magnitude: 0.18, distance: '860 light-years', emoji: '💠',
        science: 'Rigel is a blue supergiant in Orion\'s foot, approximately 860 light-years away. It\'s a quadruple star system with immense luminosity—40,000 times that of our Sun.',
        lore: 'Rigel is the rebel of Orion—burning blue-hot and fierce. INSPIRE energy: Be Rigel. Burn brighter than expected.'
    },
    {
        id: 'altair', name: 'Altair', commonName: 'Alpha Aquilae', type: 'star',
        ra: 19.85, dec: 8.87, magnitude: 0.76, distance: '17 light-years', emoji: '⚡',
        science: 'Altair is one of the closest stars visible to the naked eye at just 17 light-years away. It rotates incredibly fast—once every 9 hours.',
        lore: 'Altair spins so fast it\'s dizzy with power. INSPIRE romance: Even cosmic forces can\'t stop true connection.'
    },
    {
        id: 'deneb', name: 'Deneb', commonName: 'Alpha Cygni', type: 'star',
        ra: 20.69, dec: 45.28, magnitude: 1.25, distance: '2,600 light-years', emoji: '🦢',
        science: 'Deneb is one of the most luminous stars known, a blue-white supergiant 200,000 times brighter than our Sun.',
        lore: 'Deneb is the cosmic lighthouse. INSPIRE power: Your influence can reach farther than you think.'
    },
    {
        id: 'antares', name: 'Antares', commonName: 'Alpha Scorpii', type: 'star',
        ra: 16.49, dec: -26.43, magnitude: 1.06, distance: '550 light-years', emoji: '♏',
        science: 'Antares is a red supergiant in Scorpius. Its name means "rival of Mars" due to its reddish color.',
        lore: 'Antares rivals Mars itself—red, fierce, unstoppable. INSPIRE rebellion: Challenge the status quo.'
    },
    {
        id: 'capella', name: 'Capella', commonName: 'Alpha Aurigae', type: 'star',
        ra: 5.28, dec: 45.99, magnitude: 0.08, distance: '43 light-years', emoji: '🐐',
        science: 'Capella is actually four stars—two giant pairs orbiting each other. It\'s the sixth-brightest star in the night sky.',
        lore: 'Capella is four stars masquerading as one. INSPIRE unity: You\'re stronger together.'
    },
    {
        id: 'arcturus', name: 'Arcturus', commonName: 'Alpha Boötis', type: 'star',
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
    zoom: 1.5, // Default zoomed in for better star visibility
    minZoom: 0.5,
    maxZoom: 3.0,
    
    // Orientation/Gyroscope state
    orientation: {
        enabled: false,
        alpha: 0,  // Compass direction (0-360)
        beta: 0,   // Front-to-back tilt
        gamma: 0,  // Left-to-right tilt
        absolute: false
    },
    
    // Touch/pinch zoom state
    touchStart: null,
    lastPinchDistance: null
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

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
}

function setupEventListeners() {
    // Instructions
    document.getElementById('start-btn').addEventListener('click', () => {
        document.getElementById('instructions-overlay').classList.add('hidden');
        localStorage.setItem('starfield-visited', 'true');
        hideLoading();
    });
    
    // Location
    document.getElementById('geolocate-btn').addEventListener('click', getGeolocation);
    document.getElementById('location-manual-btn').addEventListener('click', openLocationModal);
    document.getElementById('save-location-btn').addEventListener('click', saveManualLocation);
    document.getElementById('cancel-location-btn').addEventListener('click', closeLocationModal);
    
    // Time
    document.getElementById('time-slider').addEventListener('input', handleTimeSlider);
    document.getElementById('time-back-btn').addEventListener('click', () => adjustTime(-1));
    document.getElementById('time-forward-btn').addEventListener('click', () => adjustTime(1));
    document.getElementById('reset-time-btn').addEventListener('click', resetTime);
    
    // Zoom
    document.getElementById('zoom-in-btn').addEventListener('click', zoomIn);
    document.getElementById('zoom-out-btn').addEventListener('click', zoomOut);
    document.getElementById('reset-zoom-btn').addEventListener('click', resetZoom);
    
    // Orientation
    document.getElementById('gyro-toggle').addEventListener('change', toggleOrientation);
    
    // Fullscreen
    document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);
    
    // Info panel
    document.getElementById('close-panel-btn').addEventListener('click', closeInfoPanel);
    document.getElementById('panel-handle').addEventListener('click', toggleInfoPanel);
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => switchTab(e.target.closest('.tab-btn').dataset.tab));
    });
    
    // Canvas interaction
    state.canvas.addEventListener('click', handleCanvasClick);
    state.canvas.addEventListener('touchend', handleCanvasClick);
    
    // Pinch zoom
    state.canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    state.canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    state.canvas.addEventListener('touchend', handleTouchEnd);
    
    // Mouse wheel zoom
    state.canvas.addEventListener('wheel', handleWheelZoom, { passive: false });
    
    // Window resize
    window.addEventListener('resize', resizeCanvas);
}

// ============================================
// ORIENTATION/GYROSCOPE SUPPORT
// ============================================

function checkOrientationSupport() {
    if (!window.DeviceOrientationEvent) {
        document.getElementById('orientation-section').style.display = 'none';
        document.getElementById('gyro-instruction').style.display = 'none';
        return;
    }
    
    // Check if permission is needed (iOS 13+)
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS requires permission
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
    window.addEventListener('deviceorientationabsolute', handleOrientation, true);
    window.addEventListener('deviceorientation', handleOrientation, true);
}

function disableOrientation() {
    state.orientation.enabled = false;
    window.removeEventListener('deviceorientationabsolute', handleOrientation, true);
    window.removeEventListener('deviceorientation', handleOrientation, true);
    state.orientation.alpha = 0;
    updateCompass(0);
}

function handleOrientation(event) {
    if (!state.orientation.enabled) return;
    
    // Use absolute orientation if available (includes magnetic north)
    state.orientation.absolute = event.absolute || false;
    state.orientation.alpha = event.alpha || 0;
    state.orientation.beta = event.beta || 0;
    state.orientation.gamma = event.gamma || 0;
    
    // Update compass
    updateCompass(state.orientation.alpha);
    
    // Redraw starfield with orientation offset
    drawStarfield();
}

function updateCompass(heading) {
    const needle = document.getElementById('compass-needle');
    const headingDisplay = document.getElementById('compass-heading');
    
    // Rotate needle (subtract because we want north to point up when alpha is 0)
    needle.style.transform = `rotate(${-heading}deg)`;
    
    // Update heading display
    const roundedHeading = Math.round(heading);
    headingDisplay.textContent = `${roundedHeading}°`;
    
    // Update direction in compass (N, NE, E, etc.)
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(heading / 45) % 8;
    const direction = directions[index];
    document.getElementById('viewing-direction').textContent = `Facing ${direction}`;
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

// Touch/Pinch Zoom
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

// Mouse Wheel Zoom
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
    const maxRadius = baseRadius * state.zoom; // Apply zoom
    
    if (alt < 0) return { x: 0, y: 0, visible: false };
    
    const altitudeRatio = alt / 90;
    const r = maxRadius * (1 - altitudeRatio);
    
    // Apply orientation offset if enabled
    let adjustedAz = az;
    if (state.orientation.enabled) {
        adjustedAz = (az - state.orientation.alpha + 360) % 360;
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

function drawBackgroundStars() {
    const numStars = Math.floor(400 * state.zoom); // More stars when zoomed
    
    for (let i = 0; i < numStars; i++) {
        const alt = Math.random() * 90;
        const az = Math.random() * 360;
        const { x, y, visible } = projectToHorizonCanvas(alt, az);
        
        if (!visible || x < 0 || x > state.canvas.width || y < 0 || y > state.canvas.height - 160) continue;
        
        const brightness = Math.random() * 0.7 + 0.2;
        const size = (Math.random() * 1.5 + 0.5) * Math.min(state.zoom, 1.5);
        
        state.ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
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
    
    const glowSize = 20 * Math.min(state.zoom, 1.8);
    const gradient = state.ctx.createRadialGradient(x, y, 0, x, y, glowSize);
    
    if (obj.type === 'star') {
        gradient.addColorStop(0, 'rgba(74, 158, 255, 0.9)');
        gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.4)');
    } else if (obj.type === 'nebula') {
        gradient.addColorStop(0, 'rgba(236, 72, 153, 0.7)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.3)');
    } else {
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.7)');
        gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.3)');
    }
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    state.ctx.fillStyle = gradient;
    state.ctx.beginPath();
    state.ctx.arc(x, y, glowSize, 0, Math.PI * 2);
    state.ctx.fill();
    
    const size = Math.max(2.5, (6 - obj.magnitude)) * Math.min(state.zoom, 1.5);
    state.ctx.fillStyle = '#ffffff';
    state.ctx.beginPath();
    state.ctx.arc(x, y, size, 0, Math.PI * 2);
    state.ctx.fill();
    
    // Label bright stars when zoomed
    if (obj.magnitude < 1 && alt > 20 && state.zoom >= 1.2) {
        state.ctx.fillStyle = '#00D4FF';
        state.ctx.font = `${10 * Math.min(state.zoom, 1.5)}px "JetBrains Mono", monospace`;
        state.ctx.textAlign = 'center';
        state.ctx.shadowColor = 'rgba(0, 212, 255, 0.8)';
        state.ctx.shadowBlur = 6;
        state.ctx.fillText(obj.name, x, y - 15 * Math.min(state.zoom, 1.5));
        state.ctx.shadowBlur = 0;
    }
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
