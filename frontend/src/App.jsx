import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/blog'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Publish from './pages/Publish'
import ContentId from './pages/ContentId'
import Home from './pages/Home'
import Layout from './components/Layout'
import News from './pages/News'
import { useEffect, useState } from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState("false");
  useEffect(() => {
    if (localStorage.getItem('token')) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />} >
          <Route path='/' element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/publish" element={<Publish isAuthenticated={isAuthenticated} />} />
          <Route path="/content/:id" element={<ContentId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
