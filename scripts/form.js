const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  const productNameSelect = document.getElementById('productName');
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productNameSelect.appendChild(option);
  });
  
  const ratingContainer = document.getElementById('ratingContainer');
  for (let i = 1; i <= 5; i++) {
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.id = 'rating' + i;
      radio.name = 'overallRating';
      radio.value = i;
      radio.required = true;
  
      const label = document.createElement('label');
      label.htmlFor = 'rating' + i;
      label.innerHTML = '&#9733;'.repeat(i);
  
      ratingContainer.appendChild(radio);
      ratingContainer.appendChild(label);
  }
  
  const featuresContainer = document.getElementById('featuresContainer');
  const features = ['Durability', 'Ease of Use', 'Performance', 'Design'];
  features.forEach((feature, index) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'feature' + index;
      checkbox.name = 'usefulFeatures';
      checkbox.value = feature;
  
      const label = document.createElement('label');
      label.htmlFor = 'feature' + index;
      label.textContent = feature;
  
      featuresContainer.appendChild(checkbox);
      featuresContainer.appendChild(label);
  });