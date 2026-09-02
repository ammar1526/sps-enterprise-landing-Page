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
  - Internship pill and CTA buttons on the right.
  - Responsible for routing to `/product/ibm/automation` and various internal routes.
  - Updated to be fully optimized for tablet and desktop responsiveness, preventing sidebar overflow on zoom.

#### 2. `HeroSection.tsx`

- **Functionality:** Fullscreen (`h-screen`) hero carousel with cross-fade transitions.
- **Features:**
  - 4 Auto-cycling slides (8 seconds interval).
  - Background video support (`/images/*.mp4`) with `autoPlay`, `loop`, `muted`, and `playsInline`.
  - Dark gradient overlays for text readability.
  - Foreground text positioned between the center and left arrow (`ml-6 sm:ml-10 lg:ml-32 xl:ml-40`).
  - Navigation arrows (ChevronLeft/Right) and slide indicator dots.
  - "Request a Quote" Modal triggered by "How can we help you today".
  - Primary button color adjusted to `#4d75e6` and hover to `#1e40af`.
  - Text sizing increased (Headings `text-7xl`, Subtext `text-2xl`) to fill the large space gracefully.

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

#### 6. `DetailOurProduct.tsx`

- **Functionality:** Interactive product tabs (SPS, IBM, Other Solutions) with left-side buttons and right-side content card.
- **Features:**
  - Uses `useCallback` and `useMemo` for optimized performance.
  - Left-side buttons have a pill shape and adjust border-radius/padding to match UI.
  - Large gap (`gap-12 lg:gap-20`) between left and right content.
  - "Book An Appointment" button overlays the image (`/images/banners/p2.webp`).
  - Lazy loading applied to images for performance.
  - Team info and arrow button placed at the bottom of the content card.

#### 7. `RequestForm.tsx`

- **Functionality:** Appointment/Contact form.
- **Features:**
  - Form panel background is `#6985d3`.
  - Left side interactive image with hover shadow.
  - Vertical "Appointment Now" tab on the left.
  - Floating labels for all inputs.
  - Fully functional custom dropdown (Services) with state management.
  - Buttons have hover color transitions (e.g., Appointment button changes to `#0f1f4b`).
  - Added `mb-12.5 pb-10` for bottom spacing.

#### 8. `HowItWorks.tsx`

- **Functionality:** Step-by-step process section.
- **Features:**
  - Background color `bg-blue-100`.
  - Static list of steps (non-hoverable icons).
  - Right side large image (`/images/867.webp`).
  - Hoverable "Book Appointment" button with color transitions.
  - "180+ Specialists" and "45K Happy Clients" animated counters.

#### 9. `TechPartners.tsx`

- **Functionality:** Step-by-step infinite looping carousel with auto-zoom effect.
- **Features:**
  - Background color `bg-blue-100`.
  - Precisely moves one card at a time every 3 seconds using an optimized `useCallback` and `setInterval`.
  - The card currently in the "first" position auto-zooms (`scale-110`) for 2.5 seconds before moving to the next.
  - Right side is fully open, left side has a soft blurred gradient mask.
  - Responsive and optimized (`useCallback` and `useRef`).

#### 10. `CustomersPage.tsx` (Clients Logos)

- **Functionality:** Animated clients marquee with manual scrolling capabilities.
- **Features:**
  - Background color `bg-blue-100`.
  - Infinite horizontal loop using CSS `@keyframes marquee`.
  - Logos placed inside smaller circular borders (`lg:w-40 lg:h-40`).
  - Added `useRef` and wheel event listener to allow manual scrolling via mouse wheel.
  - Left and right gradient fade masks.

#### 11. `NewsSection.tsx`

- **Functionality:** News and Insights grid.
- **Features:**
  - Grid layout (4/5/3 column spans).
  - Fixed card heights (`xl:h-[550px]` and `h-[265px]`).
  - "View All" and "Read More" buttons with hover colors (`#0f1f4b` to `#1d4ed8`).
  - Fixed alignment on hover and arrow buttons properly circled (`rounded-full`).

#### 12. `ComprehensiveGrid.tsx` (Verticals)

- **Functionality:** Industry solutions grid.
- **Features:**
  - Background color `bg-blue-100`.
  - Card heights reduced to `min-h-[300px]`.
  - Hover state: Image fades in smoothly with blur effect (`blur-[5px]` to `blur-0`).
  - Overlay changed to a subtle blue tint (`bg-blue-900/40`) instead of heavy darkness.
  - "Read More" is functional (toggles `Read Less` and `line-clamp`).
  - Used Unsplash images based on card context.

