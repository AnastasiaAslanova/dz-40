import React from 'react';
import './../App/App.scss';
import './Hero.scss'

function Hero () {

return(
        <div className="hero-section">
            <p className="hero-header">Blog</p>
           <ul>
               <li className="blog-article"></li>
               <li className="blog-article"></li>
               <li className="blog-article"></li>
               <li className="blog-article"></li>
           </ul>
        </div>
)
}
export default Hero;