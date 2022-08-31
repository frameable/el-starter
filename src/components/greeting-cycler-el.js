import { El } from '@frameable/el'

class GreetingCyclerEl extends El {
  greetings = ['Hello', 'Salutations', 'Ahoy', 'Yo', 'Howdy']

  get greeting() {
    const i = this.state.index % this.greetings.length
    return this.greetings[i]
  }

  created() {
    this.state = this.$observable({ index: 0 })
  }

  cycle() {
    this.state.index++
  }

  render(html) {
    return html`
      <button onclick=${this.cycle}>
        ${this.greeting}, World!
      </button>
    `
  }

  styles(css) {
    return css`
      button {
        background: #333;
        border: none;
        border-radius: 100px;
        box-shadow: 0 1px 128px #0004;
        color: white;
        cursor: pointer;
        font-weight: 500;
        font-size: 32px;
        padding: 0.5em 1.5em;
        transition: all 150ms;

        &:hover {
          opacity: 0.95;
        }
      }
    `
  }

}

customElements.define('greeting-cycler-el', GreetingCyclerEl)

