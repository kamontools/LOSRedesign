---
name: livingos-design-system
description: >
  Design system และ UI Kit สำหรับ LivingOS — Property Management Platform สำหรับนิติบุคคลและงานบัญชี
  ใช้ทุกครั้งที่มีการออกแบบหน้าจอ, component, หรือ landing page ของ LivingOS ไม่ว่าจะเป็น Portal,
  Athena, Sentinel หรือเว็บ marketing — รวมถึงเมื่อมีคำถามเรื่อง color, font, spacing, tone,
  หรือ copy ภาษาไทยใน UI ของ LivingOS
---

# LivingOS Design System

Design language สำหรับ LivingOS — B2B PropTech platform ที่ target นิติบุคคล (juristic person)
คอนโดมิเนียมและหมู่บ้านจัดสรร เน้น **Bright · Warm · Friendly** ที่ยังคง trust และความเป็นมืออาชีพ

---

## 1. Brand Direction

### Mood & Tone
- **Trusted** — ข้อมูลถูกต้อง โปร่งใส ไม่หลอกลวง
- **Warm** — เป็นมิตร ไม่เย็นชาแบบ corporate
- **Modern** — ทันสมัย ไม่ล้าสมัย แต่ไม่ trendy จนเกินไป
- **Thai-first** — ภาษาไทยเป็นภาษาหลัก UI copy กระชับ ตรงประเด็น
- **Contextual** — ภาพ background สะท้อน context จริง (เมือง, อาคาร, ธรรมชาติ) ไม่ใช่ abstract blob

### Target Segment
- นิติบุคคล / ผู้จัดการอาคาร
- ทีมบัญชีโครงการ
- ผู้บริหารระดับ management ของโครงการ

