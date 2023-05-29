// import Navbar from "./Components/Navbar"

// function App() {
//    let Component
//    switch (window.location.pathname) {
//       case "/":
//          Component = App
//          break;
//       case "/pricing":
//          Component = Pricing
//          break;
//       case "/about":
//          Component = About
//          break;
//    }
//    return (
//       <>
//          < Navbar />
//          <Component />
//       </>
     
//    )
// }
// export default App
import Navbar from "./Components/Navbar"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";

function App() {
   let component
   switch (window.location.pathname) {
      case "/":
         component = <Home />
         break
      case "/pricing":
         component = <Pricing />
         break
      case "/about":
         component = <About />
         break
   }
   return (
      <>
         < Navbar />
         <div className="container">
             {component }
         </div>
        
      </>
     
   )
}
export default App








