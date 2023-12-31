import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../reduxFolder/Slice/productSice";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./ProductList.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.status);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === "loading") {
    const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
    return (
      <Spin
        style={{ position: "absolute", top: "40%", left: "50%" }}
        indicator={antIcon}
      />
    );
  }

  return (
    <div className="productList">
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
