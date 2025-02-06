// import React from "react";
// import styled from "styled-components";
// // import { RiCustomerService2Fill } from "react-icons/ri";


// // import PureCounter from "@srexi/purecounterjs";

// // import { RiCustomerService2Fill } from "react-icons/ri";

// // Components
// import PricingTable from "../Elements/PricingTable";

// export default function Pricing() {
//   return (
//     <Wrapper id="pricing">
//       <div className="whiteBg">
//         <div className="container">
//           <HeaderInfo>
//             <h1 className="font40 extraBold">Check Our Pricing</h1>
//             <p className="font13">
//             Increplus Technologies is a trusted partner for enhancing your business with IT service and support.
//               <br />
//               We offer a variety of IT services to keep businesses connected and up-to-speed at all times.
//             </p>
//           </HeaderInfo>
//           <TablesWrapper className="flexSpaceNull">
//             <TableBox>
//               <PricingTable
//                 icon="roller"
//                 price="Free"
//                 icons="customer"

//                 title="Free IT Consultation"
//                 text="Not sure what you need? Grab 30 minutes with us and we will work with you to understand your goals, and to develop a proposal and price estimate."
//                 offers={[
//                   { name: "30 Minutes", cheked: true },
//                   { name: "Consulting", cheked: true },
//                   { name: "24/7 Support", cheked: true },
//                   // { name: "Product", cheked: false },
//                   // { name: "Product Offer", cheked: false },
//                 ]}
//                 action={() => alert("clicked")}
//               />
//              </TableBox>
//               <TableBox>
//               <span  className="purecounter" data-purecounter-start="0" data-purecounter-end="1500" data-purecounter-duration="4">
//               {/* <RiCustomerService2Fill  />  */}
//             </span> Support+ 
//               <PricingTable
             
//               />
//             </TableBox> 
           
//             <TableBox>
//               <PricingTable
//                 icon="monitor"
//                 price="$25"
//                 icons="customerlive"
//                 title="Remote IT Support"
//                 text="IncrePlus Technologies is here to help you with products including Office 365, Windows, IT hardware, and more."
//                 offers={[
//                   { name: "1 Hour", cheked: true },
//                   { name: "Live IT Support", cheked: true },
//                   { name: "24/7 Support", cheked: true },
//                   // { name: "Product", cheked: true },
//                   // { name: "Product Offer", cheked: false },
//                 ]}
//                 action={() => alert("clicked")}
//               />
//             </TableBox>
//           </TablesWrapper>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
//   width: 100%;
  
//   padding: 50px 0;
// `;
// const HeaderInfo = styled.div`
//   margin-bottom: 50px;
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;
// const TablesWrapper = styled.div`
//   @media (max-width: 860px) {
//     flex-direction: column;
//   }
// `;
// const TableBox = styled.div`
//   width: 31%;
//   @media (max-width: 860px) {
//     width: 100%;
//     max-width: 370px;
//     margin: 0 auto
//   }
// `;






import React, { useEffect } from "react";
import styled from "styled-components";
import PureCounter from "@srexi/purecounterjs";
import { FaUsers } from "react-icons/fa"; // Icon import

// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  useEffect(() => {
    // Initialize PureCounter
    new PureCounter();
  }, []);

  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
              Increplus Technologies is a trusted partner for enhancing your business with IT service and support.
              <br />
              We offer a variety of IT services to keep businesses connected and up-to-speed at all times.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="Free"
                icons="customer"
                title="Free IT Consultation"
                text="Not sure what you need? Grab 30 minutes with us and we will work with you to understand your goals, and to develop a proposal and price estimate."
                offers={[
                  { name: "30 Minutes", cheked: true },
                  { name: "Consulting", cheked: true },
                  { name: "24/7 Support", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>

            <TableBox>
              <CounterWrapper>
                <FaUsers size={100} color="#4A90E2" /> {/* Icon */}
                <span className="purecounter" data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="4">
                  {/* Counter */}
                </span>
                <h1>500+ Clients</h1>
              </CounterWrapper>
            </TableBox>

            <TableBox>
              <PricingTable
                icon="monitor"
                price="$25"
                icons="customerlive"
                title="Remote IT Support"
                text="IncrePlus Technologies is here to help you with products including Office 365, Windows, IT hardware, and more."
                offers={[
                  { name: "1 Hour", cheked: true },
                  { name: "Live IT Support", cheked: true },
                  { name: "24/7 Support", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  
  .purecounter {
    font-size: 40px;
    font-weight: bold;
    margin: 10px 0;
  }

  h3 {
    font-size: 18px;
    color: #333;
  }

  svg {
    margin-bottom: 10px;
  }
`;





// import React, { useEffect } from "react";
// import styled from "styled-components";
// import PureCounter from "@srexi/purecounterjs";
// import { FaUsers } from "react-icons/fa"; // Icon import

// // Components
// import PricingTable from "../Elements/PricingTable";

// export default function Pricing() {
//   useEffect(() => {
//     // Initialize PureCounter
//     new PureCounter();
//   }, []);

//   return (
//     <Wrapper id="pricing">
//       <div className="whiteBg">
//         <div className="container">
//           <HeaderInfo>
//             <h1 className="font40 extraBold">Check Our Pricing</h1>
//             <p className="font13">
//               Increplus Technologies is a trusted partner for enhancing your business with IT service and support.
//               <br />
//               We offer a variety of IT services to keep businesses connected and up-to-speed at all times.
//             </p>
//           </HeaderInfo>
//           <TablesWrapper className="flexSpaceNull">
//             <TableBox>
//               <PricingTable
//                 icon="roller"
//                 price="Free"
//                 icons="customer"
//                 title="Free IT Consultation"
//                 text="Not sure what you need? Grab 30 minutes with us and we will work with you to understand your goals, and to develop a proposal and price estimate."
//                 offers={[
//                   { name: "30 Minutes", cheked: true },
//                   { name: "Consulting", cheked: true },
//                   { name: "24/7 Support", cheked: true },
//                 ]}
//                 action={() => alert("clicked")}
//               />
//             </TableBox>

//             <TableBox>
//               <CounterWrapper>
//                 <FaUsers size={40} color="#4A90E2" /> {/* Icon for Clients */}
//                 <span className="purecounter" data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="4">
//                   {/* Counter for Clients */}
//                 </span>
//                 <h3>500+ Clients Served</h3>

//                 <FaUsers size={40} color="#FF9F00" /> {/* Icon for Views */}
//                 <span className="purecounter" data-purecounter-start="0" data-purecounter-end="650" data-purecounter-duration="4">
//                   {/* Counter for Views */}
//                 </span>
//                 <h3>650+ Views</h3>
//               </CounterWrapper>
//             </TableBox>

//             <TableBox>
//               <PricingTable
//                 icon="monitor"
//                 price="$25"
//                 icons="customerlive"
//                 title="Remote IT Support"
//                 text="IncrePlus Technologies is here to help you with products including Office 365, Windows, IT hardware, and more."
//                 offers={[
//                   { name: "1 Hour", cheked: true },
//                   { name: "Live IT Support", cheked: true },
//                   { name: "24/7 Support", cheked: true },
//                 ]}
//                 action={() => alert("clicked")}
//               />
//             </TableBox>
//           </TablesWrapper>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
//   width: 100%;
//   padding: 50px 0;
// `;

// const HeaderInfo = styled.div`
//   margin-bottom: 50px;
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;

// const TablesWrapper = styled.div`
//   @media (max-width: 860px) {
//     flex-direction: column;
//   }
// `;

// const TableBox = styled.div`
//   width: 31%;
//   @media (max-width: 860px) {
//     width: 100%;
//     max-width: 370px;
//     margin: 0 auto;
//   }
// `;

// const CounterWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding: 20px;
  
//   .purecounter {
//     font-size: 40px;
//     font-weight: bold;
//     margin: 10px 0;
//   }

//   h3 {
//     font-size: 18px;
//     color: #333;
//   }

//   svg {
//     margin-bottom: 10px;
//   }
// `;
