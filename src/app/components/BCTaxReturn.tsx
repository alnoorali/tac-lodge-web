import Link from "next/link";

const BreadcrumbTaxReturn = () => {
  return (
    <div className="bg-[#F2F2F2] py-6 px-4 pb-14 pt-20 md:pt-8 mx-auto overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
        <h1 className=" text-[30px] md:text-[64px] font-bold">Online Tax Return</h1>
        <nav className="mt-2 ">
          <ul className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link href="/" className="font-semibold text-black hover:underline">
                Home
              </Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="/ServiceDetails" className="font-semibold text-black hover:underline">
                Service Details
              </Link>
            </li>
            <li>&gt;</li>
            <li className="text-black">Online Tax Return</li>
            
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BreadcrumbTaxReturn;
