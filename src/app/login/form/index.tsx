'use client'

import React, { useState } from 'react'
import Text from '@/app/components/Text'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useRecoverPasswordModal } from '@/app/context/recoverPasswordModal'

export const Form: React.FC = (): React.ReactNode => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [remember, setRemember] = useState(false)
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const { openModal } = useRecoverPasswordModal()

  const user = {
    email: 'usertest1@mail.com',
    password: 'Pass1234@'
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    return passwordRegex.test(password)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    let valid = true

    if (!validateEmail(email)) {
      setEmailError(
        'E-mail inválido. Insira um endereço de e-mail no formato correto'
      )
      valid = false
    } else {
      setEmailError('')
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Senha inválida. Verifique se a senha tem pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais, e tente novamente.'
      )
      valid = false
    } else {
      setPasswordError('')
    }

    if (valid && email === user.email && password === user.password) {
      Cookies.set('auth_token', 'fwqwq6565165qfw651f6515fwq6515')
      router.push('/')
    } else if (valid) {
      setPasswordError(
        'Senha inválida. Verifique se a senha tem pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais, e tente novamente.'
      )
    }
  }

  return (
    <form className="flex w-4/6 flex-col gap-4" onSubmit={handleLogin}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">
            E-mail <span className="text-orange-600">*</span>
          </Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="Digite seu email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <Text className="text-red-600">{emailError}</Text>}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">
            Senha <span className="text-orange-600">*</span>
          </Label>
        </div>
        <TextInput
          id="password1"
          type="password"
          placeholder="Digite sua senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <Text className="text-red-600">{passwordError}</Text>}
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <Label htmlFor="remember">Lembrar login</Label>
      </div>
      <Text
        onClick={openModal}
        className="text-blue-600 cursor-pointer border-b border-transparent hover:border-blue-500 hover:border-b w-max"
      >
        Lembrar senha
      </Text>
      <Button type="submit" className="bg-orange-500">
        Entrar
      </Button>
    </form>
  )
}
