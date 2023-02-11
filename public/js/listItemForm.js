const listItemFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const itemName = document.getElementById('item-name').value.trim();
  const description = document.getElementById('description').value.trim();
  const listPrice = document.getElementById('list-price').value.trim();
  // not 100% sure what we'll need for for the photo upload, adding this for now but can edit later as needed 
  const photoUpload = document.getElementById('photo-upload');
  // there will be multiple tags, want to get all of them
  const checkbox = document.querySelectorAll('#checkbox');
  const tagName = document.querySelectorAll('#tag-name');

  // just realized I'll need to add code to register the checkboxes & get the associated tags.

  if (itemName && description && listPrice && tag) { 
    // add photoUpload when ready
    // Send the item data to the server
    const response = await fetch('/api/users/listItem', {
      method: 'POST',
      body: JSON.stringify({ itemName, description, listPrice, tag }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
      // route to ?? page after POST
    } else {
      alert('Unable to list item.');
    }
  }
};

document
  .getElementById('.list-item-form')
  .addEventListener('submit', listItemFormHandler);
