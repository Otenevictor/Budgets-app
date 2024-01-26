// import React from "react";
// import TableIdStore from "./TableIdStore"
// function TableId() {
//   const PriceCard2 = [
//     {
//       title: "order ",
//       price:"$ 92,312.20,",
//       description:"Next payout date: today,04:00pm,",
//       link: "View 13 orders,",
    
//     },
//     {
//         title: "Next Payout @",
//         price:"$ 92,312.20,",
//         description:"/",
//         link: "View 13 orders,",
      
//       },
//       {
//         title: "Next Payout @",
//         price:"$ 92,312.20,",
//         description:"/",
//         link: "View 13 orders,",
      
//       },
       
    
    
//   ];

//   return (
//     <>
//     <div className="">
//     <div className="d-flex">
//       {PriceCard2.map((card, index) => (
//         <TableIdStore
//           key={index}
//           title={card.title}
//           price={card.price}
//           description={card.description}
//           link={card.link}
//         />
//       ))}
//     </div>
//     </div>
//     </>
//   );
// }
const TableId = () => {
const headers =["Order ID", "Status","Transaction Id","Refund data"," Order amount",];
const data = [
    ["#281209", "Sucessful","131634495747","today, 0.8:45pm",      "$1,125.00"],
    ["#281208", "Sucessful","131634495747","Yesterday, 3:00pm",  "$1,125.00"],
    ["#281207", "Sucessful","131634495747","12 Jul, 2023, 03.00pm",  "$1,125.00"],
    ["#281206", "Sucessful","131634495747","12 Jul, 2023, 03.00pm",  "$1,125.00"],
    ["#281205", "Sucessful","131634495747","12 Jul, 2023, 03.00pm",  "$1,125.00"],
    ["#281204", "Sucessful","131634495747","12 Jul, 2023, 03.00pm",  "$1,125.00"]
// e47f0fbfe5
];
            
             
          return(
            <div className="table">
            <table className="table bg-secondary">
                <thead className="table text-danger ">
                    <tr className="bg-secondary">
                        {headers.map((header, index) => (
                            <th className="bg-secondary text-dark " key={index}>{header}</th>
                        ))}
                        </tr>
                        </thead>
                        <tbody className="">
                            {data.map((row, rowIndex)=> (
                                <tr className="bg-dark" key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                    <td className="bg-warning " key={cellIndex}>{cell}</td>

                                    ))}


                                    </tr>

                        ))}
                            </tbody>
</table>
</div>


          )


}

export default TableId;
