// **rb** handle new listing form submission **rb**
const newListingHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Get elements from form
  const productName = document.getElementById('item-name').value.trim();
  const productDescription = document.getElementById('description').value.trim();
  const productPrice = document.getElementById('list-price').value.trim();

  // not 100% sure what we'll need for for the photo upload, adding this for now but can edit later as needed 
  // const photoUpload = document.getElementById('photo-upload');

  // get all checked tags
  // **rb** first get all selected checkboxes, then get the value of each checked checkbox and push to array **rb**
  // **rb** not sure what type model will need tags to be in. Can create objects if needed. **rb**
  // **rb** or just 
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  let productTag;
  // const productTag = [];
  console.log(checkbox);
  for (const checked of checkbox) {
    console.log(checked);
    productTag = checked.value;
  };
  console.log(productTag);

  try {
    if (productName && productDescription && productPrice && productTag) {
      console.log({ productName, productDescription, productPrice, productTag })
      //   // add photoUpload when ready
      //   // Send the item data to the server
      const response = await fetch('/api/sell', {
        method: 'POST',
        body: JSON.stringify({ productName, productDescription, productPrice, productTag }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log('Success!')
        document.location.replace('/');
        // route to ?? page after POST
        return;
      }
    }
  } catch (err) {
    console.error(err);
    alert('Unable to create new listing');
    return;
  }
};


document.getElementById('new-listing-form').addEventListener('submit', newListingHandler);
