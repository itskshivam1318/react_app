import React from 'react';
import './assests/MenuBar.css'

function MenuBar(){
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href='#'>news</a></li>
                    <li><a href='#'>about</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuBar