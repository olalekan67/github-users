import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/GithubContext';
import { AlertProvider } from './context/AlertContext';
import Alert from './component/layout/Alert';
import User from './pages/User';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <Navbar />

          <Alert />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:login' element={<User />} />
            <Route path='/NotFound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App;
