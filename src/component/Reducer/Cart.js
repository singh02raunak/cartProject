const intialStates = {
  cartItems: [],
  totalPrice: 0,
};
export const cartReducer = (state = intialStates, action) => {
  const cartItem = action.payload;
  // adding to cart item checking whether it exits or not then adding it
  if (action.type === "ADD_CART") {
    let existingCartIndex = state.cartItems.findIndex((item) => {
      return item.id === cartItem.id;
    });
    let existingItem = state.cartItems[existingCartIndex];
    if (existingItem) {
      let updatedCart = {
        ...existingItem,
        amount: existingItem.amount + cartItem.amount,
      };
      let updatedCarts = [...state.cartItems];
      updatedCarts[existingCartIndex] = updatedCart;
      return {
        ...state,
        cartItems: updatedCarts,
        totalPrice: state.totalPrice + cartItem.price,
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, cartItem],
        totalPrice: state.totalPrice + cartItem.price,
      };
    }
  }

  // removie cart items
  if (action.type === "REMOVE") {
    let existingCartIndex = state.cartItems.findIndex((item) => {
      return item.id === cartItem;
    });
    let existingItem = state.cartItems[existingCartIndex];
    if (existingItem.amount === 1) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.id !== cartItem;
        }),
        totalPrice: state.totalPrice - existingItem.price,
      };
    } else {
      let updatedCart = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      let updatedCarts = [...state.cartItems];
      updatedCarts[existingCartIndex] = updatedCart;
      return {
        ...state,
        cartItems: updatedCarts,
        totalPrice: state.totalPrice - existingItem.price,
      };
    }
  }
  return state;
};
