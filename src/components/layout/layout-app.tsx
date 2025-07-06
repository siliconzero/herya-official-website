import React from 'react';
import { NavbarApp } from './navbar-app';
import { FooterApp } from './footer-app';
import { GridFrame } from '../custom-bg';
import { Toaster } from '../ui/sonner';

export function LayoutApp({
    children,
    navbar,
    footer,
}: {
    children: React.ReactNode;
    navbar: boolean;
    footer: boolean;
    meta?: {
        metaTitle: string;
        metaDescription: string;
        metaKeywords: string;
    };
}) {
    return (
        <>
            <GridFrame>
                <div className="max-w-5xl mx-auto selection:bg-foreground selection:text-background">
                    <Toaster />
                    {navbar && <NavbarApp />}
                    <div className="px-2">{children}</div>
                    {footer && <FooterApp />}
                </div>
            </GridFrame>
        </>
    );
}
