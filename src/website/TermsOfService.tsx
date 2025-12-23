
import React from 'react';
import Section from './Section';
import { useLanguage } from '../LanguageContext';

const TermsOfService: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen">
      <Section id="terms" title={t('terms_title')}>
        <div className="max-w-4xl mx-auto text-left rtl:text-right space-y-8 text-[var(--text-secondary)] glass-card p-8 md:p-12 rounded-2xl">
           <p className="text-sm text-[var(--text-tertiary)]">{t('terms_last_updated')}: {new Date().toLocaleDateString()}</p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('terms_agreement_title')}</h3>
            <p className="leading-relaxed">
                {t('terms_agreement_text')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('terms_ip_title')}</h3>
            <p className="leading-relaxed">
                {t('terms_ip_text')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('terms_restrictions_title')}</h3>
            <p className="leading-relaxed">
                {t('terms_restrictions_intro')}
            </p>
            <ul className="list-disc pl-5 rtl:pl-0 rtl:pr-5 space-y-2 mt-2 marker:text-blue-500">
                <li>{t('terms_restrictions_list_1')}</li>
                <li>{t('terms_restrictions_list_2')}</li>
                <li>{t('terms_restrictions_list_3')}</li>
                <li>{t('terms_restrictions_list_4')}</li>
                <li>{t('terms_restrictions_list_5')}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('terms_disclaimer_title')}</h3>
            <p className="leading-relaxed">
                {t('terms_disclaimer_text')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">{t('terms_gov_title')}</h3>
            <p className="leading-relaxed">
                {t('terms_gov_text')}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TermsOfService;
