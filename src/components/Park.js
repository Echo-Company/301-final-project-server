import React from 'react';
import Button from 'react-bootstrap/Button';

class Park extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.p.parkName,
            description: this.props.p.description,
            activities: this.props.p.activities,
            email:this.props.email
        }
    }



    render() {
        return (
            <>
           
                {this.props.p.parkName}
                <p><a href={this.props.p.url}>{this.props.p.parkName}</a>
                    <Button onClick={() => this.props.handleFavCreate(this.state)}>AddToFavs</Button></p>
            </>
        );
    }
}

export default Park;
