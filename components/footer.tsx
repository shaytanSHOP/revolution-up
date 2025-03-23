import Link from "next/link"
import { Instagram } from "lucide-react"
import { AnimatedLogo } from "./animated-logo"

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white border-t border-dark-800">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-20">
                <AnimatedLogo />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
                Revolution
              </span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Танцевальный коллектив "Revolution" - место, где каждый может раскрыть свой потенциал и стать частью
              дружной команды.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-400 hover:text-red-500 transition-colors">
                  Участники
                </Link>
              </li>
              <li>
                <Link href="/choreographers" className="text-gray-400 hover:text-red-500 transition-colors">
                  Хореографы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-2">
              <a
                href="https://instagram.com/mollyxwod"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @mollyxwod
              </a>
              <a
                href="https://instagram.com/Ghostonil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @Ghostonil
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Танцевальный коллектив "Revolution". Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

