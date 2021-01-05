import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

import AdvertisementformComponent from "./advertisementform.component";
import UseradvertisementsComponent from "./useradvertisements.component";

export default function UserRightComponent() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="usercomponents">
      <Nav tabs style={{ fontWeight: "bold", color: "#016385" }}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            POST AD
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            ADVERTISEMENTS
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <AdvertisementformComponent />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <UseradvertisementsComponent />
        </TabPane>
      </TabContent>
    </div>
  );
}
