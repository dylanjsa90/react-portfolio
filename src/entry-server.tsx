import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// CSS is deliberately not imported here — it belongs to the client entry only.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
