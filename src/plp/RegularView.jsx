import React from "react";
import { Card } from 'react-bootstrap'

const getImgUrl = (index) => `https://loremflickr.com/300/300?random=${index}`

export const RegularView = ({ data }) => {
  return (
    <div className="container-fluid">
      <div className="row">
      {data.map((product, index) => {
        return (
          <>
            <Card className="col px-0">
              <Card.Img variant="top" src={getImgUrl(index)} loading="lazy" />
            </Card>
            {(index + 1) % 4 === 0 && <div className="w-100"></div>}
          </>
        );
      })}
      </div>
    </div>
  );
};
