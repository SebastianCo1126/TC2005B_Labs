

// Función para validar las contraseñas
function validarContraseñas() {
    const pass1 = document.getElementById('aIn').value;
    const pass2 = document.getElementById('bIn').value;

    const mensajeh2 = document.getElementById('mensaje');

    // Verificar si las contraseñas coinciden
    if (pass1 === pass2) {
      mensajeh2.innerHTML = 'Contraseña confirmada';
      mensajeh2.style.color = 'green';
      mensajeh2.style.textAlign = 'center';
      mensajeh2.style.marginTop = '250px';
      
    } else {
      mensajeh2.innerHTML = '¡Las contraseñas no coinciden!';
      mensajeh2.style.color = 'red';
      mensajeh2.style.textAlign = 'center';
      mensajeh2.style.marginTop = '250px';
    }
  }

  // Agregamos un evento al input del segundo campo para que verifique cada vez que se ingresa algo
  document.getElementById('bIn').addEventListener('input', validarContraseñas);
