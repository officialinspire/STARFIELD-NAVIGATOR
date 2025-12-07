# 🌌 STARFIELD NAVIGATOR

**Professional open-source astronomy tool for real-time sky exploration**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://inspireclothing.art)

![STARFIELD NAVIGATOR](https://img.shields.io/badge/Version-1.0.0-brightgreen)

> Explore the cosmos from your exact location with accurate celestial tracking, mobile gyroscope support, and interactive sky mapping.

## ✨ Features

### 🎯 Core Functionality
- **Real-Time Celestial Tracking** - Accurate positioning of stars, planets, and deep-sky objects
- **Location-Based Sky View** - See the actual sky above your current location
- **Time Travel** - Scrub through past and future skies (±12 hours)
- **Interactive Object Info** - Tap any celestial object to learn its science and cultural lore

### 📱 Mobile Experience
- **Gyroscope Navigation** - Move your device to explore the sky in real-time
- **Smooth Orientation Tracking** - Stabilized gyroscope with exponential smoothing
- **Pinch-to-Zoom** - Intuitive touch controls for closer inspection
- **Compass Integration** - Always know which direction you're facing

### 🔭 Advanced Features
- **Horizon-Based Visualization** - Ground-level perspective with realistic terrain
- **Zoom Capabilities** - 0.5x to 3x zoom with smart scaling
- **Direction Markers** - Cardinal directions (N, E, S, W) always visible
- **Sun & Moon Tracking** - Real-time solar and lunar positioning
- **Background Star Field** - Thousands of stars rendered dynamically

### 🎨 Design
- **NASA-Inspired UI** - Professional, clean interface
- **Modern Typography** - Inter, Space Grotesk, and JetBrains Mono fonts
- **Responsive Layout** - Works on desktop, tablet, and mobile
- **Dark Cosmic Theme** - Easy on the eyes for night observation

## 🚀 Live Demo

Visit: [inspireclothing.art/starfield-navigator](https://inspireclothing.art/starfield-navigator) *(coming soon)*

## 📸 Screenshots

### Desktop View
*View the cosmos from your desktop with full controls*

### Mobile View
*Take the stars with you - gyroscope-enabled sky tracking*

### Interactive Objects
*Tap any star to discover its story*

## 🛠️ Installation

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/officialinspire/STARFIELD-NAVIGATOR.git
cd STARFIELD-NAVIGATOR
```

2. **Open in browser**
```bash
# Simply open index.html in your web browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- For gyroscope features: Mobile device with orientation sensors
- For location features: GPS/location services enabled

## 📖 Usage

### Desktop
1. Click **"USE MY LOCATION"** or set manually
2. Use mouse wheel to zoom in/out
3. Click zoom buttons for precise control
4. Drag time slider to travel through time
5. Click any star to view information

### Mobile
1. Enable location permissions when prompted
2. Toggle **"Device Orientation Tracking"** to use gyroscope
3. Move your phone to explore the sky
4. Pinch to zoom
5. Tap stars for detailed info
6. Use compass for accurate direction

## 🎯 Celestial Objects

The app tracks and displays:
- **13 Major Stars**: Polaris, Sirius, Betelgeuse, Vega, Rigel, Altair, Deneb, Antares, Capella, Arcturus, and more
- **Deep Sky Objects**: Orion Nebula, Andromeda Galaxy, Pleiades Cluster
- **Solar System**: Sun, Moon (with real-time positioning)
- **Background Stars**: 400+ dynamically rendered stars

Each object includes:
- Scientific information
- Cultural significance
- INSPIRE philosophical wisdom

## 🧮 Technical Details

### Technologies
- **Pure Vanilla JavaScript** - No frameworks required
- **HTML5 Canvas** - Hardware-accelerated rendering
- **CSS3** - Modern styling with custom properties
- **Device Orientation API** - Gyroscope integration
- **Geolocation API** - Location-based astronomy

### Calculations
- Julian Date conversion
- Local Sidereal Time computation
- RA/Dec to Alt/Az coordinate transformation
- Solar and lunar ephemeris calculations
- Stereographic sky projection

### Performance
- Exponential smoothing for gyroscope (0.15 factor)
- RequestAnimationFrame for smooth 60fps updates
- Optimized canvas rendering
- Efficient star culling

## 🗺️ Roadmap

- [ ] Add more celestial objects (planets, constellations)
- [ ] Constellation line overlays
- [ ] Custom artwork for each object
- [ ] Augmented Reality mode
- [ ] Offline support with Service Workers
- [ ] Night mode red filter option
- [ ] Screenshot/share functionality
- [ ] Custom location bookmarks
- [ ] ISS tracking
- [ ] Meteor shower predictions

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Ideas
- Add more celestial objects
- Improve astronomical calculations
- Create custom object artwork
- Enhance mobile experience
- Add new features from roadmap
- Fix bugs and improve performance
- Improve documentation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Astronomical calculations based on Jean Meeus's "Astronomical Algorithms"
- Inspired by professional planetarium software
- Built with passion for making astronomy accessible

## 👤 Author

**INSPIRE Clothing**
- Website: [inspireclothing.art](https://inspireclothing.art)
- GitHub: [@officialinspire](https://github.com/officialinspire)

## 📬 Contact

Have questions or suggestions? 
- Open an issue on GitHub
- Visit [inspireclothing.art](https://inspireclothing.art)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you explore the cosmos!

---

**Made with ❤️ by INSPIRE** | *Open Source Astronomy for Everyone*
