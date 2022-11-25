import {RoutesConfig, RoutingConfig} from '@spartacus/core';

export const customRoutesConfig: RoutesConfig = {};

export const customRoutingConfig: RoutingConfig = {
  routing: {
    protected: true,
    routes: customRoutesConfig,
  },
};
