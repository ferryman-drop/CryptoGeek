# Delio Life OS — Design Concept

## Design Philosophy

**Midnight Paper** — dark premium interface з відчуттям "паперу на темному столі"

### Core Principles
- **Notion-level calm** — спокій, простір, фокус на контенті
- **Linear-level precision** — чіткість, акуратність, дисципліна
- **Arc-level polish** — гладкість, увага до деталей
- **Apple-level restraint** — нічого зайвого, тільки необхідне

### Visual Direction

```
┌─────────────────────────────────────────────────────────┐
│  Dark Shell (#0A0A0B)                                   │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Lighter Content Surface (#141416 → #1C1C1F)      │  │
│  │                                                   │  │
│  │  ┌─────────────┐  ┌─────────────┐                │  │
│  │  │   Card      │  │   Card      │  Border:       │  │
│  │  │  Surface    │  │  Surface    │  rgba(255,     │  │
│  │  │  #1C1C1F    │  │  #1C1C1F    │  255,255,0.08) │  │
│  │  └─────────────┘  └─────────────┘                │  │
│  │                                                   │  │
│  │  Typography: White (90%) + Gray (60%)            │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**Не** gamer dashboard, **не** cyberpunk, **не** admin panel.

---

## Color System

### Base Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-app` | `#0A0A0B` | Головна поверхня додатку |
| `--bg-surface` | `#141416` | Secondary surfaces |
| `--bg-card` | `#1C1C1F` | Cards, panels |
| `--bg-elevated` | `#242428` | Hover states, elevated elements |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Міжкарткові бордери |
| `--border-default` | `rgba(255,255,255,0.10)` | Основні бордери |
| `--border-strong` | `rgba(255,255,255,0.16)` | Акцентні бордери |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `rgba(255,255,255,0.92)` | Заголовки, головний текст |
| `--text-secondary` | `rgba(255,255,255,0.60)` | Secondary text, labels |
| `--text-tertiary` | `rgba(255,255,255,0.38)` | Hints, placeholders |
| `--text-inverse` | `#0A0A0B` | Text on light backgrounds |

### Accent Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-primary` | `#FFFFFF` | Primary actions, focus |
| `--accent-muted` | `rgba(255,255,255,0.12)` | Muted accents |
| `--focus-ring` | `rgba(255,255,255,0.24)` | Focus states |

### Semantic Colors (Muted for Dark)

| Token | Value | Usage |
|-------|-------|-------|
| `--success-bg` | `rgba(34,197,94,0.12)` | Success backgrounds |
| `--success-text` | `#4ADE80` | Success text |
| `--warning-bg` | `rgba(234,179,8,0.12)` | Warning backgrounds |
| `--warning-text` | `#FACC15` | Warning text |
| `--danger-bg` | `rgba(239,68,68,0.12)` | Danger backgrounds |
| `--danger-text` | `#F87171` | Danger text |
| `--info-bg` | `rgba(59,130,246,0.12)` | Info backgrounds |
| `--info-text` | `#60A5FA` | Info text |

### AI Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--ai-glow` | `rgba(139,92,246,0.15)` | AI element glow |
| `--ai-accent` | `#A78BFA` | AI accent color |
| `--ai-pulse` | `rgba(167,139,250,0.4)` | AI pulse animation |

---

## Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display` | 32px / 2rem | 600 | 1.2 | -0.02em | Hero headings |
| `h1` | 24px / 1.5rem | 600 | 1.25 | -0.01em | Page titles |
| `h2` | 20px / 1.25rem | 600 | 1.3 | -0.01em | Section titles |
| `h3` | 18px / 1.125rem | 600 | 1.4 | 0 | Card titles |
| `body-lg` | 16px / 1rem | 400 | 1.5 | 0 | Body text large |
| `body` | 15px / 0.9375rem | 400 | 1.5 | 0 | Body text |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | 0.01em | Small body |
| `caption` | 13px / 0.8125rem | 400 | 1.4 | 0.02em | Captions |
| `label` | 12px / 0.75rem | 500 | 1.4 | 0.04em | Labels, badges |
| `mono` | 13px / 0.8125rem | 400 | 1.5 | 0 | Code, technical |

