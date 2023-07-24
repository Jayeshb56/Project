import React from 'react'
import ".//shop.css"
import Shopcard from './shopdata.json';

function Shop() {

    
  return (
    
   
            <section>
                <div >
            
                
                  {  
                 Shopcard.map(shopcard => {
                    return(
                        <div className='box' key={shopcard.id}>
                            <img className='image' src={shopcard.img} />
                        <h3>{shopcard.title}</h3>
                        <p>{shopcard.text}</p>
                        
                        <button type="button" class="btn btn-primary btn1 ">BUY NOW</button>
                    </div>
                    )
                 }
                    )}
                    


        
                    
                 
            </div>
           
            </section>
      
  )
}

export default Shop;