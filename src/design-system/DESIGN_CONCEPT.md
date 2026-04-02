# Delio Life OS — Design System & Visual Concept

## 🎯 Product Philosophy

**Delio Life OS** — це не dashboard. Це *private operating layer for life*.

### Core Principles

1. **Calm Intelligence** — AI присутній, але тихо. Як system intelligence, а не flashy bot.
2. **Premium Restraint** — Apple-level restraint, Notion-level calm, Linear-level precision.
3. **Dark Shell, Light Content** — темна оболонка зі світлою композицією всередині.
4. **Human Language** — ніякого enterprise analytics speak. Тільки людська мова.
5. **Visual Discipline** — мінімум шуму, сильна ієрархія, акуратні бордери.

---

## 🎨 Design Directions (2 Strong Concepts)

### Direction 1: **"Midnight Paper"** ⭐ RECOMMENDED

**Concept:** Уявіть темний стіл із розкладеними аркушами білого паперу. Контент — це "папір" у темному просторі.

**Key Characteristics:**
- Background: глибокий темний (`#0D0D0F` → `#121214`)
- Cards: дуже світлі, майже білі поверхні з мінімальною прозорістю (`rgba(255,255,255,0.03-0.05)`)
- Borders: тонкі, ледь помітні (`rgba(255,255,255,0.08)`)
- Typography: світлий текст на темному, але контентні блоки — "острівці світла"
- Feel: private journal, premium notebook, intimate space

**Why This Works for Life OS:**
- Створює відчуття особистого простору
- Контент виділяється як "світло в темряві"
- Дуже спокійний, медитативний візуал
- Ідеально для reflection та guidance

---

### Direction 2: **"Charcoal & Clay"**

**Concept:** Теплі сірі тони, як камінь і глина. Менш контрастний, більш "м'який" dark mode.

**Key Characteristics:**
- Background: теплий темно-сірий (`#1A1A1C`)
- Cards: середні тони сірого з теплим підтоном
- Accents: приглушені кольори (sage, terracotta, slate)
- Typography: офф-вайтовий текст (`#E8E8E6`)
- Feel: architectural, grounded, stable

**Why Consider:**
- Менш різкий контраст = менше eye strain
- Більш "земний", human feel
- Добре для тривалих сесій

---

## 🏆 Recommended: **Midnight Paper**

Цей напрям найкраще передає концепцію *private operating system*:
- Темне оточення = фокус на головному
- Світлі картки = ясність думок
- Мінімальний декор = немає відволікань
- Premium feel = це ВАШ особистий інструмент

---

## 📐 Layout Structure

### Global Layout

```
┌─────────────────────────────────────────────────────────────┐
│  TOP BAR (48px)                                             │
│  [Delio Logo]  [Navigation]           [AI Status] [Profile] │
├───────────────┬─────────────────────────────────────────────┤
│               │                                             │
│  SIDEBAR      │  MAIN CONTENT AREA                          │
│  (240px)      │  (max-width: 1200px, centered)              │
│               │                                             │
│  • Home       │  ┌─────────────────────────────────────┐   │
│  • Health     │  │ Hero / Direction                    │   │
│  • Finance    │  └─────────────────────────────────────┘   │
│  • Projects   │                                             │
│  • Relationships│ ┌─────────────────────────────────────┐   │
│  • Settings   │  │ State Strip                         │   │
│               │  └─────────────────────────────────────┘   │
│               │                                             │
│               │  ┌─────────────────────────────────────┐   │
│               │  │ Today                               │   │
│               │  └─────────────────────────────────────┘   │
│               │                                             │
│               │  ┌─────────────────────────────────────┐   │
│               │  │ Quick Add                           │   │
│               │  └─────────────────────────────────────┘   │
│               │                                             │
│               │  ┌──────────────┐ ┌──────────────────────┐ │
│               │  │ Mentor       │ │ Life Signals         │ │
│               │  └──────────────┘ └──────────────────────┘ │
└───────────────┴─────────────────────────────────────────────┘
```

