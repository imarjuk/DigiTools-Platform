import './App.css'
import Banner from './component/banner/Banner'
import Footer from './component/footer/Footer'
import GetStarted from './component/getStarted/GetStarted'
import Navbar from './component/navbar/Navbar'
import Tools from './component/tools/Tools'

const getTools = async()=>{
  const res = await fetch('/tools.json')
  return res.json();
}

  const toolsPromise = getTools();
function App() {
  

  return (
    <>
     
    <Navbar></Navbar>
    <Banner></Banner>
    <Tools toolsPromise={toolsPromise}></Tools> 
    {/* <GetStarted></GetStarted> */}
    <Footer></Footer>
  
    

    </>
  )
}

export default App
