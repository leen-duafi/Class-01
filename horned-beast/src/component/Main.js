import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data.json';

class Main extends React.Component {
  render() {
    return (

      
      <div>
        
        {data.map((val)=>
          <HornedBeast
            title={val.title}
            image_url={val.image_url}
            description={val.description}
            keyword={val.keyword}
            horns={val.horns} 
          />
        )

        }
      </div>
    );
  }
}

  
export default Main;
