import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"


const socialLinks = [
    { icon: FaGithub, href: "https://github.com/hensomxxxpipel", label:"Github"},
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/rachmat-adriansyah-909464217/", label:"LinkedIn"},
    { icon: SiInstagram, href: "https://www.instagram.com/halo_bangg_/", label: "Instagram"}
]

const footerLinks = [
    { href: "#about", label: "About"},
    { href: "#projects", label: "Projects"},
    { href: "#experience", label: "Experience"},
    { href: "#contact", label: "Contact"},
]

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo & Copyright */}
                <div className="text-center md:text-left">
                    <a href="#" className="text-xl font-bold tracking-tight">
                        RA<span className="text-primary">.</span>
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      © {currentYear} Rachmat Adriansyah. All rights reserved.  
                    </p>
                </div>

                {/* Links */}
                <nav className="flex flex-wrap justify-center gap-6">
                    {footerLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                        <a
                            href={social.href}
                            key={social.label}
                            aria-label={social.label}
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}
