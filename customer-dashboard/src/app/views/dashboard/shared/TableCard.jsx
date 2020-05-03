import React from "react";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const TableCard = () => {
  const productList = [
    {
      imgUrl: "/assets/images/products/face-mask.png",
      name: "face mask",
      price: 1.99,
      available: 15
    },
    {
      imgUrl: "/assets/images/products/n95-mask.jpg",
      name: "N95 Mask",
      price: 14.99,
      available: 7
    },
    {
      imgUrl: "/assets/images/products/purell.jpeg",
      name: "Purell Hand Sanitizer",
      price: 2.99,
      available: 30
    },
    {
      imgUrl: "/assets/images/products/tylenol.png",
      name: "Tylenol Extra Strength",
      price: 11.99,
      available: 10
    },
    {
      imgUrl: "/assets/images/products/charmin.jpeg",
      name: "Charmin Bathroom Tissue",
      price: 10.99,
      available: 5
    }
  ];

  return (
    <Card elevation={3} className="pt-5 mb-6">
      <div className="card-title px-6 mb-3">top selling products</div>
      <div className="overflow-auto">
        <Table className="product-table">
          <TableHead>
            <TableRow>
              <TableCell className="px-6" colSpan={4}>
                Name
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                Price/Qty
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                Stock Status
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" colSpan={4} align="left">
                  <div className="flex items-center">
                    <img
                      className="circular-image-small"
                      src={product.imgUrl}
                      alt="user"
                    />
                    <p className="m-0 ml-8">{product.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                  $
                  {product.price > 999
                    ? (product.price / 1000).toFixed(1) + "k"
                    : product.price}
                </TableCell>

                <TableCell className="px-0" align="left" colSpan={2}>
                  {product.available ? (
                    product.available < 20 ? (
                      <small className="border-radius-4 bg-secondary text-white px-2 py-2px ">
                        {product.available} available
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-primary text-white px-2 py-2px ">
                        in stock
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-error text-white px-2 py-2px ">
                      out of stock
                    </small>
                  )}
                </TableCell>
                <TableCell className="px-0" colSpan={1}>
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default TableCard;
