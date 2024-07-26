import * as EmailValidator from 'email-validator'

export const emailValidator = (email: string): boolean => {
  const validator = EmailValidator.validate(email)
  return validator
}
