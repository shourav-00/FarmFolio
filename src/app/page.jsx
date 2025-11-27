"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import HomeMarketPlace from "./Components/HomeMarketPlace";
import { FaSeedling } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";

import { RiSeedlingFill } from "react-icons/ri";


const Home = () => {
  const router = useRouter();

  const handleMarketplace = () => {
    router.push("/marketplace");
  };

  const handleLogin = () => {
    router.push("/add-product");
  };

  const handleAddProduce = () => {
    router.push("/marketplace");
  };

  return (
    <div className="">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mt-10 sm:mt-[120px]">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-8 text-green-800">
            <Typewriter
              words={["Grow Smarter, Harvest Better"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h1>
          <p className="text-base md:text-lg text-green-700 max-w-2xl mx-auto">
            Connect with local farmers, track your crops, and optimize your
            harvest with FarmFolio.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleLogin}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join FarmFolio
            </button>
            <button
              onClick={handleMarketplace}
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Browse Marketplace
            </button>
          </div>
        </div>
      </motion.div>

      {/* Hero Slider */}
      <div className="mt-10 md:mt-16 relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-2xl overflow-hidden"
        >
          <SwiperSlide>
            <div
              className="hero min-h-[50vh] sm:min-h-[70vh] md:min-h-[80vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url('https://i.ibb.co/7dWSCLXm/banner1.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" bg-opacity-40"></div>
              <div className="hero-content text-white text-center relative z-10">
                <div className="max-w-2xl">
                  <h1 className="mb-5 text-4xl md:text-6xl font-bold">
                    Fresh From Farm
                  </h1>
                  <p className="mb-5 text-lg md:text-xl">
                    Direct connection between farmers and consumers for the
                    freshest produce
                  </p>
                  <button
                    onClick={handleMarketplace}
                    className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[50vh] sm:min-h-[70vh] md:min-h-[80vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url('https://i.ibb.co/fRLB211/photo-1607240204413-e51a4afa6f12.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" bg-opacity-40"></div>
              <div className="hero-content text-white text-center relative z-10">
                <div className="max-w-2xl">
                  <h1 className="mb-5 text-4xl md:text-6xl font-bold">
                    Smart Farming
                  </h1>
                  <p className="mb-5 text-lg md:text-xl">
                    Track your crops, monitor growth, and optimize your farming
                    practices
                  </p>
                  <button
                    onClick={handleMarketplace}
                    className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[50vh] sm:min-h-[70vh] md:min-h-[80vh] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url('https://i.ibb.co/7JnxTtDj/bannner3.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" bg-opacity-40"></div>
              <div className="hero-content text-white text-center relative z-10">
                <div className="max-w-2xl">
                  <h1 className="mb-5 text-4xl md:text-6xl font-bold">
                    Community Driven
                  </h1>
                  <p className="mb-5 text-lg md:text-xl">
                    Join a community of farmers sharing knowledge and best
                    practices
                  </p>
                  <button
                    onClick={handleMarketplace}
                    className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/*------------------ Products Section -------------*/}

      
      <section className="py-12 md:py-16 bg-white rounded-3xl shadow-sm border border-green-100 mt-30">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-4 mb-4 md:mb-6">
            <div className="w-12 md:w-20 h-px bg-green-300"></div>
            <span className="text-green-600 font-semibold text-sm md:text-lg">
              FEATURED PRODUCE
            </span>
            <div className="w-12 md:w-20 h-px bg-green-300"></div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-4 px-4">
            Fresh From Our Farms
          </h2>
        </div>

        <div className="mb-6 md:mb-8">
          <HomeMarketPlace />
        </div>

        <div className="text-center mt-5 px-4">
          <button
            onClick={handleMarketplace}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            View All Products
          </button>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-px bg-green-300"></div>
            <span className="text-green-600 font-semibold text-lg">
              WHY CHOOSE US
            </span>
            <div className="w-20 h-px bg-green-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Transforming Agriculture Together
          </h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Empowering farmers and connecting communities through innovative
            agricultural solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🌱",
              title: "Fresh Produce",
              description:
                "Get farm-fresh products directly from local growers with full traceability",
            },
            {
              icon: "👨‍🌾",
              title: "Support Local",
              description:
                "Support local farmers and sustainable agriculture practices in your community",
            },
            {
              icon: "📊",
              title: "Crop Analytics",
              description:
                "Advanced tracking and analytics to optimize your farming operations",
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              description:
                "Quick and reliable delivery services from farm to your doorstep",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-green-100 hover:border-green-300 h-full"
            >
              <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-green-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section> */}
      <section className="py-16">
  <div className="text-center mb-12">
    <div className="inline-flex items-center gap-4 mb-6">
      <div className="w-20 h-px bg-green-300"></div>
      <span className="text-green-600 font-semibold text-lg">
        WHAT WE OFFER
      </span>
      <div className="w-20 h-px bg-green-300"></div>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
      Real Solutions for Real Farmers
    </h2>
    <p className="text-green-700 text-lg max-w-2xl mx-auto">
      We built FarmFolio from the ground up, working directly with farmers to create tools that actually work in the field
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        icon: <span><FaSeedling className="w-8 h-8"/></span>,
        title: "Farm-Fresh Quality",
        description: "Your customers get produce harvested at peak freshness, delivered straight from our partner farms. No middlemen, no long storage times.",
      },
      {
        icon: <span><GiFarmer className="w-8 h-8"/></span>,
        title: "Fair for Farmers",
        description: "We believe farmers deserve better prices. Our platform cuts out distributors so you keep more of your hard-earned profits.",
      },
      {
        icon: <span><MdOutlineTrackChanges className="w-8 h-8"/></span>,
        title: "Simple Tracking",
        description: "Easy-to-use tools to monitor your crops and sales. No complicated software - just straightforward insights that help you grow.",
      },
      {
        icon: <span><TbTruckDelivery className="w-8 h-8"/></span>,
        title: "Direct to Customers",
        description: "Connect with people in your area who want fresh, local food. Build relationships with customers who value your work.",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center border border-green-200 hover:border-green-400 h-full"
      >
        <div className="w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4 hover:scale-105 transition-transform duration-300">
          <span className="text-xl">{feature.icon}</span>
        </div>
        <h3 className="text-lg font-bold text-green-900 mb-3">
          {feature.title}
        </h3>
        <p className="text-green-800 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Stats Section */}
      <section className="py-12 mt-20  rounded-2xl ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-px bg-green-300"></div>
            <span className="text-green-600 font-semibold text-lg">
              WHY CHOOSE US
            </span>
            <div className="w-20 h-px bg-green-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Your Farming Community Awaits
          </h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Empowering farmers and connecting communities through innovative
            agricultural solutions
          </p>
        </div>

        <section className="py-2 bg-[#e3fcee] py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Active Farmers" },
              { number: "10K+", label: "Happy Customers" },
              { number: "50+", label: "Cities Served" },
              { number: "99%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-green-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-px bg-green-300"></div>
            <span className="text-green-600 font-semibold text-lg">FAQ</span>
            <div className="w-20 h-px bg-green-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            FarmFolio FAQs
          </h2>
          <p className="text-green-700 text-lg max-w-2xl mx-auto">
            Find answers to common questions about FarmFolio and how our
            platform works
          </p>
        </div>

        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="space-y-4">
            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="collapse-title text-lg font-semibold text-green-900 after:start-5 after:end-auto pe-4 ps-12">
                How do I list my farm products for sale?
              </div>
              <div className="collapse-content text-gray-700">
                Simply log into your account, go to "Add Product" from your
                dashboard, and fill in the product details including title,
                description, price, harvest date, quantity, and upload product
                images. Your products will be visible to buyers immediately.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="collapse-title text-lg font-semibold text-green-900 after:start-5 after:end-auto pe-4 ps-12">
                What types of products can I sell on FarmFolio?
              </div>
              <div className="collapse-content text-gray-700">
                You can sell a wide range of agricultural products including
                fresh vegetables, fruits, grains, dairy products, poultry, and
                other farm-produced goods. All products must be farm-fresh and
                accurately described.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="collapse-title text-lg font-semibold text-green-900 after:start-5 after:end-auto pe-4 ps-12">
                How do buyers contact me for purchases?
              </div>
              <div className="collapse-content text-gray-700">
                Buyers can view your product listings and contact you directly
                through the contact information you provide. We recommend
                including your phone number and location for better
                communication with potential buyers.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="collapse-title text-lg font-semibold text-green-900 after:start-5 after:end-auto pe-4 ps-12">
                Is there a fee for using FarmFolio?
              </div>
              <div className="collapse-content text-gray-700">
                Currently, FarmFolio is completely free for both farmers and
                buyers. You can list your products, manage your inventory, and
                connect with customers without any subscription fees or
                commissions.
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="collapse-title text-lg font-semibold text-green-900 after:start-5 after:end-auto pe-4 ps-12">
                How do I update product availability and prices?
              </div>
              <div className="collapse-content text-gray-700">
                Log into your account, go to "Your Products" section, and click
                the "Update" button on any product. You can modify quantity,
                price, description, and other details. Changes are reflected
                immediately on the marketplace.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow With Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and customers who are already transforming
            agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleLogin}
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Farming
            </button>
            <button
              onClick={handleMarketplace}
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Shop Local
            </button>
          </div>
        </div>
      </section>


  <section className="my-30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-4 mb-6">
        <div className="w-16 md:w-20 h-px bg-green-300"></div>
        <span className="text-green-600 font-semibold text-base md:text-lg tracking-wider">OUR PROCESS</span>
        <div className="w-16 md:w-20 h-px bg-green-300"></div>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-4">
        Experience Farm Fresh, Simplified
      </h2>
      <p className="text-green-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        We've streamlined the journey from farm to table, making it effortless for you to enjoy the freshest produce
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
      {/* Step 1 */}
      <div className="group relative">
        <div className="bg-green-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-green-100 hover:border-green-200 transform hover:-translate-y-3 h-full">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                1
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Discover Fresh Selection</h3>
          <p className="text-green-700 text-center leading-relaxed mb-6">
            Browse through our carefully curated collection of farm-fresh products. 
            Each item is sourced directly from trusted local farmers with complete transparency.
          </p>
          
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="group relative">
        <div className="bg-green-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-green-100 hover:border-green-200 transform hover:-translate-y-3 h-full">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                2
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Secure Your Order</h3>
          <p className="text-green-700 text-center leading-relaxed mb-6">
            Select your preferred items and quantities with confidence. 
            Our secure platform ensures your order is processed smoothly and efficiently.
          </p>
          
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="group relative">
        <div className="bg-green-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-green-100 hover:border-green-200 transform hover:-translate-y-3 h-full">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                3
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Receive Fresh Delivery</h3>
          <p className="text-green-700 text-center leading-relaxed mb-6">
            Enjoy the convenience of farm-fresh products delivered to your doorstep. 
            We maintain the highest quality standards from harvest to delivery.
          </p>
          
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Why Thousands Trust FarmFolio
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-green-100 text-sm">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24h</div>
            <div className="text-green-100 text-sm">Freshness Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-green-100 text-sm">Local Farms</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-green-100 text-sm">Quality Assured</div>
          </div>
        </div>
      </div>
    </div>


    <div className="text-center mt-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-green-100">
        <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
          Ready to Experience the Difference?
        </h3>
        <p className="text-green-700 mb-6 leading-relaxed">
          Join our community of health-conscious individuals who choose quality and freshness every day
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
          Begin Your Fresh Journey Today
        </button>
      </div>
    </div>
  </div>
</section>


{/* Final Call-to-Action Section */}
<section className="py-20 relative overflow-hidden">
  {/* Background with beautiful farm image */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
      alt="Fresh farm harvest"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/80"></div>
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center text-white">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Taste the True Essence of <span className="text-green-300">Farm Fresh</span>
      </h2>
      
      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
        Every product tells a story of dedication, quality, and the simple joy of nature's finest offerings
      </p>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
        <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="text-2xl mb-4"><RiSeedlingFill className="w-12 h-12" /></div>
          <h4 className="text-lg font-semibold mb-2">100% Natural</h4>
          <p className="text-green-100 text-sm">No chemicals, no preservatives, just pure nature</p>
        </div>
        
        <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="text-2xl mb-4"><GiFarmer className="w-12 h-12" /></div>
          <h4 className="text-lg font-semibold mb-2">Direct from Farmers</h4>
          <p className="text-green-100 text-sm">Support local agriculture and real farming families</p>
        </div>
        
        <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="text-2xl mb-4"><TbTruckDelivery className="w-12 h-12"/></div>
          <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
          <p className="text-green-100 text-sm">Fresh from farm to your kitchen in record time</p>
        </div>
      </div>

      {/* Main CTA */}
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Your Journey to Better Eating Starts Here
        </h3>
        <p className="text-green-100 mb-6 text-lg">
          Experience the difference that fresh, locally-sourced produce makes in every meal
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
            Explore Our Fresh Selection
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg">
            Learn Our Story
          </button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-300">10,000+</div>
          <div className="text-green-100 text-sm">Happy Families</div>
        </div>
        <div className="w-px h-8 bg-green-300/50"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-300">50+</div>
          <div className="text-green-100 text-sm">Local Farms</div>
        </div>
        <div className="w-px h-8 bg-green-300/50"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-300">98%</div>
          <div className="text-green-100 text-sm">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Gradient */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
</section>
      
    </div>
    </div>
  );
};

export default Home;
