import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head />
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main> {/* Main content */}
        <Footer />
      </body>
    </html>
  );
}
