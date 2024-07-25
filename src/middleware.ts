// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Obtemos o cookie 'auth_token' da requisição
  const authToken: any = request.cookies.get('auth_token')?.value

  // Verifica se o cookie existe e tem o valor correto
  if (authToken !== 'fwqwq6565165qfw651f6515fwq6515') {
    // Redireciona para a página de login se a verificação falhar
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Permite o acesso à página se o cookie for válido
  return NextResponse.next()
}

// Define as rotas onde o middleware deve ser aplicado
export const config = {
  matcher: ['/'] // Protege a página inicial
}
