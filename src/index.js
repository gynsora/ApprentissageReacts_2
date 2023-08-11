import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './Components/Header'
import Error from './Components/Error'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Survey from './Pages/Survey'
import Results from './Pages/Results'
import Freelances from './Pages/Freelances'
import GlobalStyle from './Utils/Styles/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './Utils/Context'
import Profile from './Pages/Profile'



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <SurveyProvider>
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey/:questionNumber" element={<Survey />} />
              <Route path="/results" element={<Results />} />
              <Route path="/freelances" element={<Freelances />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </SurveyProvider>
        </ThemeProvider>
      </Router>
    </React.StrictMode>
);