---

## 🎨 Color System (Midnight Paper)

### Base Palette

```css
/* Backgrounds */
--bg-primary: #0D0D0F;        /* Найтемніший, основа */
--bg-secondary: #121214;      /* Secondary surfaces */
--bg-tertiary: #18181B;       /* Elevated surfaces */

/* Card Surfaces - "Paper in the Dark" */
--card-bg: rgba(255, 255, 255, 0.03);
--card-bg-hover: rgba(255, 255, 255, 0.05);
--card-border: rgba(255, 255, 255, 0.08);
--card-border-hover: rgba(255, 255, 255, 0.12);

/* Text */
--text-primary: #FAFAFA;      /* Headings, primary info */
--text-secondary: #A1A1AA;    /* Body text */
--text-tertiary: #71717A;     /* Meta, timestamps */
--text-inverse: #0D0D0F;      /* Text on light surfaces */

/* Accents */
--accent-primary: #FFFFFF;    /* Primary actions */
--accent-secondary: #52525B;  /* Secondary actions */

/* Semantic Colors (Muted, Premium) */
--success: #22C55E;           /* Good, growth */
--warning: #F59E0B;           /* Attention, caution */
--danger: #EF4444;            /* Risk, urgent */
--info: #3B82F6;              /* Information */

/* AI Presence */
--ai-glow: rgba(99, 102, 241, 0.15);  /* Subtle AI indicator */
--ai-active: #6366F1;                 /* Indigo, active state */
--ai-thinking: rgba(99, 102, 241, 0.5);
```

### Gradient Usage (Minimal)

```css
/* Only for AI states and key highlights */
--gradient-ai: linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 100%);
--gradient-card: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
```

---

## 🔤 Typography System

### Font Family

