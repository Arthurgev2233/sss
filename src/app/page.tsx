import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
        <CardHeader className="p-6 text-center">
          <CardTitle className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Como finalizar seu pagamento
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 px-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-primary/10 shadow-inner">
            <Image
              src="https://placehold.co/1280x720.png"
              alt="Instruções de pagamento com LivePix"
              fill
              className="object-cover"
              data-ai-hint="payment tutorial"
              priority
            />
          </div>
          <Button asChild size="lg" className="w-full text-base font-bold h-14 rounded-xl shadow-lg transition-transform hover:scale-105 sm:text-lg">
            <a href="https://livepix.gg/viihcaliman" target="_blank" rel="noopener noreferrer">
              CLIQUE AQUI PARA PAGAR AGORA
            </a>
          </Button>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-2">
          <p className="w-full text-center text-xs text-muted-foreground sm:text-sm">
            Após o pagamento, o acesso será enviado automaticamente.
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
