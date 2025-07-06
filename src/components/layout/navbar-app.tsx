import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';
import { pageConfig } from '@/config/page-config';

export function NavbarApp() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = useLocation().pathname;
    return (
        <nav className="sticky border-b-2 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <div className="items-center py-3 px-2 border-x-2 bg-card space-x-1 md:flex hidden">
                    <a href="/" className="text-xl font-bold font-inter">
                        Herya Web
                    </a>
                </div>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden bg-card py-2 px-2 md:flex border-x-2">
                    <NavigationMenuList>
                        {pageConfig.map((i, index) => {
                            return (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href={i.href}
                                            className={`${
                                                i.href === pathname
                                                    ? 'opacity-100 text-primary'
                                                    : 'opacity-50'
                                            } font-semibold`}
                                        >
                                            {i.name}
                                        </a>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Desktop CTA Button */}
                <div className="hidden border-x-2 bg-card px-2 py-2 md:flex items-center space-x-4">
                    <ThemeToggle className="w-30" />
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <a
                        href="/"
                        className="items-center py-2 px-2 space-x-1 md:hidden flex"
                    >
                        <span className="text-xl font-inter font-bold">
                            Herya Web
                        </span>
                    </a>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="md:hidden my-2 rounded-xs mx-2"
                            size="icon"
                            aria-label="Toggle menu"
                        >
                            <AlignJustify size={28} strokeWidth={2.5} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[300px] sm:w-[400px] px-2"
                    >
                        <SheetHeader className="border-b-2">
                            <SheetTitle className="text-xl font-bold">
                                Herya Web
                            </SheetTitle>
                            <SheetDescription>
                                Herya official main website
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 px-2">
                            {pageConfig.map((item) => (
                                <a
                                    href={item.href}
                                    className={`${
                                        item.href === pathname
                                            ? 'opacity-100 text-primary'
                                            : 'opacity-50'
                                    } font-semibold`}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="border-t pt-4 mt-4">
                                <div className="flex flex-col gap-2">
                                    <ThemeToggle className="w-full" />
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
