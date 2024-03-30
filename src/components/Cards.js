import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import HiddenCardItem from './HiddenCard';

function Cards() {
  return (
    <div id='cards' className='cards'>
      <h1>Special Beauty of Uttarakhand</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="panch-prayag.avif"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Panch Prayag"
              path="/services/activity"
            ></CardItem>
            <CardItem
              src="panch-kedar.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Panch Kedar"
              path="/services/activity"
            ></CardItem>
            <CardItem
              src="uttarakhand-village.jpg"
              text="Set a Sail in the Atlantic ocean visiting Uncharted Waters"
              label="Village Tour"
              path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="surkanda-devi-temple.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Siddha Peeth"
              path="/services/activity"
            ></CardItem>
            <CardItem
              src="auli.webp"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Auli"
              path="/services/activity"
            ></CardItem>
            <CardItem
              src="chopta-bugyal.webp"
              text="Set a Sail in the Atlantic ocean visiting Uncharted Waters"
              label="Chopta Bugyal"
              path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="kedarkantha-trek.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Kedarkantha Trek"
              path="/services/activity"
            ></CardItem>
            <CardItem
              src="munsyari.jpg"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Munsyari"
              path="/services/activity"
            ></CardItem>

            <HiddenCardItem
              src="mussoorie.webp"
              text="hidden"
              label="hidden"
              path="/services/activity"
            />

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
