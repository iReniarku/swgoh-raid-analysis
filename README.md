# Order 66 Raid Analysis - SWGoH

Eine Webanwendung zur Analyse der Order 66 Raid-Daten aus Star Wars: Galaxy of Heroes.

## Features

- 📊 Interaktive Charts zur Visualisierung der Raid-Performance
- 🏆 Performance Ranking über Zeit
- 📈 Detaillierte Spielerstatistiken
- 🔍 Filterbare und sortierbare Tabellen
- 📥 Datenexport als CSV
- 🌟 Star Wars-inspiriertes dunkles Design

## GitHub Pages Setup

### 1. Repository Setup
1. Erstelle ein neues GitHub Repository namens `order66` (oder einen anderen Namen deiner Wahl)
2. Pushe diesen Code in das Repository

### 2. GitHub Pages Konfiguration
1. Gehe zu den Repository-Einstellungen auf GitHub
2. Navigiere zum Abschnitt "Pages" in der linken Seitenleiste
3. Unter "Source" wähle "GitHub Actions"
4. Die Workflow-Datei `.github/workflows/deploy.yml` wird automatisch erkannt

### 3. Konfiguration anpassen
1. Öffne `astro.config.mjs`
2. Ersetze `YOUR_GITHUB_USERNAME` mit deinem GitHub-Benutzernamen
3. Wenn dein Repository einen anderen Namen als `order66` hat, passe auch den `base` Pfad entsprechend an

**Hinweis zur lokalen Development:**
- Für lokale Entwicklung wird automatisch `base: '/'` verwendet (keine `/order66` in der URL)
- Für Production/GitHub Pages wird `base: '/order66'` verwendet
- Die Konfiguration passt sich automatisch an die Umgebung an

### 4. CSV-Dateien hinzufügen
**Automatischer Workflow mit Astro Collections:**

1. **Neue CSV-Dateien hinzufügen**: Kopiere neue CSV-Dateien in das `data/` Verzeichnis im Root des Projekts
2. **Automatische Konvertierung**: Beim Build-Prozess (`npm run build`) werden CSV-Dateien automatisch zu Astro Collections konvertiert
3. **Deployment**: Committe und pushe die Änderungen - GitHub Actions führt automatisch den Build mit Konvertierung durch

**Manueller Workflow (optional):**
```bash
# CSV-Dateien manuell zu Collections konvertieren
npm run convert-csv

# Entwicklungsserver starten (konvertiert automatisch)
npm run dev
```

### 5. Deployment
Nach dem Push wird die GitHub Action automatisch ausgeführt und die Seite wird unter folgender URL verfügbar sein:
```
https://YOUR_GITHUB_USERNAME.github.io/order66/
```

## Projektstruktur

```
order66/
├── data/                         # CSV-Quelldateien (nicht Teil der Website)
│   ├── order66_..._2025-07-03.csv
│   ├── order66_..._2025-07-16.csv
│   └── order66_..._2025-07-23.csv
├── src/
│   ├── content/
│   │   ├── config.ts             # Astro Collections Definition
│   │   └── raids/                # Auto-generierte JSON-Dateien (bei jedem Build neu erstellt)
│   │       ├── order66_..._2025-07-03.json
│   │       ├── order66_..._2025-07-16.json
│   │       └── order66_..._2025-07-23.json
│   └── pages/
│       └── index.astro           # Hauptanwendung (verwendet Collections)
├── scripts/
│   └── convert-csv-to-collections.js  # CSV → JSON Konverter
├── public/                       # Statische Assets (keine CSV-Dateien mehr)
│   ├── favicon.svg
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages Deployment
├── package.json                  # Mit convert-csv Script
├── astro.config.mjs
└── README.md
```

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build für Production
npm run build

# Preview der Production Build
npm run preview
```

## Datenformat

Die CSV-Dateien sollten folgendes Format haben:
```csv
name,allycode,estimatedScore,lastActualScore,diff,diffPercent
"Spielername",123456789,1500000,1450000,-50000,-3.33
```

## Technologie-Stack

- **Astro.js 5.12.2** - Static Site Generator
- **Chart.js 4.4.0** - Datenvisualisierung
- **TypeScript** - Typsicherheit
- **GitHub Actions** - Automatisches Deployment
- **GitHub Pages** - Hosting

## Lizenz

Dieses Projekt ist für den privaten Gebrauch bestimmt.
