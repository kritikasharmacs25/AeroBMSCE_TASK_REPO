# AeroBMSCE Club Website

This is my version of the AeroBMSCE club website. I fixed the broken parts of the original and redesigned it with a dark space theme.





## 1. Flaws of the original website

These are the things I noticed first:

- **The Contact page gave a 404 error.** The link was there, but the page itself didn't exist.
- **The navigation was inconsistent.** The home page had all the options (Who we are, Journey, Partners and Contact), but when I opened any other page, one or two of them disappeared. A user should be able to reach every page from any page.
- **The design looked plain and different on every page.** The website had no space theme at all. It was only red and yellow, which looked very basic and bland. The logo was also a bit shrunk, which hid how good it looks.
- **The pictures on the home page were oversized.** They took up a lot of space and didn't look appealing. None of them had `alt` text either, so nothing was shown while they were loading.

## 2. My design route and UI/UX decisions

The club is about aircraft and drones, so I wanted the site to feel like space and flight. I kept the same look on every page so it feels like one website.

- **Background:** I used one space image behind the whole page and lowered its opacity so the text is easy to read.
- **Header:** It's a dark, frosted bar with white links. The eagle logo is on the left with "AEROBMSCE" and our tagline *Above Gravity, Beyond Limits* next to it. I wrote the text in HTML instead of putting it inside the image, so it stays sharp on every screen. I also added a soft glow around the edges of the logo so it stands out.
- **Fonts:** I used Chakra Petch for the big headings because it looks techy, and Poppins for the brand name and normal text so the two fonts look different from each other.
- **Navigation:** The "Who we are" link now scrolls to the cards section on the home page.
- **Contact page:** There are four member cards. Each one has a designation and a small line about an aircraft part, like the head being the main engine and the executive head being the left wing. I did this to connect the team to the aerospace theme. This is one of my favourite creative touches. You might not notice it at first, but it shows the care I put into the site.
- **Journey page:** The slideshow is inside one rounded box with a glowing blue outline. I showed the milestones as [write how, like a timeline] so the page looks clean and not too busy.
- **Partners page:** I gave it the same style as the Journey page so the site looks consistent.

## 3. A problem I faced while building

**Problem:** The "Who we are" link in the menu worked on the home page, but it did nothing on the Journey and Partners pages.

**How I found it:** I had used `href="#who"` for the link. On the home page it scrolled to the section properly, so I thought it was fine. But when I clicked "Who we are" from the Journey page and the Partners page, nothing happened.

**What I did:**
1. I understood that `#who` only looks for the `who` section on the page you are already on. The Journey and Partners pages don't have that section, so the link had nowhere to go.
2. On those pages I changed the link to `index.html#who`, so it first opens the home page and then scrolls to the section.
3. I tested the link from every page (Home, Journey, Partners and Contact) to make sure it works everywhere.

---

## How to run it on your computer

Download or clone this repo and open `index.html` in your browser. You don't need to install anything.