import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



class Selectedbeast extends React.Component {


  render() {
    //console.log(this.props.showState);
    return (
      <div>
        <Modal show={this.props.showState} onHide={this.props.showState}>
          <Card style={{ width: '31rem'}}>
            <Card.Img variant="top" src={this.props.image_url} onClick={this.imageClick} onClick={this.props.show}  />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
            </Card.Body>
          </Card>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
                            Close
            </Button>
          </Modal.Footer>
        </Modal>


      </div>
    );
  }


}

export default Selectedbeast;
