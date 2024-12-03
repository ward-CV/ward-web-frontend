import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdCurrencyRuble } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { CgFileDocument } from "react-icons/cg";

const DetailedDescription = () => {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>WARD SPRING</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Прибор предназначен для контроля натяга (разности диаметров
            соединения) посадки внутренних колец подшипников буксового узла на
            шейку оси колесной пары при проверке плотности посадки на
            предприятиях, занимающихся ремонтом и техническим обслуживанием
            колесных пар вагонов, тягового и специального подвижного состава.
            Благодаря удобному подключению по USB Type-C к смартфону или
            планшету с ОС Android, вы сможете легко и быстро провести контроль,
            используя специальное мобильное приложение. Результаты контроля
            хранятся в памяти смартфона и могут быть синхронизированы с внешними
            системами для удаленного доступа к ним и формирования электронного
            протокола.
          </p>
        </CardContent>
      </Card>

      <Card className="border-none shadow-none">
        <CardTitle className="flex items-center">
          <h1 className="text-center ml-6">Стоимость: 500 000</h1>
          <MdCurrencyRuble />
        </CardTitle>
        <CardContent>
          <Button className="mt-6">
            Оставить заявку <CgFileDocument />
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailedDescription;
