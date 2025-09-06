export function cnpjValidator(cnpj: string) {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj.length !== 14) return false

  if (/^(\d)\1{13}$/.test(cnpj)) return false

  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  const digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7

  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--
    if (pos < 2) pos = 9
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== parseInt(digitos.charAt(0))) return false

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7

  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--
    if (pos < 2) pos = 9
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== parseInt(digitos.charAt(1))) return false

  return true
}

export function cpfValidator(cpf: string) {
   cpf = cpf.replace(/\D/g, "")

   if (!cpf || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false
   }

   let sum = 0
   for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i)
   }

   let firstDigit = 11 - (sum % 11)
   firstDigit = firstDigit >= 10 ? 0 : firstDigit

   if (parseInt(cpf.charAt(9)) !== firstDigit) {
      return false
   }

   sum = 0
   for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i)
   }

   let secondDigit = 11 - (sum % 11)
   secondDigit = secondDigit >= 10 ? 0 : secondDigit

   return parseInt(cpf.charAt(10)) === secondDigit
}