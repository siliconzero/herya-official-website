import { TypographyP } from '@/components/ui/typography';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useSendForm } from '@/hooks/use-send-form';
import { sendMeDescriptionContent } from '@/config/content-config';
import { QrGenerator } from '@/components/qr-generator';

export default function SendMeView() {
    const { form, handleSend, error, loading } = useSendForm();
    if (error) console.log(error);
    return (
        <>
            <main className="flex flex-col items-center justify-center gap-4 py-4">
                <section className="py-4 px-4 bg-background font-inter rounded-sm border-2 flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">
                        {sendMeDescriptionContent.title}
                    </h1>
                    <TypographyP>
                        {sendMeDescriptionContent.content}
                    </TypographyP>
                </section>
                <section className="py-4 px-4 bg-card rounded-sm border-2 flex flex-col gap-4">
                    <form
                        className="space-y-6"
                        onSubmit={form.handleSubmit(handleSend)}
                    >
                        <div className="space-y-2">
                            <Label
                                htmlFor="username"
                                className="text-sm font-medium opacity-80"
                            >
                                To: Username
                            </Label>
                            <Input
                                id="username"
                                className="h-16 rounded-sm border-primary font-semibold"
                                type="text"
                                placeholder="Enter username"
                                required
                                {...form.register('username')}
                            />
                            <p className="text-red-400 font-semibold text-sm px-2">
                                {form.formState.errors.username?.message}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="message"
                                className="text-sm font-medium opacity-80"
                            >
                                Your Message
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Type your anonymous message here..."
                                className="min-h-[120px] rounded-sm resize-none py-4 font-inter font-semibold  border-primary"
                                required
                                {...form.register('message')}
                            />
                            <div className="flex flex-row gap-2">
                                <p className="text-xs opacity-50 mt-1">
                                    1/500 characters
                                </p>
                                <p className="text-red-400 text-sm font-semibold px-2">
                                    {form.formState.errors.message?.message}
                                </p>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 bg-gradient-to-r bg-primary text-primary-foreground font-medium transition-all duration-200 disabled:opacity-50"
                            disabled={
                                Object.keys(form.formState.errors).length > 0
                            }
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </div>
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 p-4 bg-card rounded-lg">
                        <p className="text-xs text-card-foreground text-center">
                            Your message will be sent anonymously. The recipient
                            won't know who sent it.
                        </p>
                    </div>
                </section>
                <section className="py-4 px-4 bg-background font-inter rounded-sm border-2 flex flex-col items-center justify-center gap-4">
                    <h1 className="text-xl font-bold">
                        Bagikan sendme ke teman teman anda!
                    </h1>
                    <a href="https://herya.netlify.app/sendme">
                        <QrGenerator value="https://herya.netlify.app/sendme" />
                    </a>
                </section>
            </main>
        </>
    );
}
