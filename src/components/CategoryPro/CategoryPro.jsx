import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryPro.css'

const CategoryPro = () => {
    const [categ,setCateg] = useState([])
    const handleCategories= async()=>{
        try {

            const response = await axios.get("https://api.camrosteel.com/api/v1/getAllCategorey")
            console.log(response.data);
            setCateg(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleCategories()
    },[])

  return (
    <>
        <section className="categories">
            <div className="container">
                <div className="category-grid">
                    {categ.map((item,index)=>(
                        <div key={index}>
                            <Link to={`/ProductBy-Category/${item.category}`} className="sin-cate">
                                <div className="img">
                                    <img loading="lazy" decoding="async" src={item.image} alt="" />
                                </div>
                                <h4>{item.category}</h4>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
    </>
  )
}

export default CategoryPro