# Royal Foam — Color Chart Catalog (Structured)

Structured, searchable version of the **COLOR CHART CATALOG** (Royal Foam US LLC, Jacksonville, FL) — a 192-page color/finish selector for EPS-foam architectural textures. Every textured product page of the original PDF has been parsed into data and extracted photos.

**[📷 Open the interactive gallery →](https://dmytro-arch.github.io/color-chart-catalog/)** *(link activates after GitHub Pages is enabled)*

## What's inside

| File | Description |
|---|---|
| `index.html` | Minimalist Scandinavian-style interactive gallery: hero section with three clickable texture blocks, per-collection catalogs with search & filters, fullscreen photo viewer with full product data. Self-contained (embedded thumbnails), works offline; full-size photos load from texture_images/ when deployed |
| `COLOR_CHART_CATALOG_structure.md` | Full structural analysis: document profile, macro-structure, page anatomy, collection summary, color index with links to photos, statistics, data-quality notes |
| `COLOR_CHART_CATALOG_index.xlsx` | Excel workbook: unique color index (with photo hyperlinks), collections summary, profile & notes |
| `catalog_colors.csv` | Raw data: page, texture, collection, color name, SW code, photo path (187 rows) |
| `texture_images/` | All 187 original texture photos, extracted from the PDF at full quality, sorted into 20 folders by collection |

## Catalog structure at a glance

- **192 pages**, made in Canva (12 Mar 2025), author: Polina Vasylchuk
- **Stone Textures** pp. 4–58 · **Brick Textures** pp. 59–77 · **Wood Textures** pp. 78–190
- **20 collections** (Stone 9 · Brick 3 · Wood 8) · **181 unique colors** · **94 Sherwin-Williams (SW) color codes** · 13 two-tone colors
- Colors reference Sherwin-Williams stain codes; every color rated *Interior / Exterior*
- Photo files are named `Collection - Texture - Color Name SW####.jpg`

## Credits & notes

- Source: `COLOR CHART CATALOG` by Royal Foam — royalfoam.us · royalfoam.shop
- Color names are reproduced as printed in the catalog (including its few typos, documented in the analysis)
