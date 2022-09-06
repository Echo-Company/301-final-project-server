import React from 'react';
import Content from './components/Content';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Main from './Main';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ""
  }

  render() {
    return (
      <>
        <div class="position-absolute top-0 end-0">
          <Profile setUser={this.setUser} />
        </div>
        <header style={{ textAlign: "center" }}>

         <h3><em>parks</em></h3> 
        {this.props.auth0.isAuthenticated ?
          <>
            <Content />
            <Logout />
            <Main />
            {/* <Button style={{ marginBottom: "20px" }} variant='outline-secondary' onClick={() => this.setState({ showModal: true })}>Add a place</Button> */}
          </>
          :
          <Login />
        }

        </header>
        <main>
        </main>
      </>
    );
  }
}

export default withAuth0(App);
