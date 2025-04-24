import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';

// Create minimal placeholder components for new routes
const Blog = () => <div className="container" style={{ marginTop: '120px', minHeight: '70vh' }}><h1>Blog Coming Soon</h1></div>;
const Careers = () => <div className="container" style={{ marginTop: '120px', minHeight: '70vh' }}><h1>Careers Coming Soon</h1></div>;
const Terms = () => <div className="container" style={{ marginTop: '120px', minHeight: '70vh' }}><h1>Terms of Service Coming Soon</h1></div>;

// AnimatePresence wrapper component to access location
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/features" element={
          <PageTransition>
            <Features />
          </PageTransition>
        } />
        <Route path="/blog" element={
          <PageTransition>
            <Blog />
          </PageTransition>
        } />
        <Route path="/careers" element={
          <PageTransition>
            <Careers />
          </PageTransition>
        } />
        <Route path="/privacy" element={
          <PageTransition>
            <Privacy />
          </PageTransition>
        } />
        <Route path="/terms" element={
          <PageTransition>
            <Terms />
          </PageTransition>
        } />
        <Route path="*" element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
