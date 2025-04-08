import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle, { Container } from './global'
import { ThemeProvider } from 'styled-components'
import colors from './themes/colors'

// import './global.css'

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
