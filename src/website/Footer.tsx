
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Extended Social Links for Footer
const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/H3m0rv1ch1' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mo-alghanam/' },
    { name: 'Email', icon: Mail, url: 'mailto:mohamed.atef.23@gmail.com' },
];

interface FooterProps {
    onNavigate: (view: 'HOME' | 'PRIVACY' | 'TERMS') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const navItems = [
        { id: 'home', label: t('nav_home'), path: '/website' },
        { id: 'about', label: t('nav_about'), path: '/website/about' },
        { id: 'projects', label: t('nav_projects'), path: '/website/projects' },
        { id: 'services', label: t('nav_services'), path: '/website/services' },
        { id: 'certificates', label: t('nav_certificates'), path: '/website/certificates' },
        { id: 'contact', label: t('nav_contact'), path: '/website/contact' }
    ];

    return (
        <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] relative z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 py-12 lg:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4 col-span-1 lg:col-span-1">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse text-[var(--text-primary)] mb-2">
                            <div className="p-1.5 bg-blue-500/10 rounded border border-blue-500/20">
                                <Code2 className="w-6 h-6 text-blue-500" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">ME</span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                            {t('footer_desc')}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-6 text-sm uppercase tracking-wider">{t('footer_nav')}</h4>
                        <ul className="space-y-3 text-sm">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a 
                                        href={item.path} 
                                        className="text-[var(--text-secondary)] hover:text-blue-500 transition-colors duration-200 flex items-center group"
                                        onClick={(e) => { e.preventDefault(); navigate(item.path); }}
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-blue-500 mr-0 rtl:mr-0 rtl:ml-0 group-hover:mr-2 rtl:group-hover:mr-0 rtl:group-hover:ml-2 transition-all duration-300"></span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (Quick Links) */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-6 text-sm uppercase tracking-wider">{t('footer_expertise')}</h4>
                        <ul className="space-y-3 text-sm">
                            {['Web Development', 'UI/UX Design', 'React Applications', 'WordPress Solutions', 'IT Consultation'].map((item) => (
                                <li key={item} className="text-[var(--text-secondary)] cursor-default hover:text-[var(--text-primary)] transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Socials */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-6 text-sm uppercase tracking-wider">{t('footer_connect')}</h4>
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map(({ name, icon: Icon, url }) => (
                                <a 
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                                    aria-label={name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                            <p className="text-xs text-[var(--text-secondary)] mb-1">Status</p>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-sm font-medium text-blue-500">{t('footer_status')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--text-tertiary)] text-xs">
                        &copy; {currentYear} Mohammed Alghanam. {t('footer_rights')}
                    </p>
                    <div className="flex items-center gap-6 text-xs text-[var(--text-tertiary)]">
                        <span className="flex items-center gap-1">
                            Designed & Built by <span className="text-blue-500 font-semibold">Mohammed Alghanam</span>
                        </span>
                        <span className="hidden md:inline text-[var(--border-color)]">|</span>
                        <button onClick={() => navigate('/website/privacy')} className="hover:text-[var(--text-primary)] transition-colors">{t('footer_privacy')}</button>
                        <button onClick={() => navigate('/website/terms')} className="hover:text-[var(--text-primary)] transition-colors">{t('footer_terms')}</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
