import Image from "next/image";

interface HexagonCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={` relative w-[280px] h-[240px] flex items-center justify-center ${className || ""}`}>
      {/* Background Hexagon Image */}
      <Image
        src="/frame.png" // Replace with your hexagon image path
        alt="Hexagon Frame"
        width={280}
        height={240}
        className="absolute"
      />
      {/* Content Inside the Hexagon */}
      <div className="absolute flex flex-col items-center text-center px-4">
        <div className="w-12 h-12 mb-3 ">
          <Image src={icon} alt="Icon" width={48} height={48} />
        </div>
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};


export default HexagonCard;
