import React from 'react';

import { RequestButton } from './RequestButton';

import CurvedLine from '../images/pattern-curved-line-1.svg';

export const HeroIntro = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-start gap-[32px] mx-auto md:mx-0 md:pt-[43px] md:gap-[40px] ${className}`}>
      <div
        className="
      text-[38px] leading-[44px] tracking-[-0.53px]
      md:tracking-[-0.78px]
      md:text-dynamic
      xl:tracking-[-1px] z-10
      "
      >
        <p className="inline-block">
          <img
            src={CurvedLine}
            alt="curved lined"
            className="w-[152px] h-[19px] md:w-curvedLined md:h-curvedLined ml-auto"
          />
          A <strong>super solution</strong>
        </p>

        <p className="whitespace-nowrap">
          for your<strong> business.</strong>
        </p>
      </div>

      <p className="text-grey-123 leading-[28px] tracking-[-0.09px] max-w-[350px] lg:text-[18px] lg:leading-[32px] lg:tracking-[-0.1px]">
        Our marketing and sales automations help you scale your outreach to get more leads for your company.
      </p>

      <RequestButton buttonStyle="primary" customStyle="" />
    </div>
  );
};
