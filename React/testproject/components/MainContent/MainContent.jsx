import React  from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main className="maincontent">
        <h1>About Me</h1>
        <p>Hi, I'm a React developer! I love building user interfaces and working with modern web technologies.</p>
        <div>
            <h2>Hobbies</h2>
            <ul>
                <li>Coding</li>
                <li>Reading Tech Blogs</li>
                <li>Playing Video Games</li>
            </ul>
    </div>
    </main>


    );
}

export default MainContent;
