import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these coding examples!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Hot-Zone Image Detection'
              label='Try Now'
              path='/tech'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Maze Solving'
              label='Try Now'
              path='/tech'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='See Gas Displacement Visualization at work'
              label='Try Now'
              path='/tech'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Image Generation with DALL-E'
              label='Try Now'
              path='/tech'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Submit Something You would like to see'
              label='Go'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;