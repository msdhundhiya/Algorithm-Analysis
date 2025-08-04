import {Routes,Route} from 'react-router-dom'
import Layout from './components/layout'
import HomePage from './pages/Homepage'
import SortingPage from './pages/SortingPage'

function App() {
  
  return (
    <Routes>
      <Route path='/' element= { <Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/sort/:algorithm' element={<SortingPage />} />
      </Route>
    </Routes>
  )
}

export default App
