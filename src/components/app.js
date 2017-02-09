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
          <div className='col-md-4'>
            < CocktailCreate />
            < CocktailList />
          </div>
          <div className='col-md-8'>
            < CocktailShow />
          </div>
          
        </div>
      </div>
    )
};
