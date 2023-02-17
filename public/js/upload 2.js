// **rb** handle file uploads form submission **rb**
const imageUploadHandler = async (event) => {
    event.preventDefault();
  
    // Get elements from form
    const product_name = document.getElementById('item-name').value.trim();
    const product_description = document.getElementById('description').value.trim();
    const product_price = document.getElementById('list-price').value.trim();
  
    // not 100% sure what we'll need for for the photo upload, adding this for now but can edit later as needed 
    // const photoUpload = document.getElementById('photo-upload');
  
    // get all checked tags
    // **rb** first get all selected checkboxes, then get the value of each checked checkbox and push to array **rb**
    // **rb** not sure what type model will need tags to be in. Can create objects if needed. **rb**
    // **rb** or just 
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    let product_tag = []
    // const tags = [];
    // const product_tag = [];
    console.log(checkbox);
    for (const checked of checkbox) {
      console.log(checked);
      product_tag.push(checked.value);
    };
    
    console.log(product_tag);
  
    try {
      if (product_name && product_description && product_price && product_tag) {
        console.log({ product_name, product_description, product_price, product_tag })
        //   // add photoUpload when ready
        //   // Send the item data to the server
        const response = await fetch('/api/sell', {
          method: 'POST',
          body: JSON.stringify({ product_name, product_description, product_price, product_tag }),
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
  
  
  document.getElementById('sell-item-form').addEventListener('submit', sellItemHandler);
  