import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'fecha'
})
export class FechaPipe implements PipeTransform {

    transform(value: Date, ...args: any[]): string {
        return Intl.DateTimeFormat('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(value);
    }
}
