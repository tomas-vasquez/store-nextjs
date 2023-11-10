import { useState } from "react";
import { Row, Col } from "reactstrap";
import SingleCategorie from "./SingleCategori";

const Categories = () => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Row>
        {["", "", "", "", "", "", "", ""].map(() => (
          <Col xs="4">
            <SingleCategorie />
          </Col>
        ))}
      </Row>

      <div className="card shadow">
        <div className="card-body">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">
              Add category
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
