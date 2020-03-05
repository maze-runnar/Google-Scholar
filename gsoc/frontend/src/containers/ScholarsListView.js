import React from 'react';
import Allscholars from '../components/Allscholars';
import axios from 'axios';


class ScholarList extends React.Component {

  state = {
    scholars:[]
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/metrics/')
    .then(res =>{
      this.setState({
        scholars: res.data
      });
      console.log(res.data);
    })
  }
  render(){
    return(
      <div>
      <Allscholars data={this.state.scholars}/>
      </div>
    );
  }
}

export default ScholarList;
