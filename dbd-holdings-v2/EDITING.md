# Editing DBD Holdings V2

Edit index.html for text and sections, styles.css for colors and layout, and script.js for navigation. No build step or subscription is needed. Back up the original folder first. Changes to this folder do not update the separate self-contained preview automatically; use this folder's index.html while editing.

## Photos
Replace assets/hero.jpg, automotive.jpg and commerce.jpg while keeping their names, or update the relevant image src attributes. Use your own photos or properly licensed assets. Update descriptive alt text. The architecture image appears in the hero and two division cards with different crops. For distinct property and contracting photography, add assets/property.jpg and assets/commercial.jpg and update those two image paths. Avoid embedding company claims in stock imagery.

## Contact details
Update email and phone links and visible text in index.html. Replace contact.vcf and regenerate assets/contact-qr.png with identical new details. The current vCard QR has the company, email and phone only. Keep the QR black on white with its blank outer margin. Test scanning it with a phone.

## Add a division
Copy an entire article with class="division" in the division-grid. Change the number, name, photo, alt text, description and inquiry link. The grid adjusts automatically. Update the hero's division list and four-division heading when needed.

## Add approved projects or products
Insert a new section immediately before the FUTURE CONTENT comment. Duplicate cards inside the grid as needed:

```html
<section class="section" id="projects">
  <div class="section-head"><div><p class="eyebrow">OUR WORK</p><h2>Selected projects.</h2></div></div>
  <div class="division-grid">
    <article class="division">
      <div class="division-image"><img src="assets/your-project.jpg" alt="Describe the actual project" loading="lazy"></div>
      <div class="division-copy"><h3>Approved project title</h3><p>Accurate description, scope and result.</p></div>
    </article>
  </div>
</section>
```

For before/after work, add two images with descriptive alt text and clear Before and After labels. For products, describe availability accurately and link to an actual storefront or an email inquiry; this static site has no checkout.

## Capability statement and certifications
Place approved PDF files inside assets, then add a link such as:

```html
<a class="button outline" href="assets/capability-statement.pdf" target="_blank" rel="noopener">View capability statement (PDF)</a>
```

Publish certifications and registrations only after verifying the precise legal entity, status and permitted use of any badge. Never imply a government endorsement.

## Testimonials
Insert a section with a blockquote and the approved attribution only after receiving permission from the quoted customer. Do not use invented quotes or stock customer names.

## Checks after every update
Check the page on a phone and computer, keyboard navigation, email and telephone links, QR scan, contact download, all new images and PDFs. Keep licensing wording accurate. Publish only approved business information.
