// JUEGO DE IMAGENES

// Elemento drag
const arrastrarImagen=(evento)=>{
    let infoImagen=evento.target.src;
    evento.dataTransfer.setData('img',infoImagen);
}

// Elemento drop
const prevenirDefault=(evento)=>{
    evento.preventDefault(evento);
}

const soltarImagen=(evento)=>{
    let imagenes=document.getElementsByClassName('imagen-juego');
    let zonaDestino=evento.target;
    let imagenObtenida=evento.dataTransfer.getData('img');

    for(i=0 ; i< imagenes.length ; i++){
        if(imagenObtenida === imagenes[i].src){
            imagenes[i].style.display="none";
        }
    }

    zonaDestino.innerHTML=`
        <img class="imagen-juego" src=${imagenObtenida} alt="imagen del rompecabezas posicionada" />
    `;
}


// BOTON DE REINICIO

const reinicio=(evento)=>{
    
    // reinicio los paneles vacíos
    let paneles=document.querySelector('.paneles');
    paneles.innerHTML=`
        <div class="estilo-contenedor paneles">
                <div class="panel-vacio" ondragover="prevenirDefault(event)" ondrop="soltarImagen(event)">
                    <p>Arrastre y suelte la imagen aquí</p>
                </div>
                <div class="panel-vacio" ondragover="prevenirDefault(event)" ondrop="soltarImagen(event)">
                    <p>Arrastre y suelte la imagen aquí</p>
                </div>
                <div class="panel-vacio" ondragover="prevenirDefault(event)" ondrop="soltarImagen(event)">
                    <p>Arrastre y suelte la imagen aquí</p>
                </div>
        </div>
    `;

    // reinicio las imágenes
    let imagenes=document.getElementsByClassName('imagen-juego');
    for(i=0 ; i< imagenes.length ; i++){
        imagenes[i].style.display="flex";
    }
}