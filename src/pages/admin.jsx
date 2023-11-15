import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

import Products from "../components/admin/Products";
import PaymentReports from "../components/admin/PaymentReports";
import Categories from "../components/admin/Categories";
import Head from "next/head";
import { siteMetadata } from "../../site.config";

function Admin() {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>{siteMetadata.title} | Admin</title>
        <link rel="icon" href="/favicon 2.svg" />
      </Head>

      <div className="container">
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  toggle("1");
                }}
              >
                Productos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  toggle("2");
                }}
              >
                Reportes de pago
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  toggle("3");
                }}
              >
                Categories
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="pt-4">
              <Products />
            </TabPane>
            <TabPane tabId="2" className="pt-4">
              <PaymentReports />
            </TabPane>
            <TabPane tabId="3" className="pt-4">
              <Categories />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </>
  );
}

export default Admin;
