// components/NotificationCard.jsx
import { Link } from "react-router-dom";

const NotificationCard = ({
  to,
  icon,
  title,
  subtitle,
  dateText,
  buttonText,
  buttonColor = "bg-teal-700",
  timeRemaining,
  iconColor = "text-teal-500",
}) => {
  return (
    <Link to={to} className="block hover:scale-[1.02] transition-transform duration-200">
      <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between w-full max-w-sm h-40">
        <div className="flex gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`${iconColor} text-xl`}>{icon}</span>
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          </div>
          <span className="text-sm text-gray-400">{subtitle}</span>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm text-gray-600">{dateText}</span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${buttonColor} text-white`}>
              {buttonText}
            </span>
            <span className="text-xs text-gray-500">{timeRemaining}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NotificationCard;