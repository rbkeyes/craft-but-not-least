// ❄️ MX: fetch to get USER INFO by user id
// ❄️ MX: fetch below linked with "./controllers/api/profileRoutes.js"

  // **rb** this is already in newListing.js **rb**
  // ❄️ MX: fetch to create a new product for user to SELL
  // ❄️ MX: fetch below linked with "./controllers/api/sellRoutes.js"
  // const sellProduct = async () => {
  //   const response = await fetch("/api/sell", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   if (response.ok) {
  //     // ...
  //     // return;
  //   } else {
  //     alert(response.statusText);
  //   }
  // };
  
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
  
  const updateProfileByID = async () => {
    const response = await fetch("/api/profile/:id", {
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

  // ❄️ MX: get fetch to work with the button: button name to be filled in
  // document.querySelector("tabs(0)").addEventListener("click", sellProduct);
  document.querySelector("tabs(1)").addEventListener("click", updateProduct);
  document.querySelector("tabs(2)").addEventListener("click", deleteProduct);
  document.querySelector("tabs(3)").addEventListener("click", displayAllByUserID);
  document.querySelector("tabs(4)").addEventListener("click", updateProfileByID);