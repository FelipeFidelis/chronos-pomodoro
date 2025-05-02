import { TimerIcon } from 'lucide-react'
import { Heading } from './components/Heading.tsx'

import './styles/Global.css'
import './styles/theme.css'

export function App() {
  return (
    <>
      <Heading>
        Teste
        <button><TimerIcon/></button>
      </Heading>
    </>
  )
}
