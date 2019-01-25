import React, {Component} from 'react';


export class Pet extends Component {
        
    render(){
        return(
          <section className='petSection'>
            <h3>
                Name: {this.props.pet.name}
                Photo: <img src={this.props.pet.imageURL}  alt='cute animal photo' />
            </h3>
            <main>
            <button className='AdoptPet' onClick={(e)=>{this.props.handleClick(e)}}>Adopt</button>
                <dl>
                    <dt>Description: {this.props.pet.imageDescription}</dt>
                    <dt>Gender: {this.props.pet.sex}</dt>
                    <dt>Age: {this.props.pet.age}</dt>
                    <dt>Breed: {this.props.pet.breed}</dt>
                    <dt>Story: {this.props.pet.story}</dt>
                </dl>
            </main>
            </section>
 
        );
    }
}


/**
 * this.props.pet currently looks like:
 *  !!!imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  !!!name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
 */