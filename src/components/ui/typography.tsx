import { cn } from '@/lib/utils';
import type React from 'react';

type TypographyProps = {
    children: React.ReactNode;
    className?: string;
};

export function TypographyP({ children, className }: TypographyProps) {
    return (
        <p
            className={cn(
                'sm:text-xl text-md leading-relaxed font-inter',
                className
            )}
        >
            {children}
        </p>
    );
}

export function TypographyH1({ children, className }: TypographyProps) {
    return (
        <h1
            className={cn(
                'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
                className
            )}
        >
            {children}
        </h1>
    );
}

export function TypographyH2({ children, className }: TypographyProps) {
    return (
        <h2
            className={cn(
                'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
                className
            )}
        >
            {children}
        </h2>
    );
}

export function TypographyH3({ children, className }: TypographyProps) {
    return (
        <h3
            className={cn(
                'scroll-m-20 text-2xl font-semibold tracking',
                className
            )}
        >
            {children}
        </h3>
    );
}

export function TypographyH4({ children, className }: TypographyProps) {
    return (
        <h4
            className={cn(
                'scroll-m-20 text-xl font-semibold tracking-tight',
                className
            )}
        >
            {children}
        </h4>
    );
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
    return (
        <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
            {children}
        </blockquote>
    );
}

export function TypographyInlineCode({ children, className }: TypographyProps) {
    return (
        <code
            className={cn(
                'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
                className
            )}
        >
            {children}
        </code>
    );
}
