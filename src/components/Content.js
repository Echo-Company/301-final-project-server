import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from '@auth0/auth0-react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parks: [],
            showModal: false
        }
    }
    async componentDidMount() { //Get Parks FAv based on succeful authentication with Auth0
        // auth0 goes in here
        if (this.props.auth0.isAuthenticated) {
            const res = await this.props.auth0.getIdTokenClaims();
            const jwt = res.__raw;

            // leave this console here in order for you to grab your token for backend testing in Thunder Client
            console.log('token: ', jwt);

            const config = {
                headers: { "Authorization": `Bearer ${jwt}` },
                method: 'get',
                baseURL: process.env.REACT_APP_SERVER,
                url: '/parks'
            }

            const parksResponse = await axios(config);

            console.log('Parks from DB: ', parksResponse.data);

            this.setState({
                parks: parksResponse.data
            })
        }
    }


    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        console.log(this.state.parks);
        return (
            <>

                {
                    this.state.parks.length > 0 &&
                    <>
                        {/* <Parks
                        /> */}
                    </>
                }
                <Modal show={this.state.showModal} onHide={this.closeModal} style={{ marginTop: "50px" }}>
                    <Modal.Header closeButton>
                        Information
                    </Modal.Header>
                    <Modal.Body >
                        <Form onSubmit={this.handleSubmit} style={{ width: "40%", margin: "auto" }}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="name" placeholder="Enter the name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="name" placeholder="Enter book description" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="status">
                                <Form.Check type="checkbox" label="status?" />
                            </Form.Group>
                            <Button variant="outline-dark" style={{ margin: "auto" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>


                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}

export default withAuth0(Content);
