import { API_V1_PREFIX } from '@/types/api-contracts';
import { VENDOR_BASE_PATH } from '@/lib/constants';

export const integrationConfig = {
  vendorBasePath: VENDOR_BASE_PATH,
  apiV1Base: API_V1_PREFIX,
  parentSiteMountSelector: '[data-vendor-sphere-mount]',
} as const;

export function embedReadyScript(): string {
  return `window.__VENDOR_SPHERE__={version:1,apiBase:'${API_V1_PREFIX}',vendorPath:'${VENDOR_BASE_PATH}'};`;
}
