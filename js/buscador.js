// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;
//listar los años en el checkbox
for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}
//funcion obtener autos
function obtenerAutos(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];

}

//datos para las busquedas
let datosBusquedas ={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};


//variable global de los autos 
const autos = obtenerAutos();

//agregar eventos 
document.addEventListener('DOMContentLoaded',() =>{
    mostrarAutos(autos);
} );
//agregar eventos input marca
const marca = document.getElementById('marca').addEventListener('input' ,e =>{
    //acceder al valor 
    datosBusquedas.marca = e.target.value;
    filtrarAuto(); 
});

//agregar eventos input year
const year = document.getElementById('year').addEventListener('input' ,e =>{
    //acceder al valor 
    datosBusquedas.year = Number(e.target.value);
    filtrarAuto(); 
});
//agregar eventos input minimo
const minimo = document.getElementById('minimo').addEventListener('input' ,e =>{
    //acceder al valor 
    datosBusquedas.minimo = Number(e.target.value);
    filtrarAuto(); 
});

//agregar eventos input maximo
const maximo = document.getElementById('maximo').addEventListener('input' ,e =>{
    //acceder al valor 
    datosBusquedas.maximo = Number(e.target.value);
    filtrarAuto(); 
});

//agregar eventos input maximo
const puertas = document.getElementById('puertas').addEventListener('input' ,e =>{
    //acceder al valor 
    datosBusquedas.puertas = Number(e.target.value);
    filtrarAuto(); 
});

//agregar eventos input transmision
const transmision = document.getElementById('transmision').addEventListener('input' ,e =>{
    //acceder al valor 
    datosBusquedas.transmision = e.target.value;
    filtrarAuto(); 
});

//agregar eventos input color
const color = document.getElementById('color').addEventListener('input' ,e =>{
    //acceder al valor 
    datosBusquedas.color = e.target.value;
    filtrarAuto(); 
});

function mostrarAutos(autos){
    //leer el elemento resultado 
    const contenedor = document.querySelector('#resultado');

    //limpiar los resultados anteriores
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
    autos.forEach(auto => {
        //crear constante elemento 
        const autoHtml = document.createElement('p');
        //llenar html
        autoHtml.innerHTML =
         `<p>
            Marca:${auto.marca} - Modelo:${auto.modelo} - Color : ${auto.color} - Precio : ${auto.precio} - Puertas ${auto.puertas} - Trasmision: ${auto.transmision}     
        </p>
        `;
        //agregar contenido al hmtl
        contenedor.appendChild(autoHtml);
    })

}   

function filtrarAuto(){
    const res = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMax)
    .filter(filtrarPuertas).filter(filtrarTrasmision).filter(filtrarColor);    
    if(res.length){
        mostrarAutos(res);
        alertify.success('restultado encontrado');
        console.log(res);
    }
    else{
        alertify.error('sin resultados');
    }
}

function filtrarMarca(auto){
    if(datosBusquedas.marca){
        
        return auto.marca == datosBusquedas.marca ;

    }else{
        return auto;
    }
}

function filtrarYear(auto){
   
    if(datosBusquedas.year){
        return auto.year === datosBusquedas.year;
    }else{
        return auto;
    }
}

function filtrarMinimo(auto){
    if(datosBusquedas.minimo){
        return auto.precio >= datosBusquedas.minimo;
    }else{
        return auto;
    }
}

function filtrarMax(auto){
    if(datosBusquedas.maximo){
        return auto.precio <= datosBusquedas.maximo;
    }else{
        return auto;
    }
}

function filtrarPuertas(auto){
    if(datosBusquedas.puertas){
        return auto.puertas = datosBusquedas.puertas;
    }else{
        return auto;
    }
}

function filtrarTrasmision(auto){
    if(datosBusquedas.transmision){
        return auto.transmision === datosBusquedas.transmision;
    }else{
        return auto;
    }
}


function filtrarColor(auto){
    if(datosBusquedas.color){
        return auto.color === datosBusquedas.color;
    }else{
        return auto;
    }
}







