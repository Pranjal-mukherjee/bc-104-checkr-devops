import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import "./index.css"
import { Auth0Provider } from '@auth0/auth0-react';
import { CLIENT_ID, DOMAIn_ID } from './constants';


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
<Auth0Provider
    domain={DOMAIn_ID}
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);