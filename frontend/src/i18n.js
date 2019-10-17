import { setupI18n } from '@lingui/core'

export const locales = {
  en: 'English',
  fr: 'French',
}
export const defaultLocale = 'en'

async function loadCatalog(lang) {
  let catalog
  if (process.env.NODE_ENV !== 'production') {
    // prettier-ignore
    catalog = await import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `@lingui/loader!./locales/${lang}/messages.po`
    )
  } else {
    // prettier-ignore
    catalog = await import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `./locales/${lang}/messages.js`
    )
  }
  i18n.load({ [lang]: catalog })
}

export const i18n = setupI18n()
