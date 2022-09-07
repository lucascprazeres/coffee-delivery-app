import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './hooks/useCart'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
