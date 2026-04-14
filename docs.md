# Mainpage — pthede06.github.io

Startseite des GitHub-Pages-Accounts. Dient als Übersicht und Einstiegspunkt zu allen Tools.

---

## Repository

| Eigenschaft | Wert |
|---|---|
| Repo-Name | `pthede06.github.io` |
| Erreichbar unter | `https://pthede06.github.io` |
| Sichtbarkeit | public |

GitHub Pages muss im Repo unter **Settings → Pages → Branch `main`, Ordner `/ (root)` → Save** aktiviert sein.

---

## Dateistruktur

```
pthede06.github.io/
├── index.html
├── style.css
├── script.js
└── README.md
```

HTML, CSS und JavaScript werden in getrennten Dateien gehalten. Kein Inline-CSS (`style="..."`), keine `<style>`-Blöcke im HTML, kein `<script>`-Block im HTML.

### index.html

Enthält ausschließlich Struktur und Inhalt. Keine Styles, keine Logik.

Einbindung der externen Dateien im `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

Einbindung von JavaScript am Ende des `<body>`, nach allen Inhalten:

```html
<script src="script.js" defer></script>
```

### style.css

Enthält sämtliches Styling der Seite. Strukturiert nach Bereichen mit Kommentaren:

```css
/* ── Header ── */
/* ── Main / Tool Grid ── */
/* ── Footer ── */
/* ── Animationen ── */
/* ── Responsive ── */
```

Design-Variablen (Farben, Schriften) werden als CSS Custom Properties im `:root`-Block definiert, sodass spätere Anpassungen an einer zentralen Stelle erfolgen.

### script.js

Enthält ausschließlich clientseitige Logik. Kein DOM-Manipulation-Code außerhalb dieser Datei.

---

## Tool-Karte hinzufügen

Jedes Tool wird als `<a>`-Element mit der Klasse `tool-card` in der `index.html` eingetragen. Reihenfolge bestimmt die angezeigte Nummerierung.

Vorlage für eine neue Karte:

```html
<a class="tool-card" href="https://pthede06.github.io/TOOL-REPO-NAME">
  <span class="tool-number">XX</span>
  <span class="tool-name">Tool-Name</span>
  <span class="tool-desc">
    Kurze Beschreibung was das Tool macht und welches Problem es löst.
  </span>
  <div class="tool-tags">
    <span class="tag">Kategorie</span>
  </div>
</a>
```

- `href` zeigt auf das eigene Repo des Tools (`https://pthede06.github.io/repo-name`)
- `tool-number` wird manuell gepflegt (`01`, `02`, `03` ...)
- Tags sind optional, beschreiben den Themenbereich knapp
- Der Footer-Zähler aktualisiert sich automatisch über `script.js`

---

## Vorhandene Tools

| Nr. | Name | Repo | URL |
|---|---|---|---|
| 01 | SWOT-Analyse | `swot-tool` | `https://pthede06.github.io/swot-tool` |

---

## Styling-Konventionen

- Keine Inline-Styles im HTML
- Neue Klassen werden in `style.css` im passenden Abschnitt ergänzt
- Farben und Abstände nur über CSS-Variablen aus `:root` — keine Hard-coded Werte
- Animationsverzögerungen für neue Karten nach bestehendem Muster fortführen (`.tool-card:nth-child(N)`)