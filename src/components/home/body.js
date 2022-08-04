import { useState } from "react";
import Detail from '../home/detail/event_pagination'
import { useDispatch, useSelector } from "react-redux";
import {
  loadMore
} from "../../store/content"
const Content = () => {

  const total_page = useSelector((state) => state.contentRTK.total_page);
  const page = useSelector((state) => state.contentRTK.page);
  const dispatcher = useDispatch();

  const [searchState, setSearch] = useState(false);
  const [filterState, setFilter] = useState(false);

  const displayMenu = {
    display: "block",
  };

  const hideMenu = {
    display: "none",
  };

  const buttonLoadMore = () => {
    dispatcher(loadMore());
  };


  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">
            List Overview
          </h3>
        </div>

        <div className="flex-w flex-sb-m p-b-52">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
              All Event
            </button>


          </div>

          <div className="flex-w flex-c-m m-tb-10">
            <div style={hideMenu} onClick={() => setFilter(!filterState)} className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
              {
                (filterState == false) ? <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i> : <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
              }


              Filter
            </div>

            <div onClick={() => setSearch(!searchState)} className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
              {
                (searchState == false) ? <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i> : <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
              }
              Search
            </div>
          </div>


          <div style={(searchState == false) ? hideMenu : displayMenu} className="dis-none panel-search w-full p-t-10 p-b-15">
            <div className="bor8 dis-flex p-l-15">
              <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>

              <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
            </div>
          </div>


          <div style={(filterState == false) ? hideMenu : displayMenu} className="dis-none panel-filter w-full p-t-10">
            <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
              <div className="filter-col1 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">
                  Sort By
                </div>

                <ul>
                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      Default
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      Popularity
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      Average rating
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                      Newness
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      Price: Low to High
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      Price: High to Low
                    </a>
                  </li>
                </ul>
              </div>

              <div className="filter-col2 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">
                  Price
                </div>

                <ul>
                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                      All
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      $0.00 - $50.00
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      $50.00 - $100.00
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      $100.00 - $150.00
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      $150.00 - $200.00
                    </a>
                  </li>

                  <li className="p-b-6">
                    <a href="#" className="filter-link stext-106 trans-04">
                      $200.00+
                    </a>
                  </li>
                </ul>
              </div>

              <div className="filter-col3 p-r-15 p-b-27">
                <div className="mtext-102 cl2 p-b-15">
                  Color
                </div>

                <ul>
                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" >
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" className="filter-link stext-106 trans-04">
                      Black
                    </a>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" >
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                      Blue
                    </a>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6">
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" className="filter-link stext-106 trans-04">
                      Grey
                    </a>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" >
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" className="filter-link stext-106 trans-04">
                      Green
                    </a>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" >
                      <i className="zmdi zmdi-circle"></i>
                    </span>

                    <a href="#" className="filter-link stext-106 trans-04">
                      Red
                    </a>
                  </li>

                  <li className="p-b-6">
                    <span className="fs-15 lh-12 m-r-6" >
                      <i className="zmdi zmdi-circle-o"></i>
                    </span>

                    <a href="#" className="filter-link stext-106 trans-04">
                      White
                    </a>
                  </li>
                </ul>
              </div>

              <div className="filter-col4 p-b-27">
                <div className="mtext-102 cl2 p-b-15">
                  Tags
                </div>

                <div className="flex-w p-t-4 m-r--5">
                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Fashion
                  </a>

                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Lifestyle
                  </a>

                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Denim
                  </a>

                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Streetstyle
                  </a>

                  <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    Crafts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row isotope-grid">

          <Detail></Detail>

        </div>

        <div className="flex-c-m flex-w w-full p-t-45" style={(total_page == page) ? hideMenu : ''}>
          <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
            Load More
          </a>
        </div>
      </div>
    </section>)
}

export default Content;