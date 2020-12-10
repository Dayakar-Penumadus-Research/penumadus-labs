import addStyle from './style.js'
import { select } from './dom.js'

const fetchTemplates = async url => {
  const resp = await fetch(url, { headers: { Accept: 'text/html' } })
  const html = await resp.text()
  const templates = new DOMParser().parseFromString(html, 'text/html')
  return selector => templates.querySelector(selector).content.cloneNode(true)
}

void (async () => {
  const selectTemplate = await fetchTemplates('../templates/templates.html')

  const head = selectTemplate('#head')
  const header = selectTemplate('#header')
  const footer = selectTemplate('#footer')

  select('head').appendChild(head)
  select('header').appendChild(header)
  select('footer').appendChild(footer)

  addStyle()
})().catch(console.error)
