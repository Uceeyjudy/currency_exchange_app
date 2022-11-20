import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PressRelease from './PressRelease/PressRelease';
import Article from './Article/Article'

const Press = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<PressRelease />} />
        //         <Route path="/article" element={<Article />} />
        //     </Routes>
        // </Router>
        <>
            <PressRelease />
        </>
    )
}

export default Press;