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

### Target Segment
- นิติบุคคล / ผู้จัดการอาคาร
- ทีมบัญชีโครงการ
- ผู้บริหารระดับ management ของโครงการ

### ห้ามใช้
- Dark background (เว้นแต่ section พิเศษ เช่น dark hero)
- Gradient สีฉูดฉาด หรือ neon glow
- Bootstrap default palette (#0d6efd, generic gray)
- Font: Inter, Roboto, Arial, system-ui

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
Overlay        #EEEAE2   — Nav pill bg, input bg บาง component
Border light   #E8E4DA   — Border ทั่วไป
Border mid     #D4CFC4   — Border เน้น, divider
White          #FFFFFF   — Card surface, input bg
```

> **หลักการ**: ห้ามใช้ #F0F0F0 หรือ cool gray เด็ดขาด ทุก neutral ต้องมี warm undertone

### Warm Accent

```
Orange 500     #F97316   — Secondary accent, CTA รอง, highlight
Orange 100     #FFEDD5   — Badge bg, alert warning
Orange 50      #FFF7ED   — Subtle bg
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
Mono      IBM Plex Mono              — ตัวเลขเงิน, code, hex, timestamp
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
r-full  9999px  — Pill, badge, chip
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

Ghost       bg transparent, text #3D3D3D, border #E8E4DA
            hover: bg #F5F3EE

Orange      bg #F97316, text white  (CTA รอง / warmth)
            hover: bg #e06010 + warm shadow

Danger      bg #FEF2F2, text #DC2626, border #FCA5A5
```

Sizes: `sm` (12px/6px 14px), `md` (13px/9px 18px), `lg` (15px/12px 24px)

Radius: sm/md = `r-md`, lg = `r-lg`

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
container: bg #EEEAE2, border 1.5px solid #E8E4DA, border-radius r-lg, padding 4px
active:    bg white, border 1.5px solid #D4CFC4, box-shadow shadow-sm
inactive:  color Text 3, no bg
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
- Eyebrow tag: bg #EEF4FF, border #DDEAFF, font mono 12px, color #1560D8
- Headline: 52px, weight 700, letter-spacing −0.025em, color #1A1A1A
  → keyword สำคัญ: color #1C70F7
- Description: 17px, weight 300, color #6B6B6B
- CTA row: Primary btn + Ghost btn (ห่างกัน 12px)
- Stats bar: border-top #E8E4DA, 3 stat columns
  → number: 26px weight 700, accent color #1C70F7
  → label: 12px, color #9A9A9A
```

### Background decorations (subtle)
- Dot grid pattern: `radial-gradient(circle, rgba(28,112,247,.10) 1px, transparent 1px)` size 32px
- Radial glow blob: `rgba(28,112,247,.07)` + `rgba(249,115,22,.04)` ที่ top-right
- `mask-image: radial-gradient(...)` ให้ fade ออกตามขอบ
- **ห้าม**ใช้ noise texture, grain overlay, หรือ dark bg บน landing page หลัก

---

## 9. Products in Scope

| Product | คำอธิบาย | ผู้ใช้ |
|---------|----------|--------|
| **Portal** | หน้าลูกบ้าน — ดูใบแจ้งหนี้, ชำระเงิน, ส่ง request | ลูกบ้าน |
| **Athena** | Internal CS/Support — จัดการ request, ติดตาม case | ทีม CS |
| **PMS** | ระบบหลักนิติบุคคล — บัญชี, ใบแจ้งหนี้, รายงาน | นิติบุคคล |
| **Sentinel** | AI Co-Pilot ("น้องลีวิ่ง") — notification center, insight | นิติบุคคล + ทีมภายใน |

Design system นี้ใช้ได้กับทุก product แต่ Sentinel อาจมี AI-specific component เพิ่มเติม

---

## 10. What NOT to Do

- ❌ ใช้ Bootstrap default color (#0d6efd, #6c757d, #f8f9fa)
- ❌ Pure white (#FFFFFF) เป็น page background — ใช้ #FAF9F6 แทน
- ❌ Cold gray shadow (`rgba(0,0,0,...)`) — ใช้ warm tinted เสมอ
- ❌ Font Inter, Roboto, Sarabun (ถ้าไม่ได้รับอนุญาตพิเศษ)
- ❌ Section bg สลับขาว/เทาซ้ำๆ โดยไม่มี accent section
- ❌ Gradient text บน body copy — ใช้เฉพาะ display headline พิเศษ
- ❌ Dark canvas (`#0A0A0F`) บนหน้า marketing/landing — ให้ใช้ bright theme
- ❌ Bootstrap icon pack ทั่วไป — ใช้ Lucide หรือ Tabler (outline only)
- ❌ Copy ที่ใช้คำว่า "ลบ" สำหรับ soft-delete หรือ cancellation flow
