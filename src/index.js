import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//This is default value, used hare just for completeness. It's not needed right now.
//In future, it can be replaced with values getting from some config file.
window.agentInfo = {
	hostname: 'junction.deltapath.com',
	agentId: '1800',
	password: '58701343',
	protocol: 'https',
	actionTimeout: 60,
	reconnectInterval: 40,
	authmode: '',
};
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
