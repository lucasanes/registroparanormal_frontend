export default class Validator {

  username(value) {

    if (value.length < 1) {
      return 'Campo não preenchido.'
    }

    if (value.length < 3) {
      return 'Seu nome precisa ter no mínimo 3 dígitos.'
    }

    if (/\s/g.test(value)) {
      return 'Seu nome não pode conter espaços.'
    }

    return null

  }

  email(value) {

    if (value.length < 1) {
      return 'Campo não preenchido.'
    }

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (!emailRegex.test(value)) {
      return 'Insira um e-mail válido.'
    }

    return null

  }

  senha(value) {

    if (value.length < 1) {
      return 'Campo não preenchido.'
    }

    const senhaRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9!@#$%*_&^-]{8,24})$/

    if (!senhaRegex.test(value)) {
      return 'Sua senha precisa ter entre 8 e 24 dígitos, com no mínimo uma letra maiúscula, minúscula e um número.'
    }

    return null

  }

  dado(value) {

    const pattern = /^([+-]?((100|\d{1,2}|)?((d)(100|[1-9]\d?|))?)|(\d{0,3}|1000))([+-]((100|\d{1,2}|)?((d)(100|[1-9]\d?|))?)|([+-]\d{0,3}|1000)?)*$/g;

    if (value.length < 1) {
      return 'Campo não preenchido.'
    }

    if (!pattern.test(value)) {
      return 'Dado inválido.'
    }

    return null

  }

}