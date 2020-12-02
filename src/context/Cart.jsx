import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartIteams] = useState([]);

  // useEffect(() => {
  //   if (localStorage.getItem("checkoutItem")) {
  //     var checkoutItem = JSON.parse(localStorage.getItem("checkoutItem"));
  //     setCartIteams({ checkoutItem });
  //   }
  // });

  const addToCart = (product) => {
    let newCartItems = [];

    if (cartItems.length > 0) {
      const arr = cartItems.filter((item) => {
        return item.id !== product.id;
      });
      newCartItems = arr.concat(product);
    } else {
      newCartItems = cartItems.concat(product);
    }

    // localStorage.setItem("checkoutItem", newCartItems);
    setCartIteams(newCartItems);

    if (cartItems.length == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product added failed! Please try again",
        showCloseButton: true,
      });
    } else {
      Swal.fire("Success!", "Product added successfully!", "success");
    }
  };

  const removeAllItem = () => {
    setCartIteams([]);
  };

  const removeItem = (id) => {
    Swal.fire({
      title: "Are you sure to remove this product?",
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const newCartItems = cartItems.filter((item) => {
          return item.id !== id;
        });

        setCartIteams(newCartItems);
        Swal.fire("Product has been removed!", "", "success");
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
