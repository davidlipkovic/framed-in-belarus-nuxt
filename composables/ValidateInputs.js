export function useValidateInputs() {
  const validateAddressWithZipAndCountry = (address) => {
    const addressRegex = /^[A-Za-z0-9\s,.-]+,\s*\d{5}\s*[A-Za-z]+\s*$/
    return addressRegex.test(address)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateLatinCharacters = (text) => {
    const latinCharactersRegex = /^[^\u0400-\u04FF\u4E00-\u9FFF]+$/
    return latinCharactersRegex.test(text)
  }

  const validateNameAndSurname = (fullName) => {
    const nameSurnameRegex = /^[A-Za-z\s]+$/
    return nameSurnameRegex.test(fullName)
  }

  const validateText = (text) => {
    return text && text.length > 0
  }

  const validatePinData = (number) => {
    const integerRegex = /^\d{6}$/
    return integerRegex.test(number)
  }

  return {
    validateAddressWithZipAndCountry,
    validateEmail,
    validateLatinCharacters,
    validateNameAndSurname,
    validateText,
    validatePinData,
  }
}
