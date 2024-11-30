import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Иконки из библиотеки react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Логотип и название компании */}
          <div className="flex items-center mb-6 lg:mb-0">
            <Link href="#" className="-m-1.5 p-1.5 flex items-center">
              <img
                className="h-12 w-auto"
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
              />
              <span className="ml-2 text-xl font-semibold">WARD</span>
            </Link>
          </div>

          {/* Контактная информация */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-indigo-400" />
              <span className="text-sm">+7 (995) 215-60-34</span>{" "}
              {/* Пример телефона */}
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-indigo-400" />
              <span className="text-sm">info@ward.com</span>{" "}
              {/* Пример почты */}
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-indigo-400" />
              <span className="text-sm">Москва, ул. Примерная, д. 10</span>{" "}
              {/* Пример адреса */}
            </div>
          </div>
        </div>

        {/* Раздел с копирайтом */}
        <div className="border-t border-gray-700 pt-4 mt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} WARD. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
