import { MoveUpRight } from "lucide-react";

interface StatsCardProps {
  value: string;
  description: string;
  tag?: string;
  isDark?: boolean;
}

export default function StatsCard({ value, description, tag, isDark = false }: StatsCardProps) {
  return (
    <div className={`px-6 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-4xl shadow-md 
      ${isDark ? 'bg-black' : 'bg-[#e9e9e9]'} 
      hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out transform
      ${isDark ? 'hover:bg-gray-900' : 'hover:bg-[#f0f0f0]'}`}>
      <div className={`pb-2 ${tag ? 'flex justify-between items-center' : ''}`}>
        <p className={`text-2xl md:text-4xl font-bold ${isDark ? 'text-white' : ''} 
          group-hover:translate-x-1 transition-transform duration-300`}>{value}</p>
        {tag && (
          <div className="text-black rounded-2xl md:rounded-4xl border border-black flex justify-center items-center px-3 md:px-5 text-xs md:text-sm
            hover:bg-black hover:text-white transition-colors duration-300">
            <p>{tag}</p>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <p className={`text-sm md:text-base ${isDark ? 'text-gray-100' : ''}`}>{description}</p>
        {!tag && !isDark && (
          <div className="bg-black text-white p-1.5 md:p-2 rounded-full ml-2
            hover:rotate-45 transition-transform duration-300">
            <MoveUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        )}
      </div>
    </div>
  );
}
