class Numeros {
    constructor(ent, dest) {
      this.ent = dest;
      this.ent = dest;
    }
  }
function function1 () {

 capturas1 = parseInt(document.getElementById("ent").value, 0);
 capturas2 = parseInt(document.getElementById("dest").value, 0);
document.getElementById("btn")

if (document.getElementById("ent").value == '' || document.getElementById("dest").value == '') {
    alert("llene los campos");
    return false;
} else {
    console.log("todo ok")
}



total = capturas1 + capturas2
document.getElementById("resultado").innerHTML = total
document.getElementById("btn3").innerHTML = `<button>` + `Click me` + `</button>`;
console.log(total)
}

function apiAjax () { 
    const $fetch = document.getElementById("resultado1");

    fetch('https://fakestoreapi.com/users/1')
    .then(response => {
        console.log(response);
        return response.json();
    }).then((el) => {
        console.log(el);
        $fetch.innerHTML = `Nombre: ${el.name.firstname} 
        <br> Apellido: ${el.name.lastname}
        <br> Email: ${el.email}
        <br> Cel: ${el.phone}
        <br> Ciudad: ${el.address.city}
        <br> Calle: ${el.address.street}
        <br> Geo: ${el.address.geolocation.lat}`;
      })
    }  