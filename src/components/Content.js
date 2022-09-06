import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Park from './Park';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dbFavs:[],
            user: "",
            favs: [],
            parks: ["A local park"],
            showModal: false,
            saved:false,
        }
    }

    async componentDidMount() { //Get Parks Fav based on succeful authentication with Auth0
        // auth0 goes in here
        if (this.props.auth0.isAuthenticated) {
            const res = await this.props.auth0.getIdTokenClaims();
            console.log("xxxxxxxxxxxxxxx", res.email);
            this.setState({ user: res.email })
            const jwt = res.__raw;

            // leave this console here in order for you to grab your token for backend testing in Thunder Client
            // console.log('token: ', jwt);

            const config = {
                headers: { "Authorization": `Bearer ${jwt}` },
                method: 'get',
                baseURL: process.env.REACT_APP_SERVER,
                url: '/parks'
            }

            const parksResponse = await axios(config);

            console.log('Parks from DB: ', parksResponse);
            // checkIfSaved();
            this.setState({
                parks: parksResponse.data
            })
            
            const favsResponse = await axios.get(`${process.env.REACT_APP_SERVER}/favs`);
            console.log(favsResponse)
            this.setState({dbFavs:favsResponse.data})

    
        }
    }

    check = (name) =>  {
        //     let allIds = this.state.parks.map(p=>p.parkName)
        // //    console.log("___________________",allIds)
        //     for(let x of this.state.dbFavs){
        //         console.log("x is",x.name)
        //         if(allIds.includes(x.name)){
        //             return true;
        //         }
        //     }
                let allDbIds = this.state.dbFavs.map(p=>p.name)
                if(allDbIds.includes(name)){
                    return true
                }
                return false;
            }
    

    handleFavCreate = async (favsInfo) => {
        console.log(favsInfo);
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER}/favs`, favsInfo);
            const newFav = response.data;
            this.setState({
                dbFavs: [...this.state.dbFavs, newFav],
            });
        } catch (error) {
            console.log('error is fav post: ', error.response);
        }
    }


    showFavs = async () => {
        this.setState({showModal:true})
        this.check()
    }


    closeModal = () => this.setState({ showModal: false });

    // check =(n)=> {
    //     console.log("CHECKING",n);
    //     let all = this.state.dbFavs.map(p=>p.name);
    //     console.log(all, all.includes(n))
    //     return all.includes(n) ? true:false
    // }
    render() {
        // console.log(this.state.parks);


        return (
            <>

            <Button onClick={this.showFavs}>Favs</Button>

                {
                    this.state.parks.length > 0 &&
                    this.state.parks.map((p, ix) =>
                    <Park 
                    handleFavCreate={this.handleFavCreate} 
                    email={this.state.user} 
                    key={ix} p={p} 
                    />
                    )}
                    
                <Modal show={this.state.showModal} onHide={this.closeModal} style={{ marginTop: "50px" }}>
                    <Modal.Header closeButton>
                        Fav Parks
                    </Modal.Header>
                    <Modal.Body >
                       {this.state.dbFavs.map(p => <p>{p.name}</p>)}
                    </Modal.Body>

                    <Modal.Footer>


                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}

export default withAuth0(Content);
