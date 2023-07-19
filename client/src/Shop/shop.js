import React, { useState } from 'react'
import ".//shop.css"

function Shop() {

    const [shopcards] = useState([
        {
            title:'Moto g72',
            text: 'Frosted Blue (8Gb, 256Gb)',
            img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/6/g/-original-imagh29eknx3cavh.jpeg?q=70"

        },
        {
            title:'Moto g73',
            text: 'Midnight Blue (6Gb, 128Gb)',
            img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/h/g73-5g-paux0023in-motorola-original-imagngjh7epkhqdg.jpeg?q=70"
        },
        {
            title:'Moto edge 30pro',
            text: 'Meteor Grey (8Gb, 128Gb) ',
            img:"https://rukminim2.flixcart.com/image/312/312/l2xmqvk0/mobile/o/r/n/-original-image674ydfks6se.jpeg?q=70"
        },
        {
            title:'Moto edge 40',
            text: 'Nebula Green (6Gb, 128Gb)',
            img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70" 
        },
    ])
  return (
    
        <div>
            <section>
                <div className='containerc'>
            <div className='shopcards'>
                
                    {
                    shopcards.map((shopcard , i ) => (
                        <div key={i} className='shopcard card'>
                            <img src={shopcard.img} class="img-fluid"/>
                        <h3>{shopcard.title}</h3>
                        <p>{shopcard.text}</p>
                        
                        <button type="button" class="btn btn-primary btn1 ">BUY NOW</button>
                    </div>
                     
                    ))
}

        
                    
              
            </div>
            </div>
            </section>
        </div>
  )
}

export default Shop;