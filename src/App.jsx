import { Route, Routes } from 'react-router-dom';

import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Домашнее задание по теме «Redux Saga»</h1>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
