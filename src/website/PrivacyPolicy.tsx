
import React from 'react';
import Section from './Section';
import { useLanguage } from '../LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen">
      <Section id="privacy" title={t('privacy_title')}>
        <div className="max-w-4xl mx-auto text-left rtl:text-right space-y-8 text-[var(--text-secondary)] glass-card p-8 md:p-12 rounded-2xl">
          <p className="text-sm text-[var(--text-tertiary)]">{t('privacy_last_updated')}: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('privacy_intro_title')}</h3>
            <p className="leading-relaxed">
              {t('privacy_intro_text')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('privacy_data_title')}</h3>
            <p className="leading-relaxed">
              {t('privacy_data_text')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('privacy_usage_title')}</h3>
            <p className="leading-relaxed">
              {t('privacy_usage_text')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('privacy_cookies_title')}</h3>
            <p className="leading-relaxed">
              {t('privacy_cookies_text')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('privacy_contact_title')}</h3>
            <p className="leading-relaxed">
              {t('privacy_contact_text')}{' '}
              <a href="mailto:mohamed.atef.23@gmail.com" className="text-blue-500 hover:text-blue-400 font-medium transition-colors" dir="ltr">mohamed.atef.23@gmail.com</a>.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
