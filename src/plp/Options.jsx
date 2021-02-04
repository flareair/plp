import React from "react";
import { ButtonGroup, Button, Form } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';

export const Options = ({
  setView,
  setItemsPerRow,
  itemsPerRow,
  showInfo,
  setShowInfo,
}) => {
  const handleRowsChange = (event) => {
    setItemsPerRow(event.target.value);
  };

  const handleInfoChange = (event) => {
    setShowInfo(event.target.checked)
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => setView("regular")}>
              Regular
            </Button>
            <Button variant="secondary" onClick={() => setView("zoom")}>
              Zoom
            </Button>
            <Button variant="secondary" onClick={() => setView("grid")}>
              Grid
            </Button>
          </ButtonGroup>
        </div>
        <div className="col">
          <Form onSubmit={() => {}}>
            <RangeSlider min="1" max="15" onChange={handleRowsChange} value={itemsPerRow}/>
            <Form.Group controlId="">
              <Form.Check type="checkbox" label="Toggle info" onChange={handleInfoChange} checked={showInfo}/>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};
