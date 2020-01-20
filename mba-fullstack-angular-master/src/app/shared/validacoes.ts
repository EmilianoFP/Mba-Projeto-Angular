import {AbstractControl} from '@angular/forms';

export class Validacoes {
  static ValidaEmail(controle: AbstractControl) {
    const email = controle.value;

    if (email && email.indexOf('.com') > -1 ) {
      return null;
    }

    return { emailInvalido: {descricao: 'faltou .com'} };
  }
}
