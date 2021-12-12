import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
// import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Product from "../../Home/Product/Product";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/purchases?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/purchases?email=${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are you sure you want to delete ?");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
  };

  return (
    <div>
      <h2>My Orders : {orders.length}</h2>
      <NavLink style={{ textDecoration: "none" }} to="/home">
        <Button
          variant="contained"
          style={{ width: "100%", backgroundColor: "#2a9d8f" }}
        >
          Go Home
        </Button>
      </NavLink>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Order table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>

              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>

              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.displayName}
                </TableCell>

                <TableCell align="right">{row.productName}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>

                <TableCell align="right">{row.address}</TableCell>
                {/* {products.map((product) => (
                  <Box key={product._id}>
                    <h3 className="text-red-900 font-semibold text-3xl mt-9">
                      {product.name}
                    </h3> */}

                <Button variant="contained" onClick={() => handleDelete}>
                  Delete
                </Button>
                {/* </Box>
                ))} */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;
