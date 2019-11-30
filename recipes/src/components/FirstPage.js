import React from 'react';
import MenuBar from './MenuBar';
import Main from './Main';
import About from './About';

function FirstPage(){
    return(
        <div>
            <MenuBar />
            <Main />
            <About />
        </div>

    )
}

export default FirstPage