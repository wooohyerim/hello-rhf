import { createContext, FC, PropsWithChildren, useContext, useState } from 'react'
import './App.css'


const counterContext = createContext<{ count: number; setCount: React.Dispatch<React.SetStateAction<number>>} | null>(null)

const CounterContextProvider :FC<PropsWithChildren>= ({children}) => {
  const [count, setCount] = useState(0)

  return <counterContext.Provider value={{count, setCount}}>{children}</counterContext.Provider>
}

const CountDisplay = () => {
  const value = useContext(counterContext)

  return <> count is {value?.count}</>
}

const Viewer = () => {
  return <CountDisplay  />
}

const Button = () => {
  const value = useContext(counterContext)

  return (
  <button onClick={()=>value?.setCount(value.count + 1)}>
      <Viewer  />
  </button>
  )
}

function App() {
  return (
    <CounterContextProvider>
        <Button />
    </CounterContextProvider>
  )
}

export default App
