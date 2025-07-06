import { SkillCard, SocialMediaCard } from '@/components/card-app';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { avatarConfig } from '@/config/avatar-config';
import { HomeaboutContent } from '@/config/content-config';
import { socialConfig } from '@/config/social-config';
import { skillsConfig } from '@/config/special-skills-config';

export default function HomeView() {
    return (
        <>
            <main className="flex flex-col gap-4 py-4">
                <header className="px-2 rounded-sm bg-background flex flex-col justify-center items-center border-2 py-10">
                    <Avatar className="size-30">
                        <AvatarImage
                            src={avatarConfig.pathImage}
                            alt={avatarConfig.displayName}
                        />
                        <AvatarFallback>
                            {avatarConfig.avatarFallback}
                        </AvatarFallback>
                    </Avatar>
                    <article className="mt-2 text-center">
                        <h1 className="text-3xl font-bold">
                            {avatarConfig.displayName}
                        </h1>
                        <h4 className="text-primary font-semibold">
                            {avatarConfig.userName}
                        </h4>
                    </article>
                </header>
                <section className="md:p-8 p-4 bg-background rounded-sm border-2 flex flex-col gap-2">
                    <TypographyH3>{HomeaboutContent.title}</TypographyH3>
                    <TypographyP>{HomeaboutContent.content}</TypographyP>
                </section>
                <section className="py-4 bg-background md:px-8 px-4 rounded-sm border-2 flex flex-col gap-4">
                    <TypographyH3>Special Skills</TypographyH3>
                    <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        {skillsConfig.map((i, index) => {
                            return (
                                <SkillCard
                                    key={index}
                                    skillName={i.skillName}
                                    skillStatus={i.skillStatus}
                                    description={i.description}
                                />
                            );
                        })}
                    </ul>
                </section>
                <section className="py-4 md:px-8 px-4 bg-background rounded-sm border-2 flex flex-col gap-4">
                    <TypographyH3>My Social Media</TypographyH3>
                    <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {socialConfig.map((i, index) => {
                            return (
                                <SocialMediaCard
                                    key={index}
                                    socialName={i.socialName}
                                    account={i.account}
                                    description={i.description}
                                    linked={i.linked}
                                />
                            );
                        })}
                    </ul>
                </section>
            </main>
        </>
    );
}
