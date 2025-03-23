import Link from "next/link"
import { ArrowRight, Music, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/animated-logo"
import { ScrollReveal } from "@/components/scroll-reveal"
import { DancingParticles } from "@/components/dancing-particles"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black to-dark-900 px-4">
        <div className="absolute inset-0 bg-[url('/dance-bg-pattern.svg')] opacity-10 bg-repeat"></div>
        <div className="absolute inset-0 opacity-30">
          <DancingParticles />
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="w-full h-40 md:h-60">
            <AnimatedLogo className="w-full h-full" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block text-white">ТАНЦЕВАЛЬНЫЙ КОЛЛЕКТИВ</span>
            <span className="text-5xl md:text-7xl gradient-animation font-extrabold">REVOLUTION</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Присоединяйтесь к нашему дружному коллективу и раскройте свой танцевальный потенциал!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white border-none"
            >
              <Link href="/members">
                Познакомиться с командой
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-500/10">
              <Link href="/choreographers">
                Наши хореографы
                <Star className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto py-16 px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto prose prose-lg prose-invert">
            <h2 className="text-3xl font-bold neon-text mb-8 text-center">
              ОТКРЫТ НАБОР В ЛУЧШИЙ И ДРУЖНЫЙ ТАНЦЕВАЛЬНЫЙ КОЛЛЕКТИВ REVOLUTION!
            </h2>

            <div className="space-y-6 text-gray-300">
              <p>
                😮 Уверена, что вы уже слыхали о нем и видели много, много раз на сцене. Так вот. Если есть желающие, вы
                можете запросто присоединиться к этой дружелюбной группе.🤩
              </p>

              <p>С вами будут хорошо общаться, хорошо учить движениям, так же и гимнастическим.🤩</p>

              <p>
                Вас будет учить прекрасные люди Малика и Денис{" "}
                <span className="text-red-400">@mollyxwod @Ghostonil</span> они вам всегда помогут и поймут. Постарается
                облегчить вам задание с движениями если у вас будут какие то трудности.🤩
              </p>

              <p>
                К-поп танцы и выступление на сцене, что есть еще большой плюс. Вам дадут освобождение от школы когда вы
                будете выступать.🤩
              </p>

              <p>
                Перед концертом всегда помогут чем смогут, особенно поможет вам Малика, а точнее наша главная мама всей
                группы. Накрасит вас, если надо одолжит одежду и т.д.🤩
              </p>

              <p className="font-semibold">
                В месяц всего по 20 тысяч по всем вопросам пишите <span className="text-red-400">@mollyxwod</span>
              </p>

              <p className="text-center text-xl font-bold gradient-animation">!! РАСПРОСТРАНЯЙТЕ !!!</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Features */}
      <section className="bg-dark-900 py-16 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-blue">
              Почему стоит присоединиться к нам
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1} direction="left">
              <div className="bg-dark-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-dark-700 glow-on-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Дружный коллектив</h3>
                <p className="text-gray-400">С вами будут хорошо общаться и поддерживать на каждом этапе обучения.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-dark-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-dark-700 glow-on-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">К-поп танцы</h3>
                <p className="text-gray-400">Изучайте популярные к-поп танцы и выступайте на сцене перед зрителями.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="right">
              <div className="bg-dark-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-dark-700 glow-on-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Профессиональные хореографы</h3>
                <p className="text-gray-400">
                  Малика и Денис - опытные хореографы, которые помогут вам раскрыть свой потенциал.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-16 px-4 text-center">
        <ScrollReveal direction="up">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-purple">Готовы присоединиться?</h2>
            <p className="text-lg text-gray-400 mb-8">
              Свяжитесь с нами прямо сейчас и станьте частью нашей танцевальной семьи!
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
            >
              <a href="https://instagram.com/mollyxwod" target="_blank" rel="noopener noreferrer">
                Связаться с нами
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}

