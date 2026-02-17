'use client';

import { useEffect, useState } from 'react';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

export default function LanguageSwitcher() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const style = document.createElement('style');
        style.innerHTML = `
            /* THE NUCLEAR OPTION - Hide all Google Translate UI artifacts */
            .goog-te-banner-frame.skiptranslate,
            .goog-te-banner-frame,
            .goog-te-banner,
            #goog-gt-tt,
            .goog-te-balloon-frame,
            .goog-te-menu-value span:nth-child(2),
            .goog-te-menu-value img,
            .goog-te-menu-frame.skiptranslate,
            .goog-tooltip,
            .goog-tooltip:hover {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                width: 0 !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }

            .goog-text-highlight {
                background: transparent !important;
                box-shadow: none !important;
                border: none !important;
            }

            body {
                top: 0 !important;
                position: static !important;
            }

            html {
                top: 0 !important;
            }

            .goog-te-gadget {
                font-size: 0 !important;
                color: transparent !important;
            }

            .goog-te-gadget .goog-te-combo {
                font-size: 13px !important;
                padding: 4px 8px !important;
                border: none !important;
                background-color: transparent !important;
                color: #800000 !important;
                outline: none !important;
                font-family: inherit !important;
                font-weight: 600 !important;
                cursor: pointer !important;
                margin: 0 !important;
                appearance: none !important;
                -webkit-appearance: none !important;
                -moz-appearance: none !important;
            }

            #google_translate_element {
                display: flex !important;
                align-items: center !important;
            }
        `;
        document.head.appendChild(style);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: 'en,hi',
                    autoDisplay: false,
                },
                'google_translate_element'
            );
        };

        if (!document.getElementById('google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        }

        // MutationObserver is much more efficient and reliable than setInterval
        const observer = new MutationObserver(() => {
            const banner = document.querySelector('.goog-te-banner-frame');
            const iframes = document.getElementsByTagName('iframe');

            if (banner) {
                (banner as HTMLElement).style.display = 'none';
                (banner as HTMLElement).style.visibility = 'hidden';
            }

            for (let i = 0; i < iframes.length; i++) {
                if (iframes[i].className.indexOf('goog-te-banner-frame') !== -1) {
                    iframes[i].style.display = 'none';
                    iframes[i].style.visibility = 'hidden';
                }
            }

            if (document.body.style.top !== '0px') {
                document.body.style.top = '0px';
            }
            if (document.documentElement.style.top !== '0px') {
                document.documentElement.style.top = '0px';
            }
        });

        observer.observe(document.body, { attributes: true, childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-1.5 px-3 py-1.5 border border-primary/30 bg-white hover:border-primary transition-all duration-300">
            <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
            </svg>
            <div id="google_translate_element"></div>
        </div>
    );
}
