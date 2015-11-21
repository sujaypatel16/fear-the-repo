import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/HomeView';
import ResumeView from 'views/ResumeView';
import UserFormView from 'views/userFormView';


export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/userForm' component={UserFormView} />
    <Route path='/resume' component={ResumeView} />
  </Route>
);
