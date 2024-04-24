import ReactDOM from 'react-dom/client'
import { configure } from 'mobx'
import App from './app.tsx'
import './index.css'

// open mobx strict mode
configure({ enforceActions: 'observed' })

// get root
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!)

// render in dom
root.render(<App />)
