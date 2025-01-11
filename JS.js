document.getElementById('webForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const description = document.getElementById('description').value;
    const recommend = document.querySelector('input[name="recommend"]:checked')?.value;
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(input => input.value);
  
  
    if (!name || !email || !age || !description || !recommend) {
      alert('Por favor cubre todos los datos obligatorios');
      return;
    }
  

    console.log({
      name,
      email,
      age,
      description,
      recommend,
      languages,
    });
  
    alert('Formulario enviado. Muchas gracias.');
  });
  