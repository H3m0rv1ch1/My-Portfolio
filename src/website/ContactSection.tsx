
import React from 'react';
import Section from './Section';
import { useLanguage } from '../LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/H3m0rv1ch1' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mo-alghanam/' },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="contact" title={t('contact_title')}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-6 md:p-12 relative overflow-hidden reveal-scale">
           {/* Decorative gradient background glow */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
           <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-normal"></div>

            <div className="relative z-10 flex flex-col items-center space-y-8">
                <div className="space-y-4 max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] reveal-blur">
                        {t('contact_cta_title')} <span className="text-blue-500">!</span>
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg reveal-blur" style={{ transitionDelay: '0.1s' }}>
                        {t('contact_cta_desc')}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center py-4 md:py-6 reveal-slide-up" style={{ transitionDelay: '0.2s' }}>
                    <a 
                        href="mailto:mohamed.atef.23@gmail.com" 
                        className="flex items-center justify-center gap-3 px-6 md:px-8 py-4 rounded-xl bg-[var(--bg-tertiary)] hover:bg-blue-500/10 border border-[var(--border-color)] hover:border-blue-500/50 transition-all group w-full sm:w-auto min-w-[200px]"
                    >
                        <Mail className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
                        <span className="text-[var(--text-primary)] font-bold text-lg">{t('contact_email_btn')}</span>
                    </a>

                     <a 
                        href="https://wa.me/201102630585?text=Hello%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 md:px-8 py-4 rounded-xl bg-[var(--bg-tertiary)] hover:bg-blue-500/10 border border-[var(--border-color)] hover:border-blue-500/50 transition-all group w-full sm:w-auto min-w-[200px]"
                    >
                        <WhatsAppIcon className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
                        <span className="text-[var(--text-primary)] font-bold text-lg">{t('contact_whatsapp_btn')}</span>
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-[var(--border-color)] w-full reveal-slide-up" style={{ transitionDelay: '0.3s' }}>
                  <span className="text-[var(--text-secondary)] text-sm font-medium uppercase tracking-wider">Socials:</span>
                  <div className="flex gap-4">
                    {socialLinks.map(({ name, icon: Icon, url }) => (
                        <a 
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[var(--bg-tertiary)] hover:bg-blue-600 hover:text-white text-[var(--text-secondary)] transition-all duration-300 transform hover:scale-110"
                        aria-label={`Connect with me on ${name}`}
                        >
                        <Icon className="w-5 h-5" />
                        </a>
                    ))}
                  </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
