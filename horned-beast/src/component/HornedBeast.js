import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      numberOfVotes: 0,
     
    };
  }

  imageClick = () => {
    console.log('Click!!!!');
    this.props.show();
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1

    }
    );

    this.props.select(this.props.image_url, this.props.title, this.props.description);
  }




  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.imageClick} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
            Horns Number : {this.props.horns} 
            </Card.Text>
            <Card.Text>
              {this.state.numberOfVotes}:💟
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <br></br>
      </div>
    );
  }
}


export default HornedBeast;
