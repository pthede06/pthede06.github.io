# CSS — Mainpage

Beschreibung aller Styles aus `style.css` der Mainpage `pthede06.github.io`.

---

## Reset

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Gilt für alle Elemente und ihre Pseudo-Elemente. Verhindert unerwartete Abstände und stellt sicher, dass Breiten und Höhen Padding einschließen (`border-box`).

---

## Design-Variablen

```css
:root {
  --bg: #f5f4f1;
  --fg: #1a1a18;
  --muted: #8a8980;
  --accent: #c8410a;
  --border: #d8d7d2;
  --card-bg: #ffffff;
  --hover-bg: #eeecea;
}
```

Alle Farben werden als CSS Custom Properties im `:root` definiert. Änderungen an Farben erfolgen ausschließlich hier — nie als Hard-coded Werte im restlichen Code.

| Variable | Farbe | Verwendung |
|---|---|---|
| `--bg` | `#f5f4f1` | Seitenhintergrund |
| `--fg` | `#1a1a18` | Haupttextfarbe |
| `--muted` | `#8a8980` | Nebentext, Labels, Tags |
| `--accent` | `#c8410a` | Akzentfarbe (Hover-Linie, Domain-Suffix) |
| `--border` | `#d8d7d2` | Trennlinien, Grid-Zwischenräume |
| `--card-bg` | `#ffffff` | Kartenhintergrund (Ruhezustand) |
| `--hover-bg` | `#eeecea` | Kartenhintergrund (Hover) |

---

## Basis

```css
html {
  font-size: 16px;
}

body {
  background: var(--bg);
  color: var(--fg);
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

`html` legt die Basisschriftgröße fest, von der alle `rem`-Werte abgeleitet werden. `body` wird als vertikaler Flexbox-Container gesetzt, damit der Footer immer am unteren Rand bleibt (`flex: 1` im `main`).

---

## Header

```css
header {
  border-bottom: 1px solid var(--border);
  padding: 2rem 3rem;
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
}

.site-id {
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--muted);
  letter-spacing: 0.04em;
  text-transform: lowercase;
}

.site-id span {
  color: var(--accent);
}
```

Der Header wird durch eine untere Trennlinie vom Inhalt getrennt. `.site-id` zeigt den Benutzernamen in Monospace-Schrift. Der Domain-Suffix (`.github.io`) ist als `<span>` eingebettet und erhält die Akzentfarbe.

---

## Main

```css
main {
  flex: 1;
  padding: 4rem 3rem;
  max-width: 1100px;
  width: 100%;
}

.section-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2rem;
}
```

`flex: 1` sorgt dafür, dass `main` den verfügbaren Raum zwischen Header und Footer ausfüllt. `.section-label` ist die Überschrift oberhalb des Grids — bewusst klein, in Versalien und gedämpfter Farbe gesetzt.

---

## Tool Grid

```css
.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
```

Das Grid passt die Spaltenanzahl automatisch an die verfügbare Breite an. Karten sind mindestens `300px` breit und wachsen gleichmäßig (`1fr`). Der Trick für die Trennlinien: Das Grid selbst erhält `background: var(--border)` und einen `gap: 1px` — die Karten liegen weiß darauf, sodass die Lücken als Linien erscheinen.

---

## Tool-Karte

```css
.tool-card {
  background: var(--card-bg);
  padding: 2rem 2rem 1.75rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: background 0.15s ease;
  position: relative;
  overflow: hidden;
}
```

Jede Karte ist ein `<a>`-Element. `text-decoration: none` und `color: inherit` setzen die Link-Standardstyles zurück. `display: flex; flex-direction: column` ermöglicht, dass die Tags per `margin-top: auto` an den unteren Rand gedrückt werden. `position: relative` und `overflow: hidden` sind Voraussetzung für die Hover-Linie.

### Hover-Linie

```css
.tool-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.25s ease;
}

.tool-card:hover::after {
  width: 100%;
}

.tool-card:hover {
  background: var(--hover-bg);
}
```

Das `::after`-Pseudo-Element erzeugt eine 2px-Linie in der Akzentfarbe am unteren Kartenrand. Im Ruhezustand hat sie `width: 0` und ist unsichtbar. Beim Hover wächst sie auf `width: 100%` — die `transition` macht daraus eine Wischbewegung von links nach rechts.

### Inhalte der Karte

```css
.tool-number {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  color: var(--muted);
}

.tool-name {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.tool-desc {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.6;
  font-weight: 300;
}

.tool-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 1rem;
}

.tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 0.2rem 0.5rem;
}
```

`.tool-number` dient als visuelle Nummerierung, bewusst dezent in Monospace. `.tool-name` ist der einzige fette Text in der Karte. `.tool-desc` bleibt in gedämpfter Farbe und leichtem Gewicht. `.tool-tags` werden durch `margin-top: auto` nach unten gedrückt — unabhängig von der Beschreibungslänge bleiben sie immer am Kartenende.

---

## Footer

```css
footer {
  border-top: 1px solid var(--border);
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-note {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  color: var(--muted);
  font-weight: 300;
}
```

Der Footer spiegelt die Struktur des Headers: Trennlinie, gleiches Padding, Flexbox. Links steht der Seitenname, rechts der automatisch berechnete Tool-Zähler (befüllt durch `script.js`).

---

## Animation

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.tool-card {
  animation: fadeUp 0.4s ease both;
}

.tool-card:nth-child(1) { animation-delay: 0.05s; }
.tool-card:nth-child(2) { animation-delay: 0.12s; }
.tool-card:nth-child(3) { animation-delay: 0.19s; }
.tool-card:nth-child(4) { animation-delay: 0.26s; }
```

Karten erscheinen beim Laden leicht von unten nach oben eingeblendet (`translateY(12px)` → `0`). Jede Karte hat eine minimal längere Verzögerung als die vorherige, was einen gestaffelten Einlauf erzeugt. `animation-fill-mode: both` (enthalten in `ease both`) hält die Startwerte vor dem Abspielen, sodass kein Flackern entsteht.

Für jede neue Karte ab Nr. 5 wird ein weiterer `nth-child`-Eintrag mit `+0.07s` Abstand ergänzt.

---

## Responsive

```css
@media (max-width: 600px) {
  header, main, footer {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  main {
    padding-top: 2.5rem;
  }
}
```

Unterhalb von `600px` werden die seitlichen Abstände von `3rem` auf `1.5rem` reduziert. Das Grid passt sich durch `auto-fill` automatisch an — auf schmalen Bildschirmen erscheint eine einzige Spalte ohne weitere Eingriffe.