import { i18n } from "@lingui/core"

export const locales = {
  en: "English",
  fr: "Français"
}

export async function activate(locale) {
	console.log('i18n:', i18n)
	console.log('activate called:', locale)
  const catalog = await import(
		/* webpackChunkName: "i18n-[index]" */ `@lingui/loader!./locales/${locale}.po`
  )

  i18n.load(locale, catalog)
  i18n.activate(locale)
}

activate("en")
