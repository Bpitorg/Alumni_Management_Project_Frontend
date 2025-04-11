// components/HighlightCard.jsx
import { Link } from "react-router-dom";

const HighlightCard = ({ 
  type = "default",
  icon,
  title,
  items,
  linkText,
  linkTo,
  additionalContent,
  gradientFrom = "from-cyan-500",
  gradientTo = "to-blue-600"
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${type === 'event' ? 'flex flex-col' : ''}`}>
      {type === 'event' && (
        <div className="relative">
          <div className={`h-40 bg-gradient-to-r ${gradientFrom} ${gradientTo} flex items-center justify-center`}>
            <span className="text-5xl text-white opacity-90">{icon}</span>
          </div>
          <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full shadow-sm">
            <span className="text-xs font-medium">Event Recap</span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className={`flex items-center gap-3 mb-4 ${type === 'event' ? '' : 'flex-row'}`}>
          {type !== 'event' && (
            <span className="text-3xl">{icon}</span>
          )}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>

        {type === 'members' ? (
          <>
            <div className="flex flex-wrap gap-4 mb-4">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mb-1`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <span className="text-xs text-center">{item.name}</span>
                </div>
              ))}
            </div>
            {additionalContent && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">{additionalContent}</p>
              </div>
            )}
          </>
        ) : type === 'event' ? (
          <>
            <p className="text-gray-600 mb-4 text-sm">{additionalContent}</p>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {items.map((item, index) => (
                  <div 
                    key={index} 
                    className={`w-8 h-8 rounded-full ${item.bgColor} border-2 border-white flex items-center justify-center text-xs ${item.textColor}`}
                  >
                    {item.initials}
                  </div>
                ))}
              </div>
              <Link
                to={linkTo}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {linkText}
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`${item.bgColor} p-2 rounded-full`}>
                    <span className={`${item.iconColor}`}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {type !== 'event' && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
          <Link
            to={linkTo}
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            {linkText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default HighlightCard;