**Primary:** `Inter` або `SF Pro Display` (system fonts for performance)
**Alternative:** `Geist Sans` (Vercel's font, very clean)

```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace; /* For technical data only */
```

### Type Scale

```css
/* Display - Hero sections */
--text-display: 48px / 56px;   /* 48px size, 56px line-height */
--text-display-weight: 600;

/* H1 - Page titles */
--text-h1: 32px / 40px;
--text-h1-weight: 600;

/* H2 - Section headers */
--text-h2: 24px / 32px;
--text-h2-weight: 600;

/* H3 - Card titles */
--text-h3: 18px / 28px;
--text-h3-weight: 600;

/* Body Large - Important content */
--text-body-lg: 16px / 24px;
--text-body-lg-weight: 400;

/* Body - Default */
--text-body: 15px / 22px;
--text-body-weight: 400;

/* Small - Meta, captions */
--text-small: 13px / 20px;
--text-small-weight: 400;

/* Tiny - Labels, timestamps */
--text-tiny: 12px / 18px;
--text-tiny-weight: 500;
```

### Typography Principles

1. **High Contrast for Headings** — `--text-primary` на темному фоні
2. **Softer Contrast for Body** — `--text-secondary` для довгого читання
3. **Generous Line Height** — 1.5–1.6 для body text
4. **Tight Tracking for Headings** — `-0.02em` для display/h1
5. **Normal Tracking for Body** — читабельність понад усе

---

## 🧩 Component System

### Button System

```css
/* Primary Button - Main CTA */
.btn-primary {
  background: var(--accent-primary);
  color: var(--bg-primary);
  border: 1px solid transparent;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: #FFFFFF;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255,255,255,0.1);
}

/* Secondary Button - Supporting actions */
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--card-border);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  border-color: var(--text-secondary);
  background: var(--card-bg);
}

/* Ghost Button - Minimal actions */
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-ghost:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}

/* AI Action Button */
.btn-ai {
  background: var(--ai-glow);
  color: var(--ai-active);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-ai:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: var(--ai-active);
}

/* Sizes */
.btn-sm { padding: 6px 12px; font-size: 13px; }
.btn-lg { padding: 14px 28px; font-size: 16px; }
```

---

### Card Hierarchy

```
Level 1: Surface Cards (State Strip, Quick Add)
- Minimal borders
- Very subtle background
- Focus on content

Level 2: Content Cards (Today, Mentor)
- Defined borders
- Clear hierarchy inside
- Slightly elevated feel

Level 3: Interactive Cards (Life Signals, clickable items)
- Hover states
- Active indicators
- More pronounced elevation
```

```css
/* Level 1 - Surface */
.card-surface {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 20px 24px;
  transition: all 0.2s ease;
}

/* Level 2 - Content */
.card-content {
  background: var(--gradient-card);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}
.card-content:hover {
  border-color: var(--card-border-hover);
  background: var(--card-bg-hover);
}

/* Level 3 - Interactive */
.card-interactive {
  background: var(--gradient-card);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.card-interactive:hover {
  border-color: var(--card-border-hover);
  background: var(--card-bg-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
```

---

## 🧭 Navigation System

### Top Bar (48px height)

```
┌────────────────────────────────────────────────────────────┐
│ [Delio•]  Home  Health  Finance  Projects     [⦿] [👤]    │
│                     AI Status Indicator                   │
└────────────────────────────────────────────────────────────┘
```

**Elements:**
- **Logo:** `Delio•` (точка = AI alive indicator, пульсує коли active)
- **Nav Links:** minimal text links, active state = underline
- **AI Status:** small circle, changes color based on state
- **Profile:** avatar or initials

```css
.top-bar {
  height: 48px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--card-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-link {
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
}
.nav-link:hover {
  color: var(--text-primary);
  background: var(--card-bg);
}
.nav-link.active {
  color: var(--text-primary);
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-primary);
}

.ai-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ai-active);
  margin-right: 8px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Sidebar (240px width)

```
┌─────────────────────┐
│  🏠 Home            │
│  💚 Health          │
│  💰 Finance         │
│  📁 Projects        │
│  👥 Relationships   │
│  ⚙️ Settings        │
│                     │
│  ─────────────────  │
│  🛠 DelioDev        │
└─────────────────────┘
```

```css
.sidebar {
  width: 240px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--card-border);
  padding: 24px 16px;
  height: calc(100vh - 48px);
  position: fixed;
  left: 0;
  top: 48px;
  overflow-y: auto;
}

.sidebar-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  transition: all 0.2s ease;
  cursor: pointer;
}
.sidebar-item:hover {
  background: var(--card-bg);
  color: var(--text-primary);
}
.sidebar-item.active {
  background: var(--card-bg-hover);
  color: var(--text-primary);
}
.sidebar-item-icon {
  margin-right: 10px;
  font-size: 16px;
}

.sidebar-divider {
  height: 1px;
  background: var(--card-border);
  margin: 20px 0;
}

.deliodev-link {
  color: var(--ai-active);
}
```

---

## 🤖 AI Presence Patterns

### 1. Omnibar (Quick Add + AI)

```
┌────────────────────────────────────────────────────────────┐
│  ✨  Write anything... Delio will understand               │
│                                                            │
│  [💡 Fact]  [🎯 Task]  [📝 Note]  [🔗 Link]                │
└────────────────────────────────────────────────────────────┘
```

```css
.omnibar {
  background: var(--gradient-card);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 20px 24px;
  transition: all 0.2s ease;
}
.omnibar:focus-within {
  border-color: var(--ai-active);
  box-shadow: 0 0 0 3px var(--ai-glow);
}

.omnibar-input {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 16px;
  line-height: 1.5;
  outline: none;
}
.omnibar-input::placeholder {
  color: var(--text-tertiary);
}