#### 13. `FeaturedSolutions.tsx` (Product Filter)

- **Functionality:** Filterable technology solution grid.
- **Features:**
  - 4 Tabs for filtering: "All Solutions", "SPS Products", "IBM Products", "Other Solutions".
  - Optimized with `useMemo` for filtering logic and `useCallback` for tab switching.
  - "SPS Products" and "IBM Products" tabs show two specific cards each; "Other Solutions" shows three specific cards.
  - `priority` prop added to first image for faster LCP.
  - Buttons have `cursor-pointer`.

#### 14. `ProductsTabs.tsx`

- **Functionality:** Interactive tabs with left buttons and right content card.
- **Features:**
  - Uses `useCallback` and `useMemo` for optimized performance.
  - Left-side buttons have a pill shape and adjust border-radius/padding to match UI.
  - Large gap (`gap-12 lg:gap-20`) between left and right content.
  - "Book An Appointment" button overlays the image (`/images/banners/p2.webp`).
  - Lazy loading applied to images for performance.
  - Team info and arrow button placed at the bottom of the content card.

#### 15. `AutomationDetail.tsx`

- **Functionality:** "IBM Watsonx Orchestrate" detailed section.
- **Features:**
  - Local images (`/images/ibm/ibm.webp` and `/images/ibm/watsonx.webp`) used for the left column.
  - Play Video button opens a modal (`isVideoOpen` state) with an embedded YouTube iframe (no redirects).
  - 8 feature highlights listed in a 2-column grid with arrow icons.
  - Read more button links to `comingsoon.php` with hover effects.

#### 16. `AutomationSolution.tsx`

- **Functionality:** "AI-Powered Business Capabilities" cards section.
- **Features:**
  - Background changed to `bg-blue-100`.
  - Card heights reduced to `h-72`.
  - Dark background (`#0f1f4b`) cards with low-opacity background images (0.3).
  - Icon boxes wrapped in `bg-white/10 backdrop-blur-md` containers.

#### 17. `AutomationIbm.tsx`

- **Functionality:** "Why Choose IBM Automation" section.
- **Features:**
  - Background image taken from `spsnet.com` assets.
  - Two feature cards with rounded corners and `Check` icons in `bg-[#1d4ed8]` circles.
  - Height of right-side image reduced for better UI balance.

#### 18. `AutomationWorkflow.tsx`

- **Functionality:** Tabbed "Build, Run And Manage AI Agents" section.
- **Features:**
  - Uses `useState` to switch between 3 tabs: Multi-Agent, Orchestration Agent, Catalog Agent Builder.
  - Local images (`/images/ibm/agent1.webp`, `agent2.webp`, `agent3.webp`) used with `priority` prop.
  - Background set to `bg-blue-100`.
  - Icons for tabs loaded from `lucide-react` (`Bot`, `Share2`, `Boxes`).
  - All feature lists and "Read more" buttons correctly mapped to the active tab.

#### 19. `ProductPage.tsx` (DetailedMain)

- **Functionality:** Product portfolio page with sidebar navigation and FAQ.
- **Features:**
  - Hero section (Product Portfolio) wrapped in a rounded card with `bg-[#eef2ff]` (visual blue-150) and larger text sizing.
  - "Product Categories" section includes a `Check` icon for every product name.
  - Sidebar contains a static heading "All Products" (non-clickable) and clickable buttons for other links.
  - FAQ section occupies full width above the footer and toggles open/close states.
  - Sidebar uses `sticky top-24` CSS to follow the user down the page while scrolling.

## Styling and Color Scheme

- **Primary Dark Blue (Text/Nav):** `#0f1f4b`
- **Secondary/Active Blue:** `#1d4ed8`
- **Form Panel Blue:** `#6985d3`
- **Backgrounds:** `bg-slate-100`, `bg-blue-100`, `bg-[#eef2ff]`, transparent.
- **Typography:** Bold, heavy fonts for headings (`font-bold`, `font-black`), light fonts for body text (`font-light`).
- **Animations:** `transition-all duration-500` for smooth UI feedback. `requestAnimationFrame` for smooth carousels and auto-zoom.

## Important Notes

- All local images are stored in the `public/images`, `public/images/logos`, and `public/images/ibm` directories.
- External images from `spsnet.com` and `images.unsplash.com` must be configured in `next.config.ts` under `images.remotePatterns`.
- All components are "use client" for interactivity.
- Scrollbars are hidden for the carousels to maintain a clean look.
