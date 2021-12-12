import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
      //   console.log(res);
    });
  };

  return (
    <Box>
      <Header></Header>
      <div className="add-product">
        <h2 style={{ fontSize: 37, marginTop: 53 }}>Please Add a Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <textarea {...register("description")} placeholder="Description" />
          <input type="number" {...register("price")} placeholder="Price" />
          <input {...register("img")} placeholder="Image url" />
          <input type="submit" />
        </form>
      </div>
      <Footer></Footer>
    </Box>
  );
};

export default AddProduct;
