import { useEffect, useState } from 'react'
import './App.css'
import Home from './Home';
import About from './About';

function App() {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);
  return (
    <>
    <div 
  className="fixed w-8 h-8 rounded-full border-2 border-purple-500 
             pointer-events-none z-50 mix-blend-difference 
             transition-transform duration-100"
  style={{ 
    left: `${mousePosition.x}px`, 
    top: `${mousePosition.y}px`,
    transform: 'translate(-50%, -50%)'
  }}
/>


    <Home/>
    <About></About>
      
    </>
  )
}

export default App
