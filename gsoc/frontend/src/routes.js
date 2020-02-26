import React from 'react';
import {Route} from 'react-router-dom';
import LoadMoreList from './components/Scholars';
import RegistrationForm from './components/AuthorRegistrationForm';
import SearchForm from './components/AuthorSearchForm';
import Index from './containers/Index';
import Info from './containers/Info';
import Contact from './components/Contact';
import ScholarsList from './containers/ScholarsListView';
const BaseRouter =()=>(
    <div>
      <Route exact path='/metrics' component = {LoadMoreList}/>
      <Route exact path='/register' component = {RegistrationForm}/>
      <Route exact path='/search' component = {SearchForm}/>
      <Route exact path='/' component = {Index}/>
      <Route exact path='/info' component = {Info}/>
      <Route exact path='/contact' component = {Contact}/>
      <Route exact path='/allscholars' component = {ScholarsList}/>

    </div>
);

export default BaseRouter;
