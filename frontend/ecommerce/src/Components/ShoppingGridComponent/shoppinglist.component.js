import React from "react";
import "./shoppinglist.css";

export default function ShoppingListComponent() {
  return (
    <div>
      <section >
        <div  className="container">
          <form  class="example">
            <input
              type="text"
              style={{borderRadius : "30px",width:"50%" , margin:"5px"}}
              placeholder="What do you need ? "
              name="search"
            />
            <button  style={{borderRadius : "30px" , margin:"5px"}} type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
      <br />
      {/* <!-- Featured Section Begin --> */}
      <section class="featured spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12"></div>
          </div>
          <div class="row featured__filter">
            <div class="col-lg-4 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div data-aos="zoom-in" class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="https://freshpointlocal.co.uk/wp-content/uploads/2018/12/Potatoes-2.jpg"
                >
                  <img
                    src="https://static.digit.in/default/thumb_132845_default_td_480x480.jpeg?tr=w-1200"
                    alt="shoppinglistimage1"
                  />

                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="/">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/item">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div data-aos="zoom-in" class="featured__item__text">
                  <h6>
                    <a href="/">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mix vegetables fastfood">
              <div data-aos="zoom-in" class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-2.jpg"
                >
                  <img src="https://fos.com.my/wp-content/uploads/2020/07/nnn1210100003mrn-scaled.jpg" />
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="/">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/item">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mix vegetables fresh-meat">
              <div data-aos="zoom-in" class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-3.jpg"
                >
                  <img src="https://ae01.alicdn.com/kf/H76a93bb7c104460082bb96bd106345b4r/For-Samsung-Galaxy-M31-Case-Slim-Soft-Transparent-High-Clear-TPU-Phone-Cases-For-Galaxy-M31.jpg" />
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="/">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/item">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mix fastfood oranges">
              <div data-aos="zoom-in" class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-4.jpg"
                >
                  <img src="https://www.thefullstop.lk/media/catalog/product/cache/1/image/1200x1200/e893c830666e142def6ba5603e9efb35/_/j/_j6a0161_edited.jpg" />
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/item">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div data-aos="zoom-in" class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-5.jpg"
                >
                  <img src="https://www.mothersrilanka.lk/wp-content/uploads/2017/03/pencilcase_fishshaped_handloom-1.jpg" />
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/item">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mix oranges fastfood">
              <div data-aos="zoom-in" class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-6.jpg"
                >
                  <img src="https://www.toko.lk/wp-content/uploads/2019/10/Xiaomi-Mi-Wireless-Charger-Power-Bank-10000mAh-@ido.lk_.jpg" />
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/item">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div data-aos="zoom-in" class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-7.jpg"
                >
                  <img src="https://cdn.shopify.com/s/files/1/0866/6200/products/mensLogo_1024x1024.jpg?v=1607290272" />
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/item">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mix fastfood vegetables">
              <div data-aos="zoom-in" class="featured__item">
                <div
                  class="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-8.jpg"
                >
                  <img src="https://cdn.vox-cdn.com/thumbor/TTkWoz4PdmCJJJxvCr0FJpJoJjM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21786687/mchin_181113_4146_0009.0.jpg" />
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/item">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <span class="page-link">Previous</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active">
              <span class="page-link">
                2<span class="sr-only">(current)</span>
              </span>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* <!-- Featured Section End --> */}
    </div>
  );
}
