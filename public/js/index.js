import renderTemplates from './templates.js'
import addStyle from './style.js'
import bindEvents from './events.js'

void (async () => {
  await renderTemplates()
  addStyle()
  bindEvents()
})().catch(console.error)
