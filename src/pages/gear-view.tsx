import { GearProductCard } from '@/components/card-app';
import { TypographyH2, TypographyP } from '@/components/ui/typography';
import { gearDescriptionContent } from '@/config/content-config';
import { gearConfig } from '@/config/gear-config';

export default function GearView() {
    return (
        <>
            <main className="flex flex-col gap-4 py-4">
                <section className="p-8 bg-background rounded-sm border-2 flex flex-col gap-2">
                    <TypographyH2>{gearDescriptionContent.title}</TypographyH2>
                    <TypographyP>{gearDescriptionContent.content}</TypographyP>
                </section>
                <section className="p-4  bg-background rounded-sm border-2 flex flex-col gap-2">
                    <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {gearConfig.map((item, index) => {
                            return (
                                <GearProductCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    brand={item.brand}
                                    shopLink={item.shopLink}
                                    description={item.description}
                                    type={item.type}
                                />
                            );
                        })}
                    </ul>
                </section>
            </main>
        </>
    );
}
