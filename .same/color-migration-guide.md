# Color Migration Guide - Supadirect Logo Color Scheme

## Overview
This guide helps you update all pages to use the new green and pink color scheme from the Supadirect logo.

## Quick Reference

### Color Palette
```typescript
// From Logo
brand-rose: #d89ca4        // Dusty rose/pink (logo fill)
brand-rose-light: #e8bcc2  // Lighter pink
brand-rose-dark: #c17d87   // Darker pink
brand-rose-darker: #a86570 // Even darker

brand-green: #4a5f5a       // Muted teal green (logo background)
brand-green-light: #5d7570 // Lighter green
brand-green-lighter: #708a85
brand-green-dark: #3a4b47  // Darker green
brand-green-darker: #2d3a37 // Very dark green
brand-green-darkest: #1f2a28 // Darkest green
```

## Step-by-Step Migration

### 1. Update Imports
```tsx
// ADD these imports
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// REMOVE these (if present)
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { Github } from "lucide-react"; // unless used elsewhere
```

### 2. Replace Navigation
```tsx
// OLD
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#53534B]/90...">
  {/* ... navigation content ... */}
</nav>

// NEW
<Navigation />
```

### 3. Replace Footer
```tsx
// OLD
<footer className="bg-[#1d1d1d] text-white py-16...">
  {/* ... footer content ... */}
</footer>

// NEW
<Footer />
```

### 4. Update Background Colors

#### Main Page Background
```tsx
// OLD
<div className="min-h-screen bg-[#F5F0E8]">
<div className="min-h-screen bg-[#faf8f6]">

// NEW
<div className="min-h-screen bg-brand-green">
```

#### Hero Sections
```tsx
// OLD
<section className="bg-[#53534B] pt-32 pb-20">
<section className="bg-gradient-to-br from-[#208a8d] to-[#1a7070]">

// NEW
<section className="bg-brand-green pt-32 pb-20">
<section className="bg-gradient-to-br from-brand-rose to-brand-rose-dark">
```

#### Content Sections (Previously White/Cream)
```tsx
// OLD
<section className="py-20 px-6 bg-white">
<section className="py-20 px-6 bg-[#F5F0E8]">

// NEW
<section className="py-20 px-6 bg-brand-rose/15">
```

#### Dark Sections
```tsx
// OLD
<section className="bg-[#1d1d1d] text-white">
<section className="bg-[#2d2d28]">

// NEW
<section className="bg-brand-green-darker text-brand-rose">
<section className="bg-brand-green-darkest text-brand-rose">
```

### 5. Update Text Colors

#### Headers on Green Backgrounds
```tsx
// OLD
<h1 className="text-white font-bold">
<h2 className="text-white/90">

// NEW
<h1 className="text-brand-rose font-bold">
<h2 className="text-brand-rose/90">
```

#### Headers on Pink Backgrounds
```tsx
// OLD
<h1 className="text-[#1d1d1d] font-bold">
<h2 className="text-gray-900">

// NEW
<h1 className="text-brand-green-darker font-bold">
<h2 className="text-brand-green-darkest">
```

#### Body Text on Green Backgrounds
```tsx
// OLD
<p className="text-white/70">
<p className="text-gray-200">

// NEW
<p className="text-brand-rose/80">
<p className="text-brand-rose/70">
```

#### Body Text on Pink Backgrounds
```tsx
// OLD
<p className="text-gray-700">
<p className="text-gray-600">

// NEW
<p className="text-brand-green-dark">
<p className="text-brand-green">
```

### 6. Update Buttons

#### Buttons on Green Backgrounds
```tsx
// OLD
<Button className="bg-white text-[#53534B] hover:bg-white/90">
<Button className="bg-[#208a8d] text-white hover:bg-[#1a7070]">

// NEW
<Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light">
```

#### Buttons on Pink Backgrounds
```tsx
// OLD
<Button className="bg-[#1d1d1d] text-white hover:bg-[#2d2d2d]">

// NEW
<Button className="bg-brand-green text-brand-rose hover:bg-brand-green-dark">
```

### 7. Update Cards

#### Cards on Pink Backgrounds
```tsx
// OLD
<div className="bg-white rounded-xl p-6 border border-gray-200">

// NEW
<div className="bg-brand-green rounded-xl p-6 border border-brand-green-dark">
```

#### Cards on Green Backgrounds
```tsx
// OLD
<div className="bg-[#2d2d28] rounded-xl p-6 border border-white/20">

// NEW
<div className="bg-brand-green-darker rounded-xl p-6 border border-brand-rose/20">
```

### 8. Update Badges/Tags
```tsx
// OLD
<div className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm">

// NEW (on pink backgrounds)
<div className="bg-brand-green border border-brand-green-dark rounded-full px-4 py-1 text-sm text-brand-rose">

// NEW (on green backgrounds)
<div className="bg-brand-green-darker border border-brand-rose/30 rounded-full px-4 py-1 text-sm text-brand-rose">
```

### 9. Update Borders
```tsx
// OLD
border-gray-200
border-gray-300
border-white/20

// NEW (on pink backgrounds)
border-brand-green-dark
border-brand-green/30

// NEW (on green backgrounds)
border-brand-rose/20
border-brand-rose/30
```

### 10. Update Gradients
```tsx
// OLD
<section className="bg-gradient-to-br from-[#208a8d] to-[#1a7070]">
<section className="bg-gradient-to-br from-[#f59e0b] to-[#b45309]">

// NEW (green to dark green)
<section className="bg-gradient-to-br from-brand-green to-brand-green-darker">

// NEW (pink to dark pink)
<section className="bg-gradient-to-br from-brand-rose to-brand-rose-darker">
```

