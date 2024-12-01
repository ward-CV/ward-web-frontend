import CompanyDetails from "@/app/components/info/details/company_details";
import BankDetails from "@/app/components/info/details/bank_details";

export default function PaymentPage() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full p-8 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <CompanyDetails />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full p-8 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <BankDetails />
        </div>
      </div>
    </div>
  );
}
