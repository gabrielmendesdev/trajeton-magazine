import React, { createContext, useContext, useState, ReactNode } from 'react'

interface RecoverPasswordModalProps {
  showModal: boolean
  openModal: () => void
  closeModal: () => void
}

const RecoverPasswordModal = createContext<
  RecoverPasswordModalProps | undefined
>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <RecoverPasswordModal.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </RecoverPasswordModal.Provider>
  )
}

export const useRecoverPasswordModal = (): RecoverPasswordModalProps => {
  const context = useContext(RecoverPasswordModal)
  if (context === undefined) {
    throw new Error(
      'useRecoverPasswordModal must be used within a ModalProvider'
    )
  }
  return context
}
