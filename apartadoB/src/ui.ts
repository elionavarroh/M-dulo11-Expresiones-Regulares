import { 
    extraerEnlacesImagen 
} from './motor';
import { 
    EnlaceImagen 
} from './model';

export const extraccionDeImagenes = (): void => {
    const contenidoHtml = (document.getElementById('html-input') as HTMLTextAreaElement).value;
    const enlaces = extraerEnlacesImagen(contenidoHtml);
    mostrarEnlacesImagen(enlaces);
};

const mostrarEnlacesImagen = (enlaces: EnlaceImagen[]): void => {
    const contenedorEnlaces = document.getElementById('image-urls')!;
    contenedorEnlaces.innerHTML = ''; // Limpiar contenido anterior

    if (enlaces.length > 0) {
        const lista = document.createElement('ul');
        enlaces.forEach(enlace => {
            const itemLista = document.createElement('li');
            const link = document.createElement('a');
            link.href = enlace.src;
            link.textContent = enlace.src;
            link.target = '_blank'; // Abrir enlaces en una nueva pestaña
            itemLista.appendChild(link);
            lista.appendChild(itemLista);
        });
        contenedorEnlaces.appendChild(lista);
    } else {
        contenedorEnlaces.textContent = 'No se encontraron imágenes.';
    }
}