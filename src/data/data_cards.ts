import domahubImage from "../../public/images/domahub.webp";
import domahubImage320 from "../../public/images/domahub-320.webp";
import domahubImage640 from "../../public/images/domahub-640.webp";
import domahubImage1024 from "../../public/images/domahub-1024.webp";

import notesmithImage from "../../public/images/notesmith.webp";
import notesmithImage320 from "../../public/images/notesmith-320.webp";
import notesmithImage640 from "../../public/images/notesmith-640.webp";
import notesmithImage1024 from "../../public/images/notesmith-1024.webp";

import officehoursImage from "../../public/images/officehours.webp";
import officehoursImage320 from "../../public/images/officehours-320.webp";
import officehoursImage640 from "../../public/images/officehours-640.webp";
import officehoursImage1024 from "../../public/images/officehours-1024.webp";

import sqncesImage from "../../public/images/sqnces.webp";
import sqncesImage320 from "../../public/images/sqnces-320.webp";
import sqncesImage640 from "../../public/images/sqnces-640.webp";
import sqncesImage1024 from "../../public/images/sqnces-1024.webp";

import unicorngraphicsImage from "../../public/images/unicorngraphics.webp";
import unicorngraphicsImage320 from "../../public/images/unicorngraphics-320.webp";
import unicorngraphicsImage640 from "../../public/images/unicorngraphics-640.webp";
import unicorngraphicsImage1024 from "../../public/images/unicorngraphics-1024.webp";

import unicornlineImage from "../../public/images/unicornline.webp";
import unicornlineImage320 from "../../public/images/unicornline-320.webp";
import unicornlineImage640 from "../../public/images/unicornline-640.webp";
import unicornlineImage1024 from "../../public/images/unicornline-1024.webp";

import spatialprintsImage from "../../public/images/spatialprints.webp";
import spatialprintsImage320 from "../../public/images/spatialprints-320.webp";
import spatialprintsImage640 from "../../public/images/spatialprints-640.webp";
import spatialprintsImage1024 from "../../public/images/spatialprints-1024.webp";

export const CARDS_DATA = [
  {
    title: "sqnces",
    alt: "Gameplay for sqnces, a daily word game where you use a 3-letter sequence to uncover the hidden word.",
    src: sqncesImage.src,
    srcSet: `${sqncesImage320.src} 320w, ${sqncesImage640.src} 640w, ${sqncesImage1024.src} 1024w`,
    tags: [
      "UX / UI Design",
      "Web Development",
      "Game Design"
    ],
    badge: "Creator",
    slug: "sqnces"
  },
  {
    title: "Notesmith",
    alt: "E-commerce website for Notesmith, a custom notebook company.",
    src: notesmithImage.src,
    srcSet: `${notesmithImage320.src} 320w, ${notesmithImage640.src} 640w, ${notesmithImage1024.src} 1024w`,
    tags: [
      "UX / UI Design",
      "Web Development",
      "Branding",
      "Product Design"
    ],
    badge: "Creator",
    slug: "notesmith"
  },
  {
    title: "DomaHub",
    alt: "Landing page for DomaHub, a domain name portfolio management tool.",
    src: domahubImage.src,
    srcSet: `${domahubImage320.src} 320w, ${domahubImage640.src} 640w, ${domahubImage1024.src} 1024w`,
    tags: [
      "UX / UI Design",
      "Web Development",
      "Branding",
    ],
    badge: "Co-founder",
    slug: "domahub"
  },
  {
    title: "Unicorn Graphics",
    alt: "Marketing website for Unicorn Graphics, a commercial printing company.",
    src: unicorngraphicsImage.src,
    srcSet: `${unicorngraphicsImage320.src} 320w, ${unicorngraphicsImage640.src} 640w, ${unicorngraphicsImage1024.src} 1024w`,
    tags: [
      "UX / UI Design",
      "Web Development",
      "Branding",
    ],
    badge: "Developer",
    slug: "unicorn-graphics"
  },
  {
    title: "Office Hours",
    alt: "Landing page for Office Hours, a knowledge sharing app.",
    src: officehoursImage.src,
    srcSet: `${officehoursImage320.src} 320w, ${officehoursImage640.src} 640w, ${officehoursImage1024.src} 1024w`,
    tags: [
      "UX / UI Design",
      "Web Development",
      "Branding",
    ],
    badge: "Developer",
    slug: "office-hours"
  },
  {
    title: "Unicorn Line",
    alt: "Online catalog for Unicorn Line, a set of products offered by a printing company.",
    src: unicornlineImage.src,
    srcSet: `${unicornlineImage320.src} 320w, ${unicornlineImage640.src} 640w, ${unicornlineImage1024.src} 1024w`,
    tags: [
      "UX / UI Design",
      "Web Development",
    ],
    badge: "Developer",
    slug: "unicorn-line"
  },
  {
    title: "Spatial Prints",
    alt: "Marketing page for Spatial Prints, a custom printed artwork manufacturer.",
    src: spatialprintsImage.src,
    srcSet: `${spatialprintsImage320.src} 320w, ${spatialprintsImage640.src} 640w, ${spatialprintsImage1024.src} 1024w`,
    tags: [
      "UX / UI Design",
      "Web Development",
    ],
    badge: "Developer",
    slug: "spatial-prints"
  },
];

export const CARD_WIDTH = 320;
export const BLURGRADIENT_WIDTH = 64;