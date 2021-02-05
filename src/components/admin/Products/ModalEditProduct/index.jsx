import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import MainInformation from "./MainInformation";
import Description from "./Description";
import Especifications from "./Especifications";
import Images from "./Images";

function ModalEditProduct({ product, openModalEdit, toggleOpenModalEdit }) {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Modal isOpen={openModalEdit} toggle={toggleOpenModalEdit} size="lg">
      <ModalHeader toggle={toggleOpenModalEdit}>Editar producto</ModalHeader>
      <ModalBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              style={{ cursor: "pointer" }}
              onClick={() => {
                toggle("1");
              }}
            >
              informacion
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
              imagenes
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
              descripcion
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              style={{ cursor: "pointer" }}
              onClick={() => {
                toggle("4");
              }}
            >
              especificaciones
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="pt-4">
            <MainInformation
              product={product}
              toggleOpenModalEdit={toggleOpenModalEdit}
            />
          </TabPane>
          <TabPane tabId="2" className="pt-4">
            <Images
              product={product}
              toggleOpenModalEdit={toggleOpenModalEdit}
            />
          </TabPane>
          <TabPane tabId="3" className="pt-4">
            {activeTab === "3" && (
              <Description
                product={product}
                toggleOpenModalEdit={toggleOpenModalEdit}
              />
            )}
          </TabPane>

          <TabPane tabId="4" className="pt-4">
            {activeTab === "4" && (
              <Especifications
                product={product}
                toggleOpenModalEdit={toggleOpenModalEdit}
              />
            )}
          </TabPane>
        </TabContent>
      </ModalBody>
    </Modal>
  );
}

export default ModalEditProduct;
