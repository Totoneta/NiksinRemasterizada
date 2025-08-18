import { Provider } from 'react-redux'
import './App.css'
import Enrutado from './enrutado/enrutado'
import { store } from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <Enrutado />
    </Provider>
  )
}

export default App
