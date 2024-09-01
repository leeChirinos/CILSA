const registro = document.getElementById('registro');
const inputs = document.querySelectorAll('#registro input');
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
/**const validarRegistro = (e) =>{
switch(e.target.name){
    case "name":
        break;

}
};
inputs.forEach((input) => {
    input.addEventListener('keyup', )
    input.addEventListener('blur', )S
});
registro.addEventListener('submit', (e)=> {
    e.preventDefault()});**/
