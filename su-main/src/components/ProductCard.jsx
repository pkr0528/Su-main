import { ArrowRight } from 'lucide-react';

export default function ProductCard({
  title,
  description,
  features,
  icon: Icon,
  gradient,
  redirectUrl,
  onSubscribe,
}) {
  return (
  <div className="group relative bg-white rounded-2xl p-4 sm:p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-blue">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

      <div className="relative z-10">
        <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${gradient} mb-3 shadow-md`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-3 leading-snug text-sm">{description}</p>

        <ul className="space-y-1.5 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0"></div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => onSubscribe(title, redirectUrl)}
          className={`w-full px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-md font-medium hover:shadow transition-all duration-200 flex items-center justify-center gap-2 text-sm`}
        >
          Subscribe Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
