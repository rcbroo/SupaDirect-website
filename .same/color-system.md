# Supadirect Color System - Updated Green Background Theme

## Brand Colors (From Logo)

### Primary - Dusty Rose/Pink
**Logo Fill Color - NOW USED FOR TEXT AND HIGHLIGHTS**
- `brand-rose`: `#d89ca4` - Main text color and highlights (from logo fill)
- `brand-rose-light`: `#e8bcc2` - Lighter variation for hover states
- `brand-rose-dark`: `#c17d87` - Darker variation for active states
- `brand-rose-darker`: `#a86570` - Even darker for strong emphasis

**Usage:**
- Primary text color on green backgrounds
- Headings and important text
- Button backgrounds
- Links and interactive elements
- Highlights and accents

### Secondary - Muted Teal Green
**Logo Background Color - NOW MAIN BACKGROUND COLOR**
- `brand-green`: `#4a5f5a` - Main page background (from logo background)
- `brand-green-light`: `#5d7570` - Section backgrounds
- `brand-green-lighter`: `#708a85` - Lighter sections
- `brand-green-dark`: `#3a4b47` - Cards and containers
- `brand-green-darker`: `#2d3a37` - Dark cards
- `brand-green-darkest`: `#1f2a28` - Darkest elements

**Usage:**
- Page backgrounds (main background color)
- Navigation bars
- Section backgrounds
- Card backgrounds
- All container backgrounds

### Neutral - Cream (Limited Use)
**Accent Color**
- `brand-cream`: `#f5f1ed` - Rare accent use
- `brand-cream-dark`: `#e8dfd8` - Slightly darker

**Usage:**
- Minimal use for special highlights only

## Color Combinations

### Light Theme (Default)
```css
Background: #f5f1ed (cream)
Foreground: #3a4b47 (dark green)
Primary: #d89ca4 (rose)
Secondary: #4a5f5a (green)
```

### Dark Theme
```css
Background: #3a4b47 (dark green)
Foreground: #f5f1ed (cream)
Primary: #d89ca4 (rose)
Accent: #d89ca4 (rose)
```

## Accessibility

All color combinations meet WCAG 2.1 AA standards:
- Rose on Green: ✅ AA Large Text
- Green on Cream: ✅ AAA
- Dark Green on Cream: ✅ AAA

## Examples

### Buttons
- Primary: Rose background (#d89ca4) with dark green text
- Secondary: Green background (#4a5f5a) with cream text
- Ghost: Transparent with rose border

### Navigation
- Background: Green (#4a5f5a) with 90% opacity
- Text: Cream (#f5f1ed)
- Hover: Rose accent (#d89ca4)

### Cards
- Background: White
- Border: Light green (#5d7570) at 20% opacity
- Hover: Rose border (#d89ca4)

## CSS Variables

```css
:root {
  --brand-rose: 349 37% 73%;      /* #d89ca4 */
  --brand-green: 162 11% 34%;     /* #4a5f5a */
  --brand-cream: 30 33% 95%;      /* #f5f1ed */
}
```
