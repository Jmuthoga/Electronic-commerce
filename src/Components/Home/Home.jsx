import React, { useEffect, useState } from "react";
import "./Home.css";
import "./Rhome.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import img from "../../assets/image/T1.avif";
import { GrCart } from "react-icons/gr";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import img1 from "../../assets/image/Multi-Banner-1.avif";
import img2 from "../../assets/image/Multi-banner-2.avif";
import img3 from "../../assets/image/Multi-Banner-3.webp";
import img4 from "../../assets/image/Multi-banner-4.avif";
import img5 from "../../assets/image/Multi-Banner-5.webp";

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState([]);

  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  const filterCate = (x) => {
    const filterProduct = Homeproduct.filter((val) => {
      return val.type === x;
    });
    setTrendingProduct(filterProduct);
  };
  const allTrendingProducts = () => {
    setTrendingProduct(Homeproduct);
  };
  useEffect(() => {
    productCategory();
  });
  const productCategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === "featured";
    });
    setFeaturedProduct(featuredcategory);

    const topcategory = Homeproduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topcategory);
  };

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

      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h3>silver aluminium</h3>
            <h2>
              Apple <span>watch</span>
            </h2>
            <p>30% offer your first order</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProducts()}>
                    trending products
                  </h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filterCate("new")}>New</h3>
                  <h3 onClick={() => filterCate("featured")}>Featured</h3>
                  <h3 onClick={() => filterCate("top")}>top selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container">
                  {trendingProduct.map((val) => {
                    return (
                      <>
                        <div key={val.id} className="box">
                          <div className="img_box">
                            <img src={val.image} alt="" />
                            <div className="icon">
                              <div className="icon_box">
                                <FaEye
                                  className="icon1"
                                  onClick={() => detailpage(val)}
                                />
                              </div>
                              <div className="icon_box">
                                <FaRegHeart className="icon1" />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{val.Name}</h3>
                            <p>${val.price}</p>
                            <button
                              className="btn"
                              onClick={() => addtocart(val)}
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <button className="show-more">Show More</button>
            </div>
            <div className="right_box">
              <div className="right_container">
                <div className="testimonial">
                  <div className="head">
                    <h3>our testimonials</h3>
                  </div>
                  <div className="details">
                    <div className="img_box">
                      <img src={img} alt="testimonial" />
                    </div>
                    <div className="info">
                      <h3>John Muthoga</h3>
                      <h4>Web designer</h4>
                      <p>
                        My experience at
                        <span className="span">Muthoga Tech Electronics</span>
                        was outstanding! The staff's expertise helped me find
                        the perfect gadget quickly. The store's layout was
                        intuitive, making browsing effortless. Smooth checkout
                        and excellent service left a lasting impression. Highly
                        recommend for anyone in search of quality electronics
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="form">
                    <p>Join Our Mailing List</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    />
                    <button>Subscribe</button>
                    <div className="icon_box">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <div className="icon">
                        <FaInstagramSquare />
                      </div>
                      <div className="icon">
                        <FaTwitter />
                      </div>
                      <div className="icon">
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banners">
          <div className="container">
            <div className="left_box">
              <div className="box image1">
                <img src={img1} alt="banner" />
              </div>
              <div className="box image2">
                <img src={img2} alt="banner" />
              </div>
            </div>
            <div className="right_box">
              <div className="top ">
                <img className="image3" src={img3} alt="" />
                <div className="box image4">
                  <img className="image6" src={img4} alt="banner" />
                </div>
              </div>
              <div className="bottom">
                <img className="image5" src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((val) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={val.image} alt=""></img>
                      </div>
                      <div className="detail">
                        <h3>{val.Name}</h3>
                        <p>$ {val.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye
                              className="icon1"
                              onClick={() => detailpage(val)}
                            />
                          </button>
                          <button>
                            <FaRegHeart className="icon1" />
                          </button>
                          <button>
                            <GrCart onClick={() => addtocart(val)} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Featured Product</h2>
              </div>
              {featuredProduct.map((val) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={val.image} alt=""></img>
                      </div>
                      <div className="detail">
                        <h3>{val.Name}</h3>
                        <p>$ {val.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye
                              className="icon1"
                              onClick={() => detailpage(val)}
                            />
                          </button>
                          <button>
                            <FaRegHeart className="icon1" />
                          </button>
                          <button>
                            <GrCart onClick={() => addtocart(val)} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>
              {topProduct.map((val) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img-box">
                        <img src={val.image} alt=""></img>
                      </div>
                      <div className="detail">
                        <h3>{val.Name}</h3>
                        <p>$ {val.price}</p>
                        <div className="icon">
                          <button>
                            <FaEye
                              className="icon1"
                              onClick={() => detailpage(val)}
                            />
                          </button>
                          <button>
                            <FaRegHeart className="icon1" />
                          </button>
                          <button>
                            <GrCart onClick={() => addtocart(val)} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
