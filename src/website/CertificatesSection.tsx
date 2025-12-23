
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Section from './Section';
import { useLanguage } from '../LanguageContext';
import { Award, Eye, Calendar, ShieldCheck, X, ZoomIn, ZoomOut, CheckCircle2 } from 'lucide-react';

const CertificateCard: React.FC<{ 
    cert: { name: string; issuer: string; date: string; credentialId?: string; url?: string };
    onView: (cert: any) => void;
    index: number;
}> = ({ cert, onView, index }) => {
    return (
        <div 
            className="group relative flex flex-col bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 h-full cursor-pointer"
            onClick={() => onView(cert)}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image Preview Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-tertiary)]">
                {cert.url ? (
                    <>
                         {/* Blur backdrop for fill effect */}
                         <div 
                            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-125" 
                            style={{ backgroundImage: `url(${cert.url})` }} 
                         />
                         {/* Main Image */}
                         <img 
                            src={cert.url} 
                            alt={cert.name} 
                            className="relative w-full h-full object-contain z-10 transition-transform duration-700 group-hover:scale-105 p-4"
                            loading="lazy"
                            onError={(e) => {
                                // Hide broken image and show fallback
                                e.currentTarget.style.display = 'none';
                                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                            }}
                        />
                        {/* Fallback for broken images */}
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-center p-4" style={{ display: 'none' }}>
                            <Award className="w-12 h-12 text-blue-500/60 mb-3" />
                            <p className="text-xs text-[var(--text-secondary)] font-medium">Certificate Image</p>
                            <p className="text-[10px] text-[var(--text-tertiary)] mt-1">Click to view details</p>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                        <Award className="w-16 h-16 text-[var(--text-tertiary)] opacity-20" />
                    </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                        <Eye className="w-4 h-4" /> View Full Size
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 flex flex-col flex-grow relative bg-[var(--bg-card)]">
                {/* Decorative top border gradient */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="px-2 md:px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3" />
                        <span className="truncate max-w-[100px]">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-[var(--text-tertiary)] bg-[var(--bg-chip)] px-2 py-1 rounded-md whitespace-nowrap">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                    </div>
                </div>

                <h3 className="text-base md:text-lg font-bold text-[var(--text-primary)] leading-snug mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {cert.name}
                </h3>

                {cert.credentialId && (
                     <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[10px] md:text-xs text-[var(--text-secondary)]">
                        <span className="font-mono opacity-70 truncate max-w-[80%] flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                            {cert.credentialId.replace('Credentials ID: ', '')}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const { t, data } = useLanguage();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      setIsZoomed(false);
    };
  }, [selectedCert]);

  return (
    <Section id="certificates" title={t('cert_title')}>
      {/* Updated Grid Layout for Gallery Feel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-7xl mx-auto px-2 md:px-4">
        {data.certificates.map((cert, index) => (
          <div key={index} className="reveal-scale">
            <CertificateCard cert={cert} onView={setSelectedCert} index={index} />
          </div>
        ))}
      </div>

      {/* Full Screen Image Modal - Portalled to body to ensure it's on top of everything */}
      {selectedCert && createPortal(
        <div 
            className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center animate-in fade-in duration-300 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
        >
            
            {/* Image Container */}
            <div 
                className={`
                    w-full h-full flex items-center justify-center transition-all duration-300 overflow-hidden relative z-10 p-2 sm:p-8
                    ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}
                `}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                }}
            >
                <img 
                    src={selectedCert.url} 
                    alt={selectedCert.name} 
                    className={`
                        transition-transform duration-500 cubic-bezier(0.2, 0, 0.2, 1) ease-out select-none shadow-2xl bg-black rounded-lg
                        ${isZoomed ? 'scale-[1.5] md:scale-[2]' : 'scale-100'}
                    `}
                    style={{
                        maxHeight: isZoomed ? 'none' : '80vh',
                        maxWidth: isZoomed ? 'none' : '90vw',
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Toolbar - Fixed Top with Gradient Backdrop for Visibility */}
            <div className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-start z-[10001] pointer-events-none bg-gradient-to-b from-black/90 via-black/60 to-transparent pb-24">
                {/* Title Badge */}
                <div className="pointer-events-auto bg-white/10 backdrop-blur-xl rounded-lg px-3 py-2 md:px-4 md:py-2.5 border border-white/20 text-white shadow-lg max-w-[60%] md:max-w-md">
                    <h3 className="font-semibold text-xs md:text-base leading-tight drop-shadow-md truncate">
                        {selectedCert.name}
                    </h3>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center gap-2 md:gap-3 pointer-events-auto">
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsZoomed(!isZoomed);
                        }}
                        className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center"
                        title={isZoomed ? "Zoom Out" : "Zoom In"}
                    >
                        {isZoomed ? <ZoomOut className="w-4 h-4 md:w-5 md:h-5" /> : <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />}
                    </button>
                    <button 
                        onClick={() => setSelectedCert(null)}
                        className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center"
                        title="Close"
                    >
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            {/* Bottom Info - Only show when not zoomed to avoid obstruction */}
            {!isZoomed && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none animate-in slide-in-from-bottom-4 fade-in duration-500 w-full flex justify-center px-4 z-[10001]">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 md:px-6 md:py-3 rounded-full flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-1 shadow-2xl pointer-events-auto max-w-full">
                        <span className="flex items-center gap-1.5 md:gap-2 text-white/90 text-[10px] md:text-sm font-medium whitespace-nowrap">
                            <Award className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                            <span className="truncate max-w-[120px] md:max-w-none">{selectedCert.issuer}</span>
                        </span>
                        <span className="hidden sm:inline text-white/20">|</span>
                        <span className="text-white/60 text-[10px] md:text-xs flex items-center gap-1.5 whitespace-nowrap">
                            <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" />
                            {selectedCert.date}
                        </span>
                    </div>
                </div>
            )}
        </div>,
        document.body
      )}
    </Section>
  );
};

export default CertificatesSection;
