import React from 'react';
import HornedBeast from './HornedBeast';
import Select from './Select';
// import Selectedbeast from './SelectedBeast';

class Main extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      final: {},
    };
  }

  finalStep = () => {
    this.setState({
      final: this.props.data.filter(horns => {
        { console.log(this.props.hornedNumber); }
        return horns.horns === this.props.hornedNumber;
      })
    });
  }

  render() {
    console.log("main", this.props.value);
    return (

      <div>
        {console.log(this.props.hornedNumber)}
        <Select

          changeValue={this.props.value}

        />
        {/* {this.props.data.filter(checkHorns =>{
          return this.props.value === checkHorns.horns;

        })
        }
         */}


        {this.state.final.map((val) =>

        // if (val.horns === this.props.value ){
        //   console.log('hi')}

          <HornedBeast
            title={val.title}
            image_url={val.image_url}
            description={val.description}
            keyword={val.keyword}
            horns={val.horns}
            show={this.props.show}
            select={this.props.select}

          // pass the function
          />
        )

        }

      </div>
    );
  }
}


export default Main;
