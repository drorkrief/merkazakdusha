import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AdminPanel extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>ניהול האתר</h1> <h3>הוספת מוצר</h3>
        <div
          className="container"
          style={{ direction: "rtl", textAlign: "right" }}
        >
          <form>
            <Row>
              <Col sm={3}>
                <label htmlFor="category">בחר קטגוריה:</label>
              </Col>
              <Col>
                {" "}
                <select id="category">
                  <option value="">בחר</option>
                  {this.props.category
                    ? this.props.category.map((it, index) => (
                        <option key={index} value={it.name}>
                          {it.name}
                        </option>
                      ))
                    : ""}
                </select>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                {" "}
                <label htmlFor="category">שם המוצר:</label>
              </Col>
              <Col>
                <input type="text"></input>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <label htmlFor="category">מחיר המוצר:</label>
              </Col>
              <Col>
                <input type="text"></input>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <label htmlFor="category">תיאור המוצר:</label>
              </Col>
              <Col>
                <input type="text"></input>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <label htmlFor="category">חברה/מותג:</label>
              </Col>
              <Col>
                <input type="text"></input>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <label htmlFor="img">תמונה:</label>
              </Col>
              <Col>
              <input type="file" id="img" name="img" accept="image/*"/>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