---

## Spacing System

Base unit: `4px`

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Tight spacing |
| `--space-2` | `8px` | Icon gaps |
| `--space-3` | `12px` | Component internal |
| `--space-4` | `16px` | Standard padding |
| `--space-5` | `20px` | Card padding |
| `--space-6` | `24px` | Section padding |
| `--space-8` | `32px` | Large gaps |
| `--space-10` | `40px` | Block separation |
| `--space-12` | `48px` | Major sections |
| `--space-16` | `64px` | Page margins |

---

## Layout Structure

### App Frame
```
┌────────────────────────────────────────────────────┐
│ Top Bar (56px)                                     │
│ Logo | Navigation | Omnibar | Profile              │
├──────────────┬─────────────────────────────────────┤
│ Sidebar      │ Main Content                        │
│ (240px)      │                                     │
│              │  ┌─────────────────────────────┐   │
│ Life         │  │ Hero / Direction            │   │
│ Dashboard    │  └─────────────────────────────┘   │
│              │                                     │
│ • Home       │  ┌─────────────────────────────┐   │
│ • Health     │  │ State Strip                 │   │
│ • Finance    │  └─────────────────────────────┘   │
│ • Projects   │                                     │
│ • Relationships │ ┌───────────────────────────┐   │
│ • Learning   │ │ Today                       │   │
│              │ └───────────────────────────┘   │
│ ──────────── │                                 │
│ DelioDev     │  ┌─────────────────────────────┐ │
│              │  │ Quick Add                   │ │
│ • Memory     │  └─────────────────────────────┘ │
│ • Actions    │                                  │
│ • Approvals  │  ┌─────────────┐ ┌─────────────┐ │
│ • Debug      │  │ Mentor      │ │ Life Signals│ │
│              │  └─────────────┘ └─────────────┘ │
└──────────────┴──────────────────────────────────┘
```

### Top Bar (56px)
- Logo left
- Navigation center (optional)
- Omnibar with AI indicator
- Profile right

### Sidebar (240px)
- Life Dashboard section
- DelioDev section (visually separated)
- Clean icons + labels

---

## Component Hierarchy

### Button System

#### Primary Button
```css
Background: #FFFFFF
Text: #0A0A0B
Border: none
Height: 40px
Padding: 0 20px
Radius: 8px
Font: 15px, 500
Hover: rgba(255,255,255,0.9)
Active: rgba(255,255,255,0.8)
Focus: 0 0 0 2px rgba(255,255,255,0.24)
```

#### Secondary Button
```css
Background: rgba(255,255,255,0.08)
Text: rgba(255,255,255,0.92)
Border: 1px solid rgba(255,255,255,0.10)
Height: 40px
Padding: 0 20px
Radius: 8px
Font: 15px, 500
Hover: rgba(255,255,255,0.12)
Active: rgba(255,255,255,0.16)
```

#### Ghost Button
```css
Background: transparent
Text: rgba(255,255,255,0.72)
Border: none
Height: 32px
Padding: 0 12px
Radius: 6px
Font: 14px, 500
Hover: rgba(255,255,255,0.06)
```

#### Sizes
- `sm`: 32px height, 14px font
- `md`: 40px height, 15px font (default)
- `lg`: 48px height, 16px font

---

### Card System

#### Base Card
```css
Background: #1C1C1F
Border: 1px solid rgba(255,255,255,0.08)
Radius: 12px
Padding: 24px
```

#### Elevated Card
```css
Background: #1C1C1F
Border: 1px solid rgba(255,255,255,0.10)
Shadow: 0 4px 24px rgba(0,0,0,0.32)
Radius: 12px
Padding: 24px
```

