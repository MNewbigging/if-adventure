import './app.scss';

import React from 'react';
import { Observer, observer } from 'mobx-react-lite';

import { AppState } from './AppState';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  return (
    <div className='page-wrapper'>
      <Observer>{() => appState.currentPage.render()}</Observer>
    </div>
  );
});
