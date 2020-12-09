const fetchHtml = async url => {
  const resp = await fetch(url, { headers: { Accept: 'text/html' } })
  const html = await resp.text()
  return new DOMParser().parseFromString(html, 'text/html')
}

const select = selector => document.querySelector(selector)

const selectTemplate = selector =>
  layout.querySelector(selector).content.cloneNode(true)

void (async () => {
  const layout = await fetchHtml('../layout/layout.html')
  const selectTemplate = selector =>
    layout.querySelector(selector).content.cloneNode(true)

  const head = selectTemplate('#head')
  const header = selectTemplate('#header')
  const footer = selectTemplate('#footer')

  select('head').appendChild(head)
  select('header').appendChild(header)
  select('footer').appendChild(footer)
  document.body.style.visibility = 'visible'
})().catch(console.error)
