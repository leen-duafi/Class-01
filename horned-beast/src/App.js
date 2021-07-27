import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import data from './data.json';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main data={data} />
        <Footer />
        
      </div>
    );
  }
}

export default App;
