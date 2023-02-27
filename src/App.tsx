import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './RoutesApp';
import { useRequestAPIHooks } from './api/requestAPIHooks';
import { useAppDispatch } from './app/hooks';
import { updateEnums } from './states/EnumSlice';
import { updateUser } from './states/UserSlice';

const incidentTheme = {...webLightTheme, colorBrandBackground:'#FF0000', colorBrandBackgroundHover:'#AA0000' }

export const App: React.FunctionComponent = () => {

  const dispatch = useAppDispatch();

  const { getEnums, getUsers } = useRequestAPIHooks();
  React.useEffect(() => {
    // Update enums and users
    getEnums().then((ret) => dispatch(updateEnums({data:ret})));
    getUsers().then((ret) => dispatch(updateUser(ret)));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FluentProvider theme={incidentTheme}>
      <div className="App">
         <BrowserRouter>
             <RoutesApp />
         </BrowserRouter>
      </div>
      </FluentProvider>
  );
};
