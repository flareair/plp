import React from "react";
import { Card } from "react-bootstrap";

const getImgUrl = (index) => `https://loremflickr.com/300/300/grayscale?random=${index}`;
// const getImgUrl = (index) => `https://placeimg.com/300/300/arch/grayscale`;

export const RegularView = ({ data, itemsPerRow, showInfo }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((product, index) => {
          return (
            <>
              <Card className="col px-0" key={product.id}>
                <Card.Img variant="top" src={getImgUrl(index)} loading="lazy" />
                {showInfo && (
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {product.price + "$"}
                    </Card.Subtitle>
                  </Card.Body>
                )}
              </Card>
              {(index + 1) % itemsPerRow === 0 && (
                <div className="w-100" key={"row_" + product.id}></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
