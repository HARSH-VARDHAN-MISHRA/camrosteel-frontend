import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CategoryPro from '../../components/CategoryPro/CategoryPro'
const CategoryPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <>
            <section class="bread mb-5">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Our Categories</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Categories</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <CategoryPro/>
            
        </>
    )
}

export default CategoryPage