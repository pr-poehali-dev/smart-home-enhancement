import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Заказывали вывеску для нашего магазина — сделали быстро, качественно и точно по дизайну. Прохожие стали замечать нас гораздо чаще! Обязательно вернёмся за баннерами.",
    name: "Анна",
    role: "Владелец магазина одежды",
  },
  {
    quote:
      "Брендировали весь наш автопарк — 10 машин. Результат превзошёл ожидания: плёнка легла идеально, цвета яркие, всё смотрится профессионально. Рекомендую без сомнений.",
    name: "Сергей",
    role: "Директор транспортной компании",
  },
  {
    quote:
      "Печатали листовки и буклеты для выставки. Тираж 5000 штук получили вовремя, качество печати отличное. Клиенты спрашивали, где мы заказывали — приятно!",
    name: "Марина",
    role: "Маркетолог",
  },
  {
    quote:
      "Обращались за объёмными буквами для фасада ресторана. Монтаж провели аккуратно, не оставив никакого мусора. Буквы светятся красиво, ресторан сразу стал узнаваем.",
    name: "Дмитрий",
    role: "Владелец ресторана",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Более 200 клиентов уже доверили нам оформление своего бизнеса. Вот что они говорят о нашей работе.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}