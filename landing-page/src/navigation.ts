import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Banned Books',
      links: [
        {
          text: 'Magnetic Aura',
          href: getPermalink('/library/magnetic-aura'),
        },
        {
          text: 'Mastering Fate',
          href: getPermalink('/library/mastering-fate'),
        },
        {
          text: 'Bridging Afterlife',
          href: getPermalink('/library/bridging-afterlife'),
        },
        {
          text: 'Anunnaki Unveiled',
          href: getPermalink('/library/anunnaki-unveiled'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Magnetic Aura', href: '/library/magnetic-aura' },
        { text: 'Mastering Fate', href: '/library/mastering-fate' },
        { text: 'Bridging Afterlife', href: '/library/bridging-afterlife' },
        { text: 'Anunnaki Unveiled', href: '/library/anunnaki-unveiled' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  footNote: `
    
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://bookria.co"> Bookria</a> · All rights reserved.
  `,
};
