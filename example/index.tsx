import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { LoadingOverlay } from '../';

const App = () => {
  return (
    <div>
      <LoadingOverlay visible />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
