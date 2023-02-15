// ❄️ MX: fetch to get USER INFO by user id
// ❄️ MX: fetch below linked with "./controllers/api/profileRoutes.js"
const getProfileByID = async () => {
    const response = await fetch("/api/profile/:id", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // ...
      // return;
    } else {
      alert(response.statusText);
    }
  };
  ​
  // ❄️ MX: fetch to create a new product for user to SELL
  // ❄️ MX: fetch below linked with "./controllers/api/sellRoutes.js"
  const sellProduct = async () => {
    const response = await fetch("/api/sell", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // ...
      // return;
    } else {
      alert(response.statusText);
    }
  };
  ​
  // ❄️ MX: fetch to update user's current selling products/listings
  // ❄️ MX: fetch below linked with "./controllers/api/updateRoutes.js"
  const updateProduct = async () => {
    const response = await fetch("/api/update/product/:id", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // ...
      // return;
    } else {
      alert(response.statusText);
    }
  };
  ​
  // ❄️ MX: fetch to delete user's current selling products/listings
  // ❄️ MX: fetch below linked with "./controllers/api/deleteRoutes.js"
  const deleteProduct = async () => {
    const response = await fetch("api/delete/:id", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // ...
      // return;
    } else {
      alert(response.statusText);
    }
  };
  ​
  // fetch to display all product by user id
  // ❄️ MX: fetch below linked with "./controllers/api/deleteRoutes.js"
  const displayAllByUserID = async () => {
    const response = await fetch("api/delete/user/:id", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // ...
      // return;
    } else {
      alert(response.statusText);
    }
  };
  ​
  // ❄️ MX: get fetch to work with the button: button name to be filled in
  document.querySelector("").addEventListener("click", getProfileByID);
  document.querySelector("").addEventListener("click", sellProduct);
  document.querySelector("").addEventListener("click", updateProduct);
  document.querySelector("").addEventListener("click", deleteProduct);
  document.querySelector("").addEventListener("click", displayAllByUserID);