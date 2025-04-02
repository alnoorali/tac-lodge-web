import PayCalculator from "@/app/components/PayCalculator";
import BreadcrumbCalc from "../components/BreadcrumbCalc";
import WelcomeSection from "../components/WelcomeCalc";
import TaxReturnSection from "../components/GetStarted";

export default function Calculator() {
  return (
    <main className=" pt-28  mx-auto overflow-x-hidden">
        <div>
        <BreadcrumbCalc/>
        <WelcomeSection/>
        
      <PayCalculator />
      <TaxReturnSection/>
      </div>
    </main>
  );
}
