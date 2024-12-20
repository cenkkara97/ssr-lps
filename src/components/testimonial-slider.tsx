import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    avatar: "Ö",
    name: "Önder Aytaç",
    rating: 5,
    text: "Yaptığım araştırmalar sonucunda ulaştığım Elit Klinik’ten çok memnun kaldım. 2 seans dövme silme işleminden sonra çok güzel sonuç aldım.",
  },
  {
    id: 2,
    avatar: "G",
    name: "Güzin Defne Uman",
    rating: 5,
    text: "Elit Klinik’te ikinci dövme sildirme randevumda Selin hanım harika bir şekilde ilgilendi ve işlemi hızlıca tamamladı. Müşteri hizmet kalitesiyle kesinlikle öneririm.",
  },
  {
    id: 3,
    avatar: "B",
    name: "Betül Dinç",
    rating: 5,
    text: "Klinik çok temiz, çalışanların hepsi güler yüzlü ve ilgili. Verdiğiniz hizmet için teşekkür ederim.",
  },
  {
    id: 4,
    avatar: "M",
    name: "Mehmet Yıldız",
    rating: 4,
    text: "Güler yüzlü hizmet. Süreç hakkında detaylı bilgi aldım. Herkese tavsiye ederim.",
  },
];

export function TestmonialSlider() {
  return (
    <div className="relative mx-auto max-w-[1120px]">
      <Carousel>
        <CarouselPrevious>
          <Button className="bg-white rounded-full">&lt;</Button>
        </CarouselPrevious>

        <CarouselContent className="flex md:overflow-visible sm:overflow-hidden">
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="flex-shrink-0 w-full md:basis-1/3 lg:basis-1/3"
            >
              <Card className="p-4 rounded-2xl">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold text-lg">
                    {review.avatar}
                  </div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, index) => (
                        <span key={index} className="text-yellow-500 text-lg">
                          ★
                        </span>
                      ))}
                  </div>
                </div>
                <CardContent className="mt-2 text-center flex-grow flex flex-col justify-between min-h-[120px]">
                  <p className="text-sm text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div>
          <CarouselNext>
            <Button className="bg-white rounded-full shadow-md">&gt;</Button>
          </CarouselNext>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className="inline-block w-2 h-2 bg-gray-300 rounded-full"
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
