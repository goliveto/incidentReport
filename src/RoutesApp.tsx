import * as React from 'react';
import { Route,Routes } from 'react-router-dom';
import ErrorPage from './app/ErrorPage';
import ListIncidentPage from './incidents/ListIncidentPage';

export const navigateHome = () => {
    window.location.href = '/';
}


const RoutesApp: React.FC = () => {
    return ( <Routes >
                <Route  path='/' element={<ListIncidentPage/>} />
                <Route  path='/incidents' element={<ListIncidentPage/>} />
                <Route  path='/server-error' element={<ErrorPage text={'Internal server error'}/>} />
                <Route  path='/not-found' element={<ErrorPage text={'Page not found'}/>} />
             </Routes>)
}

export default RoutesApp;