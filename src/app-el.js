import { El } from '@frameable/el'

class AppEl extends El {

  styles(css) {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 100vh;
      }
      main {
        background: #f3f5f8;
        display: grid;
        flex: 1;
        place-items: center;
      }
    `
  }

  render(html) {
    return html`
      <header-el></header-el>
      <main>
        <greeting-cycler-el><greeting-cycler-el>
      </main>
      <footer-el></footer-el>
    `
  }
}

customElements.define('app-el', AppEl)
