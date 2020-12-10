import { select, applyStylesToChildren } from './dom.js'

const main = select('main')

const footer = select('footer')
footer.classList.add('card')

export default () => {
  applyStylesToChildren(main, 'card', 'contained')
  applyStylesToChildren(footer, 'contained')

  // for (const img of document.querySelectorAll('img:not(footer img)')) {
  //   img.style.width = '800px'
  // }

  // display everything once everything is rendered
  document.body.style.visibility = 'visible'
}
