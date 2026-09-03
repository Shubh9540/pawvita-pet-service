import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PricingData } from '@/types/templates.types';
import { FaPaw, FaCheckCircle, FaTimesCircle, FaDog, FaSearchDollar, FaShoppingBag, FaHeart } from 'react-icons/fa';

const renderIcon = (iconName: string, isCardIcon = false) => {
  if (iconName.startsWith('/')) {
    const size = isCardIcon ? 70 : 20;
    return (
      <div className={`relative ${isCardIcon ? 'w-32 h-32' : 'w-5 h-5'}`}>
        <Image src={iconName} alt="Icon" fill sizes="48px" className="object-contain" />
      </div>
    );
  }
  switch (iconName) {
    case 'FaSearchDollar': return <FaSearchDollar className="text-[#00695c]" />;
    case 'FaShoppingBag': return <FaShoppingBag className="text-[#00695c]" />;
    case 'FaHeart': return <FaHeart className="text-[#00695c]" />;
    case 'FaDog': return <FaDog className="text-[#00695c] text-5xl" />;
    default: return <FaPaw className="text-[#00695c]" />;
  }
};

export const PricingSection = ({ data }: { data?: PricingData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#fafaf9] relative overflow-hidden">

      {/* Background decorations (optional paw prints as seen in screenshot) */}
      <div className="absolute top-20 left-10 opacity-5 hidden lg:block">
        <FaPaw className="text-9xl" />
      </div>
      <div className="absolute top-40 right-10 opacity-5 hidden lg:block">
        <FaPaw className="text-9xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#00695c]"></div>
            <div className="flex items-center gap-2 text-[#00695c] font-bold uppercase tracking-wider text-sm">
              <FaPaw /> {data.heading.title}
            </div>
            <div className="w-12 h-px bg-[#00695c]"></div>
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-[#051024] mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          <p className="text-gray-600 text-lg mb-10">
            {data.description}
          </p>
        </div>

        {/* Top Features */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 mb-12 max-w-5xl mx-auto">
          {data.topFeatures.map((feature, idx) => (
            <div key={feature.id} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00695c]/10 flex items-center justify-center">
                {renderIcon(feature.icon)}
              </div>
              <span className="text-[#051024] font-medium text-sm lg:text-base whitespace-nowrap">{feature.text}</span>
              {idx !== data.topFeatures.length - 1 && (
                <div className="hidden md:block w-px h-6 bg-gray-300 ml-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.cards.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-2xl flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl ${card.isPopular ? 'border-2 border-[#00695c] shadow-lg' : 'border border-gray-100 shadow-sm'
                }`}
            >
              {card.isPopular && card.badgeText && (
                <div className="absolute top-0 left-0 w-full bg-[#00695c] text-white text-center py-2 text-xs font-bold uppercase tracking-widest z-10">
                  {card.badgeText}
                </div>
              )}

              <div className="px-8 pb-8 pt-14 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#00695c] mb-1">{card.title}</h3>
                <p className="text-gray-500 text-xs mb-8">{card.subtitle}</p>

                <div className="flex justify-center mb-8 h-24">
                  {renderIcon(card.icon, true)}
                </div>

                <div className="mb-8 flex flex-col items-center">
                  <span className="text-4xl lg:text-5xl font-bold text-[#051024]">{card.price}</span>
                  <span className="text-gray-500 text-sm font-medium mt-1">{card.period}</span>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 text-left">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <FaCheckCircle className="text-[#00695c] shrink-0" size={16} />
                        ) : (
                          <FaCheckCircle className="text-gray-300 shrink-0" size={16} />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-[#051024] font-medium' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-10">
                  <Link
                    href={card.buttonUrl}
                    className={`block w-full py-3 rounded-full text-center font-bold transition-colors duration-300 ${card.isPopular
                        ? 'bg-[#00695c] border-2 border-[#00695c] text-white hover:bg-[#051024] hover:border-[#051024]'
                        : 'border-2 border-[#00695c] text-[#00695c] hover:bg-[#00695c] hover:text-white'
                      }`}
                  >
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
