'use client'

import React, { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import Title from '../components/Title'
import Text from '../components/Text'
import Trajeton from '../assets/trajeton-mobile.svg'
import './style.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errors, setErrors] = useState({
    password: '',
    repeatPassword: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    validatePassword(e.target.value, repeatPassword)
  }

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value)
    validatePassword(password, e.target.value)
  }

  const validatePassword = (password: string, repeatPassword: string) => {
    let passwordError = ''
    let repeatPasswordError = ''

    // Validate password criteria
    if (password.length < 8) {
      passwordError = 'A senha deve ter pelo menos 8 caracteres.'
    } else if (!/[A-Z]/.test(password)) {
      passwordError = 'A senha deve conter pelo menos uma letra maiúscula.'
    } else if (!/[a-z]/.test(password)) {
      passwordError = 'A senha deve conter pelo menos uma letra minúscula.'
    } else if (!/[0-9]/.test(password)) {
      passwordError = 'A senha deve conter pelo menos um número.'
    } else if (!/[!@#$%^&*]/.test(password)) {
      passwordError = 'A senha deve conter pelo menos um símbolo.'
    }

    // Validate passwords match
    if (repeatPassword && password !== repeatPassword) {
      repeatPasswordError = 'As senhas não coincidem.'
    }

    setErrors({
      password: passwordError,
      repeatPassword: repeatPasswordError
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    validatePassword(password, repeatPassword)

    if (!errors.password && !errors.repeatPassword) {
      // Submit form logic
      router.push('/login')
    } else {
      console.log('Password reset failed')
    }
  }

  return (
    <div className="container m-auto flex flex-col items-center justify-center">
      <Image
        src={Trajeton}
        alt="Trajeton Logo"
        className="max-w-32 sm:max-w-60"
      />
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 bg-gray-200 p-10 rounded-3xl shadow-lg"
      >
        <Title className="font-bold text-3xl">Redefinir Senha</Title>
        <Text>Redefina sua senha</Text>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2">
              Senha <span className="text-orange-600">*</span>
            </Label>
          </div>
          <TextInput
            id="password2"
            type="password"
            required
            shadow
            placeholder="Digite uma senha"
            value={password}
            onChange={handlePasswordChange}
          />
          {formSubmitted && errors.password && (
            <Text className="text-red-600">{errors.password}</Text>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password">
              Confirme sua senha <span className="text-orange-600">*</span>
            </Label>
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            required
            shadow
            placeholder="Repita sua senha"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
          />
          {formSubmitted && errors.repeatPassword && (
            <Text className="text-red-600">{errors.repeatPassword}</Text>
          )}
        </div>
        <div className="flex items-center gap-2 flex-col">
          <Title className="font-semibold mr-auto">Crie uma senha segura</Title>
          <ul className="list-inside list-disc">
            <li>Use letras maiúsculas e minúsculas, símbolos e números.</li>
            <li>Não use informações pessoais como datas de aniversário.</li>
            <li>Não use uma senha igual a anterior</li>
          </ul>
        </div>
        <Button type="submit" className="bg-orange-500">
          Redefinir Senha
        </Button>
      </form>
    </div>
  )
}
