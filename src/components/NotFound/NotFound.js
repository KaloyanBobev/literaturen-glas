import React from 'react';

import './NotFound.scss';

function NotFound() {

    return (
        <div id="not-found-container">
            <h1>HTTP error 404</h1>
            <p>The requested page was not found.</p>
            <h1>The requested page was not found.</h1>
            <ul>
                <li>The requested page was not found.</li>
                <li>The URL was entered incorrectly.</li>
            </ul>
            <div>Please re-check the URL you are trying to reach. <a href="/home">(Go Back)</a></div>
        </div>)
}

export default NotFound;