.omnibar-chips {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.omnibar-chip {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}
.omnibar-chip:hover {
  border-color: var(--ai-active);
  color: var(--ai-active);
}
```

### 2. AI Status States

```css
/* Thinking */
.ai-thinking {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--ai-active);
  font-size: 13px;
}
.ai-thinking::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ai-active);
  animation: thinking-pulse 1.5s infinite;
}

@keyframes thinking-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}

/* Working */
.ai-working {
  color: var(--warning);
}
.ai-working::before {
  background: var(--warning);
}

/* Ready/Idle */
.ai-ready {
  color: var(--success);
}
.ai-ready::before {
  background: var(--success);
  animation: none;
  opacity: 0.7;
}
```

### 3. Mentor Insights Card

```
┌────────────────────────────────────────────────────────────┐
│  💡 Delio Mentoring                                       │
│                                                            │
│  ✓ Що добре: Ти тримаєш ритом сну вже 5 днів             │
│  ⚠ Що ризиково: Навантаження цієї седмиці +40%           │
│  → Що далі: Заплануй recovery завтра після обіду         │
└────────────────────────────────────────────────────────────┘
```

```css
.mentor-card {
  background: var(--gradient-ai);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  padding: 24px;
}

.mentor-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}
.mentor-item:last-child {
  margin-bottom: 0;
}

.mentor-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.mentor-text {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.5;
}
.mentor-text strong {
  color: var(--text-primary);
  font-weight: 600;
}
```

### 4. Ask Delio Actions

```css
.ask-delio-trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--ai-glow);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 13px;
  color: var(--ai-active);
  cursor: pointer;
  transition: all 0.2s ease;
}
.ask-delio-trigger:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: var(--ai-active);
}
```

---

## 📊 Life Dashboard: Home Structure

### Block-by-Block Breakdown

#### 1. Hero / Direction

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Головний фокус сьогодні                                   │
│  Завершити презентацію для інвесторів                     │
│                                                            │
│  [→ Розпочати роботу]     [Показати план]                 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Design:**
- Великий заголовок, багато whitespace
- 1 primary CTA, 1 secondary CTA
- Можливо легкий AI glow background

---

#### 2. State Strip

```
┌────────────────────────────────────────────────────────────┐
│  Energy: ●●●○○ 72%    Focus: ●●●●○ 85%                    │
│  Projects: 3 active   Finance: +12% this month            │
└────────────────────────────────────────────────────────────┘
```

**Design:**
- Один рядок, не окремі картки
- Minimal dots or bars for metrics
- Human language, not numbers only

---

#### 3. Today

```
┌────────────────────────────────────────────────────────────┐
│  Сьогодні                                                  │
│                                                            │
│  🎯 ГОЛОВНЕ                                                │
│  Презентація для інвесторів (14:00)                       │
│                                                            │
│  ───────────────────────────────────────────────────────── │
│                                                            │
│  📋 ДРУГОРЯДНЕ                                             │
│  • Відповісти на email від команди                        │
│  • Оновити бюджет проєкту                                 │
│                                                            │
│  → Наступний крок: Відкрити Google Slides                 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

#### 4. Quick Add (Omnibar)

```
┌────────────────────────────────────────────────────────────┐
│  ✨  Що сталося? Що треба зробити?                         │
│                                                            │
│  [💡 Fact]  [🎯 Task]  [📝 Note]  [🔗 Link]  [🧠 Idea]    │
│                                                            │
│  [Записати →]                                              │
└────────────────────────────────────────────────────────────┘
```

**Design:**
- Найбільший інтерактивний блок на сторінці
- Завжди visible, завжди accessible
- AI-ready styling

---

#### 5. Mentor

```
┌────────────────────────────────────────────────────────────┐
│  💡 Delio Notice                                           │
│                                                            │
│  ✓ Ти найпродуктивніший між 9-11 ранку                   │
│  ⚠ Цього тижня мало сну (<7h 4 рази)                     │
│  → Спробуй завершити роботу до 19:00 сьогодні             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

#### 6. Life Signals

```
┌────────────────────────────────────────────────────────────┐
│  Life Signals                                              │
│                                                            │
│  Rhythm       Recovery      Load          Consistency      │
│  ●●●●○       ●●●○○       ●●○○○        ●●●●○            │
│  Стабільно    Потребує      Висока       Тримаєш          │
│               уваги                                        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Design:**
- 4 колонки в одному row
- Simple dot visualization
- Human label under each

