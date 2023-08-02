import React from "react";
import "../index.css";
import { Row, Col } from "react-bootstrap";

const Catageory = ({ filterByCat, allCat }) => {
  const onFilter = (cat) => {
    filterByCat(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCat.length >= 1 ? (
          allCat.map((cat, index) => {
            // Added index parameter in map function
            return (
              <div key={index}>
                <button className="btn mx-2" onClick={() => onFilter(cat)}>
                  {cat}
                </button>
              </div>
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات</h4>
        )}
      </Col>
    </Row>
  );
};

export default Catageory;
