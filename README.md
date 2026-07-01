# Corporate Memphis Prompt Gallery 🎨

A hand-curated collection of 20 modern flat vector art templates and prompts. Designed specifically for tech startups, SaaS applications, modern web platforms, e-commerce, and physical markets. 

Each prompt template is optimized to work beautifully with Google's native image generation models (**Gemini / Nano Banana / Imagen**) and is paired with a custom vector representation.

---

## ✨ Features

- **20 Curated Prompt Templates:** Structured prompts targeting specific domains (Teamwork, Support, Logistics, Care, E-Commerce, Local Markets, and Tech).
- **One-Click Clipboard Copying:** Interactive buttons to instantly copy prompts, with automatic success states and mobile fallback support.
- **Dynamic Tag Filter & Fuzzy Search:** Fast, client-side search query matching and tag-filtering pills.
- **Glassmorphic UI Design:** High-fidelity dark mode interface utilizing Google Fonts (`Outfit` & `Fira Code`) and smooth micro-animations.
- **Responsive Grid:** Designed from the ground up to look gorgeous on desktop, tablet, and mobile screens.

---

## 📸 Prompt Index

The gallery contains 20 templates categorized as follows:

| # | Prompt Category | Description | Tags |
|---|---|---|---|
| **1** | The Startup Milestone | Coworkers high-fiving over a central table. | `Teamwork`, `Data` |
| **2** | Customer Support | Tech representative wearing a headset. | `Support`, `Communication` |
| **3** | Speedy Delivery | Courier riding a modern electric scooter. | `Logistics`, `App` |
| **4** | The Coder | Developer sitting at a minimalist desk coding. | `Engineering`, `Tech` |
| **5** | Modern Healthcare | Healthcare professional holding a red heart. | `Medical`, `Care` |
| **6** | Mobile E-Commerce | Person shopping with an oversized smartphone. | `Shopping`, `Fintech` |
| **7** | Online Education | Student sitting on a giant stack of books. | `EdTech`, `Learning` |
| **8** | Data Analytics | Business team examining a large line chart. | `Analytics`, `Business` |
| **9** | Cloud Infrastructure | Figures managing cloud servers and connection nodes. | `SaaS`, `Cloud` |
| **10** | Remote Work Lifestyle | Person working from home with a sleeping cat. | `WFH`, `Lifestyle` |
| **11** | Farmers Market | Customer selecting fresh apples at a local stall. | `Shopping`, `Lifestyle`, `Market` |
| **12** | Smart Checkout Kiosk | Scanning a product barcode using a smartphone camera. | `Shopping`, `Fintech`, `App` |
| **13** | VR Virtual Fitting Room | Wearing VR goggles to swipe through floating 3D clothes. | `Shopping`, `Tech`, `App` |
| **14** | Smart Warehouse Logistics | Workers organizing oversized boxes near a forklift. | `Logistics`, `Business`, `SaaS` |
| **15** | Eco-Friendly Delivery | Electric cargo bike navigating a green landscape. | `Logistics`, `Lifestyle`, `Eco` |
| **16** | Live Stream Commerce | Streamer reviewing products with interactive overlays. | `Shopping`, `Communication`, `Social` |
| **17** | Curated Shop Boutique | Boutique storefront display with apparel racks. | `Shopping`, `Lifestyle`, `Retail` |
| **18** | E-Commerce Sales Analytics | Dashboard showing upward sales trends. | `Analytics`, `Business`, `Fintech` |
| **19** | Street Food Market Stall | Vendor prepping food at a street stall under string lights. | `Lifestyle`, `Market`, `Food` |
| **20** | Customer Unboxing Experience | Joyful unboxing of packages with success stars. | `Shopping`, `Lifestyle`, `Care` |

---

## 🚀 How to Run Locally

Since this is a lightweight, static client-side web application, there are no dependencies to install.

1. **Clone the repository:**
   ```bash
   git clone git@github.com:richandrewsfl/Corporate-Memphis-Prompts.git
   cd Corporate-Memphis-Prompts
   ```
2. **Open the web page:**
   Simply double-click `public/index.html` or run a local static server:
   ```bash
   # Using wrangler to emulate Cloudflare Workers locally
   npx wrangler dev
   
   # Or using a simple Python server
   cd public
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8787` (for wrangler) or `http://localhost:8000` (for Python) in your browser.

---

## 💡 How to Use the Prompts

1. Find an illustration template that matches your feature or use-case.
2. Click **Copy Prompt** on the card.
3. Paste the prompt into your AI image generator of choice (e.g., Google Gemini / Imagen).
4. *(Optional)* Adjust color palettes, character genders, or background items directly in the prompt text for instant customization.
