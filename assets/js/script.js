const form = document.getElementById('form');

form.addEventListener('submit', handleClickForm);

function handleClickForm(event) {
    event.preventDefault();

    const getGender = document.getElementById('gender').value;
    const getAge = document.getElementById('age').value;
    const getWeight = document.getElementById('weight').value;
    const getHeight = document.getElementById('height').value;
    const intenseActivity = document.getElementById('intense-activity').value

    const tmb = Math.round (
        getGender === 'famale'
        ? (655 + (9.6 * getWeight) + (1.8 * getHeight) - (4.7 * getAge))
        :(66 + (13.7 * getWeight) + (5 * getHeight) - (6.8 * getAge))
    );

    const maintence = Math.round(tmb * Number(intenseActivity));
    const loseWight = maintence - 450;
    const loseHeight = maintence + 450;


    const layout = `
    <h1>Aqui está o seu Resultado:</h1>
    
    <ul>
    <li>
      Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
    </li>
    <li>
      Para manter o seu peso você precisa consumir em média <strong>${maintence} calorias</strong>.
    </li>
    <li>
      Para perder peso você precisa consumir em média <strong>${loseHeight} calorias</strong>.
    </li>
    <li>
      Para ganhar peso você precisa consumir em média <strong>${loseWight} calorias</strong>.
    </li>
  </ul>
    
    `;
    const result = document.querySelector('.result');
    result.innerHTML = layout;
}