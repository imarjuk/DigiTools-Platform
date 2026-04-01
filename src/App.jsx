import { useState } from 'react'
import './App.css'
import Banner from './component/banner/Banner'
import Cart from './component/cart/Cart'
import Footer from './component/footer/Footer'
import GetStarted from './component/getStarted/GetStarted'
import Navbar from './component/navbar/Navbar'
import Tools from './component/tools/Tools'
import ToolsHead from './component/tools/ToolsHead'
import BannerBottom from './component/banner/BannerBottom'
import PriceCard from './component/pricingCard/PriceCard'

const getTools = async () => {
  const res = await fetch('/tools.json')
  return res.json();
}

const toolsPromise = getTools();
function App() {

  const [activeTab, setActiveTab] = useState("Products")
  const [carts, setCarts] = useState([])


  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <BannerBottom></BannerBottom>
      <ToolsHead></ToolsHead>
      <div className="tabs tabs-box justify-center bg-transparent  ">
        <input type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "Products" ? 'bg-[#9514FA] text-white' : ''}`}
          aria-label="Products"
          onClick={() => setActiveTab("Products")}
          defaultChecked />

        <input type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "Cart" ? 'bg-[#9514FA] text-white' : ''}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("Cart")} />
      </div>

      {activeTab === "Products" && <Tools toolsPromise={toolsPromise} 
      carts={carts} 
      setCarts={setCarts}></Tools>}

      {activeTab === "Cart" && <Cart carts={carts}   
      setCarts={setCarts}></Cart>}
      <GetStarted></GetStarted>
      <PriceCard></PriceCard>
      <Footer></Footer>



    </>
  )
}

export default App
