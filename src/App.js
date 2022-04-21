import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer';
import './i18next';

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <CookieConsent location="bottom" cookieName="myAwesomeCookieName3" expires={999} overlay>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
