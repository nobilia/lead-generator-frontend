import {TranslationChunksConfig, TranslationResources} from '@spartacus/core';
import {en} from './en';

export const customTranslations: TranslationResources = {
  en
};

export const customTranslationChunksConfig: TranslationChunksConfig = {
  dashboardLogin: [
    'dashboardLoginForm'
  ],
  dashboardMenu: [
    'dashboardMenuTitle'
  ],
  customCommon: [
    'httpHandlers','formErrors'
  ],
  dashboardLeads: [
    'dashboardLeadsTable'
  ],
};
