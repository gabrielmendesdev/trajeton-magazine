'use client'

import React, { useState } from 'react'
import Text from '@/app/components/Text'
import { Button, Modal } from 'flowbite-react'
import { useRouter } from 'next/navigation'

interface RecoverPasswordModalProps {
  showModal: boolean
}

export const NextRecoverPasswordModal: React.FC<RecoverPasswordModalProps> = ({
  showModal
}): React.ReactNode => {
  const router = useRouter()
  const handleSubmit = () => {
    router.push('/email-recover-password')
  }

  return (
    <>
      <Modal show={showModal} onClose={handleSubmit}>
        <Modal.Header>Recuperar Senha</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Text className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Enviamos um link de recuperação para o seu e-mail cadastrado. Por
              favor, verifique a sua caixa de entrada e a pasta de spam, se
              necessário.
            </Text>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="warning"
            className="w-full text-center"
            onClick={handleSubmit}
          >
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
