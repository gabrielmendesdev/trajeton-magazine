import Text from '@/app/components/Text'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

export function Form() {
  return (
    <form className="flex w-4/6 flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">
            E-mail <span className="text-orange-600">*</span>
          </Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">
            Senha <span className="text-orange-600">*</span>
          </Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Lembrar login</Label>
      </div>
      <Text className="text-blue-600 cursor-pointer border-b border-transparent hover:border-blue-500 hover:border-b w-max">
        Lembrar senha
      </Text>
      <Button type="submit">Submit</Button>
    </form>
  )
}
