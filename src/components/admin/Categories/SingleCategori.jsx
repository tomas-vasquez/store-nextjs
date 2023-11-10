import { useState } from "react";
import TagsInput from "react-tagsinput";
import { Nav, NavItem, NavLink, Button, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

const SingleCategorie = () => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="card shadow mb-3">
      <div className="card-body p-3">
        <input type="text" class="form-control " placeholder="Category name" />
      </div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            style={{ cursor: "pointer" }}
            onClick={() => {
              toggle("1");
            }}
          >
            Sub-categories
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
            Actions
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" className="p-2">
          <TagsInput
            value={tags}
            onChange={(tags) => setTags(tags)}
            // className="form-control react-tag input"
            inputValue={tag}
            onChangeInput={(tag) => setTag(tag)}
          />
        </TabPane>
        <TabPane tabId="2" className="p-2">
          <Button>Delete</Button>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default SingleCategorie;
