import React from 'react';
import './App.css';

import PageHeader from './pages/header'
import PageMain from './pages/main'
import PageFooter from './pages/footer'

import Welcome from './components/welcome'


function App() {
  return (
    <div className='container'>
      <PageHeader />
      <div style={{ marginTop: 80 }}>
        <Welcome />
        <PageMain />
      </div>
      <PageFooter />
    </div>
  );
}

export default App;