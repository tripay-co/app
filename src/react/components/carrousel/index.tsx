import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/react/components/ui/button"
import { slides } from "@/react/components/carrousel/data.ts"


export function Carrousel() {
   const [currentSlide, setCurrentSlide] = useState(0)

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 15000) // Muda de slide a cada 15 segundos

      return () => clearInterval(timer)
   }, [])

   const nextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
   }, [])

   const prevSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
   }, [])

   return (
      <div className="relative h-full overflow-hidden rounded-l-3xl">
         {slides.map((slide, index) => (
            <div
               key={index}
               className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
               }`}
            >
               {/* Imagem de fundo */}
               <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />

               <div className="absolute inset-0 bg-black/70" />
            </div>
         ))}
         <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
            <div className="max-w-xl justify-end">
               <h2 className="text-3xl font-bold mb-4 transition-all duration-500">{slides[currentSlide].title}</h2>
               <p className="text-lg opacity-90 transition-all duration-500">{slides[currentSlide].description}</p>
            </div>
            <div className="flex items-center justify-end mt-8">
               <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" onClick={prevSlide} className="text-white hover:bg-white/20">
                     <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={nextSlide} className="text-white hover:bg-white/20">
                     <ChevronRight className="w-5 h-5" />
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}
