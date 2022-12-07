import {IconConfig, IconResourceType} from "@spartacus/storefront";
import {ICON_TYPE} from '../index'


export const matIconConfig: IconConfig = {
  icon: {
    symbols: {
      LOGOUT: 'icon-logout',
      INVOICES: 'icon-invoices',
      KEY: 'icon-key',
      SKIPPED_LEADS: 'icon-skipped-leads',
      LEADS: 'icon-leads',
      AVAILABLE_LEADS: 'icon-available-leads',
      EYE_ON: 'icon-eye-on',
      EYE_OFF: 'icon-eye-off',
    },
    resources: [
      {
        type: IconResourceType.SVG,
        url: "./assets/sprite.svg",
        types: [ICON_TYPE.EYE_ON, ICON_TYPE.EYE_OFF, ICON_TYPE.LOGOUT, ICON_TYPE.INVOICES, ICON_TYPE.KEY, ICON_TYPE.SKIPPED_LEADS,ICON_TYPE.LEADS, ICON_TYPE.AVAILABLE_LEADS],
      },
    ],
  },
};
