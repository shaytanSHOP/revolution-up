import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Instagram } from "lucide-react"
import { DancingParticles } from "@/components/dancing-particles"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ChoreographersPage() {
  const choreographers = [
    {
      name: "Малика",
      photoUrl: "/choreographers/malika.jpg",
      instagram: "mollyxwod",
      description:
        'Основательница и главный хореограф коллектива "Revolution". Специализируется на современных танцевальных стилях и к-поп хореографии. Малика не только учит танцевальным движениям, но и помогает каждому участнику раскрыть свой потенциал.',
    },
    {
      name: "Денис",
      photoUrl: "/choreographers/denis.jpg",
      instagram: "Ghostonil",
      description:
        "Профессиональный хореограф с многолетним опытом. Денис привносит уникальный стиль и энергию в коллектив. Его подход к обучению сочетает технику и творческую свободу, что позволяет участникам быстро прогрессировать.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <DancingParticles />
        </div>

        <div className="container relative z-10 mx-auto py-12 px-4">
          <Button asChild variant="outline" className="mb-8 border-gray-700 text-gray-300 hover:bg-gray-800">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад на главную
            </Link>
          </Button>

          <ScrollReveal>
            <h1 className="text-4xl font-bold text-center gradient-animation mb-4">Наши хореографы</h1>
            <p className="text-lg text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Познакомьтесь с профессиональными хореографами, которые помогут вам раскрыть свой танцевальный потенциал.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {choreographers.map((choreographer, index) => (
              <ScrollReveal key={index} delay={0.2 * index}>
                <div className="bg-dark-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-dark-700 glow-on-hover">
                  <div className="relative h-96">
                    <Image
                      src={choreographer.photoUrl || "/placeholder.svg"}
                      alt={choreographer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2 neon-text">{choreographer.name}</h2>
                    <div className="flex items-center mb-4">
                      <Instagram className="h-5 w-5 text-red-500 mr-2" />
                      <a
                        href={`https://instagram.com/${choreographer.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:underline"
                      >
                        @{choreographer.instagram}
                      </a>
                    </div>
                    <p className="text-gray-300">{choreographer.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