---

## 🛠 DelioDev: Technical Space (Basic Concept)

### Purpose
Окремий простір для технічної інформації про Delio:
- Memory status
- Actions log
- Approvals queue
- Routing debug
- System health

### Visual Differentiation

```css
/* DelioDev uses slightly different styling to signal "technical mode" */
.deliodev-mode {
  --card-bg: rgba(99, 102, 241, 0.05);  /* Slight indigo tint */
  --card-border: rgba(99, 102, 241, 0.15);
  --text-primary: #E0E7FF;  /* Slightly cooler white */
}
```

### Basic Structure

```
┌────────────────────────────────────────────────────────────┐
│  DelioDev — System Status                                  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Memory Health: ████████░░ 82%                            │
│  Actions Pending: 3                                        │
│  Last Sync: 2 min ago                                     │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Recent Actions                                       │ │
│  │ [12:34] Captured: "Meeting at 14:00"                │ │
│  │ [12:32] Categorized: Finance → Budget               │ │
│  │ [12:30] Reminder set: Review weekly stats           │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Approvals Needed                                     │ │
│  │ ○ Categorize this as "Investment" or "Expense"?     │ │
│  │ ○ Merge duplicate entries from last week?           │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Key Differences from Life Dashboard:**
- More technical language OK here
- More data density acceptable
- Monospace fonts for timestamps/IDs
- Debug-style visual elements (but still clean)

---

## 📱 Responsive Behavior

### Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  .sidebar { display: none; } /* Hamburger menu */
  .main-content { padding: 16px; }
  .state-strip { flex-direction: column; gap: 12px; }
  .life-signals { grid-template-columns: 1fr 1fr; }
}

/* Tablet */
@media (max-width: 1024px) {
  .sidebar { width: 200px; }
  .main-content { max-width: 900px; }
}

/* Desktop */
@media (min-width: 1025px) {
  .main-content { max-width: 1200px; }
}
```

---

## 🎯 Implementation Priority

### Phase 1: Foundation
1. Color system setup
2. Typography system
3. Button components
4. Card components
5. Top bar + Sidebar

### Phase 2: Home Dashboard
1. Hero / Direction block
2. State Strip
3. Today block
4. Quick Add (Omnibar)
5. Mentor card
6. Life Signals

### Phase 3: AI Patterns
1. Omnibar with AI integration
2. AI status indicators
3. Thinking/working states
4. Ask Delio triggers

### Phase 4: Inner Pages
1. Health page template
2. Finance page template
3. Projects page template

### Phase 5: DelioDev
1. Basic layout
2. Memory view
3. Actions log
4. Approvals UI

---

## 🧪 Testing Checklist

- [ ] Contrast ratios meet WCAG AA (4.5:1 for text)
- [ ] All interactive elements have clear hover states
- [ ] AI states are noticeable but not distracting
- [ ] Typography scale works across devices
- [ ] Card hierarchy is clear at a glance
- [ ] Quick Add is always accessible
- [ ] Navigation is intuitive
- [ ] DelioDev feels distinctly different from Life Dashboard

---

## 📝 Notes for Development

1. **Start with CSS variables** — define the entire design system in `:root`
2. **Build atomic components first** — buttons, cards, inputs
3. **Use composition** — build complex blocks from simple components
4. **Keep AI styling separate** — create dedicated AI component classes
5. **Test in dark room** — this is a dark product, test in low light
6. **Performance matters** — avoid heavy shadows, use borders instead

---

**This is your design foundation.** Start with Midnight Paper direction, build the core components, then iterate based on real usage.
