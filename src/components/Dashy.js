import React, {Component} from 'react';
import {Pet} from './Pet';
import { connect } from 'react-redux';

class Dashboard extends Component {

    

    render(){
        return (<div>
            <Pet pet={this.props.cat} handleClick={(e)=>{this.adoptClick(e)}}/>
            <Pet pet={this.props.dog} handleClick={(e)=>{this.adoptClick(e)}}/>
            </div>);
    }

    adoptClick(e){
        console.log("button has been clicked!");
    }    

}
const mapStateToProps = state => ({
    cat: state.cat.catsList[0],
    dog: state.dog.dogsList[0]
});
export default connect(mapStateToProps)(Dashboard)

/**
 *  what our data currently looks like:
 *  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',dog: 
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
 */