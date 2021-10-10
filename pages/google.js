import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    
    
  }
  render() {
    return (
      <div style={{marginLeft:'770px',marginTop:"720px"}}>
        <GoogleLogin
        clientId="666134851059-fkpgp98naqof9rm8tgoffl95ds33rt5s.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        
        />
      </div>
    )
  }
}

export default App