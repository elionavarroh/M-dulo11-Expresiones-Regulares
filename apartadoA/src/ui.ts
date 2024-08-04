export const configurarEventosUI = (callback: (iban: string) => void) => {
    const boton = document.getElementById('submitIban');
    boton?.addEventListener('click', () => {
        const iban = (document.getElementById('ibanInput') as HTMLInputElement).value;
        callback(iban);
    });
};

//Mostramos los resultados en la interfaz de usuario
export const mostrarResultados = (resultados: any) => {
    const resultadosDiv = document.getElementById('resultados');
    if (resultadosDiv) {
        if (resultados.error) {
            resultadosDiv.innerHTML = `<p>${resultados.error}</p>`;
        } else {
            console.log("Resultados a mostrar:", resultados);
            resultadosDiv.innerHTML = `
                <p>El IBAN está bien formado</p>
                <p>El IBAN es válido</p>
                <p>Banco: ${resultados.nombreDelBanco}</p>
                <p>Código sucursal: ${resultados.codigoDeLaSucursal}</p>
                <p>Dígito de control: ${resultados.digitosDeControl}</p>
                <p>Número de cuenta: ${resultados.numeroDeCuenta}</p>
            `;
        }
    } else {
        console.error("El div de resultados no fue encontrado en el DOM.");
    }
};