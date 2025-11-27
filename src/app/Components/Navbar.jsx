"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FaPlus } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = session?.user;
  const loading = status === "loading";

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
    setOpen(false);
    setMobileOpen(false);
  };

  const handleAddProduct = () => {
    if (!user) {
      router.push("/login");
      return;
    }
    router.push("/add-product");
    setOpen(false);
    setMobileOpen(false);
  };

  const handleManageProducts = () => {
    if (!user) {
      router.push("/login");
      return;
    }
    router.push("/manage-products");
    setOpen(false);
    setMobileOpen(false);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Show loading state while checking auth
  if (loading) {
    return (
      <nav className="shadow-md bg-green-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center h-20 w-full">
            <div className="flex items-center gap-2 sm:mr-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center">
                  <span className="text-white font-bold">FF</span>
                </div>
                <h2 className="font-bold text-xl text-white">FarmFolio</h2>
              </Link>
            </div>
            <div className="text-white text-sm">Loading...</div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="shadow-md bg-green-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:mr-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center">
                <span className="text-white font-bold">FF</span>
              </div>
              <h2 className="font-bold text-xl text-white">FarmFolio</h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Public Routes */}
            <Link
              href="/"
              className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                isActive("/")
                  ? "bg-white text-green-600 hover:text-green-600"
                  : "text-white hover:bg-white hover:text-green-600"
              }`}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                isActive("/products")
                  ? "bg-white text-green-600 hover:text-green-600"
                  : "text-white hover:bg-white hover:text-green-600"
              }`}
            >
              My products
            </Link>

            <Link
              href="/marketplace"
              className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                isActive("/marketplace")
                  ? "bg-white text-green-600 hover:text-green-600"
                  : "text-white hover:bg-white hover:text-green-600"
              }`}
            >
              Marketplace
            </Link>
            <Link
              href="/profile"
              className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                isActive("/profile")
                  ? "bg-white text-green-600 hover:text-green-600"
                  : "text-white hover:bg-white hover:text-green-600"
              }`}
            >
              Profile
            </Link>

            <Link
              href="/about"
              className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                isActive("/about")
                  ? "bg-white text-green-600 hover:text-green-600"
                  : "text-white hover:bg-white hover:text-green-600"
              }`}
            >
              About
            </Link>

            {/* User Section */}
            <div className="relative dropdown-container">
              {user ? (
                <>
                 
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 bg-green-800 p-2 text-white rounded-full hover:rounded-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center border-2 border-white">
                      {user.image ? (
                        <img
                          src={user?.image}
                          alt="User"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-white font-semibold text-lg">
                          {user.name?.charAt(0) || "U"}
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {open && (
                    <div className="mt-2 absolute right-0 w-64 bg-[#dcfae9] text-green-900 border border-green-200 rounded-lg shadow-lg z-50">
                      {/* User Info */}
                      <div className="p-4 border-b border-green-200">
                        <p className="font-medium text-sm text-gray-600">
                          Signed in as
                        </p>
                        <p className="font-semibold truncate">{user.name}</p>
                        <p className="text-sm text-green-600 truncate">
                          {user.email}
                        </p>
                      </div>

                      {/* Protected Routes in Dropdown */}
                      <div className="p-2">
                        <button
                          onClick={handleAddProduct}
                          className="w-full text-left px-3 py-2 hover:bg-green-50 rounded-md transition-colors flex items-center gap-2"
                        >
                          <span>
                            <FaPlus />
                          </span>

                          <span>Add Product</span>
                        </button>
                        <button
                          onClick={handleManageProducts}
                          className="w-full text-left px-3 py-2 hover:bg-green-50 rounded-md transition-colors flex items-center gap-2"
                        >
                          <span>
                            <MdManageHistory />
                          </span>
                          <span>Manage Products</span>
                        </button>
                        <div className="border-t border-gray-200 my-1"></div>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-3 py-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-300 font-semibold flex items-center gap-2"
                        >
                          <span>
                            <IoMdLogOut />
                          </span>
                          <span>Log Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Show Login/Register when not logged in
                <div className="flex items-center gap-4">
                  <Link
                    href="/login"
                    className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2"
            >
              <HiBars3 />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-green-600 border-t border-green-500 shadow-lg">
              <div className="flex flex-col p-4 space-y-4">
                <Link
                  href="/"
                  className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                    isActive("/")
                      ? "bg-white text-green-600"
                      : "text-white hover:bg-white hover:text-green-600"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/products"
                  className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                    isActive("/products")
                      ? "bg-white text-green-600"
                      : "text-white hover:bg-white hover:text-green-600"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Products
                </Link>

                <Link
                  href="/marketplace"
                  className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                    isActive("/marketplace")
                      ? "bg-white text-green-600"
                      : "text-white hover:bg-white hover:text-green-600"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Marketplace
                </Link>

                <Link
                  href="/about"
                  className={`font-semibold transition duration-300 ease-in-out p-2 rounded-2xl ${
                    isActive("/about")
                      ? "bg-white text-green-600"
                      : "text-white hover:bg-white hover:text-green-600"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>

                {user ? (
                  <>
                    <button
                      onClick={handleAddProduct}
                      className="text-left text-white hover:bg-white hover:text-green-600 p-2 rounded-2xl transition-colors font-semibold"
                    >
                      Add Product
                    </button>
                    <button
                      onClick={handleManageProducts}
                      className="text-left text-white hover:bg-white hover:text-green-600 p-2 rounded-2xl transition-colors font-semibold"
                    >
                      Manage Products
                    </button>
                    <div className="border-t border-green-500 my-2"></div>
                    <div className="p-2">
                      <p className="text-green-200 text-sm">Signed in as</p>
                      <p className="text-white font-semibold">{user.name}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="text-left text-white hover:bg-red-500 hover:text-white p-2 rounded-2xl transition-colors font-semibold"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2 pt-2">
                    <Link
                      href="/login"
                      className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
                      onClick={() => setMobileOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center"
                      onClick={() => setMobileOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// [
// {
//   name: "Organic Fresh Tomatoes",
//   category: "Vegetables",
//   price: 2.99,
//   unit: "kg",
//   quantity: 50,
//   description: "Fresh organic tomatoes grown without pesticides, perfect for salads and cooking.",
//   image: "https://i.ibb.co/0jYc8wg0/tomato1.jpg",
//   farmer: "Green Valley Farms",
//   location: "California, USA",
//   rating: 4.5,
//   reviews: 128,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Fresh Carrots",
//   category: "Vegetables",
//   price: 1.99,
//   unit: "kg",
//   quantity: 75,
//   description: "Sweet and crunchy carrots, rich in vitamin A and perfect for healthy snacks.",
//   image: "https://i.ibb.co/Ps17G5hv/carrots2.jpg",
//   farmer: "Sunshine Organics",
//   location: "Texas, USA",
//   rating: 4.3,
//   reviews: 89,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Organic Apples",
//   category: "Fruits",
//   price: 3.49,
//   unit: "kg",
//   quantity: 40,
//   description: "Crisp and juicy organic apples, perfect for eating fresh or making pies.",
//   image: "https://i.ibb.co/xtqXHDF9/Fruits3.jpg",
//   farmer: "Apple Creek Orchard",
//   location: "Washington, USA",
//   rating: 4.7,
//   reviews: 156,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Fresh Milk",
//   category: "Dairy",
//   price: 4.99,
//   unit: "liter",
//   quantity: 30,
//   description: "Fresh whole milk from grass-fed cows, pasteurized and homogenized.",
//   image: "https://i.ibb.co/vCS7DNq5/milk4.jpg",
//   farmer: "Happy Cow Dairy",
//   location: "Wisconsin, USA",
//   rating: 4.6,
//   reviews: 203,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Free Range Eggs",
//   category: "Poultry",
//   price: 5.99,
//   unit: "dozen",
//   quantity: 25,
//   description: "Free-range brown eggs from happy chickens, rich in omega-3.",
//   image: "https://i.ibb.co/7Jv8RYqD/Eggs5.jpg",
//   farmer: "Clucky Farm",
//   location: "Ohio, USA",
//   rating: 4.8,
//   reviews: 178,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Organic Potatoes",
//   category: "Vegetables",
//   price: 1.49,
//   unit: "kg",
//   quantity: 100,
//   description: "Versatile organic potatoes, great for boiling, baking, or frying.",
//   image: "https://i.ibb.co/nN6vB0fx/potato6.jpg",
//   farmer: "Earth Roots Farm",
//   location: "Idaho, USA",
//   rating: 4.4,
//   reviews: 95,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Fresh Strawberries",
//   category: "Fruits",
//   price: 6.99,
//   unit: "kg",
//   quantity: 20,
//   description: "Sweet and juicy strawberries, perfect for desserts and smoothies.",
//   image: "https://i.ibb.co/0RhN70Zd/Strawberry7.jpg",
//   farmer: "Berry Best Farms",
//   location: "Florida, USA",
//   rating: 4.9,
//   reviews: 234,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Organic Chicken",
//   category: "Meat",
//   price: 12.99,
//   unit: "kg",
//   quantity: 15,
//   description: "Free-range organic chicken, raised without antibiotics or hormones.",
//   image: "https://i.ibb.co/KjnBbTQH/chicken8.jpg",
//   farmer: "Pure Poultry Farms",
//   location: "Georgia, USA",
//   rating: 4.5,
//   reviews: 167,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Fresh Lettuce",
//   category: "Vegetables",
//   price: 2.49,
//   unit: "piece",
//   quantity: 60,
//   description: "Crisp and fresh lettuce, perfect for salads and sandwiches.",
//   image: "https://i.ibb.co.com/nMkFxfr6/lettuce9.jpg",
//   farmer: "Leafy Greens Co.",
//   location: "Arizona, USA",
//   rating: 4.2,
//   reviews: 76,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Organic Honey",
//   category: "Pantry",
//   price: 8.99,
//   unit: "jar",
//   quantity: 35,
//   description: "Pure organic honey from local bees, raw and unfiltered.",
//   image: "https://i.ibb.co/67zSJXRX/Honey10.jpg",
//   farmer: "Busy Bee Apiary",
//   location: "Montana, USA",
//   rating: 4.8,
//   reviews: 189,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Fresh Corn",
//   category: "Vegetables",
//   price: 0.99,
//   unit: "piece",
//   quantity: 80,
//   description: "Sweet fresh corn on the cob, perfect for grilling or boiling.",
//   image: "https://i.ibb.co/Xf9Lmyng/corn11.jpg",
//   farmer: "Golden Harvest Farms",
//   location: "Iowa, USA",
//   rating: 4.6,
//   reviews: 142,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Organic Bananas",
//   category: "Fruits",
//   price: 1.79,
//   unit: "kg",
//   quantity: 45,
//   description: "Sweet organic bananas, rich in potassium and perfect for smoothies.",
//   image: "https://i.ibb.co/Z6FwJkQk/banana12.jpg",
//   farmer: "Tropical Fruits Inc.",
//   location: "Hawaii, USA",
//   rating: 4.4,
//   reviews: 98,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Fresh Cheese",
//   category: "Dairy",
//   price: 7.49,
//   unit: "kg",
//   quantity: 20,
//   description: "Artisanal fresh cheese made from organic milk, creamy and delicious.",
//   image: "https://i.ibb.co/CpVSb27d/cheese13.jpg",
//   farmer: "Mountain Creamery",
//   location: "Colorado, USA",
//   rating: 4.7,
//   reviews: 156,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Organic Spinach",
//   category: "Vegetables",
//   price: 3.99,
//   unit: "bunch",
//   quantity: 55,
//   description: "Fresh organic spinach, packed with iron and perfect for salads.",
//   image: "https://i.ibb.co/dJg30Kzn/Spinach14.jpg",
//   farmer: "Green Leaf Farms",
//   location: "Oregon, USA",
//   rating: 4.3,
//   reviews: 87,
//   inStock: true,
//   createdAt: new Date()
// },
// {
//   name: "Fresh Oranges",
//   category: "Fruits",
//   price: 2.99,
//   unit: "kg",
//   quantity: 65,
//   description: "Juicy sweet oranges, rich in vitamin C and perfect for juicing.",
//   image: "https://i.ibb.co/1YQM6hpB/Oranges15.jpg",
//   farmer: "Citrus Grove Farms",
//   location: "California, USA",
//   rating: 4.5,
//   reviews: 134,
//   inStock: true,
//   createdAt: new Date()
// }
// ]
