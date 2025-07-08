import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <main className="flex flex-col items-center justify-center py-12 px-4">
        <Image
          src="https://cdn.imgchest.com/files/7lxcpdrp3g7.webp"
          alt="Privacy Logo"
          width={200}
          height={40}
          className="mb-8"
          data-ai-hint="privacy logo"
        />
        <div className="w-full max-w-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
            Como realizar o pagamento:
          </h1>
          
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://placehold.co/360x640.png"
              alt="Tutorial de pagamento"
              width={360}
              height={640}
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col items-center">
            <Button asChild size="lg" className="w-full max-w-md text-base font-bold h-14 rounded-xl shadow-lg transition-transform hover:scale-105 sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://livepix.gg/viihcaliman" target="_blank" rel="noopener noreferrer">
                CLIQUE AQUI PARA PAGAR AGORA
              </a>
            </Button>
            <p className="w-full max-w-md text-center text-xs text-gray-500 sm:text-sm mt-4">
              Após o pagamento, o acesso será enviado automaticamente pelo e-mail<br/> ou WhatsApp.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
