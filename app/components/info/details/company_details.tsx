import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CiBank } from "react-icons/ci";

export default function CompanyDetails() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-5">
          <CiBank className="text-gray-950 h-10 w-10" />
          <h1 className="text-center">Реквизиты компании</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-1 text-gray-500">Полное название</p>
        <p className="mb-3 text-black">
          ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СЕНСОРИКА"
        </p>

        <p className="mb-1 text-gray-500">Краткое название</p>
        <p className="mb-3 text-black">ООО "СЕНСОРИКА"</p>

        <p className="mb-1 text-gray-500">Генеральный директор</p>
        <p className="mb-3 text-black">Выплавень Владимир Сергеевич</p>

        <p className="mb-1 text-gray-500">ИНН</p>
        <p className="mb-3 text-black">5403075230</p>

        <p className="mb-1 text-gray-500">КПП</p>
        <p className="mb-3 text-black">540301001</p>

        <p className="mb-1 text-gray-500">ОГРН</p>
        <p className="mb-3 text-black">1235400001760</p>

        <p className="mb-1 text-gray-500">Основной код ОКВЭД</p>
        <p className="mb-3 text-black">62.01</p>

        <p className="mb-1 text-gray-500">Юридический адрес</p>
        <p className="mb-3 text-black">
          630033, Новосибирская область, городской округ город Новосибирск,
          город Новосибирск, улица Аникина, дом 33
        </p>

        <p className="mb-1 text-gray-500">ОКТМО</p>
        <p className="mb-3 text-black">50701000</p>
      </CardContent>
    </Card>
  );
}
