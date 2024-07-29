import { Modal, Button } from 'flowbite-react'

interface DeleteModalProps {
  show: boolean
  onClose: () => void
  onConfirm: () => void
}

export function DeleteModal({ show, onClose, onConfirm }: DeleteModalProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Excluir pedido</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Você realmente deseja excluir o pedido ? Essa ação nã poderá ser
            desfeita
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex flex-col gap-2">
        <Button onClick={onConfirm} className="bg-orange-500 w-full">
          Sim, excluir
        </Button>
        <Button color="gray" onClick={onClose} className="w-full">
          Não excluir
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
