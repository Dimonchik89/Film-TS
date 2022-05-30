import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import './App.css';

const Layout = lazy(() => import("./components/Layout/Layout"))

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
