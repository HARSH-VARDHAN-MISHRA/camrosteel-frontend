import React from 'react'
import Carasol from '../../components/Carasol/Carasol'
import Subhead from '../../components/Subhead/Subhead'
import NewArrival from '../../components/FilterProduct/NewArrival'
import TrendingProduct from '../../components/FilterProduct/TrendingProd'
import HotProduct from '../../components/FilterProduct/HotProduct'
import TopSelling from '../../components/FilterProduct/TopSelling'
import CategoryPro from '../../components/CategoryPro/CategoryPro'

import bn1 from './bn1.jpg'

const HomePage = () => {
  return (
    <>
        <Carasol/>
        <Subhead title="Our Categories" para="" />
        <CategoryPro/>
        <Subhead title="Top Selling" para="Best of Health & Convenience." />
        <TopSelling/>
        <section className="photu">
          <div className="container-fluid">
            <img src={bn1} alt="" />
          </div>
        </section>
        <Subhead title="New Arrivals" para="Best of Health & Convenience." />
        <NewArrival/>
        <TrendingProduct/>
        <Subhead title="Hot Products" para="Best of Health & Convenience." />
        <HotProduct/>
    </>
  )
}

export default HomePage