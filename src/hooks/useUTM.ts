'use client';

import { useEffect, useState } from 'react';
import type { UTMParams } from '@/types';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const STORAGE_KEY = 'kn_utm_params';

function getEmptyUTM(): UTMParams {
  return { utmSource: '', utmMedium: '', utmCampaign: '', utmContent: '', utmTerm: '' };
}

export function useUTM(): UTMParams {
  const [params, setParams] = useState<UTMParams>(getEmptyUTM);

  useEffect(() => {
    // Check URL params first
    const searchParams = new URLSearchParams(window.location.search);
    const fromUrl: Record<string, string> = {};
    let hasUrlParams = false;

    UTM_KEYS.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        fromUrl[key] = val;
        hasUrlParams = true;
      }
    });

    if (hasUrlParams) {
      const utmParams: UTMParams = {
        utmSource: fromUrl.utm_source || '',
        utmMedium: fromUrl.utm_medium || '',
        utmCampaign: fromUrl.utm_campaign || '',
        utmContent: fromUrl.utm_content || '',
        utmTerm: fromUrl.utm_term || '',
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmParams));
      setParams(utmParams);
      return;
    }

    // Fallback to sessionStorage
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setParams(JSON.parse(stored));
      } catch {
        // ignore
      }
    }
  }, []);

  return params;
}
