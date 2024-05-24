import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const CategoryProduct = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    const { name } = useParams()
    const [productData, setProductData] = useState([])
    const handleData = async () => {
        try {
            const response = await axios.get(`https://api.camrosteel.com/api/v1/Products/${name}`);
            console.log(response.data.data);
            setProductData(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleData()
    }, [name])

    return (
        <>

            <section class="bread">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>{name}</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item"><Link to="/categories">Categories</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{name}</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="container mt-5">

                <div className="row">
                    <div className="grid-4">
                        {productData && productData.map((item, index) => (
                            <div className="singleProduct" key={index}>
                                <Link to={`/Products/${item.productName}/${item._id}`}>
                                    <div className="img">
                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            src={item.images[0].img}
                                            onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }}
                                            className="front-img"
                                            alt={item.productName}
                                        />
                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            src={item.images[1].img}
                                            onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }}
                                            className="back-img"
                                            alt={item.productName}
                                        />
                                        <span className={`property ${item.property === "Top Selling" ? 'topSelling' : ''} ${item.property === "Trending" ? 'topSelling' : ''} ${item.property === "New Arrival" ? 'bestseller' : ''} ${item.property === "Hot Product" ? 'hotProduct' : ''} ${item.property === "" ? 'p-0' : ''}`}>{item.property}</span>
                                    </div>
                                    <div className="pro-content">
                                        <div className="product-name">{item.productName}</div>
                                        <div className="mrp">
                                            {item.sizes.length > 0 && (
                                                <div className="mrp">
                                                    <div className="cut-price">MRP: ₹{item.sizes[0].originalPrice}</div>
                                                    <div className="original-price">OFFER PRICE: ₹{item.sizes[0].discoPrice}</div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="addToCart">
                                            <div>Add To Cart <i className="fa-solid fa-bag-shopping"></i></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryProduct