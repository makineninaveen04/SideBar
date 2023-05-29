import React from 'react'
import Header from './Header'
 
   import Form from './Form'
const Todos1 = () => {
  return (
   <div className='container'>
        <div className='app-wrapper'>
           <div>
              <Header />
           </div>
           <div>
                <Form />
           </div>
        </div>
    </div>
  )
}

export default Todos1
