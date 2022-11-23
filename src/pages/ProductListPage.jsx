import ProductList from "../components/ProductList";

const products = [
  {
    id: 1,
    name: "Dubai",
    imageSrc:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Dubai",
  },
  {
    id: 2,
    name: "Peru",
    imageSrc:
      "https://images.unsplash.com/photo-1567597243073-2d274aabecec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Lima",
  },
  {
    id: 3,
    name: "Argentina",
    imageSrc:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Buenos Aires",
  },
  {
    id: 4,
    name: "Canada",
    imageSrc:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Ottawa",
  },
  {
    id: 5,
    name: "Cabo Verde",
    imageSrc:
      "https://images.unsplash.com/photo-1592761855671-33347cb2f7bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Praia",
  },
  {
    id: 6,
    name: "Alemania",
    imageSrc:
      "https://images.unsplash.com/photo-1540224485413-4c7939106f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Berlin",
  },
  {
    id: 7,
    name: "Austria",
    imageSrc:
      "https://images.unsplash.com/photo-1597086831879-756db15e81d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Viena",
  },
  {
    id: 8,
    name: "Belgica",
    imageSrc:
      "https://images.unsplash.com/photo-1646094131018-69c16105e6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Bruselas",
  },
  {
    id: 9,
    name: "Cabo Verde",
    imageSrc:
      "https://images.unsplash.com/photo-1592761855671-33347cb2f7bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Praia",
  },
  {
    id: 10,
    name: "Alemania",
    imageSrc:
      "https://images.unsplash.com/photo-1540224485413-4c7939106f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Berlin",
  },
  {
    id: 11,
    name: "Austria",
    imageSrc:
      "https://images.unsplash.com/photo-1597086831879-756db15e81d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Viena",
  },
  {
    id: 12,
    name: "Belgica",
    imageSrc:
      "https://images.unsplash.com/photo-1646094131018-69c16105e6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    capital: "Bruselas",
  },
];

const ProductListPage = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Elige tu proximo destino
        </h2>

        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ProductListPage;
