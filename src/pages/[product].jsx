import React from "react";
import Image from "next/image";
import { products } from "../../site.data";

var exchangeRate = "BS";

export default function Product({ product }) {
  let price = product.price.find((price) => exchangeRate === price.type)
    ?.amount;

  return (
    <div class="content">
      <div class="container">
        <div class="thickline"></div>
      </div>

      <nav class="breadcrumb container">
        <a class="breadcrumb-item" href="#">
          Home
        </a>
        <a class="breadcrumb-item" href="#">
          Laptops
        </a>
        <a class="breadcrumb-item" href="#">
          Slim laptops
        </a>
        <span class="breadcrumb-item active">Sony Vaio</span>
      </nav>

      <article class="product-details container" data-component-product="">
        <div class="row">
          <div class="col-md-8">
            <div class="zoom-gallery row d-flex">
              {product.images[1] && (
                <ul class="list-unstyled product-gallery col-md-2">
                  {product.images.map((image) => (
                    <li class="list-item">
                      <a href="img/products/1.jpg">
                        <Image
                          src={image}
                          class="img-fluid"
                          // layout="fill"
                          height="100y%"
                          width="100%"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <div class="col-md-10 m-auto d-flex">
                <a href="img/products/5.jpg" className="m-auto">
                  <Image src={product.images[0]} height={400} width={400} />
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <h1 class="product-heading" data-name="">
              {product.name}
            </h1>

            <ul class="list-unstyled text-muted">
              <li>
                Brand: <span>Apple</span>
              </li>
              <li>
                SKU: <span>333</span>
              </li>
              <li>
                Stock: <span>In stock</span>
              </li>
            </ul>

            <div class="old-price">
              <span data-price="">{price + 15}</span>{" "}
              <span class="currency" data-currency="">
                {exchangeRate}
              </span>
            </div>

            <div class="price h3">
              <span data-price="">{price}</span>{" "}
              <span class="currency" data-currency="">
                {exchangeRate}
              </span>
            </div>

            <hr />

            <div class="form-group row">
              <label for="productQuantity" class="col-form-label col-4">
                Cantidad:
              </label>
              <input
                id="productQuantity"
                class="col-8 form-control"
                type="number"
                name="quantity"
                min="1"
                max="5"
                value={1}
              />
            </div>

            <button type="button" class="btn btn-primary btn-block btn-icon">
              <i class="la la-cart-plus"></i> añadir al carrito
            </button>

            <button
              type="button"
              class="btn btn-outline-secondary btn-block  btn-icon"
            >
              <i class="la la-shopping-cart"></i> Comprar ahora!
            </button>
          </div>
        </div>

        <div class="product-tabs clearfix" role="tabpanel">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-expanded="true"
              >
                Descripcion
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-expanded="false"
              >
                Especificaciones
              </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              role="tabpanel"
              class="tab-pane fade active show"
              id="home"
              aria-labelledby="home-tab"
              aria-expanded="true"
              data-description=""
            >
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
              aria-expanded="false"
            >
              <p>
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                single-origin coffee squid. Exercitation +1 labore velit, blog
                sartorial PBR leggings next level wes anderson artisan four loko
                farm-to-table craft beer twee. Qui photo booth letterpress,
                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                vero magna velit sapiente labore stumptown. Vegan fanny pack
                odio cillum wes anderson 8-bit, sustainable jean shorts beard ut
                DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente
                accusamus tattooed echo park.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="dropdown1"
              role="tabpanel"
              aria-labelledby="dropdown1-tab"
            >
              <p>
                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                farm-to-table readymade. Messenger bag gentrify pitchfork
                tattooed craft beer, iphone skateboard locavore carles etsy
                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
                retro mlkshk vice blog. Scenester cred you probably haven't
                heard of them, vinyl craft beer blog stumptown. Pitchfork
                sustainable tofu synth chambray yr.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: products.map((product) => `/${product.shortLink}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { product } }) {
  return {
    props: {
      product: products.find((_product) => _product.shortLink === product),
    },
  };
}
