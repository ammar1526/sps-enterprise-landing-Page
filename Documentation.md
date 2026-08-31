# SPS Enterprise Website - Technical Documentation

## Overview

This documentation outlines the implementation of the SPS (Software Productivity Strategists, Inc.) website frontend. The project is built using **Next.js (App Router)**, **React**, **Tailwind CSS**, and **Lucide React**. It features a highly interactive, responsive, and pixel-perfect UI based on provided design mockups.

## Project Structure

The core components are located in the `src/components` (or `app/components`) directory.

### Core Components

#### 1. `Navbar.tsx`

- **Functionality:** Sticky/absolute top navigation bar. It is fully transparent over the Hero section to allow the background colors to show through.
- **Features:**
  - Brand Logo integration (`/images/logowhitenew-240.webp`).
  - Hover-based Mega Menus for Product, Services, and Verticals.
  - Simple dropdowns for Spinnlabs, Activities, Aboutus, and Contracts.
  - Triple-level nested dropdown (Contracts > VITA > Pricing).
  - Mobile responsive hamburger menu with slide-down accordions.
  - All Mega Menus use `max-w-[90vw]` and `left-1/2 -translate-x-1/2` to prevent overflowing the screen.
  - Social/CTA buttons on the right (Internship pill, Info button).

#### 2. `HeroSection.tsx`

- **Functionality:** Fullscreen (`h-screen`) hero carousel with cross-fade transitions.
- **Features:**
  - 4 Auto-cycling slides (8 seconds interval).
  - Background video support (`/images/*.mp4`) with `autoPlay`, `loop`, `muted`, and `playsInline`.
  - Dark gradient overlays for text readability.
  - Foreground text positioned between the center and left arrow (`ml-6 sm:ml-10 lg:ml-32 xl:ml-40`).
  - Navigation arrows (ChevronLeft/Right) and slide indicator dots.
  - "Request a Quote" Modal triggered by "How can we help you today".
  - Primary button color adjusted to `#1d4ed8` (dark blue) with hover to `#1e40af`.
  - Height set to `h-screen min-h-[800px]` to cover the entire viewport on load.

#### 3. `ServicesSection.tsx`

- **Functionality:** Tabbed interface for detailed service offerings.
- **Features:**
  - 4 Tabs (Cybersecurity, Cloud, AI & Automation, Collaboration).
  - Auto-scrolling carousel within each tab.
  - Custom styling for tabs (Active: `#0f1f4b` background, White text).
  - Cards with deep blue hover (`#0f1f4b`), sliding "Read More" arrow button.
  - Horizontal scrollbar hidden via custom CSS (`.no-scrollbar`).
  - Smooth auto-scroll loop (`requestAnimationFrame`).

#### 4. `SolutionsGrid.tsx`

- **Functionality:** Grid layout for SPS products.
- **Features:**
  - Responsive grid (`grid-cols-1` to `grid-cols-4`).
  - Icons loaded from `/images/logos/*.webp`.
  - Background watermark icon with very low opacity on the right.
  - Hover effect: Background changes to `#0f1f4b`, text turns white.
  - Arrow button animates up and right on hover.

#### 5. `ProductsSection.tsx`

- **Functionality:** "Organization Trusted SPS Products" section.
- **Features:**
  - Background image with `backgroundBlendMode: "luminosity"` and dark overlay `#0f1f4b`.
  - Animated counter (0 to 20) using `IntersectionObserver` and `requestAnimationFrame`.
  - Statistics box placed in bottom right of image (`bg-[#0f1f4b]`).
  - Grid of 4 product cards (`Azalio`, `MYID`, `CSM`, `BMS`) with glassmorphism effects (`bg-white/5 backdrop-blur-[30px]`).
  - Logos placed openly without circular borders.

#### 6. `RequestForm.tsx`

- **Functionality:** Appointment/Contact form.
- **Features:**
  - Form panel background is `#6985d3`.
  - Left side interactive image with hover shadow.
  - Vertical "Appointment Now" tab on the left.
  - Floating labels for all inputs.
  - Fully functional custom dropdown (Services) with state management.
  - Buttons have hover color transitions (e.g., Appointment button changes to `#0f1f4b`).
  - Added `mb-12.5 pb-10` for bottom spacing.

#### 7. `HowItWorks.tsx`

- **Functionality:** Step-by-step process section.
- **Features:**
  - Background color `bg-blue-100`.
  - Static list of steps (non-hoverable icons).
  - Right side large image (`/images/867.webp`).
  - Hoverable "Book Appointment" button with color transitions.
  - "180+ Specialists" and "45K Happy Clients" animated counters.

#### 8. `TechPartners.tsx`

- **Functionality:** Infinite scrolling logos marquee.
- **Features:**
  - Background color `bg-blue-100`.
  - Infinite auto-scroll using `requestAnimationFrame` (Speed = 2).
  - Pauses on container hover (`isPaused`).
  - Cards pop out on hover with `hover:scale-110` and additional container padding (`py-10`) to prevent clipping.
  - Cards have fixed width `w-[256.6px]`.

#### 9. `CustomersPage.tsx` (Clients Logos)

- **Functionality:** Animated clients carousel.
- **Features:**
  - Background color `bg-blue-100`.
  - Infinite horizontal loop using CSS `@keyframes marquee`.
  - Logos placed inside large circles (`w-60 h-60`) with borders.
  - Given extra vertical padding (`py-16`, `py-10`) to allow `hover:scale-110` without touching walls.
  - Left and right gradient fade masks.

#### 10. `NewsSection.tsx`

- **Functionality:** News and Insights grid.
- **Features:**
  - Grid layout (4/5/3 column spans).
  - Fixed card heights (`xl:h-[550px]` and `h-[265px]`).
  - "View All" and "Read More" buttons with hover colors (`#0f1f4b` to `#1d4ed8`).
  - Fixed alignment on hover and arrow buttons properly circled (`rounded-full`).

#### 11. `ComprehensiveGrid.tsx` (Verticals)

- **Functionality:** Industry solutions grid.
- **Features:**
  - Background color `bg-blue-100`.
  - Card heights reduced to `min-h-[300px]`.
  - Hover state: Image fades in smoothly with blur effect (`blur-[5px]` to `blur-0`).
  - Overlay changed to a subtle blue tint (`bg-blue-900/40`) instead of heavy darkness.
  - "Read More" is functional (toggles `Read Less` and `line-clamp`).
  - Used Unsplash images based on card context.

## Styling and Color Scheme

- **Primary Dark Blue (Text/Nav):** `#0f1f4b`
- **Secondary/Active Blue:** `#1d4ed8`
- **Form Panel Blue:** `#6985d3`
- **Backgrounds:** `bg-slate-100`, `bg-blue-100`, transparent.
- **Typography:** Bold, heavy fonts for headings (`font-bold`, `font-black`), light fonts for body text (`font-light`).
- **Animations:** `transition-all duration-500` for smooth UI feedback. `requestAnimationFrame` for smooth carousels.

## Important Notes

- All images are stored in the `public/images` and `public/images/logos` directories.
- No external CSS frameworks are used; everything is Tailwind or inline style.
- All components are "use client" for interactivity.
- Scrollbars are hidden for the carousels to maintain a clean look.
