import {createYoffeeElement, html} from "yoffee"

createYoffeeElement("my-app", (props, element) => {
    let state = {clicks: 6}
    return html(state)`
    <button onclick=${() => state.clicks += 1}>
        I AM BUTTON THATS BEEN CLICKED ${() => state.clicks} TIMES
    </button>
    `
})
