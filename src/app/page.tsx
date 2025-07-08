import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <main className="flex flex-col items-center justify-center py-12 px-4">
        <Image
          src="https://cdn.imgchest.com/files/7lxcpdr3jo7.png"
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
          
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-200">
            <Image
              src="https://cdn.imgchest.com/files/yq9c3e2am34.png"
              alt="Tutorial de pagamento"
              width={360}
              height={640}
              className="w-full h-auto"
              data-ai-hint="payment tutorial"
            />
          </div>

          <div className="mb-8 text-center text-gray-700">
            <ol className="list-decimal list-inside space-y-2 text-lg inline-block text-left">
              <li>Preencha seus dados</li>
              <li>Escolha o valor</li>
              <li>Escolha o método de pagamento</li>
              <li>E pronto! Receba seu acesso.</li>
            </ol>
          </div>

          <div className="flex flex-col items-center border-t-2 border-dashed pt-8">
            <Button asChild size="lg" className="w-full max-w-md text-base font-bold h-14 rounded-xl shadow-lg transition-transform hover:scale-105 sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse">
              <a href="https://livepix.gg/viihcaliman" target="_blank" rel="noopener noreferrer">
                CLIQUE AQUI PARA PAGAR AGORA
              </a>
            </Button>
            <p className="w-full max-w-md text-center text-xs text-gray-500 sm:text-sm mt-4">
              Após o pagamento, você será redirecionado automaticamente para o Privacy.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
