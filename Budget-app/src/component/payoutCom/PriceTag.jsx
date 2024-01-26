// import React from "react";
import PriceTagStore from "./PriceTagStore"
function PriceTag() {
  const PriceCard1 = [
    {
      title: "Next Payout @",
      price:" ¥92,312.20,",
      description:"Next payout date: today,04:00pm,",
      link: "View 13 orders,",
    
    },
    {
        title: "Next Payout @",
        price:"¥92,312.20,",
        description:"/",
        link: "View 13 orders,",
      
      },
      {
        title: "Next Payout @",
        price:"¥92,312.20,",
        description:"/",
        link: "View 13 orders,",
      
      },
       
    
    
  ];

  return (
    <>
    <div className="">
    <div className="d-flex">
      {PriceCard1.map((card, index) => (
        <PriceTagStore
          key={index}
          title={card.title}
          price={card.price}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
    </div>
    </>
  );
}

export default PriceTag;
