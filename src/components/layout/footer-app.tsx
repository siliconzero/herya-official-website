import { Github, Mail } from 'lucide-react';

export function FooterApp() {
    return (
        <footer className="border-2 bg-card">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    {/* Logo & Brand */}
                    <div className="flex items-center space-x-2">
                        <span className="font-bold text-2xl">Herya Web</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-center">
                        <p className="text-sm text-primary">
                            © {new Date().getFullYear()}. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/siliconzero"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                        <a
                            href="mailto:anonymn235@gmail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
