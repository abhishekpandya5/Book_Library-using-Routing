import React, { Component} from 'react';
import items from './BookDetails';
import Books from './Books';

import {Link} from 'react-router-dom';

class BooksManager extends Component {

    state = {
         books: items      
    }

    

    render() {
        return(
            <div className="books">
                
            {this.state.books.map((item, index) => {
             
                const {_id,title,isbn}=item;
                return (
                <Link className="link" 
                  to={ {pathname:`book_description/${_id}/${title}`, state:item   }  } key={isbn} 
                >
                <Books
                  data={item}  
                />
                </Link>
            
          
              );
            })}
      
    
      </div>
        );
     }
}

export default BooksManager;