import './App.css'
import { SpreadSheet } from './components/spreddSheet.tsx'

function App () {
  return (
    <>
      <main>
        <SpreadSheet rows={10} columns={10} />
      </main>
    </>
  )
}

export default App
