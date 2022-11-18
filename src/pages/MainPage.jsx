import React from "react";
import BackgroundBottom from "../components/BackgroundBottom";
import ProductList from "../components/ProductList";
import Testimonials from "../components/Testimonials";

const featuredProducts = [
  {
    id: 1,
    name: "Dubai",
    href: "product/name",
    imageSrc:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Dubai",
  },
  {
    id: 2,
    name: "Peru",
    href: "product/name",
    imageSrc:
      "https://images.unsplash.com/photo-1567597243073-2d274aabecec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Lima",
  },
  {
    id: 3,
    name: "Argentina",
    href: "product/name",
    imageSrc:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Buenos Aires",
  },
  {
    id: 4,
    name: "Canada",
    href: "product/name",
    imageSrc:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Ottawa",
  },
];

const MainPage = () => {
  return (
    <>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Descubre tu siguiente viaje con nosotros!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
              <div className="mt-24">
                <h2 className="text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                  Nuestros clientes tambien viajaron a
                </h2>
                <ProductList products={featuredProducts} />
              </div>
              <div className="mt-24">
                <h2 className="text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                  Testimonios de nuestros clientes
                </h2>
                <Testimonials />
              </div>
              <BackgroundBottom />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
