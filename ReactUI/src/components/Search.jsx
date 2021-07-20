import React, { useState, useEffect } from "react";
import { getImage, sendSearch } from "./services";
import InputFormat from "./inputFormat/inputFormat";
import TableResult from "./tableResult/tableResult";
import CardInput from "./card/cardComplete";
import InputFile from "./inputFile/inputFile";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const Search = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function loadImage() {
      const response = await getImage();
      console.log(response);
      //setImage(response.data);
    }
    loadImage();
  }, []);

  return (
    <div className="App">
      <body className="App-header">
        <Container>
          <Row>
            <Col xs={6}>
              <Form controlId="formFile" className="mb-3" action={sendSearch} method="post" class="needs-validation" novalidate>
                <CardInput
                  componentReact={[
                    <InputFormat
                      type="text"
                      label="Word"
                      placeholder="Word"
                      msg="Write your word"
                      id="searchWord"
                      name="searchWord"
                    />,
                    <InputFormat
                      type="text"
                      label="Neuronal network model"
                      placeholder="Neuronal network model"
                      msg="Enter the Neuronal network"
                      id="neuronalNnetwork"
                      name="neuronalNnetwork"
                    />,
                    <InputFormat
                      type="number"
                      label="Percentage"
                      placeholder="Percentage"
                      msg="Enter the percentage of precision"
                      id="percentaje"
                      name="percentaje"
                    />,
                    <InputFile
                      fileMessage="Pick your document"
                      name="imageFile"
                      typeAccepted="image/jpeg"
                    />,
                    <Button
                      ad={Col}
                      variant="success"
                      type="submit"
                      className="mb-4"
                    >
                      Accept
                    </Button>,
                  ]}
                  style={{ color: "black" }}
                  textHeader="Data"
                />
              </Form>
            </Col>
            <Col xs={6}>
              <CardInput
                componentReact={
                  <TableResult
                    tableRow={["Algorithm", "Word", "Percentage", "Image"]}
                    tableData={[
                      image.algorithm,
                      image.searchWord,
                      image.percentage,
                      <img src={image.image} alt="" width="85" height="90" />
                    ]}
                  />
                }
                textHeader="Tables"
                style={{ color: "black" }}
              />
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
};

export default Search;
