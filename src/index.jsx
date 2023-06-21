import { createRoot } from 'react-dom/client'

import { App } from './components/App/index.jsx'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)
