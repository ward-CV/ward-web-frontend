import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contacts() {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Контакты</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Адрес: г. Москва, ул. Красная, д. 12, офис 123</p>
          <p className="mb-4">Телефон: +7 (995) 215-60-34</p>
          <p className="mb-4">E-mail: info@ward.com</p>
        </CardContent>
      </Card>

      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Есть вопросы?</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Задать вопрос</Button>
        </CardContent>
      </Card>
    </>
  );
}
