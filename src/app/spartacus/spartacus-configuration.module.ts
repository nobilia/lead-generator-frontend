import {NgModule} from '@angular/core';
import {translationChunksConfig, translations} from "@spartacus/assets";
import {
  AuthConfig,
  ConfigModule,
  DeferLoadingStrategy,
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig
} from "@spartacus/core";
import {LayoutConfig, layoutConfig, mediaConfig} from "@spartacus/storefront";
import {environment} from 'src/environments/environment';
import {customTranslationChunksConfig, customTranslations} from "../../assets/translations/translations";
import {defaultCmsContentProviders} from "../core";
import {LoginFormComponentService} from "@spartacus/user/account/components";
import {CustomLoginFormComponentService} from "./services/custom.login-form-component.service";


@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      i18n: {
        resources: customTranslations,
        chunks: customTranslationChunksConfig,
        fallbackLang: 'en'
      },
    } as I18nConfig)
  ],
  providers: [
    {
      provide: LoginFormComponentService,
      useExisting: CustomLoginFormComponentService
    },
    provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
          endpoints: {
            availableLotsObserver: '/auction/lots/observer?sessionToken=${sessionToken}&sessionId=${sessionId}',
            skippedLotsObserver: '/auction/skipped/lots/observer?sessionToken=${sessionToken}&sessionId=${sessionId}'
          }
        }
      },
    }), provideConfig(<SiteContextConfig>{
      context: {
        currency: ['GBP'],
      },
    }), provideConfig(<AuthConfig>{
      authentication: {
        client_id: environment.authClientId,
        client_secret: environment.authClientSecret
      }
    }), provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    }), provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3'
      }
    }), provideConfig(<LayoutConfig>{
      deferredLoading: {
        strategy: DeferLoadingStrategy.DEFER,
        intersectionMargin: '50px',
      }
    })
  ]
})
export class SpartacusConfigurationModule {
}
