import axios from "axios";

export const countTotalPrice = (cartList) => {
  if (cartList.length <= 0) {
    return 0;
  } else {
    return cartList.reduce((totalPrice, item) => {
      return totalPrice + item.price * item.quantity;
    }, 0);
  }
};
export const countItemPrice = (quantity, price) => {
  return quantity * price;
};
export const getDataFromApi = async () => {
  const url = `https://dummyjson.com/products/1`;
  const response = await axios.get(url);
  return response.data;
};

export const createShortcut = (text, limit) => {
  if (text.length > limit) {
    const part = text.slice(0, limit - 3);

    return part + "...";
  }
  return text;
};
// export default createShortcut;
