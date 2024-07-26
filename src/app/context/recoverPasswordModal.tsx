import React, { createContext, useContext, useState, ReactNode } from 'react'

interface recoverPasswordModalProps {
  showModal: boolean
  openModal: () => void
  closeModal: () => void
}

const recoverPasswordModal = createContext<
  recoverPasswordModalProps | undefined
>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <recoverPasswordModal.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </recoverPasswordModal.Provider>
  )
}

export const useRecoverPasswordModal = (): recoverPasswordModalProps => {
  const context = useContext(recoverPasswordModal)
  if (context === undefined) {
    throw new Error(
      'useRecoverPasswordModal must be used within a ModalProvider'
    )
  }
  return context
}
