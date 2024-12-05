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
          ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "WARD"
        </p>

        <p className="mb-1 text-gray-500">Краткое название</p>
        <p className="mb-3 text-black">ООО "WARD"</p>

        <p className="mb-1 text-gray-500">Генеральный директор</p>
        <p className="mb-3 text-black">Суров Данил Павлович</p>

        <p className="mb-1 text-gray-500">ИНН</p>
        <p className="mb-3 text-black">4253055375</p>

        <p className="mb-1 text-gray-500">КПП</p>
        <p className="mb-3 text-black">425301001</p>

        <p className="mb-1 text-gray-500">ОГРН</p>
        <p className="mb-3 text-black">1234200016005</p>

        <p className="mb-1 text-gray-500">Основной код ОКВЭД</p>
        <p className="mb-3 text-black">26.51.6</p>

        <p className="mb-1 text-gray-500">Юридический адрес</p>
        <p className="mb-3 text-black">
          654063, Кемеровская область - Кузбасс, г. о. Новокузнецкий, г.
          Новокузнецк, р-н Куйбышевский, ул. Челюскина, д. 51, кв. 16
        </p>

        <p className="mb-1 text-gray-500">ОКТМО</p>
        <p className="mb-3 text-black">32731000001</p>
      </CardContent>
    </Card>
  );
}
