import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GoCreditCard } from "react-icons/go";
import Image from "next/image";

export default function BankDetails() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-5">
          <GoCreditCard className="text-gray-950 h-10 w-10" />
          <h1 className="text-center">Банковские реквизиты</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-1 text-gray-500">Расчётный счёт</p>
        <p className="mb-3 text-black">40702810410001286626</p>

        <p className="mb-1 text-gray-500">Банк</p>
        <p className="mb-3 text-black">АО "Тинькофф Банк"</p>

        <p className="mb-1 text-gray-500">БИК Банка</p>
        <p className="mb-3 text-black">044525974</p>

        <p className="mb-1 text-gray-500">ИНН Банка</p>
        <p className="mb-3 text-black">7710140679</p>

        <p className="mb-1 text-gray-500">Корреспондентский счёт</p>
        <p className="mb-3 text-black">30101810145250000974</p>

        <p className="mb-1 text-gray-500">Юридический адрес банка</p>
        <p className="mb-3 text-black">
          127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26
        </p>

        <Image src="/qr_code.jpg" alt="Bank" width={170} height={170} />
      </CardContent>
    </Card>
  );
}
