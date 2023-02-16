// **rb** handle new listing form submission **rb**
const sellItemHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Get elements from form
  const product_name = document.getElementById('item-name').value.trim();
  const product_description = document.getElementById('description').value.trim();
  const product_price = document.getElementById('list-price').value.trim();

  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  let product_tag = []
  console.log(checkbox);
  for (const checked of checkbox) {
    console.log(checked);
    product_tag.push(checked.value);
  };

try {
  if (product_name && product_description && product_price && product_tag) {
    console.log({ product_name, product_description, product_price, product_tag })
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
