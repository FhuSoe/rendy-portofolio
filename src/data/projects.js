// src/data/projects.js
// Each project belongs to the fin.co.id media group umbrella.
// tagVariant drives the CSS color class (tag-fin, tag-news, tag-regional, tag-brand)

export const projects = [
    {
        id: 'fin',
        tag: 'Flagship',
        tagVariant: 'fin',
        name: 'fin.co.id',
        description: 
        "News holding portal for Fajar Indonesia Network " +
        "Spanning 15 provinces, launched by VP at the time Jusuf Kalla. Built a full Google Indexing API " +
        "system (6-file integration) for instant search visibility, plus jatim.fin.co.id " +
        "East Java regional domain.",
        pills: ['PHP', 'CodeIgniter', 'AMP']
    },
    {
        id: 'finnews',
        tag: 'Multi-vertical news',
        tagVariant: 'news',
        name: 'finnews.id',
        description: 
        'General news portal covering 7 content verticals. Engineered a' +
        '7-Category footer system - Entertaiment, Gadget, Lifestyle, Manage, ' + 
        'Sports, Tekno, News, - Each with AMP & standards version.',
        pills: ['PHP', 'AMP', '7 Verticals','14 Footers template' ] 
    },
    {
        id: 'radarpena',
        tag: 'Regional · Analytics',
        tagVariant: 'regional',
        name: 'radarpena.co.id',
        description: 
        'Regional news platform under FIN media Group. Rebuilt a 3-tier XML sitemap ' +
        'architecture (Web, News, Induk), recovered indexing from 0 - 1700+ URLs,' +
        'and integrated GA4 analytics tracked Oct-Dec 2025.',
        pills: ['PHP', 'XML Sitemap', 'GA4', 'SEO', 'Sitemap Revamp'],
    },
    {
        id: 'compro',
        tag: 'Brand · Company Profile',
        tagVariant: 'brand',
        name: 'Company Profile',
        description: 
        'Corporate Profile website for the media group. Showcases major enterprise ' +
        'clients: Pertamina, BRI, Mandiri, CIMB, Bank Banten, BTN, and government partners',
        pills: ['HTML', 'CSS', 'JavaScript', 'Corporate']
    },
]