import React, { useState } from "react";
import "./Shop.css";
import "./Rshop.css";
import img1 from "../../assets/image/shop_left.avif";
import img2 from "../../assets/image/shop_top.webp";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState([]);

  const detailpage = (product) => {
    const detaildata = [{ product }];
    const productdetail = detaildata[0]["product"];

    setDetail(productdetail);
    setShowDetail(true);
  };
  const closedetail = () => {
    setShowDetail(false);
  };
  return (
    <>
      {showDetail ? (
        <>
          <div className="product_detail">
            <button className="close_btn" onClick={closedetail}>
              <IoMdClose />
            </button>
            <div className="container">
              <div className="img_box">
                <img src={detail.image} alt=""></img>
              </div>
              <div className="info">
                <h4>{detail.cat}</h4>
                <h2>{detail.Name}</h2>
                <p>
                  A Screen Everyone Will Love: Whether your family is streaming
                  or video chatting with friends tablet A8...
                </p>
                <h3>${detail.price}</h3>
                <button onClick={() => addtocart(detail)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className="shop">
        <h2># Shop</h2>
        <p>Home . Shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>All Categories</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allcatefilter()}># All</li>
                  <li onClick={() => Filter("tv")}># tv</li>
                  <li onClick={() => Filter("laptop")}># laptop</li>
                  <li onClick={() => Filter("watch")}># watch</li>
                  <li onClick={() => Filter("speaker")}># speaker</li>
                  <li onClick={() => Filter("electronics")}># electrolics</li>
                  <li onClick={() => Filter("headphone")}># headphone</li>
                  <li onClick={() => Filter("phone")}># phone</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img_box">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_container">
                {shop.map((val) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={val.image} alt="" />
                          <div className="icon">
                            <li>
                              <FaRegHeart />
                            </li>
                            <li onClick={() => detailpage(val)}>
                              <FaEye />
                            </li>
                          </div>
                        </div>
                        <div className="details">
                          <h3>{val.Name}</h3>
                          <p>${val.price}</p>
                          <button onClick={() => addtocart(val)}>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
