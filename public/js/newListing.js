// **rb** handle new listing form submission **rb**
const newListingHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Get elements from form
  const itemName = document.getElementById('item-name').value.trim();
  const description = document.getElementById('description').value.trim();
  const listPrice = document.getElementById('list-price').value.trim();

  // not 100% sure what we'll need for for the photo upload, adding this for now but can edit later as needed 
  // const photoUpload = document.getElementById('photo-upload');

  // get all checked tags
  // **rb** first get all selected checkboxes, then get the value of each checked checkbox and push to array **rb**
  // **rb** not sure what type model will need tags to be in. Can create objects if needed. **rb**
  // **rb** or just 
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  const productTag = [];
  console.log(checkbox);
  for (const checked of checkbox) {
    console.log(checked);
    productTag.push(checked.value);
  };
  console.log(productTag);
  

  if (itemName && description && listPrice && productTag) { 
    console.log({ itemName, description, listPrice, productTag })
  //   // add photoUpload when ready
  //   // Send the item data to the server
    const response = await fetch('/list-item', {
      method: 'POST',
      body: JSON.stringify({ itemName, description, listPrice, productTag }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('Success!')
      document.location.replace('/');
      // route to ?? page after POST
      return;
    } else {
      alert('Unable to list item.');
      return;
    }
  }
};


document.getElementById('new-listing-form').addEventListener('submit', newListingHandler);
