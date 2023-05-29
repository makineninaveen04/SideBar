// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { GiStandingPotion } from "react-icons/gi";
// import { AiFillPlusCircle } from "react-icons/ai";

// const Section1 = () => {
//   return (
//      <>
//         <h1 className='section'>section</h1>
//         <hr />
        
//          <Container fluid="md">
//       <Row>
//               <Col  >
//                  <button ><h3>List:Things to Buy</h3></button>
               
//                 <div className="row">
//   <div className="col-lg-12">
//     <div className="card">
//                           <div className="card-body">
//                              <h3><GiStandingPotion/>Add Todo< AiFillPlusCircle/></h3>
//         <h5 className="card-title">Add to description</h5>
       
//       </div>
//     </div>
//   </div>
 
// </div>
//               </Col>
//               <Col classNameName='xs=6 md=4'>
//                  <button ><h3 >List :  Empty  List</h3></button>
//                 <div className="row">
//   <div className="col-lg-12">
//     <div className="card">
//                           <div className="card-body">
//                              <h3><GiStandingPotion/>Add Todo< AiFillPlusCircle/></h3>
//         <h5 className="card-title">Add to description</h5>
       
//       </div>
//     </div>
//   </div>
 
// </div>
              
//               </Col>
//               <Col className='xs=6 md=4 '>
//                  <button ><h3>Add Todo-List</h3></button>
                 
//               </Col>
//       </Row>
//     </Container>
//      </>
//   )
// }
// export default Section1;


import React from 'react'

const Section1 = () => {
  return (
     <form>
        <input type="text" placeholder='enter todo...' className='task-input' />
        <button className='button-add' type = "submit">Add</button>
     </form>
  )
}

export default Section1
