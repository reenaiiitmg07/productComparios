import React, { Component } from 'react';
import data from './data/product';
import {setData} from './actions/index';
import {connect} from 'react-redux';
import image from './data/images/Nuts.png'
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
       flag:[],
       comProd:[],
       count:0
    }
  }
  compare(id){
    let flag=this.state.flag;
    flag[id]=!flag[id];
    this.setState({flag:flag});
    console.log(flag[id]);
    let data=this.props.data;
    let saveProd=this.state.comProd;
    let count=this.state.count;
    //console.log(saveProd);
    let comProd=data.filter((item)=>{
      if(item.id==id)
      {
      return item;
    }
    })
    if(flag[id])
    {
    saveProd.push(comProd[0]);
    count++;
  }
    else {
      saveProd.pop(comProd[0]);
      count--;
    }
    this.setState({comProd:saveProd,
                  count:count
    })
    console.log(count);
    console.log(comProd);

  }
  componentWillMount(){
    this.props.setData(data.products);
  }
  render() {
    let list=this.props.data;
    return (
      <div className="App">
      <div className="row"><h2>Compare Products</h2></div>
      <div className="row">
      {list?list.map((item)=>{
        return(
          <div className="col-sm-3 col-xs-3 prod">
          <div className="card">
          <img className="card-img-top" src={image}/>
           <div className="card-body">
            <div className="button" onClick={this.compare.bind(this,item.id)}><a href="#"> {this.state.flag[item.id]==1?"remove":"compare"} </a></div>
           <p className="card-title">{item.price}</p>
           <p className="card-text">{item.name}</p>
           <p>{item.description}</p>
          </div>
          </div>
          </div>
        )
      }):null}
      </div>
      {
        this.state.count>=2?
        <div className="row">
        <div className="col-sm-2">
         <p>name</p>
         <p>price</p>
         <p>colors</p>
         <p>condition</p>

        </div>
        {this.state.comProd.map((item)=>{
          return(
        <div className="col-sm-2">
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.colors}</p>
        <p>{item.condition}</p>

        </div>
      )
      })}
        </div>:null
      }
    </div>
    );
  }
}
function mapStateToProps(state){
  return {
    data:state.data,
  }
}

export default connect(mapStateToProps,{setData})(App);
