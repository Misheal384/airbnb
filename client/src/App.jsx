

import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import LayoutPage from './LayoutPage'
import RegisterPage from './RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContent'
import AccountPage from './pages/AccountPage'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  

  return (
    <UserContextProvider>

    
    <Routes>
      <Route path='/' element={<LayoutPage />}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/account/:subpage?' element={<AccountPage/>} />
      <Route path='/account/:subpage/:action' element={<AccountPage/>} />

      </Route>
     
    </Routes>
    </UserContextProvider>
  )
}

export default App
