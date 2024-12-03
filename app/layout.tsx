import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = [
    {
      id: 1,
      name: "Комплекс по контролю пружин WARD",
      description:
        "Автоматизированный комплекс по контролю пружин. Проводит измерение, формирует комплекс, записывает данные в базу данных.",
      image: "/logo.png",
    },
  ];

  return (
    <html lang="ru">
      <head />
      <body className="flex flex-col min-h-screen">
        <Header products={products} />
        <main className="flex-grow">{children}</main> {/* Main content */}
        <Footer />
      </body>
    </html>
  );
}
