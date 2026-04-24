import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Оформление кофейни «Бодрость»",
    category: "Вывески и интерьерная реклама",
    image: "/placeholder.jpg",
    description:
      "Разработали и изготовили фасадную вывеску с подсветкой, объёмные буквы над барной стойкой и навигационные таблички по всему залу. Проект реализован за 5 дней.",
    url: "#portfolio",
    tags: ["Вывеска", "Объёмные буквы", "Таблички", "Монтаж"],
  },
  {
    title: "Брендирование автопарка логистической компании",
    category: "Наклейки и плёнки",
    image: "/placeholder.jpg",
    description:
      "Полное брендирование 12 грузовых автомобилей: цветная плёнка, логотип, контактные данные. Материалы рассчитаны на 5 лет службы в любых погодных условиях.",
    url: "#portfolio",
    tags: ["Брендирование авто", "Широкоформатная печать", "Плёнка"],
  },
  {
    title: "Выставочный стенд для IT-компании",
    category: "Стенды и баннеры",
    image: "/placeholder.jpg",
    description:
      "Модульный выставочный стенд 3×3 м с подсветкой для участия в отраслевой конференции. Включает баннерные стойки, брендированные скатерти и раздаточные материалы.",
    url: "#portfolio",
    tags: ["Выставочный стенд", "Баннеры", "Полиграфия"],
  },
  {
    title: "Полиграфия для сети аптек",
    category: "Полиграфия",
    image: "/placeholder.jpg",
    description:
      "Тираж листовок, буклетов и ценников для сети из 8 аптек. Разработка единого фирменного стиля, офсетная печать, быстрая доставка по всем точкам.",
    url: "#portfolio",
    tags: ["Листовки", "Буклеты", "Офсетная печать"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реализованные проекты — от небольших табличек до масштабного брендирования. Каждый заказ выполняем с вниманием к деталям.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Смотреть проект <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}