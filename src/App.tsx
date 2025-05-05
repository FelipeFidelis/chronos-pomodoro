import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles.css'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

    </>
  )
}
