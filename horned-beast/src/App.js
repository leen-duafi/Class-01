import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import data from './data.json';
import Selectedbeast from './component/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

 
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      description: '',
      image_url: '',
      value: '',
      //beast object
    };

  }

  showModel = () => {
    this.setState({
      show: true,
    });
    console.log("click");
  }

  closeModel = () => {
    this.setState({
      show: false,
    });
  }

  modelBeast = (image_url,title,description) => {
    console.log(title,image_url,description,'hi');
    this.setState({
      title: title,
      description: description,
      image_url: image_url,
  
    });

  }

  callBack=()=> {
    this.setState({
      value : this.event.target.value,
    });
    
  } 

  

  render() {
    return (
      <div>
        <Header />
        <Main
          data={data}
          show={this.showModel}
          select={this.modelBeast}
          value={this.callBack}
          // pass function 

        />
        <Footer />
        <Selectedbeast
          showState={this.state.show}
          close={this.closeModel}
          title={this.state.title}
          description={this.state.description}
          image_url={this.state.image_url}
          select={this.modelBeast}
        //pass state 
        />

        

      </div>
    );
  }
}

export default App;
