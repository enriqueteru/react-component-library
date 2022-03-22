import Button1 from "../Buttons/Button1";

import ItemList1 from "./ItemList1";
import { button1 } from "../../helpers/buttonText";
import useScrollPosition from "../../hooks/useScrollPosition";

const Nav1 = ({ navList }) => {
  const ScrollPosition = useScrollPosition();
  console.log(ScrollPosition);

  return (
    <>
      {ScrollPosition >= 100 && (
        <div
          style={{ backgroundColor: "white", transition: "300ms" }}
          className="nav1"
        >
          <div>
            <ul>
              {navList.map((item) => (
                <ItemList1 key={item.title} title={item.title} />
              ))}
            </ul>
          </div>
          <div>
            <Button1 text={button1} />
          </div>
        </div>
      )}

      {ScrollPosition <= 200 && (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            transition: "300ms",
          }}
          className="nav1"
        >
          <div>
            <ul>
              {navList.map((item) => (
                <ItemList1 key={item.title} title={item.title} />
              ))}
            </ul>
          </div>
          <div>
            <Button1 text={button1} />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav1;
