import React from 'react';
import NavBar from './nav_bar';
import CocktailList from './cocktails_index'
import CocktailShow from './cocktails_show'
import CocktailCreate from './cocktailCreate'

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
          < CocktailList />
          < CocktailShow />
          < CocktailCreate />
        </div>
      </div>
    )
};
