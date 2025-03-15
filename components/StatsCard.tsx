import { MoveUpRight } from "lucide-react";
import CountUp from "./blocks/TextAnimations/CountUp/CountUp";

interface StatsCardProps {
  value: string;
  description: string;
  tag?: string;
  isDark?: boolean;
}

export default function StatsCard({ value, description, tag, isDark = false }: StatsCardProps) {
  const match = value.match(/^(.*?)([\d,\,\.]+)(.*?)$/);
  const isNumeric = Boolean(match) && !isNaN(parseFloat(match![2].replace(/,/g, '')));
  const prefix = match ? match[1] : "";
  const numericStr = match ? match[2].replace(/,/g, '') : "";
  const suffix = match ? match[3] : "";
  const numericValue = isNumeric ? parseFloat(numericStr) : 0;

  return (
    <div className={`group px-6 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-4xl shadow-md 
      ${isDark ? 'bg-background-black border border-gray-500' : 'bg-custom-gray-bg'} 
      hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out transform
      ${isDark ? 'hover:bg-button-secondary' : 'hover:bg-black'}`}>
      <div className={`pb-2 ${tag ? 'flex justify-between items-center' : ''}`}>
        <p className={`text-2xl md:text-4xl font-bold ${isDark ? 'text-primary-color group-hover:text-black' : 'text-custom-gray-dark'} 
          group-hover:translate-x-1 transition-transform duration-300`}>
          {isNumeric ? (
            <>
              {prefix}
              <CountUp
                from={0}
                to={numericValue}
                duration={1}
                separator=","
                className="count-up-text"
              />
              {suffix}
            </>
          ) : (
            value
          )}
        </p>
        {tag && (
          <div className={`${isDark ? 'text-black border border-black' : 'bg-black text-white border border-black'} 
            rounded-2xl md:rounded-4xl flex justify-center items-center px-3 md:px-5 text-xs md:text-sm
            group-hover:bg-white group-hover:text-black transition-colors duration-300`}>
            <p>{tag}</p>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <p className={`text-sm md:text-base ${isDark ? 'text-gray-100 group-hover:text-black' : 'text-custom-gray-dark'}`}>
          {description}
        </p>
        {!tag && !isDark && (
          <div className="bg-black text-white p-1.5 md:p-2 rounded-full ml-2
            group-hover:bg-white group-hover:text-black hover:rotate-45 transition-transform duration-300">
            <MoveUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        )}
      </div>
    </div>
  );
}
