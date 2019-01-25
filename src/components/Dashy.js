import React, {Component} from 'react';
import {Pet} from './Pet';
import { connect } from 'react-redux';
import {fetchCat,removeCat} from '../actions/Cat';
import {fetchDog,removeDog} from '../actions/Dog';

class Dashboard extends Component {

    componentWillMount(){
       // Promise.all([
            this.props.dispatch(fetchCat());
            this.props.dispatch(fetchDog());
       // ]);        
    }    

    render(){

        let displayCat = <Pet pet={this.props.cat[0]} handleClick={(e)=>{this.adoptCat(e)}}/>;
        
        //with Queue this works with null
        if(this.props.cat[0] === null){
            displayCat = (<div>No More Cats Available...</div>);
        } 

        let displayDog = <Pet pet={this.props.dog[0]} handleClick={(e)=>{this.adoptDog(e)}}/>;
        
        //with Queue this works with null
        if(this.props.dog[0] === null){
            displayDog = (<div>No More Dogs Available...</div>);
        } 


        return (<div>
            {displayCat}
            {displayDog}
            </div>);
    }

    adoptCat(e){
        this.props.dispatch(removeCat());

        //console.log("button has been clicked!");
    } 
    
    adoptDog(e){
        this.props.dispatch(removeDog());
        //console.log("button has been clicked!");
    } 

}
const mapStateToProps = state => ({
    cat: state.cat.catsList,
    dog: state.dog.dogsList
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