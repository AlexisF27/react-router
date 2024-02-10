import './index.css'

// eslint-disable-next-line no-unused-vars
import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
            <Route path="/" component={App}/>
    </Router>,
)   
