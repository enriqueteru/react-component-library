import React from "react";
import {DetailsBlock} from "../";


const SectionTeam = () => {
  return (
    <div className="section-team">
   
      <div>

             <div className="section-team__center-content">
               <h2  style={{textAlign:'center'}}  className="h2">Meet the <span className="section-team__span"> Team </span>  </h2>
             </div>

             <div className="section-team__two-columns">
               <h2 className=" section-team__two-columns__col h2">The <span className="section-team__span">Founders</span></h2>
               <div className="section-team__two-columns__col h2"> 
               
               <div className="section-team__gallery">
                
                <DetailsBlock 
                backgroundImg={'/assets/components/blocks/bg-detail-block3.jpg'} 
                name={'Alicia Collbinoms'} 
                job={'CTO enterprise'} />
                
                <DetailsBlock
                backgroundImg={'/assets/components/blocks/bg-detail-block2.jpg'} 
                name={'Mark Zumchember'}
                job={'CEO enterprise'}/>
                
                <DetailsBlock
                 backgroundImg={'/assets/components/blocks/bg-detail-block1.jpg'} 
                 name={'Anabel Jazzman'} 
                 job={'Marketing enterprise'}/>
               
               </div>
               </div>
             </div>

             <div>
                 <div className="section-team__line-and-text"> 
                     <div className="h2">Team <span className="strong"> Members </span></div>
                     <div className="blue-line-max"></div>
                 </div>

                 <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                     <div>
                         <div>
                         <h2 className="h3"> Simon Pedrazini</h2>
                         <p className="p"> Actual Job</p>
                         </div>
                         <div>
                         <h2 className="h3"> Simon Pedrazini</h2>
                         <p className="p"> Actual Job</p>
                         </div>
                         
                     </div>
                         <div className="divider-small"></div>
                            <div>  
                              <div>
                                 <h2 className="h3"> Simon Pedrazini</h2>
                                 <p className="p"> Actual Job</p>
                             </div>
                             <div>
                                 <h2 className="h3"> Simon Pedrazini</h2>
                                 <p className="p"> Actual Job</p>
                            </div>
                     </div>

                     <div className="divider-small"></div>
                     <div>   <div>
                         <h2 className="h3"> Simon Pedrazini</h2>
                         <p className="p"> Actual Job</p>
                         </div>
                         <div>
                         <h2 className="h3"> Simon Pedrazini</h2>
                         <p className="p"> Actual Job</p>
                         </div></div>
                 </div>
            </div>

      </div>
    </div>
  );
};

export default SectionTeam;
