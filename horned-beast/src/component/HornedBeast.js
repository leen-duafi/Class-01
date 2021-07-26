import React from 'react';
import data from '../data.json'
class HornedBeast extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            numberOfVotes: 0
        }
    }

    imageClick = () => {
        console.log('Click!!!!');
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1

        }
        )
    }



    render() {
        return (
            <div>
                {data.map((val, idx) =>
                    <div>

                        <h2> {val.title}</h2>
                        <img src={val.image_url} onClick={this.imageClick} ></img>
                        <p>{val.description}</p>
                        <p>{val.keyword}</p>
                        <p>{val.horns}</p>
                        <p>number Of Votes {this.state.numberOfVotes}</p>
                    </div>
                )}


            </div>
        )
    }
}

export default HornedBeast;