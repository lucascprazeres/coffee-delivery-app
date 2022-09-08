export function maskCEP(cepWithoutNonDigits: string) {
  return cepWithoutNonDigits.replace(/^(\d{5})(\d)/, '$1-$2')
}
