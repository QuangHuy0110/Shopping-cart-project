import cartSlice, { cartActions } from "../card-slice";

const { reducer } = cartSlice;

test("should return the initial state", () => {
  const initialState = {
    items: [],
    totalAmount: 0,
  };
  expect(reducer(initialState, { type: undefined })).toEqual({
    items: [],
    totalAmount: 0,
  });
});
test("addItemToCart when have exist item", () => {
  const previousState = {
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
    ],
    totalAmount: 1,
  };
  expect(
    reducer(
      previousState,
      cartActions.addToCart({
        id: 1,
        title: "abc",
        price: 100,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      })
    )
  ).toEqual({
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
    ],
    totalAmount: 1,
  });
});
test("test addToCart when cartList is empty", () => {
  const previousState = {
    items: [],
    totalAmount: 0,
  };

  expect(
    reducer(
      previousState,
      cartActions.addToCart({
        id: 1,
        title: "abc",
        price: 100,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      })
    )
  ).toEqual({
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
    ],
    totalAmount: 1,
  });
});

test("test incrementQuantity action reducer", () => {
  const previousState = {
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
    ],
    totalAmount: 1,
  };

  expect(reducer(previousState, cartActions.incrementQuantity(1))).toEqual({
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 2,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
    ],
    totalAmount: 2,
  });
});

test("test decrementQuantity action reducer", () => {
  const previousState = {
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 2,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
    ],
    totalAmount: 2,
  };

  expect(reducer(previousState, cartActions.decrementQuantity(1))).toEqual({
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
    ],
    totalAmount: 1,
  });
});
test("clear item from cart when quantity is 1", () => {
  const previousState = {
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
      {
        id: 2,
        title: "def",
        price: 200,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      },
    ],
    totalAmount: 2,
  };
  expect(reducer(previousState, cartActions.decrementQuantity(1))).toEqual({
    items: [
      {
        id: 2,
        title: "def",
        price: 200,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      },
    ],
    totalAmount: 1,
  });
});
test("test removeItem action reducer", () => {
  const previousState = {
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 2,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
      {
        id: 2,
        title: "def",
        price: 200,
        quantity: 1,
        image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      },
    ],
    totalAmount: 3,
  };

  expect(reducer(previousState, cartActions.removeItem(2))).toEqual({
    items: [
      {
        id: 1,
        title: "abc",
        price: 100,
        quantity: 2,
        image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
    ],
    totalAmount: 2,
  });
});
