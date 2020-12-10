import { select } from './dom.js'
const templates = ['head', 'header', 'header-small', 'footer']

const fetchTemplate = async name => {
  const resp = await fetch(`../templates/${name}.html`, {
    headers: { Accept: 'text/html' },
  })
  const html = await resp.text()

  const { content } = new DOMParser()
    .parseFromString(html, 'text/html')
    .querySelector('template')
  return content
}

export default async () => {
  const templatesObj = {}
  await Promise.all(
    templates.map(
      async name => (templatesObj[name] = await fetchTemplate(name))
    )
  )

  for (const [name, template] of Object.entries(templatesObj))
    select(name.split('-')[0]).appendChild(template)
}
