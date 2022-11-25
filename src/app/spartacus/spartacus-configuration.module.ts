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
import {defaultCmsContentProviders, LayoutConfig, layoutConfig, mediaConfig} from "@spartacus/storefront";
import {environment} from 'src/environments/environment';
import {customTranslationChunksConfig, customTranslations} from "../../assets/translations/translations";


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
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: environment.occBaseUrl,
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
