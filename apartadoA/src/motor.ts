import { 
    IBANComponentes, 
    bancos 
} from "./model";
import { 
    isValidIBAN 
} from "./ibantools";

//Limpiamos el IBAN
export const limpiarIban = (iban: string): string => {
    return iban.replace(/[\s-]/g, '');
};

//Valisamos el IBAN utilizando isValidIBAN de ibantools
export const validarIban = (iban: string): boolean => {
    const ibanLimpio = limpiarIban(iban);
    console.log("IBAN limpio:", ibanLimpio);
    const esValido = isValidIBAN(ibanLimpio);
    console.log("Es válido:", esValido, "para IBAN:", ibanLimpio);
    return esValido;
};

//Extraemos los componentes del IBAN
export const extraerIBAN = (iban: string): IBANComponentes => {
    const codigoDelPais = iban.slice(0, 2);
    const digitosDeControl = iban.slice(2, 4);
    const codigoDelBanco = iban.slice(4, 8);
    const codigoDeLaSucursal = iban.slice(8, 12);
    const numeroDeCuenta = iban.slice(12);

    return { codigoDelPais, digitosDeControl, codigoDelBanco, codigoDeLaSucursal, numeroDeCuenta };
};

//Obtenemos la información del IBAN
export const obtenerIbanInfo = (iban: string) => {
    const ibanLimpio = limpiarIban(iban);

    if (!validarIban(ibanLimpio)) {
        return { error: 'IBAN no es válido' };
    }

    const { codigoDelPais, codigoDelBanco, codigoDeLaSucursal, digitosDeControl, numeroDeCuenta } = extraerIBAN(ibanLimpio);

    const nombreDelBanco = bancos[codigoDelBanco] || 'Banco desconocido';

    return {
        codigoDelPais,
        digitosDeControl,
        codigoDelBanco,
        nombreDelBanco,
        codigoDeLaSucursal,
        numeroDeCuenta,
    };
};