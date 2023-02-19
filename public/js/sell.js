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
  let tagsId = []
  for (const checked of checkbox) {
    tagsId.push(checked.value);
  };
  // const product_tag = tags.toString();
  console.log(tagsId);


try {
  if (product_name && product_description && product_price && tagsId) {
    console.log({ product_name, product_description, product_price, tagsId })
    const response = await fetch('/api/sell', {
      method: 'POST',
      body: JSON.stringify({ product_name, product_description, product_price, ...tagsId }),
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
