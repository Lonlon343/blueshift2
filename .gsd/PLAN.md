---
phase: 3
plan: 1
wave: 2
gap_closure: false
---

# Plan 3.1: Content Sections & 3D Visualization

## Objective
Implement the core content sections ("Über uns", "Services", "Warum BlueShift") and the signature "Efficiency Analysis" 3D visualization.

## Context
Load these files for context:
- .gsd/SPEC.md
- .gsd/DECISIONS.md
- src/styles/_variables.scss

## Tasks

<task type="auto">
  <name>Install 3D Dependencies</name>
  <files>
    package.json
  </files>
  <action>
    Install Three.js for the 3D pie chart visualization.

    Steps:
    1. Run `npm install three`
  </action>
  <verify>
    npm list three
  </verify>
  <done>
    Three.js installed
  </done>
</task>

<task type="auto">
  <name>Implement "Über uns" Section</name>
  <files>
    src/components/About.js
    src/styles/main.scss
  </files>
  <action>
    Create the About Us section with "Unsere Haltung" and "Geschäftspartner".
    
    Steps:
    1. Create `src/components/About.js`
    2. Implement layout with glass cards for "Haltung".
    3. Add styles to `src/styles/main.scss` (or component specific).
  </action>
  <verify>
    Check logical existence of component.
  </verify>
  <done>
    About section renders with placeholder text.
  </done>
</task>

<task type="auto">
  <name>Implement Services Section (Grid)</name>
  <files>
    src/components/Services.js
    src/components/ServiceCard.js
  </files>
  <action>
    Create the Services grid.
    
    Steps:
    1. Create data structure for services (Strategy, Efficiency, Sales, etc.).
    2. Create `ServiceCard` component.
    3. Render grid in `Services.js`.
  </action>
  <verify>
    Browser check
  </verify>
  <done>
    Services grid displayed.
  </done>
</task>

<task type="auto">
  <name>Implement 3D Efficiency Chart</name>
  <files>
    src/components/EfficiencyChart.js
  </files>
  <action>
    Create a 3D Pie Chart visualization using Three.js.
    
    Steps:
    1. Initialize Three.js scene.
    2. Create cylinder geometries for pie slices.
    3. Animate on scroll (spin or extrude).
    4. Embed in `Services` section under "Efficiency Analysis".
    
    USE: Simple colored cylinders/extrusions matching brand colors.
  </action>
  <verify>
    Browser check for 3D rendering.
  </verify>
  <done>
    3D Chart visible and rotating/interactive.
  </done>
</task>

<task type="auto">
  <name>Implement "Warum BlueShift" Section</name>
  <files>
    src/components/WhyUs.js
  </files>
  <action>
    Create the "Why Us" value proposition section.
    
    Steps:
    1. Grid of values (Klare Sprache, ROI-Fokus, etc.).
    2. Clean iconography or typography-based design.
  </action>
  <verify>
    Browser check
  </verify>
  <done>
    Values section displayed.
  </done>
</task>

<task type="auto">
  <name>Assemble Phase 3</name>
  <files>
    src/main.js
  </files>
  <action>
    Import and mount all new sections in `main.js`.
  </action>
  <verify>
    Build and visual check.
  </verify>
  <done>
    All sections visible on page.
  </done>
</task>

## Must-Haves
After all tasks complete, verify:
- [ ] 3D Chart renders without webgl errors.
- [ ] Responsiveness (Grid stacks on mobile).
- [ ] Scroll performance maintained.

## Success Criteria
- [ ] All sections content populated.
- [ ] 3D element adds "Wow" factor.