#### Interactive Card
```css
Base: same as Base Card
Hover: border-color rgba(255,255,255,0.16)
Cursor: pointer
```

#### Card Variants
- Default: `#1C1C1F`
- Subtle: `#18181B`
- Emphasized: `#242428`

---

### Input System

#### Text Input
```css
Background: rgba(255,255,255,0.04)
Border: 1px solid rgba(255,255,255,0.10)
Radius: 8px
Height: 44px
Padding: 0 14px
Font: 15px
Text: rgba(255,255,255,0.92)
Placeholder: rgba(255,255,255,0.38)
Focus: border rgba(255,255,255,0.24), background rgba(255,255,255,0.06)
```

#### Omnibar (Special Input)
```css
Background: rgba(255,255,255,0.06)
Border: 1px solid rgba(255,255,255,0.12)
Radius: 10px
Height: 44px
Padding: 0 14px 0 40px
Font: 15px
AI Indicator: left icon with subtle pulse
Focus: border rgba(139,92,246,0.4), glow effect
```

---

## AI Presence Patterns

### 1. Omnibar AI Status
```
┌────────────────────────────────────────────┐
│ ✦ [AI dot] Write or ask anything...       │
└────────────────────────────────────────────┘
```
- Left icon: search/AI hybrid
- Dot: animated pulse when processing
- Glow on focus: purple tint

### 2. AI Status Indicator
```css
.idle { opacity: 0.5; }
.thinking { animation: pulse 1.5s infinite; }
.working { animation: pulse 0.8s infinite; }
.ready { opacity: 1; box-shadow: 0 0 12px var(--ai-glow); }
```

### 3. Mentor Insights Card
```
┌─────────────────────────────────────────────┐
│ ✦ Mentor                                  │
│                                           │
│ ✓ Good: Consistent morning routine        │
│ ⚠ Risk: Low energy in evenings            │
│ → Next: Review weekly goals               │
└─────────────────────────────────────────────┘
```
- AI icon top-left
- Subtle purple border accent
- Clean list format

### 4. Ask Delio Action
```css
Button with AI icon
Icon: sparkle or diamond shape
Color: white with subtle purple glow on hover
```

### 5. Processing States
```css
.thinking-state {
  background: linear-gradient(90deg, 
    rgba(139,92,246,0.08) 0%, 
    rgba(139,92,246,0.12) 50%, 
    rgba(139,92,246,0.08) 100%);
  animation: shimmer 2s infinite;
}
```

---

## Home Dashboard Blocks

### 1. Hero / Direction
```
┌─────────────────────────────────────────────┐
│                                             │
│   Головний фокус сьогодні                   │
│   Короткий guidance від Delio               │
│                                             │
│   [Primary CTA]    [Secondary CTA]          │
│                                             │
└─────────────────────────────────────────────┘
```
- Full width
- Minimal decorative elements
- Strong typography
- 2 CTAs max

### 2. State Strip
```
┌─────────────────────────────────────────────┐
│ Energy    Focus     Projects   Finance      │
│ ●●○○○     ●●●○○     12 active  ●●○○○       │
│ Stable    Deep      3 due      On track     │
└─────────────────────────────────────────────┘
```
- Single row
- Compact metrics
- Visual indicators (dots/bars)
- Human language labels

### 3. Today
```
┌─────────────────────────────────────────────┐
│ Сьогодні                                   │
│                                             │
│ ★ Головна дія                              │
│   Опис дії                                 │
│                                             │
│ ○ Другорядна                               │
│ ○ Наступний крок                           │
└─────────────────────────────────────────────┘
```
- Clear priority hierarchy
- Star for primary
- Circles for secondary
- Minimal decoration

### 4. Quick Add
```
┌─────────────────────────────────────────────┐
│                                             │
│   Що відбувається?                          │
│   [Large input field]                       │
│                                             │
│   [Fact] [Idea] [Task] [Note] [Person]     │
│                                             │
│                    [Add Entry →]            │
└─────────────────────────────────────────────┘
```
- Largest input on page
- Chip buttons for types
- Single clear action
- Natural language first

