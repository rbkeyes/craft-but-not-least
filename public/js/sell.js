// **rb** handle new listing form submission **rb**
const sellItemHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Get elements from form
  const product_name = document.getElementById('item-name').value.trim();
  const product_description = document.getElementById('description').value.trim();
  const product_price = document.getElementById('list-price').value.trim();

  // **rb** fyi I changed to value of the checkboxes to the tag.id
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  let tagIds = []
  for (const checked of checkbox) {
    tagIds.push(checked.value);
  };
  // const product_tag = tags.toString();
  console.log(tagIds);


try {
  if (product_name && product_description && product_price && tagIds) {
    console.log({ product_name, product_description, product_price, tagIds })
    const response = await fetch('/api/sell', {
      method: 'POST',
      body: JSON.stringify({ product_name, product_description, product_price, tagIds }),
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
