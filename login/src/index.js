import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
class CheckLoggin extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
 handleLoginClick() {
    this.setState({isloggedIn:true});
  }
handleLogoutClick() {
    this.setState({isloggedIn:false});
  }
  
render(){
  const isloggedIn = this.state.isloggedIn;
   let button = null;
   if (isloggedIn) {
   button = 
    <LogoutButton onClick = {this.handleLogoutClick} />;
   } else { button =
    <LoginButton onClick = {this.handleLoginClick} />;
 }
  return (
    <div>
    <Greeting isloggedIn={isloggedIn} />
     {button}
     </div>
  );
}
}
function IamLoggedIn(props){
  return <h1>Welcome Back </h1>
}

function IamLoggedOut(props){
  return <h1>Please Sign Up</h1>
}

function Greeting(props){
  const isloggedIn = props.isloggedIn;
  if(isloggedIn){
   return <IamLoggedIn />
  } else {
  return  <IamLoggedOut />
  }
}

function LoginButton(props){
  return (
    <button onClick = {props.onClick}>
      LogIn
      </button>
  )
}

function LogoutButton(props){
  return (
    <button onClick = {props.onClick}>
      LogOut
      </button>
  )
}
ReactDOM.render(
      <CheckLoggin />,
      document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
