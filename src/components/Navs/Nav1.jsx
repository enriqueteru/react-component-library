import React from "react";
import Button1 from "../Buttons/Button1";

import ItemList1 from "./ItemList1";
import {button1} from '../../helpers/buttonText'

const Nav1 = ({ navList }) => {
  return (
    <div className="nav1">
      <div >
          <ul>
              { navList.map( item => <ItemList1 title={ item.title } /> )}
          </ul>
      
      </div>
      <div>
      <Button1 text={button1} />
      </div>
    </div>
  );
};

export default Nav1;
