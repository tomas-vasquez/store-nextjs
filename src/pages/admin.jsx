import React, { useState } from "react";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Intruder from "../components/admin/Intruder";
import Loading from "../components/admin/Loading";
import classnames from "classnames";

import Products from "../components/admin/Products";
import PaymentReports from "../components/admin/PaymentReports";

function Admin() {
  const { data: user } = useUser();

  const credentialsRef = useFirestore().collection("credentials").doc(user.uid);
  let {
    isComplete,
    data: credential,
    hasEmitted,
  } = useFirestoreDocData(credentialsRef);

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (!isComplete) return <Loading texto="verificando credenciales....." />;

  if (credential.role) {
    return (
      // <div className="container ">
      //   <div>
      //     {/* <Nav tabs>
      //       <NavItem>
      //         <NavLink
      //           className={classnames({ active: activeTab === "1" })}
      //           style={{ cursor: "pointer" }}
      //           onClick={() => {
      //             toggle("1");
      //           }}
      //         >
      //           Productos
      //         </NavLink>
      //       </NavItem>
      //       <NavItem>
      //         <NavLink
      //           className={classnames({ active: activeTab === "2" })}
      //           style={{ cursor: "pointer" }}
      //           onClick={() => {
      //             toggle("2");
      //           }}
      //         >
      //           Reportes de pago
      //         </NavLink>
      //       </NavItem>
      //     </Nav> */}
      //     <TabContent activeTab={activeTab}>
      //       <TabPane tabId="1" className="pt-4">
      //         {/* <Products /> */}
      //       </TabPane>
      //       <TabPane tabId="2" className="pt-4">
      //         {/* <PaymentReports /> */}
      //       </TabPane>
      //     </TabContent>
      //   </div>
      // </div>
      <></>
    );
  }

  // return <Intruder />;
}
export default Admin;
