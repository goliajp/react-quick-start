import './index.css'

import { configure } from 'mobx'
import ReactDOM from 'react-dom/client'

import App from './app.tsx'

// open mobx strict mode
configure({ enforceActions: 'observed' })

// get root
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!)

// render in dom
root.render(<App />)
