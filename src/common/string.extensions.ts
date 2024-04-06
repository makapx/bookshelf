interface String {
  toCapitalize(): String
  toCSSClass(): string
}

String.prototype.toCapitalize = function (): String {
  return this.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

String.prototype.toCSSClass = function (): string {
  return this.toLowerCase().replace(/ /g, '-')
}