import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'SanalVaka',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44354/',
    redirectUri: baseUrl,
    clientId: 'SanalVaka_App',
    responseType: 'code',
    scope: 'offline_access SanalVaka',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44354',
      rootNamespace: 'SanalVaka',
    },
  },
} as Environment;
