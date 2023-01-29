import Main4services from "./main4services"

import servicesdata from "./servicesdata"
import "./main4.css"
function Main4(){

    const data=servicesdata.map(item =>{

        return(
            
            <Main4services
            contenta={item.contenta}
            content1={item.content1}
              
         
            />
        )

    })
    return(
        <>

          <div className="main-main3">
      <div className="main4-head">Services</div>
      <div className="main-main3-cards">
           {data}
      </div>
       

           
        
          
</div>
        </>
    )
}
export default Main4