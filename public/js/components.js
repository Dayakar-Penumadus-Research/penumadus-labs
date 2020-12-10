import { select } from './dom.js'
import { fetchTemplate } from './api.js'

let head, header, footer

export const createComponents = async () => {
  const templatePromises = [
    '../../templates/head.html',
    '../../templates/header.html',
    '../../templates/footer.html',
  ].map(fetchTemplate)

  const [head, header, footer] = await Promise.all(templatePromises)

  class Component extends HTMLElement {
    constructor(template) {
      super()
      this.append(template)
    }
  }

  class Head extends Component {
    constructor() {
      super(head)
    }
  }

  class Header extends Component {
    constructor() {
      super(header)
    }
  }

  class Footer extends Component {
    constructor() {
      super(footer)
    }
  }

  customElements.define('custom-head', Head)
  customElements.define('custom-header', Header)
  customElements.define('custom-footer', Footer)
}
