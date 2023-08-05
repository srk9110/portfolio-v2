import React from 'react';
import { Route, Routes } from 'react-router-dom';

//layout
import Header from './layouts/Header';

//component
import Main from './components/Main';

function App(){
    return (
        <div id="mainWrap">
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </div>
    )
}

export default App;