### ห้ามใช้
- Dark background (เว้นแต่ section พิเศษ เช่น dark hero)
- Gradient สีฉูดฉาด หรือ neon glow
- Bootstrap default palette (#0d6efd, generic gray)
- Font: Inter, Roboto, Arial, system-ui
- Pure abstract blob/noise/grain texture บน hero หลัก — ใช้ภาพถ่ายจริงแทน

---

## 2. Color System

### Primary Palette

```
Primary Blue   #1C70F7   — CTA, links, focus ring, brand accent
Blue 600       #1560D8   — Hover state ของ primary button
Blue 400       #4D8EF9   — Lighter variant
Blue 100       #DDEAFF   — Soft bg ของ badge, alert info
Blue 50        #EEF4FF   — Hover bg, section bg แบบ subtle
```

### Base — Warm White (ไม่ใช่ pure white)

```
Page bg        #FAF9F6   — พื้นหลักทั้งหน้า
Surface        #F5F3EE   — Card, section สลับ
Overlay        #EEEAE2   — Nav pill bg, tab strip bg
Border light   #E8E4DA   — Border ทั่วไป
Border mid     #D4CFC4   — Border เน้น, divider
White          #FFFFFF   — Card surface, pill badge bg, button bg
```

> **หลักการ**: ห้ามใช้ #F0F0F0 หรือ cool gray เด็ดขาด ทุก neutral ต้องมี warm undertone

### Warm Accent

```
Orange 500     #F97316   — Secondary accent, CTA รอง, highlight
Orange 100     #FFEDD5   — Badge bg, alert warning
Orange 50      #FFF7ED   — Subtle bg
```

### Gold (Eyebrow Badge)

```
Gold gradient  #F5E27A → #E8C840 → #C9A000 → #F5E27A → #D4A820  — eyebrow pill background
Gold border    rgba(180,130,0,.45)
Gold text      #4A2E00
```

### Text — Dark Grey Scale

```
Text 1   #1A1A1A   — Heading, body หลัก
Text 2   #3D3D3D   — Body ทั่วไป, label
Text 3   #6B6B6B   — Subtext, description
Text 4   #9A9A9A   — Placeholder, hint, metadata
Text 5   #C4C4C4   — Disabled, border label
```

### Semantic

```
Green 600   #16A34A   — Success text
Green 500   #22C55E   — Success icon, badge dot
Green 50    #F0FDF4   — Success bg

Yellow 500  #EAB308   — Warning
Yellow 50   #FEFCE8   — Warning bg

Red 600     #DC2626   — Error text
Red 500     #EF4444   — Error icon
Red 50      #FEF2F2   — Error bg
```

### Shadow (warm-tinted — ไม่ใช้ cold gray shadow)

```css
--shadow-sm:   0 1px 4px rgba(60,45,20,.07), 0 1px 2px rgba(60,45,20,.05);
--shadow-md:   0 4px 16px rgba(60,45,20,.10), 0 2px 6px rgba(60,45,20,.06);
--shadow-lg:   0 12px 40px rgba(60,45,20,.13), 0 4px 12px rgba(60,45,20,.07);
--shadow-blue: 0 8px 24px rgba(28,112,247,.22), 0 2px 8px rgba(28,112,247,.14);
```

---

## 3. Typography

### Font Stack

```
Primary   IBM Plex Sans Thai Looped  — UI ทั้งหมด (ไทย + อังกฤษ)
Mono      IBM Plex Mono              — ตัวเลขเงิน, code, hex, timestamp, overline label
```

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Token  | Size  | Weight | Letter-spacing | ใช้สำหรับ            |
|--------|-------|--------|----------------|----------------------|
| 5xl    | 60px  | 700    | −0.025em       | Hero / Display       |
| 4xl    | 48px  | 700    | −0.02em        | Page title           |
| 3xl    | 38px  | 700    | −0.015em       | Section h1           |
| 2xl    | 30px  | 600    | −0.01em        | Card title, h2       |
| xl     | 24px  | 600    | 0              | h3, subsection       |
| lg     | 20px  | 500    | 0              | Lead text, h4        |
| md     | 17px  | 300    | 0              | Body large           |
| base   | 15px  | 400    | 0              | Body default         |
| sm     | 13px  | 400    | 0              | Caption, helper text |
| xs     | 11px  | 500    | +0.10em        | Label, overline (MONO, UPPERCASE) |

### กฎ Typography

- Heading ทุกระดับใช้ IBM Plex Sans Thai Looped เท่านั้น (ไม่มี serif)
- ตัวเลขเงิน (`฿ 2,800.00`) ใช้ IBM Plex Mono เสมอ
- Stat label ใน social proof / stats row: `font-size: 18px`, `font-family: mono`, `font-weight: 500`
- Line height: heading `1.1–1.25`, body `1.65`, helper `1.6`
- Overline / section label: `font-family: mono`, `font-size: 11px`, `font-weight: 500`, `letter-spacing: .10em`, `text-transform: uppercase`, `color: Text 4`

---

## 4. Spacing

Base unit = 4px

```
sp-1   4px     sp-6   24px
sp-2   8px     sp-8   32px
sp-3   12px    sp-10  40px
sp-4   16px    sp-12  48px
sp-5   20px    sp-16  64px
                sp-20  80px
```

Section spacing: `80px` ระหว่าง section หลัก

---

## 5. Border Radius

```
r-sm    6px
r-md    10px
r-lg    14px
r-xl    20px    — Card ทั่วไป
r-2xl   28px    — Hero section, cover card
r-full  9999px  — Pill, badge, chip, trust badge
```

---

## 6. Components

### Button

```
Primary     bg #1C70F7, text white
            hover: bg #1560D8 + shadow-blue + translateY(-1px)

Soft        bg #EEF4FF, text #1560D8, border #DDEAFF
            hover: bg #DDEAFF

Outline     bg transparent, text #1C70F7, border #80AEFB (1.5px)
            hover: bg #EEF4FF, border #1C70F7

Warm        bg #F5F3EE, text #3D3D3D, border #D4CFC4
            hover: bg #EEEAE2 + translateY(-1px)

Ghost       bg #FFFFFF, text #3D3D3D, border #E8E4DA (1.5px), shadow-sm
            hover: bg #F5F3EE
            ⚠️ Ghost button ต้องมี white bg เสมอ — ไม่ใช้ transparent บน photo background

Orange      bg #F97316, text white  (CTA รอง / warmth)
            hover: bg #e06010 + warm shadow

Danger      bg #FEF2F2, text #DC2626, border #FCA5A5
```

Sizes: `sm` (12px/6px 14px), `md` (13px/9px 18px), `lg` (15px/12px 24px)

Radius: sm/md = `r-md`, lg = `r-lg`

### Button 3D Emboss (`.btn-3d`)

สำหรับ CTA หลักที่ต้องการ visual weight สูง เช่น primary hero CTA, nav CTA, demo button

```css
.btn-3d {
  background-image:
    linear-gradient(rgba(0,0,0,.07) 0% 100%),
    linear-gradient(rgba(255,255,255,.12) 0%, rgba(0,0,0,.10) 100%);
  background-blend-mode: overlay, normal;
  box-shadow:
    inset 0 1.5px rgba(255,255,255,.24),
    inset 0 -.5px 2px rgba(0,0,0,.28),
    0 0 0 1px rgba(0,0,0,.16),
    0 2px 8px rgba(0,0,0,.06),
    0 3px 5px rgba(28,112,247,.32);
  transition: transform 0.12s ease, box-shadow 0.15s ease, filter 0.08s ease;
}
/* hover: translateY(-1px) + stronger blue shadow */
/* active: translateY(1px) + brightness(.88) + inset press shadow */
```

ใช้ร่วมกับ `bg-primary` หรือสีพื้นหลัง solid ใดๆ

### Badge

Format: `background tinted + border tinted + colored text`

```
Blue    bg #EEF4FF  border #DDEAFF  text #1560D8
Green   bg #F0FDF4  border #BBF7D0  text #16A34A
Orange  bg #FFF7ED  border #FED7AA  text #F97316
Yellow  bg #FEFCE8  border #FEF08A  text #A16207
Red     bg #FEF2F2  border #FCA5A5  text #DC2626
Dim     bg #F5F3EE  border #E8E4DA  text #9A9A9A
```

Badge dot: `::before` width/height 5px, border-radius 50%, `background: currentColor`, opacity .7

### Trust / Feature Pill Badge

Floating white pill ใช้ใน hero trust row และ feature callout

```css
display: inline-flex;
align-items: center;
gap: 7px;
padding: 8px 16px;
border-radius: 9999px;
background: #FFFFFF;
border: 1.5px solid #E8E4DA;
box-shadow: 0 2px 10px rgba(60,45,20,.10), 0 1px 3px rgba(60,45,20,.07);
font-size: 13px;
font-weight: 500;
color: #3D3D3D;

/* status dot */
width: 7px; height: 7px;
border-radius: 50%;
background: #16A34A;
box-shadow: 0 0 0 3px rgba(22,163,74,.15);  /* green halo */
```

### Eyebrow Badge (Gold Plate)

ใช้เฉพาะ hero section eyebrow — แสดงถึง No.1 / award positioning

```css
padding: 6px 18px;
border-radius: 9999px;
border: 1.5px solid rgba(180,130,0,.45);
background: linear-gradient(135deg,
  #F5E27A 0%, #E8C840 18%, #F0D060 35%,
  #C9A000 55%, #E8C840 72%, #F5E27A 88%, #D4A820 100%
);
box-shadow:
  inset 0 1px rgba(255,255,255,.55),
  inset 0 -1px rgba(100,65,0,.18),
  0 4px 16px rgba(180,130,0,.28);
font-family: IBM Plex Mono;
font-size: 11px;
font-weight: 600;
letter-spacing: .10em;
text-transform: uppercase;
color: #4A2E00;
/* + sweep shimmer animation via ::after pseudo-element */
```

### Form Input

```css
border: 1.5px solid #D4CFC4;
border-radius: 10px;         /* r-md */
background: #FFFFFF;
font-size: 14px;
padding: 10px 14px;

/* focus */
border-color: #4D8EF9;
box-shadow: 0 0 0 3px rgba(28,112,247,.12);

/* error */
border-color: #EF4444;
box-shadow (focus): 0 0 0 3px rgba(239,68,68,.12);
```

### Card

```css
background: #FFFFFF;
border: 1.5px solid #E8E4DA;
border-radius: 20px;          /* r-xl */
box-shadow: var(--shadow-sm);

/* hover */
box-shadow: var(--shadow-md);
transform: translateY(-2px);
```

### Alert

```
border-left: 3px solid [semantic color]
border-radius: r-lg (14px)
padding: 14px 16px
```

### Table

- `thead`: bg `#F5F3EE`, font 11px, weight 600, uppercase, `Text 4`
- `tbody td`: border-bottom `1px solid #E8E4DA`
- Row hover: bg `#EEF4FF`
- ตัวเลขเงิน: font IBM Plex Mono, weight 500

### Toast

```
border-left: 4px solid [semantic color]
border-radius: r-xl (20px)
background: white
box-shadow: shadow-lg
```

### Nav Pill (Tab)

```css
container: bg #EEEAE2, border 1.5px solid #E8E4DA, border-radius r-lg, padding 4px-6px
active:    bg white, border 1.5px solid #E8E4DA, box-shadow shadow-sm, font-weight 600
inactive:  color Text 3, bg transparent, border transparent
inactive hover: bg rgba(255,255,255,.5), color Text 2
```

---

## 7. UI Copy Guidelines (ภาษาไทย)

### หลักการ

- กระชับ ตรงประเด็น ไม่ใช้ภาษาราชการโดยไม่จำเป็น
- **ห้าม**ใช้คำ "ลบ" — ให้ใช้ "ยกเลิก" หรือ "นำออก" แทน
- ป้าย confirm action: ไม่ขึ้นต้นด้วยคำที่ทำให้ตกใจ เช่น "คำเตือน!" หรือ "ระวัง!"
- Error message: บอก **ปัญหา + วิธีแก้** ใน 1–2 ประโยค
- Success message: กระชับ บอกผลลัพธ์จริง เช่น "บันทึกสำเร็จ" ไม่ใช่ "ดำเนินการเรียบร้อย"

### ตัวอย่าง Tone

| ❌ ห้ามใช้ | ✅ ใช้แทน |
|-----------|----------|
| ดำเนินการเรียบร้อยแล้ว | บันทึกสำเร็จ |
| ลบรายการนี้ | ยกเลิกรายการนี้ |
| คำเตือน: การกระทำนี้ไม่สามารถย้อนกลับได้ | รายการนี้จะถูกยกเลิกถาวร ยืนยันหรือไม่? |
| กรุณากรอกข้อมูลให้ถูกต้อง | รหัสต้องเป็นตัวอักษรหรือตัวเลขเท่านั้น |
| ระบบกำลังประมวลผล | กำลังโหลด… |

### Domain Vocabulary

```
ใบแจ้งหนี้        Invoice
ใบเสร็จ          Receipt
บันทึกบัญชี       Journal entry
งวดบัญชี         Accounting period
นิติบุคคล         Juristic person / Juristic entity
ค่าส่วนกลาง       Common area fee
ลูกบ้าน          Resident
```

---

## 8. Page Structure

### Hero Section (Landing Page)

```
Layout: full viewport height, centered content stack
Max-width container: 1120px centered

- Eyebrow badge: Gold plate pill — gradient gold bg + shimmer sweep animation
  → ใช้แสดง award/No.1 positioning เท่านั้น
  → ไม่ใช้ blue eyebrow pill บน hero หลัก

- Headline: clamp(44px, 7vw, 72px), weight 700, letter-spacing −0.03em, color #1A1A1A
  → keyword สำคัญ: color #1C70F7

- CTA row: Primary .btn-3d + Ghost (white bg) btn, gap 12px, justify center

- Trust row: floating white pill badges, gap 10px, justify center
  → แต่ละ pill: white bg, border #E8E4DA, shadow warm, green dot with halo

- Product tab strip: bg #EEEAE2, border-radius 16px top only (0 bottom)
  → active tab: white bg, border #E8E4DA, shadow-sm
  → tab icon: 22×22 brand SVG logo inlined

- Mockup frame: browser chrome (traffic lights + URL bar) + screen content below tabs
  → border-radius: 0 20px 20px 20px (top-left flat matches tab)
```

### Hero Background (Photo + Gradient Mask)

```
Layer 1 — Photo (bottom):
  position: absolute; inset: 0;
  background: url('/bangkok-hero.jpg') center 38% / cover no-repeat;
  filter: saturate(1.4) brightness(1.06);

Layer 2 — Warm gradient mask (top):
  background:
    radial-gradient(ellipse 88% 72% at 55% 42%,
      transparent 0%,
      rgba(250,249,246,.55) 45%,
      rgba(250,249,246,.88) 100%
    ),
    linear-gradient(to bottom,
      rgba(250,249,246,.97) 0%,
      rgba(250,249,246,.30) 18%,
      rgba(250,249,246,.25) 65%,
      rgba(250,249,246,.97) 100%
    );

ภาพที่ใช้: cityscape จริง — เมือง + ป่า/ต้นไม้ foreground สร้าง contrast
ห้ามใช้: dot grid, abstract blob, noise/grain บน hero photo
```

### Background Decorations (non-hero sections)

- Dot grid: `radial-gradient(circle, rgba(28,112,247,.10) 1px, transparent 1px)` size 32px
- Radial glow blob: `rgba(28,112,247,.07)` top-right + `rgba(249,115,22,.04)` bottom-left
- `mask-image: radial-gradient(...)` ให้ fade ออกตามขอบ
- ใช้ได้ใน inner page หรือ section ที่ไม่มี photo bg

---

## 9. Animation (GSAP)

```
Library: GSAP 3 + ScrollTrigger

Hero entrance (page load):
  .hero-word   → fromTo y:30,opacity:0 → y:0,opacity:1 stagger .09s
  .hero-cta    → fromTo y:14,opacity:0 → y:0,opacity:1 stagger .07s
  .hero-mockup → fromTo y:24,opacity:0 → y:0,opacity:1 duration .75s

Scroll reveals:
  .reveal-up    → fromTo y:40,opacity:0 → y:0,opacity:1 at 88% viewport
  .reveal-left  → fromTo x:-40,opacity:0 → x:0,opacity:1 at 85%
  .reveal-right → fromTo x:40,opacity:0 → x:0,opacity:1 at 85%
  .reveal-stagger → children stagger .12s at 85%

Stat counters:
  .stat-number[data-target] → count from 0 → target on ScrollTrigger enter (once)

Logo marquee:
  CSS animation: translateX 0 → -50% over 28s linear infinite
  pause on hover

All: ease 'power2.out', duration .6–.75s
Use fromTo() always — never from() — to avoid invisible-content bugs
```

---

## 10. Products in Scope

| Product | คำอธิบาย | ผู้ใช้ |
|---------|----------|--------|
| **Portal (Urbanice App)** | แอปลูกบ้าน — ดูใบแจ้งหนี้, ชำระเงิน, จอง facility, แจ้งซ่อม | ลูกบ้าน |
| **Athena** | Internal CS/Support — จัดการ request, ติดตาม case | ทีม CS |
| **PMS (The LivingOS)** | ระบบหลักนิติบุคคล — บัญชี, ใบแจ้งหนี้, รายงาน | นิติบุคคล |
| **GuardOS / i-Pass** | ระบบรักษาความปลอดภัย ควบคุมผู้เยี่ยมชม Real-Time | รปภ. + นิติบุคคล |
| **i-Vote** | ระบบประชุมใหญ่และลงคะแนนเสียงออนไลน์ | นิติบุคคล + ลูกบ้าน |
| **Sentinel** | AI Co-Pilot ("น้องลีวิ่ง") — notification center, insight | นิติบุคคล + ทีมภายใน |

Design system นี้ใช้ได้กับทุก product แต่ Sentinel อาจมี AI-specific component เพิ่มเติม

---

## 11. What NOT to Do

- ❌ ใช้ Bootstrap default color (#0d6efd, #6c757d, #f8f9fa)
- ❌ Pure white (#FFFFFF) เป็น page background — ใช้ #FAF9F6 แทน
- ❌ Cold gray shadow (`rgba(0,0,0,...)`) — ใช้ warm tinted เสมอ
- ❌ Font Inter, Roboto, Sarabun (ถ้าไม่ได้รับอนุญาตพิเศษ)
- ❌ Section bg สลับขาว/เทาซ้ำๆ โดยไม่มี accent section
- ❌ Gradient text บน body copy — ใช้เฉพาะ display headline พิเศษ
- ❌ Dark canvas (`#0A0A0F`) บนหน้า marketing/landing — ให้ใช้ bright theme
- ❌ Bootstrap icon pack ทั่วไป — ใช้ Lucide หรือ Tabler (outline only)
- ❌ Copy ที่ใช้คำว่า "ลบ" สำหรับ soft-delete หรือ cancellation flow
- ❌ Ghost button แบบ `background: transparent` บน photo background — ต้องมี white bg
- ❌ Abstract blob/dot-grid เป็น hero background หลัก — ใช้ภาพถ่ายจริง + gradient mask แทน
- ❌ Eyebrow badge สีน้ำเงิน (#EEF4FF) บน hero — ใช้ gold plate สำหรับ No.1/award positioning
