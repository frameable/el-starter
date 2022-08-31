import { El } from '@frameable/el'

class FooterEl extends El {
  styles(css) {
    return css`
      footer {
        padding: 16px;
        border-top: 1px solid #ddd;
        font-size: 15px;
        text-align: center;
      }
    `
  }
  render(html) {
    return html`
      <footer>
        <div>FIN</div>
      </footer>
    `
  }
}

customElements.define('footer-el', FooterEl);
