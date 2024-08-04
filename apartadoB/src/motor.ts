import { 
    EnlaceImagen 
} from './model';

export const extraerEnlacesImagen = (html: string): EnlaceImagen[] => {
    const regexImg = /<img\s+[^>]*src="([^"]+)"[^>]*>/gi;
    const enlaces: EnlaceImagen[] = [];
    let match: RegExpExecArray | null;

    while ((match = regexImg.exec(html)) !== null) {
        enlaces.push({ src: match[1] });
    }

    return enlaces;
};