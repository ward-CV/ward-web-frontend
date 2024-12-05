import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="flex justify-center items-start w-full h-full">
      <Card className="w-full h-auto flex flex-col items-center text-center">
        <CardHeader>
          <CardTitle>О нас</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Компания была основана в 2024 году с целью улучшения процессов
            контроля качества в сфере машиностроения.
          </p>
          <p className="mb-4">
            Мы предлагаем автоматизированные комплексы для контроля пружин,
            которые способны измерять, записывать и анализировать данные в
            реальном времени.
          </p>
          <p className="mb-4">
            В нашем арсенале есть уникальные методы и технологии, которые
            позволяют добиться высокой точности измерений
          </p>
          <p className="mb-4">
            Мы гордимся тем, что наша продукция используется крупнейшими
            заводами и компаниями по всему миру.
          </p>
          <p className="mb-4">
            В ближайшем будущем мы планируем расширение ассортимента и внедрение
            новых технологий, которые будут еще более эффективными и удобными
            для наших клиентов.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
