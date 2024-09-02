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
          text: 'Extraterrestrial Secrets',
          href: getPermalink('/library/extraterrestrial-secrets'),
        },
        {
          text: 'Eternal Communication',
          href: getPermalink('/library/eternal-communication'),
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
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Team', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://bookria.co"> Bookria</a> · All rights reserved.
  `,
};
