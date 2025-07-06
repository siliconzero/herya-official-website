import { JSX } from 'react';

export interface IPageConfig {
    name: string;
    href: string;
    element: () => JSX.Element;
    layout: {
        navbar: boolean;
        footer: boolean;
    };
    meta?: {
        metaTitle: string;
        metaDescription: string;
        metaKeywords: string;
    };
}
