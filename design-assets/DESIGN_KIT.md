# Kanha Student House Design Kit

A comprehensive guide to the **"Royal & Resilient"** aesthetic of Kanha Student House. This kit ensures consistency across all digital and physical mediums.

---

##  Color Palette

The color system is designed to evoke the majesty of Kanha National Park and the regal presence of the Bengal Tiger.

### Primary Colors
| Color | Name | HEX | Usage |
| :--- | :--- | :--- | :--- |
| ![#D4AF37](https://via.placeholder.com/15/D4AF37/000000?text=+) | **Deep Royal Gold** | `#D4AF37` | Main brand color, call-to-actions, highlights, and icons. |
| ![#800000](https://via.placeholder.com/15/800000/000000?text=+) | **Deep Maroon** | `#800000` | Secondary brand color, headings in light mode, and dark backgrounds. |
| ![#1A1A1A](https://via.placeholder.com/15/1A1A1A/000000?text=+) | **Charcoal Black** | `#1A1A1A` | Dark mode background, primary text in light mode, and borders. |

### Surface & Backgrounds
| Color | Name | HEX | Usage |
| :--- | :--- | :--- | :--- |
| ![#F4F1EA](https://via.placeholder.com/15/F4F1EA/000000?text=+) | **Warm Paper** | `#F4F1EA` | Main background for light mode (textured). |
| ![#202020](https://via.placeholder.com/15/202020/000000?text=+) | **Paper Dark** | `#202020` | Secondary background for dark mode. |
| ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) | **Surface Light** | `#FFFFFF` | Card and navbar background in light mode. |
| ![#2A2A2A](https://via.placeholder.com/15/2A2A2A/000000?text=+) | **Surface Dark** | `#2A2A2A` | Card and navbar background in dark mode. |

---

##  Typography

We use a combination of a Serif display font for authority and a Sans-Serif body font for readability.

### Display: [Cinzel](https://fonts.google.com/specimen/Cinzel)
- **Weights**: 400, 600, 700, 800, 900
- **Usage**: Headings, Hero titles, and Navigation items.
- **Attributes**: All-caps, high contrast, elegant serifs.

### Body: [Lato](https://fonts.google.com/specimen/Lato)
- **Weights**: 300, 400, 700, 900
- **Usage**: Paragraphs, UI labels, and Buttons.
- **Attributes**: Modern, clean, and highly legible.

---

##  Design Tokens & Textures

### CSS Variables (Tailwind Extension)
```javascript
colors: {
    primary: "#D4AF37",    // Deep Royal Gold
    secondary: "#800000",  // Deep Maroon
    accent: "#1A1A1A",     // Charcoal Black
    "paper-light": "#F4F1EA",
    "paper-dark": "#202020",
    "surface-light": "#FFFFFF",
    "surface-dark": "#2A2A2A",
}
```

### Visual Patterns
- **Noise Texture**: A subtle `0.04` opacity fractal noise is overlaid on the entire site to give it a tangible "paper" feel.
- **Stamp Edges**: Radial gradient masks are used to create "postage stamp" scalloped edges for cards and images.
- **Tape Effect**: Translucent, rotated bars with a subtle shadow used to "pin" items to the page.

---

##  Components

### 1. The Stamp Card
Used for gallery items and feature highlights.
- **Style**: Scalloped edges, heavy shadow, white border.
- **Interaction**: Slight lift and rotation on hover.

### 2. The Royal Button
- **Light Mode**: Deep Maroon background, White text, Gold hover effect.
- **Dark Mode**: Deep Royal Gold background, Charcoal text, Black hover effect.

### 3. Navigation
A floating, glassmorphism-inspired bar with a subtle paper shadow and a centered logo stamp.

---

##  Branding Elements
- **Logo Style**: Centered "KANHA" text in Cinzel, paired with a tiger paw icon (`pets` material icon).
- **Iconography**: Material Symbols Outlined (Weights 100-700).
