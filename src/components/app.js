import React from 'react';
import NavBar from './nav_bar';
import CocktailList from './cocktails_index'

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
          < CocktailList />
        </div>
      </div>
    )
};
