"use client";
import Card from "@/app/components/Card";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { filled: 20, remaining: 30 },
  { filled: 40, remaining: 20 },
  { filled: 30, remaining: 25 },
  { filled: 50, remaining: 10 },
  { filled: 25, remaining: 35 },
  { filled: 45, remaining: 15 },
  { filled: 35, remaining: 25 },
];

const TotalSavesCard = () => {
  return (
    <Card className="md:w-[120px] md:h-[130px] 2xl:w-[200px] 2xl:h-[220px] shadow-lg rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Title */}
      <h3 className="md:text-sm 2xl:text-lg text-gray-500 font-medium">Total Saves</h3>

      {/* Price */}
      <p className="md:text-xl 2xl:text-2xl font-semibold">$6.682</p>

      {/* Graph */}
      <div className="md:mt-1 2xl:mt-5">
        {/* Wrapper div to control height dynamically */}
        <div className="h-[50px] 2xl:h-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis hide />
              <YAxis hide />

              {/* Orange Bottom Layer - Rounded Bottom */}
              <Bar
                dataKey="filled"
                stackId="stack"
                fill="#FE5722"
                radius={[0, 0, 10, 10]}
              />

              {/* Gray Top Layer - Rounded Top */}
              <Bar
                dataKey="remaining"
                stackId="stack"
                fill="#E5E7EB"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default TotalSavesCard;
