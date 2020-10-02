import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ViewContact from './components/viewContact';
import AddContact from './components/addContact';
import EditContact from './components/editContact';
import NotFound from './components/notFound';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contacts' exact component={ViewContact} />
          <Route path='/view' exact component={AddContact} />
          <Route path='/edit' exact component={EditContact} />
          <Route path='/not-found' component={NotFound} />
          {/* <Redirect from='/' exact to='/contact' /> */}
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </>
  );
}

export default App;
