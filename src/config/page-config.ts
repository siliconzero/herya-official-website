import { IPageConfig } from '@/interfaces/page-config-interface';
import GearView from '@/pages/gear-view';
import HomeView from '@/pages/home-view';
import SendMeView from '@/pages/sendme-view';
import {
    gearDescriptionContent,
    sendMeDescriptionContent,
} from './content-config';

export const pageConfig: IPageConfig[] = [
    {
        name: 'Home',
        href: '/',
        element: HomeView,
        layout: {
            navbar: true,
            footer: true,
        },
        meta: {
            metaTitle: 'Herya Web | Home',
            metaDescription: 'Selamat datang di Herya Web.',
            metaKeywords: 'home, beranda, herya, web, welcome',
        },
    },
    {
        name: 'Gear',
        href: '/gear',
        element: GearView,
        layout: {
            navbar: true,
            footer: true,
        },
        meta: {
            metaTitle: 'Herya Web | Gear',
            metaDescription: gearDescriptionContent.content,
            metaKeywords:
                'gear, tools, laptop, komputer, perangkat, hardware, aksesoris, teknologi, perlengkapan kerja, device, mouse, keyboard, monitor, setup, workstation, books, novel, ideologi',
        },
    },
    {
        name: 'Sendme',
        href: '/sendme',
        element: SendMeView,
        layout: {
            navbar: true,
            footer: true,
        },
        meta: {
            metaTitle: 'Herya Web | Send me a message',
            metaDescription: sendMeDescriptionContent.content,
            metaKeywords:
                'send message, anonymous, kirim pesan, pesan anonim, ngl, ask, feedback, kritik, saran, pesan rahasia, tanya jawab, komunikasi, pesan tanpa nama',
        },
    },
];
