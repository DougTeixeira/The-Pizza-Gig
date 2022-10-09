
/* carrossel de imagens*/
let count = 1;
document.getElementById('radio1').checked = true;
setInterval(function () {
  nextImage();
}, 5000)

function nextImage() {
  count++;
  if (count > 4) {
    count = 0
  }
  document.getElementById('radio' + count).checked = true;
}

/* redirecionar o carrossel após clicar para trocar de imagem */
function clickImage() {
  const radio1 = document.getElementById('radio1')
  const radio2 = document.getElementById('radio2')
  const radio3 = document.getElementById('radio3')
  const radio4 = document.getElementById('radio4')
  function passarImagem1(event,) {
    document.getElementById('radio' + 1).checked = true;
    count = 1
  }
  function passarImagem2(event,) {
    document.getElementById('radio' + 2).checked = true;
    count = 2
  }
  function passarImagem3(event,) {
    document.getElementById('radio' + 3).checked = true;
    count = 3
  }
  function passarImagem4(event,) {
    document.getElementById('radio' + 4).checked = true;
    count = 4
  }

  radio1.addEventListener('click', passarImagem1)
  radio2.addEventListener('click', passarImagem2)
  radio3.addEventListener('click', passarImagem3)
  radio4.addEventListener('click', passarImagem4)
}

clickImage()


/* opções do select */
var pizzas = {
  "vazio": {
    name: '',
    description: '',
    email_text: '',
    price: ''
  },
  "PEPPERONI": {
    name: 'PEPPERONI',
    description: 'Tomato sauce, pepperoni, mozzarella, and fresh basil. <br>Allergen advice: Contains WHEATGLUTEN and DIARY.',
    email_text: 'I want a Peperone pizza.',
    price: '9'
  },
  "MARGHERITA ( V )": {
    name: 'Marguerita',
    description: 'Tomato sauce, mozzarella and fresh basil. <br>Allergen advice: Contains WHEAT GLUTEN and DAIRY',
    email_text: 'I want a Margherita pizza.',
    price: '8'
  },
  "CHEESE & VEGGIES": {
    name: 'CHEESE & VEGGIES',
    description: 'Tomato sauce, mozzarella , sweet peppers, mushrooms and onions.<br>Allergen advice: Contains WHEAT, GLUTEN, and DAIRY.',
    email_text: 'I want a 3 Queijos pizza.',
    price: '9'
  },
  "VEGAN GIG": {
    name: 'VEGAN GIG',
    description: 'Tomato sauce, vegan cheese, mushroom, sweet pepper, onions. <br>Allergen advice: Contains WHEAT and GLUTEN.',
    email_text: 'I want a Frango pizza.',
    price: '11'
  },
  "HOT GIG (NDUJA/PEPPERONI)": {
    name: 'HOT GIG (NDUJA/PEPPERONI)',
    description: 'Tomato sauce, Pepperoni, Nduja, hot chili pepper, spicy honey, mozzarella, and fresh basil. <br>Allergen advice: Contains WHEAT GLUTEN and DAIRY.',
    email_text: 'I want a Frango pizza.',
    price: '11'
  },
  "PEPPE GIG": {
    name: 'PEPPE GIG',
    description: 'Tomato sauce, mozzarella cheese, pepperoni, sweet peppers, mushrooms and onions. <br>Allergen advice: Contains WHEAT, GLUTEN, and DAIRY.',
    price: '10'
  },
  "HAM & CHEESE": {
    name: 'HAM & CHEESE',
    description: 'Tomato sauce, mozzarella and cooked ham. <br>Allergen advice: Contains WHEAT, GLUTEN, and DAIRY.',
    price: '10'
  },
  "GARLIC BREAD ( VEGAN )": {
    name: 'GARLIC BREAD ( VEGAN )',
    description: 'Olive oil, basil, oregano, and garlic. <br>Allergen advice: Contains WHEAT GLUTEN.',
    price: '6'
  }
}

/* auto preenchimento das descrições de pizza */
function descriptionPizzas() {
  const sabores = document.querySelectorAll('.flavor-pizza')
  const details = document.querySelectorAll('.details-pizza')


  for (let index = 0; index < details.length; index++) {
    description = pizzas[sabores[index].innerText].description
    details[index].innerHTML = `${description}`
  }
}

descriptionPizzas()
