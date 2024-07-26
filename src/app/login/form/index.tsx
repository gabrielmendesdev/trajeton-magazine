import Text from '@/app/components/Text'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useRecoverPasswordModal } from '@/app/context/recoverPasswordModal'

export const Form: React.FC = (): React.ReactNode => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [remember, setRemember] = useState(false)
  const { openModal } = useRecoverPasswordModal()

  const user = {
    email: 'usertest1@mail.com',
    password: 'pass12345'
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    // Verificar credenciais (substitua pela sua lógica de autenticação real)
    if (email === user.email && password === user.password) {
      Cookies.set('auth_token', 'fwqwq6565165qfw651f6515fwq6515')
      router.push('/')
    } else {
      alert('Credenciais inválidas')
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
      <Button type="submit">Submit</Button>
    </form>
  )
}
