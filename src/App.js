import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import TitleBar from './components/titleBar/TitleBar';
import Table from './components/table/Table';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
 



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      dataRecent: [],
      dataAlltime: [],
      order: "recent"
    };

   
    this.onChangeOrder = this.onChangeOrder.bind(this);
  }


  componentDidMount() {    
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(res => {    
    this.setState({dataRecent: res.data}); })

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(res => {    
    this.setState({dataAlltime: res.data}); })


  }

  onChangeOrder(orderBy){
    console.log(orderBy);
    
    this.setState({ order: orderBy});
  }

  

  render() {
   
    return (
      <div className="App">
      
        <TitleBar />
        <Table order={this.state.order} changeOrder={this.onChangeOrder} data={(this.state.order === "recent")? this.state.dataRecent: this.state.dataAlltime  }/>
        
        
      </div>
    );
  }
}

export default App;
