import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { BadgeCheck, BookOpen, ShoppingCart } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { QrGenerator } from './qr-generator';

export function SkillCard(props: {
    skillName: string;
    skillStatus: string;
    description: string;
}) {
    return (
        <Card className="rounded-sm">
            <CardHeader>
                <CardTitle className="text-xl flex flex-row gap-2">
                    {props.skillName}
                    <BadgeCheck className="text-primary md:block hidden" />
                </CardTitle>
                <CardDescription className="text-primary font-semibold">
                    {props.skillStatus}
                </CardDescription>
                <CardAction>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="secondary">More</Button>
                        </SheetTrigger>
                        <SheetContent className="bg-card">
                            <SheetHeader>
                                <SheetDescription className="font-semibold opacity-50">
                                    {props.skillStatus}
                                </SheetDescription>
                                <SheetTitle className="md:text-2xl text-xl">
                                    {props.skillName}
                                </SheetTitle>
                                <SheetDescription className="md:text-xl leading-relaxed tracking-wide">
                                    {props.description}
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </CardAction>
            </CardHeader>
            <CardContent>
                <span className="line-clamp-2">{props.description}</span>
            </CardContent>
        </Card>
    );
}

export function SocialMediaCard(props: {
    socialName: string;
    description: string;
    account: string;
    linked: string;
}) {
    return (
        <Card className="rounded-sm">
            <CardHeader>
                <CardTitle className="flex flex-row gap-2 text-xl">
                    {props.socialName}
                </CardTitle>
                <CardDescription className="opacity-50">
                    {props.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                            Click Here
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card">
                        <DialogHeader>
                            <DialogTitle>{props.socialName} Acount</DialogTitle>
                            <DialogDescription className="flex flex-col my-4 items-center">
                                <a href={props.linked}>
                                    <QrGenerator value={props.linked} />
                                </a>
                                <a
                                    href={props.linked}
                                    className="font-semibold mt-4 text-primary"
                                >
                                    {props.account}
                                </a>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}

export function GearProductCard(props: {
    brand: string;
    name: string;
    description: string;
    image: string;
    shopLink: string;
    type: string;
}) {
    return (
        <Card className="rounded-sm pt-0 pb-6 border-2">
            <img
                src={props.image}
                alt={`${props.brand} ${props.name}`}
                className="object-cover h-80 rounded-t-sm border-b-2"
            />
            <CardHeader>
                <CardTitle className="text-sm font-semibold text-primary">
                    {props.brand}
                </CardTitle>
                <CardTitle className="text-2xl">{props.name}</CardTitle>
                <CardTitle className="opacity-50 text-lg">
                    {props.type}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">
                                <BookOpen className="w-4 h-4" /> Information
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="bg-card scroll-">
                            <SheetHeader>
                                <SheetTitle className="opacity-50 text-sm">
                                    {props.brand}
                                </SheetTitle>
                                <SheetTitle className="text-2xl">
                                    {props.name}
                                </SheetTitle>
                                <SheetTitle className="opacity-50 text-primary">
                                    Type {props.type}
                                </SheetTitle>
                                <SheetDescription className="md:text-xl leading-relaxed tracking-wide">
                                    {props.description}
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="default">
                                <ShoppingCart className="w-4 h-4" /> Buy now
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-card">
                            <DialogHeader>
                                <DialogTitle>Tokopedia</DialogTitle>
                                <DialogDescription className="flex flex-col items-center justify-center">
                                    <a href={props.shopLink}>
                                        <QrGenerator value={props.shopLink} />
                                    </a>
                                    <a
                                        href={props.shopLink}
                                        className="text-primary underline font-semibold"
                                    >
                                        Buy {props.brand} {props.name} in this
                                        link
                                    </a>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardContent>
        </Card>
    );
}
