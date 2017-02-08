import React from 'react';
import NavBar from './nav_bar';
import CocktailList from './cocktails_index'
import CocktailShow from './cocktails_show'

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
          < CocktailList />
          < CocktailShow />
        </div>
      </div>
    )
};
