import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import ValidateMessage from './ValidateMessage.js'


const validators = {
  isEmailValid: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
  isPhoneValid: /^((?!(0))[0-9]{9})$/,
  isBlogValid: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        text:'form is not valid'
    }
}



  isValid=()=>{

    var a = document.getElementsByName('email');
    var b = document.getElementsByName('phone');
    var c = document.getElementsByName('blog');


    var atest= validators.isEmailValid.test(a[0].value);
    var btest= validators.isPhoneValid.test(b[0].value);
    var ctest= validators.isBlogValid.test(c[0].value);

    

    if(atest === true && btest === true) 
    {
        if (ctest === true){
        this.setState({text: 'form is valid'});
        document.getElementsByTagName('p')[0].style.color = 'white';
      }
    }
    

   

  }

  text=()=>{
    return this.state.text;
  }


  render() {
    return (
      <div className="App">
        <Form isValid={this.isValid}/>
        <ValidateMessage text={this.text}/>
      </div>
    );
  }
}

export default App;
