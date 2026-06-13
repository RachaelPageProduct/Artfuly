---
title: "Responsive Design Explained on a live webpage & video tutorial"
slug: "responsive-design-explained"
date: "2024-01-29"
description: "As a product, UX or web designer, it's important for you to know this tricky concept"
introHeading: "As a product, UX or web designer, it's important for you to know this tricky concept"
heroImage: "/images/webflow-cdn/responsive-design-hero.png"
thumbnailImage: "/images/webflow-cdn/responsive-design-thumb.png"
published: true
featured: true
featuredPortfolio: false
ctaText: "Learn more with my design courses"
ctaLink: "https://artfuly.thinkific.com/collections"
titleTag: "Responsive Design Explained"
metaDescription: "Responsive design is a tricky concept, but it's essential that you understand how to create designs in figma so that they can be built responsively. This quick video aims to get over the essentials of the concept quickly, and also how to structure your designs in figma"
---

<style>
.resp-note {
  background: #f3f0f0;
  border-left: 4px solid #048ba2;
  padding: 12px 16px;
  margin-bottom: 24px;
  font-size: 0.95em;
}
.resp-boxes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0 8px;
}
.resp-box {
  flex: 0 0 calc(20% - 7px);
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  border-radius: 8px;
  box-sizing: border-box;
}
.resp-box-1 { background: #048ba2; }
.resp-box-2 { background: #ee7c7b; }
.resp-box-3 { background: #9b59b6; }
.resp-box-4 { background: #f39c12; }
.resp-box-5 { background: #27ae60; }
/* Desktop: 4 + 1 */
@media (max-width: 1279px) {
  .resp-box { flex: 0 0 calc(25% - 7px); }
  .resp-box-5 { flex: 0 0 100%; }
}
/* Tablet: 3 + 2 */
@media (max-width: 939px) {
  .resp-box { flex: 0 0 calc(33.333% - 6px); }
  .resp-box-5 { flex: 0 0 calc(33.333% - 6px); }
}
/* Landscape mobile: 2 + 2 + 1 */
@media (max-width: 639px) {
  .resp-box { flex: 0 0 calc(50% - 5px); }
  .resp-box-5 { flex: 0 0 100%; }
}
/* Mobile: all vertical */
@media (max-width: 479px) {
  .resp-box, .resp-box-5 { flex: 0 0 100%; }
}
.resp-label {
  margin: 0 0 24px;
  font-size: 0.9em;
  color: #666;
  text-align: center;
}
.resp-video {
  position: relative;
  padding-top: 56.25%;
  margin: 32px 0;
}
.resp-video iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: none;
  border-radius: 8px;
}
</style>

<p class="resp-note">⬅️ <strong>On a desktop or laptop:</strong> grab the right edge of your browser window and drag it narrower — watch the boxes reflow as the screen width changes.</p>

<div class="resp-boxes">
  <div class="resp-box resp-box-1">1</div>
  <div class="resp-box resp-box-2">2</div>
  <div class="resp-box resp-box-3">3</div>
  <div class="resp-box resp-box-4">4</div>
  <div class="resp-box resp-box-5">5</div>
</div>
<p class="resp-label">Drag your browser narrower to see the blocks reflow ↑</p>

<div class="resp-video">
  <iframe src="https://www.youtube.com/embed/Ix22NGd2DzM" title="Responsive Design Explained" allowfullscreen></iframe>
</div>

<p>This shows you how content reflows inside a grid from top to bottom and from right to left. Content on the far right gets pushed underneath and to the left when the screen gets slimmer.</p>

<p><strong>How the layout changes at each screen width:</strong></p>
<p>
1280px and above (wide desktop):<br/>
<code>1 2 3 4 5</code>
</p>
<p>
Desktop (940–1279px):<br/>
<code>1 2 3 4</code><br/>
<code>5</code>
</p>
<p>
Tablet (640–939px):<br/>
<code>1 2 3</code><br/>
<code>4 5</code>
</p>
<p>
Landscape mobile (480–639px):<br/>
<code>1 2</code><br/>
<code>3 4</code><br/>
<code>5</code>
</p>
<p>
Mobile portrait:<br/>
<code>1</code><br/>
<code>2</code><br/>
<code>3</code><br/>
<code>4</code><br/>
<code>5</code>
</p>

<p>Notice how box 4 drops down underneath box 1 when moving from desktop to tablet width. The content always reflows right-to-left, top-to-bottom.</p>

<p>Grab your phone and visit <strong>artfuly.com/design-resources/responsive-design-explained</strong> to see the mobile layout for yourself.</p>

<p><a href="https://www.youtube.com/watch?v=dwxtjbYNF_8" target="_blank">This video shows how a fluid grid reflows from desktop to tablet to mobile</a> — <strong>watch from 4 to 6 minutes only.</strong></p>

<p>And here's a great tool to see responsive design in action: <a href="https://fireship.dev/amiresponsive?url=https://rachaelpage.com" target="_blank"><strong>Am I Responsive?</strong></a> — it shows how any website looks simultaneously on desktop, laptop, tablet, and phone in one view. Just scroll down to enter the website you want to view (I've used my own folio as the example here).</p>

<p><strong>Hopefully you now have a basic idea of how content reflows for different screen sizes, which will help you think through your designs in Figma.</strong></p>
