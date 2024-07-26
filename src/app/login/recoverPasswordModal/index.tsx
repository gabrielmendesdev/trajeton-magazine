'use client'

import React, { useState } from 'react'
import Text from '@/app/components/Text'
import { useRecoverPasswordModal } from '@/app/context/recoverPasswordModal'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { NextRecoverPasswordModal } from './nextRecoverPasswordModal'
import { emailValidator } from '@/app/utils/emailValidator'

export const RecoverPasswordModal: React.FC = ({}): React.ReactNode => {
  const { showModal, closeModal } = useRecoverPasswordModal()

  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [emailTouched, setEmailTouched] = useState(false)

  const [nextModal, setNextModal] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsEmailValid(emailValidator(e.target.value))
  }

  const handleSubmit = () => {
    setEmailTouched(true)
    if (isEmailValid) {
      closeModal
      setNextModal(true)
    } else {
      console.log('Invalid email address')
    }
  }

  return (
    <>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>Recuperar Senha</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Text className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Para recuperar sua senha, digite o e-mail cadastrado.
            </Text>
          </div>
          <div className="mb-2 block">
            <Label htmlFor="email1">
              E-mail <span className="text-orange-600">*</span>
            </Label>
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="mail.example@gmail.com"
            required
            value={email}
            onChange={handleEmailChange}
          />
          {!isEmailValid && emailTouched && (
            <Text className="text-red-600">
              E-mail inválido. Este endereço de e-mail não está cadastrado no
              sistema, verifique e tente novamente.
            </Text>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="warning"
            className="w-full text-center"
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
      <NextRecoverPasswordModal showModal={nextModal} />
    </>
  )
}
