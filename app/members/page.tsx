import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { MemberCard } from "@/components/member-card"
import { DancingParticles } from "@/components/dancing-particles"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function MembersPage() {
  const members = [
    { id: 1, name: "Алёна", photoUrl: "/members/photo1.jpg" },
    { id: 2, name: "Ясмина", photoUrl: "/members/photo2.jpg" },
    { id: 3, name: "Диана", photoUrl: "/members/photo3.jpg" },
    { id: 4, name: "Аделина", photoUrl: "/members/photo4.jpg" },
    { id: 5, name: "Алияна", photoUrl: "/members/photo5.jpg" },
    { id: 6, name: "Ясмина", photoUrl: "/members/photo6.jpg" },
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
            <h1 className="text-4xl font-bold text-center gradient-animation mb-4">Наши участники</h1>
            <p className="text-lg text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Познакомьтесь с талантливыми танцорами коллектива "Revolution", которые вдохновляют своим мастерством и
              энергией.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <ScrollReveal key={member.id} delay={0.1 * index}>
                <MemberCard name={member.name} photoUrl={member.photoUrl} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

