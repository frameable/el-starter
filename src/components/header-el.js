import { El } from '@frameable/el'

class HeaderEl extends El {
  styles(css) {
    return css`
      header {
        padding: 16px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
        text-align: center;

        h4 {
          font-weight: normal;
        }
      }
    `
  }
  render(html) {
    return html`
      <header>
        <h4>EL STARTER</h4>
      </header>
    `
  }
}

customElements.define('header-el', HeaderEl)
