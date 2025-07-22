import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import { FAQ } from "./FAQ";

export const Accordian = () => {
  const [data, setData] = useState([]);
  const [activeID, setActiveID] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  console.log(data);

  const handleButton = (id) => {
    setActiveID((prev) => prev === id ? false : id)
  };

  return (
    <>
      <h1>The Accordian</h1>
      <ul className="section-accordion">
        {data.map((cur) => {
          return <FAQ key={cur.id} cur={cur} isActive = { activeID === cur.id} toggleButton = {() => handleButton(cur.id)}/>;
        })}
      </ul>
    </>
  );
};
