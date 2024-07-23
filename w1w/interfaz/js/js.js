// Obtener el elemento span por su id
var spanElement = document.getElementById("connectedAddress");

// Verificar si el elemento existe para evitar errores
if (spanElement) {
    // Modificar el contenido del span
    spanElement.textContent = "🔥🤑 Win 8000 USDT! Purchase your tokens and join the action. 🤑💵";
}

function updateCountdown() {
    // Recuperar la fecha objetivo del almacenamiento local, si está disponible
    let targetDate = localStorage.getItem('targetDate');
  
    // Si no hay una fecha objetivo almacenada o si la fecha es inválida, establecer una nueva fecha objetivo
    if (!targetDate || isNaN(new Date(targetDate))) {
        targetDate = new Date(); // Fecha actual
        targetDate.setDate(targetDate.getDate() + 3); // Sumar 4 días
        targetDate.setHours(19); // Establecer las horas a 19:00
        targetDate.setMinutes(38); // Establecer los minutos a 38
        targetDate.setSeconds(26); // Establecer los segundos a 26
        localStorage.setItem('targetDate', targetDate);
    } else {
        targetDate = new Date(targetDate); // Convertir la fecha almacenada de cadena a objeto de fecha
    }
  
    const daysElement = document.getElementById('days').querySelector('.value');
    const hoursElement = document.getElementById('hours').querySelector('.value');
    const minutesElement = document.getElementById('minutes').querySelector('.value');
    const secondsElement = document.getElementById('seconds').querySelector('.value');
  
    // Función para actualizar el contador
    function update() {
        const now = new Date().getTime();
        let distance = targetDate - now;
  
        // Si la distancia es menor o igual a cero, reiniciar el contador a los días originales
        if (distance <= 0) {
            targetDate = new Date(); // Fecha actual
            targetDate.setDate(targetDate.getDate() + 3); // Sumar 4 días
            targetDate.setHours(19); // Establecer las horas a 19:00
            targetDate.setMinutes(38); // Establecer los minutos a 38
            targetDate.setSeconds(26); // Establecer los segundos a 26
            localStorage.setItem('targetDate', targetDate);
  
            // Calcular nueva distancia
            distance = targetDate - now;
        }
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }
  
    // Actualizar el contador inicialmente
    update();
  
    // Actualizar el contador cada segundo
    setInterval(update, 1000);
  }
  
  updateCountdown();
  
  
  // FIN DE EL TIEMPO DE LA INTERFAZ

          // SUMA DE $

// Función para generar un número aleatorio en un rango
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Función para actualizar el valor progresivo y el tiempo de espera
  function updateValue() {
    let currentValue = parseFloat(localStorage.getItem('usdt-raised')) || 479312.52; // Valor inicial
    const targetValue = 600000000.00; // Valor objetivo
    const increment = getRandomNumber(20.48, 100.13); // Incremento aleatorio
  
    // Incrementar el valor actual
    const newValue = Math.min(currentValue + increment, targetValue);
  
    // Actualizar el texto con formato de moneda
    document.getElementById('usdt-raised').innerText = '$' + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    
    // Guardar el nuevo valor en el almacenamiento local
    localStorage.setItem('usdt-raised', newValue);
    
    // Si no hemos alcanzado el valor objetivo, programar la próxima actualización
    if (newValue < targetValue) {
      setTimeout(updateValue, getRandomNumber(1300, 5330));
    }
  }
  
  // Llamar a la función inicialmente para comenzar la cuenta progresiva
  updateValue();
  
      // FIN SUMA DE $



// Función para convertir texto en mayúsculas y aplicar formato
function aplicarFormato(elementSelector) {
    // Obtener el elemento por su selector
    var element = document.querySelector(elementSelector);

    // Obtener el texto dentro del elemento
    var texto = element.textContent.trim();

    // Separar el texto por el símbolo $
    var partes = texto.split('$');

    // Asegurarse de que hay dos partes (texto antes y después de $TOKEN)
    if (partes.length === 2) {
        // Obtener la primera parte (antes de $TOKEN) en minúsculas
        var antes = partes[0].toLowerCase();
        
        // Obtener la segunda parte (después de $TOKEN) y quitar los espacios
        var despues = partes[1].trim().replace(/\s+/g, '');

        // Combinar las partes en mayúsculas y sin espacios
        var resultado = antes.toUpperCase() + despues.toUpperCase();

        // Actualizar el contenido del elemento
        element.textContent = resultado;
    }
}

// Llamar a la función para el elemento <p> con clase .dashTitle
aplicarFormato('.dashTitle');

// Llamar a la función para el elemento <label> con id labelText
aplicarFormato('#labelText');




// Función para preparar el enlace cuando se selecciona un botón
function prepareLink(buttonId) {
    var link = '';

    switch (buttonId) {
        case '20Button':
            link = 'https://cwallet.com/t/W6OP76ZJ';
            break;
        case '100Button':
            link = 'https://cwallet.com/t/DTTA4KSV';
            break;
        case '200Button':
            link = 'https://cwallet.com/t/QDIVJ8RO';
            break;
        case '500Button':
            link = 'https://cwallet.com/t/XZT827YC';
            break;
        case '1000Button':
            link = 'https://cwallet.com/t/DV4CVJV2';
            break;
        case '2000Button':
            link = 'https://cwallet.com/t/LS4BMMSF';
            break;
        case '5000Button':
            link = 'https://cwallet.com/t/DXZ3SB13';
            break;
        default:
            break;
    }

    // Asignar el enlace preparado al botón de "BUY NOW"
    var buyNowButton = document.getElementById('connectwalletBtn');
    buyNowButton.setAttribute('data-link', link);
}

// Event listener para el botón "BUY NOW"
document.getElementById('connectwalletBtn').addEventListener('click', function() {
    var link = this.getAttribute('data-link');
    if (link) {
        window.location.href = link; // Abrir el enlace en la misma ventana
    }
});

// Función para seleccionar la cantidad y preparar el enlace
function selectTab(button) {
    var tokenInput = document.getElementById('tokenInput');
    var buttonId = button.id;

    switch (buttonId) {
        case '20Button':
            tokenInput.value = formatNumber(10000000); // $20 equivalent
            break;
        case '100Button':
            tokenInput.value = formatNumber(50000000); // $100 equivalent
            break;
        case '200Button':
            tokenInput.value = formatNumber(100000000); // $200 equivalent
            break;
        case '500Button':
            tokenInput.value = formatNumber(250000000); // $500 equivalent
            break;
        case '1000Button':
            tokenInput.value = formatNumber(500000000); // $1000 equivalent
            break;
        case '2000Button':
            tokenInput.value = formatNumber(1000000000); // $2000 equivalent
            break;
        case '5000Button':
            tokenInput.value = formatNumber(2500000000); // $5000 equivalent
            break;
        default:
            break;
    }

    // Llamar a prepareLink con el buttonId seleccionado
    prepareLink(buttonId);
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


                


