// components/StatsCard.jsx
import { Link } from "react-router-dom";

const StatsCard = ({
  to,
  title,
  subtitle,
  value,
  statusText,
  gradient,
  textColor = "text-gray-700",
  valueColor = "text-teal-600",
  statusColor = "text-gray-500",
}) => {
  return (
    <Link
      to={to}
      className="block hover:scale-[1.02] transition-transform duration-200"
    >
      <div
        className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between w-full max-w-sm h-40"
        style={gradient ? { background: gradient } : {}}
      >
        <div className="flex items-center gap-4 justify-between">
          <h3 className={`text-lg font-semibold ${textColor}`}>{title}</h3>
          <span className={`text-sm ${statusColor}`}>{subtitle}</span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <span className={`text-4xl font-bold ${valueColor}`}>{value}</span>
          <span className={`text-sm ${statusColor}`}>{statusText}</span>
        </div>
      </div>
    </Link>
  );
};

export default StatsCard;