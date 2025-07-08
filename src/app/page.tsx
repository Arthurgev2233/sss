import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { MoreVertical, Plus, MessageSquare } from 'lucide-react';

const PrivacyLogo = () => (
    <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-700">
        <path d="M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM14 25.2C7.8204 25.2 2.8 20.1796 2.8 14C2.8 7.8204 7.8204 2.8 14 2.8C20.1796 2.8 25.2 7.8204 25.2 14C25.2 20.1796 20.1796 25.2 14 25.2Z" fill="#E85D42"/>
        <path d="M16.1495 7.69998C15.0227 7.69998 14.1875 8.16198 13.5187 8.84538L15.3943 10.721C15.5455 10.5186 15.8111 10.3306 16.1495 10.3306C16.8835 10.3306 17.4775 10.9246 17.4775 11.6586C17.4775 12.3926 16.8835 12.9866 16.1495 12.9866C15.8055 12.9866 15.5127 12.7938 15.3559 12.5866L13.5187 14.4238C14.1875 15.1118 15.0227 15.569 16.1495 15.569C17.9263 15.569 19.3495 14.1458 19.3495 11.6586C19.3495 9.14298 17.9263 7.69998 16.1495 7.69998Z" fill="#E85D42"/>
        <path d="M14 6.3C9.7552 6.3 6.3 9.7552 6.3 14C6.3 16.59 7.6104 18.8944 9.52 20.328V14C9.52 11.5128 11.5128 9.52 14 9.52C16.4872 9.52 18.48 11.5128 18.48 14V20.454C20.4428 19.0484 21.7 16.6992 21.7 14C21.7 9.7552 18.2448 6.3 14 6.3Z" fill="#E85D42"/>
        <text x="36" y="21" fontFamily="sans-serif" fontSize="18" fill="#4A4A4A" fontWeight="bold">privacy</text>
    </svg>
);

const RefreshIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="#3B82F6"/>
    </svg>
);


export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="flex justify-center items-center py-4 bg-white shadow-sm">
        <PrivacyLogo />
      </header>
      <main className="flex flex-col items-center justify-start py-8 px-4">
        <div className="w-full max-w-sm">
          <Card className="bg-secondary border-none shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-5">
              <div className="flex justify-end -mr-2 -mt-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                    <MoreVertical className="h-5 w-5"/>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center -mt-2">
                <Avatar className="w-24 h-24 mb-2 border-4 border-white shadow-md">
                  <AvatarImage src="https://placehold.co/150x150.png" alt="Vih Caliman" data-ai-hint="woman portrait"/>
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-gray-800">vih caliman</h2>
                <p className="text-gray-500 text-sm">Envie uma mensagem</p>
              </div>

              <form className="space-y-3 mt-6">
                <div>
                  <Input type="text" placeholder="Preencha seu nome" className="bg-white text-center rounded-lg h-12 text-base" />
                </div>
                <div>
                  <div className="relative">
                    <Input type="text" placeholder="Seu numero" className="bg-white rounded-lg h-12 pl-4 pr-12 text-base" />
                    <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-green-100 text-green-600 hover:bg-green-200 rounded-md">
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 text-right mt-1">0/140 caracteres</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500 px-1">Valor</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">R$</span>
                    <Input type="text" defaultValue="O valor do pagamento" className="bg-gray-100 text-gray-500 pl-10 rounded-lg h-12 font-semibold" readOnly />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 px-1">O valor mínimo é de R$ 10,00</p>
                </div>
                <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg text-base">
                  CONTINUAR
                </Button>
              </form>
              
              <p className="text-xs text-center text-gray-500 mt-4 leading-tight">
                Ao clicar em continuar, você declara que leu e concorda com os <a href="#" className="underline">Termos de Uso</a> e a <a href="#" className="underline">Política de Privacidade</a>
              </p>
              
              <div className="flex items-center justify-between mt-4 bg-gray-200/50 p-2 rounded-lg">
                  <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><RefreshIcon/></Button>
                      <Image src="https://placehold.co/80x25.png" alt="Livepix" width={80} height={25} data-ai-hint="livepix logo" />
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500"><MessageSquare className="h-5 w-5"/></Button>
              </div>
            </CardContent>
          </Card>

          <Button asChild size="lg" className="w-full text-base font-bold h-14 rounded-xl shadow-lg transition-transform hover:scale-105 sm:text-lg mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://livepix.gg/viihcaliman" target="_blank" rel="noopener noreferrer">
                CLIQUE AQUI PARA PAGAR AGORA
              </a>
          </Button>
          <p className="w-full text-center text-xs text-gray-500 sm:text-sm mt-4">
            Após o pagamento, o acesso será enviado automaticamente pelo e-mail<br/> cadastrado ou WhatsApp.
          </p>
        </div>
      </main>
    </div>
  )
}
