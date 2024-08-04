import { 
    configurarEventosUI, 
    mostrarResultados 
} from './ui';

import { 
    obtenerIbanInfo 
} from './motor';

document.addEventListener('DOMContentLoaded', () => {
    configurarEventosUI((iban: string) => {
        const ibanInfo = obtenerIbanInfo(iban);
        mostrarResultados(ibanInfo);
    });
});