### 5. Mentor
```
┌─────────────────────────────────────────────┐
│ ✦ Delio Mentor                            │
│                                             │
│ Що добре                                   │
│ → Пункт 1                                  │
│ → Пункт 2                                  │
│                                             │
│ Що ризиково                                │
│ → Пункт 1                                  │
│                                             │
│ Що далі                                    │
│ → Пункт 1                                  │
└─────────────────────────────────────────────┘
```
- AI icon present but subtle
- Three clear sections
- Arrow bullets
- Concise insights

### 6. Life Signals
```
┌─────────────────────────────────────────────┐
│ Life Signals                               │
│                                             │
│ Rhythm       Recovery      Load             │
│ ●●●●○○○      ●●●○○○○       ●●○○○○○         │
│ On track     Good         Balanced          │
│                                             │
│ Consistency                                │
│ ████████░░ 80%                             │
│ 7-day streak                               │
└─────────────────────────────────────────────┘
```
- Visual but not complex
- Human-readable labels
- Simple progress indicators
- No enterprise charts

---

## DelioDev Concept (Basic)

### Purpose
Technical space for Delio itself — memory, actions, approvals, routing, debug, health.

### Visual Difference from Life Dashboard
- Slightly darker surface (`#161618` vs `#1C1C1F`)
- More technical typography (mono for IDs, timestamps)
- More data-dense but still clean
- Purple accent stronger here

### Key Sections
```
┌─────────────────────────────────────────────┐
│ DelioDev                                   │
│                                             │
│ Memory Graph     Recent Actions             │
│ [Visualization]  [List of actions]          │
│                                             │
│ Pending Approvals                           │
│ ○ Action 1 — Approve/Reject                │
│ ○ Action 2 — Approve/Reject                │
│                                             │
│ System Health                               │
│ API: ●  Memory: ●  Routing: ●              │
└─────────────────────────────────────────────┘
```

---

## Motion & Interaction

### Transitions
```css
Default: all 0.2s cubic-bezier(0.2, 0, 0.2, 1)
Smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
Quick: all 0.1s cubic-bezier(0.2, 0, 0.2, 1)
```

### Hover States
- Cards: border brightens slightly
- Buttons: background adjusts 10-15%
- Inputs: border + slight background change

### Focus States
- All interactive: 2px focus ring
- Color: `rgba(255,255,255,0.24)` or AI purple for AI inputs

### Animations
- AI Pulse: subtle opacity/brightness cycle
- Shimmer: gradient sweep for loading
- Fade In: content entrance

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus indicators always visible
- No information conveyed by color alone
- Keyboard navigation supported
- Reduced motion option respected

---

## Recommended Direction: Midnight Paper

**Why this works for Life OS:**

1. **Calm Authority** — темний фон дає відчуття глибини і стабільності, світлий контент — ясність і фокус

2. **Premium Feel** — не стандартний світлий SaaS, але й не геймерський dark mode

3. **Private Space** — відчувається як особистий простір, а не публічний інструмент

4. **AI Integration** — фіолетові акценти органічні, не кричать "ШТУЧНИЙ ІНТЕЛЕКТ"

5. **Scalable** — працює для простого home і для складних внутрішніх сторінок

6. **Sustainable** — не втомлює очі, можна використовувати щодня

---

## Files Structure

```
src/
├── styles/
│   ├── variables.css      # Colors, typography, spacing
│   ├── components.css     # Buttons, cards, inputs, badges
│   └── layout.css         # Top bar, sidebar, main structure
├── pages/
│   └── homePage/
│       ├── HomePage.jsx   # Main dashboard
│       └── HomePage.css   # Page-specific styles
├── components/            # Reusable components
├── assets/                # Images, icons
└── index.css              # Main import
```
