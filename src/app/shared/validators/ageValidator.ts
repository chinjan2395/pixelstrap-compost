import { AbstractControl } from '@angular/forms';

export function AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value <= 0 || control.value>110) {
        return { 'invalidAge': true };
    }
    return null;
}