import "the-new-css-reset/css/reset.css"

import App from './App.svelte'
export { default as secret } from "../secret.json"

const app = new App({ target: document.getElementById('app') })

export default app
