import HowItWorks from "./steps"; // Importing HowItWorks component

const TaxLodgeProcess = () => {
  return (
    <div className=" flex flex-col justify-center md:justify-evenly items-center max-w-5xl mx-auto py-10 px-4 mt-6">
        <h1 className="text-[28px] md:text-[44px] font-bold text-center">How Tax Lodge Online Works</h1>
      <HowItWorks /> {/* This will handle step buttons, descriptions, and images */}
    </div>
  );
};

export default TaxLodgeProcess;
