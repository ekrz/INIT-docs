/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
//   {
//     caption: 'User1',
//     // You will need to prepend the image path with your baseUrl
//     // if it is not '/', like: '/test-site/img/docusaurus.svg'.
//     image: '/img/docusaurus.svg',
//     infoLink: 'https://www.facebook.com',
//     pinned: true,
//   },
];

const siteConfig = {
  title: 'INIT', // Title for your website.
  tagline: 'The Boostrap 4 quickstarter.',
  url: 'https://github.com/ekrz/INIT-docs', // Your website URL
  baseUrl: '/', // Base URL for your project */


  // Used for publishing and more
  projectName: 'init-docs',
  organizationName: 'granite',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started/quick-start', label: 'Getting Started'},
    {blog: false, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo-init-bare.svg',
  footerIcon: 'img/logo-init.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#FF1744',
    secondaryColor: '#191919',
  },


  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} INIT`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,
};

module.exports = siteConfig;
