const Home = () => {
  return (
    <>
      <main>
        <div className="slider h-[530px] bg-[url('./image/slider-bg.jpeg')] bg-cover bg-no-repeat bg-bottom">
          <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40">
            <div className="mx-16  text-white text-center">
              <div className="uppercase mb-6">BEST PLACE TO BUY COFFEE</div>
              <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
              <div className="font-medium text-lg mb-8">
                The most versatile furniture system ever created. Designed to
                fit your life, made to move and grow.
              </div>
              <div className="flex justify-center ">
                <a href="/product">
                  <div className="ct-button bg-white text-gray-900 w-max">
                    Explore Our Product
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="story flex justify-center items-center">
          <div className="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
            <div className="text-3xl leading-10 mb-6 font-medium">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </div>
            <div className="text-gray-500 leading-7 mb-6">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. <br />
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </div>
            <div className="">
              <a
                className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 hover:after:bg-coffee-200 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400"
                href="/about"
              >
                Read the full Story
              </a>
            </div>
          </div>
        </div>
        <div className="subheadline">
          <div className="subhead-deco-line"></div>
          <div className="subhead-label">Featured Mugs</div>
          <div className="subhead-deco-line"></div>
        </div>
        <div className="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
            <div className="product-card">
              <div className="h-[400px] sm:h-[540px] bg-[url('./image/featured-01.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Pink Premium Ceramic
                  </div>
                  <div>
                    <span className="text-gray-500">$99.00 USD</span>
                  </div>
                </a>
              </div>
            </div>

            <div id="product" className="product-card">
              <div className="h-[400px] sm:h-[540px] bg-[url('./image/featured-02.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="/home" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                  <div>
                    <span className="text-xl text-coffee-400">$50.00</span>
                    <span className="ml-2 text-gray-400 line-through">
                      $ 69.00 USD
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mode Product #7 https://www.youtube.com/watch?v=cUrVZRvPEic&list=PLP6tw4Zpj-RK9PxvjySFM7jc5aNn_RyLX&index=8&pp=iAQB */}
        <div className="subheadline">
          <div className="subhead-deco-line"></div>
          <div className="subhead-label">More Product</div>
          <div className="subhead-deco-line"></div>
        </div>
        <div className="more-product w-[95%] xl:w-[65%] mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-1.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Red Love Cup
                  </div>
                  <div>
                    <span className="text-xl text-coffee-400">$25.00</span>
                    <span className="ml-2 text-gray-400 line-through">
                      $ 37.00 USD
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-2.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Black Tea Cup
                  </div>
                  <div>
                    <span className="text-xl text-coffee-400">$15.00</span>
                    <span className="ml-2 text-gray-400 line-through">
                      $ 29.00 USD
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-3.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    B&W Essentials Mug
                  </div>
                  <div>
                    <span className="text-gray-500">$19.00 USD</span>
                  </div>
                </a>
              </div>
            </div>
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-4.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Winter Style Mug
                  </div>
                  <div>
                    <span className="text-gray-500">$25.00</span>
                  </div>
                </a>
              </div>
            </div>
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-5.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Ceramic Tea
                  </div>
                  <div>
                    <span className="text-gray-500">$ 46.00 USD</span>
                  </div>
                </a>
              </div>
            </div>
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-6.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    No Handle Bar Cup
                  </div>
                  <div>
                    <span className="text-gray-400">$ 34.00 USD</span>
                  </div>
                </a>
              </div>
            </div>
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-7.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Espresso Cup by Mugs.co
                  </div>
                  <div>
                    <span className="text-gray-400 ">$ 25.00 USD</span>
                  </div>
                </a>
              </div>
            </div>
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-8.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Pink Premium Ceramic
                  </div>
                  <div>
                    <span className=" text-gray-500 ">$ 99.00 USD</span>
                  </div>
                </a>
              </div>
            </div>
            <div id="product" className="product-card">
              <div className="h-[380px] bg-[url('./image/caffee-9.jpeg')] bg-cover bg-no-repeat bg-center">
                <a href="#product" alt="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center my-8">
                <a href="#product">
                  <div className="text-xl mb-3 hover:text-coffee-400">
                    Summer Designer Cup
                  </div>
                  <div>
                    <span className=" text-gray-500 ">$ 29.00 USD</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE  #8 https://www.youtube.com/watch?v=NDH39S7hfuI&list=PLP6tw4Zpj-RK9PxvjySFM7jc5aNn_RyLX&index=9*/}
        <div className="subheadline">
          <div className="subhead-deco-line"></div>
          <div className="subhead-label">
            BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
          </div>
          <div className="subhead-deco-line"></div>
        </div>
        <div className="coffee-magazine w-[95%] xl:w-[65%] mx-auto mb-24">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="magazine-image basis-1/2 md:flex md:flex-row gap-5 h-full w-full mb-5 md:mb-0">
              <div className="magazine-big-image h-[280px] basis-2/3 mb-3 xs:mb-5 md:mb-0 bg-[url('./image/magazine-1.jpeg')] bg-cover bg-no-repeat bg-center "></div>
              <div className="magazine-small-images basis-1/3 flex flex-row md:flex-col gap-3 xs:gap-5">
                <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 md:basis-full bg-[url('./image/magazine-2.jpeg')] bg-cover bg-no-repeat bg-center"></div>
                <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 md:basis-full bg-[url('./image/magazine-3.jpeg')] bg-cover bg-no-repeat bg-center"></div>
              </div>
            </div>
            <div className="magazine-post basis-1/2 pl-8 xl:pl-14 text-center md:text-left">
              <div className="uppercase tracking-widest text-gray-500 font-medium text-xs mb-4">
                Premium offer
              </div>
              <div className=" text-4xl mb-4">Get our Coffee Magazine</div>
              <div className="text-gray-500 leading-7 mb-4">
                The most versatile furniture system ever created. Designed to
                fit your life. 
              </div> 
              <a href="/product" className="ct-button bg-gray-900 text-white w-max mx-auto md:mx-0">
                start shopping
              </a>
            </div>
          </div>
        </div>

{/* #9 https://www.youtube.com/watch?v=cmXfl6dec1Q&list=PLP6tw4Zpj-RK9PxvjySFM7jc5aNn_RyLX&index=10&pp=iAQB*/}
        <div className="parallax-section bg-[url('./image/bg-parallax-01.jpeg')] bg-cover bg-no-repeat bg-center h-[400px] mb-24 bg-fixed w-[100vw] relative left-[calc(-50vw+50%)]"></div>
        <div className="subheadline">
          <div className="subhead-deco-line"></div>
          <div className="subhead-label">
            BEHIND THE MUGS, LIFESTYLE STORIES
          </div>
          <div className="subhead-deco-line"></div>
        </div>
        <div className="livestyle-stories">livestyle-stories</div>
        <div className="subscribe-us">subscribe</div>
      </main>

      <footer>footer</footer>
    </>
  );
};
export default Home;