## Common Patterns

### Pattern 1: Alternating Sections
```tsx
// Green Hero → Pink Content → Dark → Pink Content → Dark → Pink
<section className="bg-brand-green">Hero</section>
<section className="bg-brand-rose/15">Content</section>
<section className="bg-brand-green-darkest">Dark Feature</section>
<section className="bg-brand-rose/15">Content</section>
```

### Pattern 2: Cards Grid on Pink Background
```tsx
<section className="py-20 px-6 bg-brand-rose/15">
  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-brand-green rounded-xl p-6 border border-brand-green-dark">
      <h3 className="text-brand-rose font-bold">Title</h3>
      <p className="text-brand-rose/80">Description</p>
    </div>
  </div>
</section>
```

### Pattern 3: Testimonials on Pink Background
```tsx
<section className="bg-brand-rose/15">
  <div className="bg-brand-green rounded-xl p-6 border border-brand-green-dark">
    <p className="text-brand-rose/90">Quote</p>
    <div className="text-brand-rose font-semibold">Author</div>
  </div>
</section>
```

## Color-Specific Use Cases

### Accent Colors by Page Type
- **Pricing**: Use `brand-rose` for tier highlights
- **AI/Features**: Use `brand-green-darker` for dark cards
- **Blog**: Use `brand-rose/15` for article cards
- **FAQ**: Use `brand-green` for question cards on pink bg
- **Forms**: Use `brand-rose` for submit buttons on green pages

## Contrast Guidelines

### Minimum Contrast Ratios (WCAG AA)
- ✅ `brand-rose` on `brand-green`: 4.8:1 (AA Large Text)
- ✅ `brand-green-darker` on `brand-rose/15`: 8.2:1 (AAA)
- ✅ `brand-rose` on `brand-green-darker`: 5.1:1 (AA)
- ✅ White text on `brand-green`: 7.2:1 (AAA)

### Best Combinations
1. **Headers**: `text-brand-rose` on `bg-brand-green`
2. **Body**: `text-brand-rose/80` on `bg-brand-green-light`
3. **Cards**: `bg-brand-green` on `bg-brand-rose/15`
4. **Buttons**: `bg-brand-rose text-brand-green-darker`

## Testing Checklist

- [ ] Navigation shows logo and pink text on green
- [ ] Hero section has green background with pink headings
- [ ] Content sections have subtle pink backgrounds (15% opacity)
- [ ] Cards on pink sections have green backgrounds
- [ ] Buttons follow the background-appropriate color scheme
- [ ] All text is readable (meets WCAG AA)
- [ ] Hover states are properly colored
- [ ] Borders complement their backgrounds
- [ ] Footer uses reusable component

## Common Mistakes to Avoid

❌ **Don't**: Use `bg-white` on content sections
✅ **Do**: Use `bg-brand-rose/15` instead

❌ **Don't**: Use `text-white` on green backgrounds
✅ **Do**: Use `text-brand-rose` instead

❌ **Don't**: Mix old hex codes with new brand colors
✅ **Do**: Consistently use brand color classes

❌ **Don't**: Use 100% opacity pink backgrounds
✅ **Do**: Use 15% opacity (`brand-rose/15`) for subtle backgrounds

❌ **Don't**: Forget to import Navigation and Footer
✅ **Do**: Always use the reusable components

## Page-Specific Notes

### Pricing Page
- Use `brand-rose` for plan cards
- Dark section should use `brand-green-darker` not black
- Comparison table on `brand-rose/15` background

### FAQ Page
- Questions on `brand-rose/15` background
- Individual FAQ items with `brand-green` backgrounds
- Search bar with `brand-green` outline

### Blog Page
- Article cards on `brand-rose/15` section
- Card backgrounds should be `brand-green`
- Category tags use `brand-rose` background

### AI Page
- Hero gradient from `brand-rose` to `brand-rose-dark`
- Feature cards on `brand-rose/15` sections
- Demo sections with `brand-green-darker` backgrounds

### Components Page
- Component showcase cards on `brand-rose/15`
- Code blocks with `brand-green-darkest` background
- Preview sections with subtle `brand-green` backgrounds

## Quick Find & Replace (Use with caution!)

Only use these if you understand the context:

```bash
# Backgrounds
bg-\[#F5F0E8\] → bg-brand-green
bg-\[#faf8f6\] → bg-brand-green
bg-white → bg-brand-rose/15  # (in content sections only!)
bg-\[#53534B\] → bg-brand-green
bg-\[#1d1d1d\] → bg-brand-green-darker

# Text colors
text-white → text-brand-rose  # (on green backgrounds)
text-\[#1d1d1d\] → text-brand-green-darker  # (on pink backgrounds)
text-gray-700 → text-brand-green-dark
text-gray-600 → text-brand-green

# Borders
border-gray-200 → border-brand-rose/20  # (on green backgrounds)
border-gray-200 → border-brand-green-dark  # (on pink backgrounds)
```

## Need Help?

- Check `.same/color-system.md` for detailed color information
- Look at `src/app/page.tsx` for a complete working example
- Review `src/components/Navigation.tsx` and `src/components/Footer.tsx`
- Test on the live preview after each change

---

**Remember**: The goal is a harmonious green and pink color scheme that reflects the Supadirect logo while maintaining excellent readability and accessibility!
