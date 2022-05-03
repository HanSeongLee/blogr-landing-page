import React, {HTMLAttributes, ReactNode} from 'react';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    render: (name: string, children: {name: string, href: string}[]) => ReactNode;
};

const sitemap = [
    {
        name: 'Product',
        children: [
            {
                name: 'Overview',
                href: '#',
            },
            {
                name: 'Pricing',
                href: '#',
            },
            {
                name: 'Marketplace',
                href: '#',
            },
            {
                name: 'Features',
                href: '#',
            },
            {
                name: 'Integrations',
                href: '#',
            },
        ],
    },
    {
        name: 'Company',
        children: [
            {
                name: 'About',
                href: '#',
            },
            {
                name: 'Team',
                href: '#',
            },
            {
                name: 'Blog',
                href: '#',
            },
            {
                name: 'Careers',
                href: '#',
            },
        ],
    },
    {
        name: 'Connect',
        children: [
            {
                name: 'Contact',
                href: '#',
            },
            {
                name: 'Newsletter',
                href: '#',
            },
            {
                name: 'LinkedIn',
                href: '#',
            },
        ],
    },
];

const SitemapContainer: React.FC<IProps> = ({ render, ...props }) => {
    return (
        <ul {...props}>
            {sitemap?.map(({name, children}, index) => (
                <li key={index}>
                    {render(name, children)}
                </li>
            ))}
        </ul>
    );
};

export default SitemapContainer;
