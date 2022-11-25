const initialState = {
  itemCarts: [
    {
      id: "01231231",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Airbus_A380_blue_sky.jpg/640px-Airbus_A380_blue_sky.jpg",
        href: "/product/Belgica",
        price: "$31.2",
        name: "belgica",
        quantity: 1,
        color: "rojito"
    },
  ],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        itemCarts: [...state.itemCarts, action.payload],
      };

    case "removeItem":
      return {
        ...state,
        itemCarts: state.itemCarts.filter( product => product.name !== action.payload.name ),
      };

    default:
      return state;
  }
};
