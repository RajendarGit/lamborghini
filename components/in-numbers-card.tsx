import React from 'react';
import clsx from 'clsx';

type CountCardProps = {
  color?: 'black' | 'orange' | 'white';
  className?: string;
  title?: string;
  count?: number;
  subtext?: string;
};

const InNumbersCard: React.FC<CountCardProps> = ({
  color = 'white',
  className,
  title = '',
  count = 0,
  subtext = '',
}) => {
  const bgColor = clsx({
    'bg-black text-white border-black': color === 'black',
    'bg-theme text-gray-900 border-theme': color === 'orange',
    'bg-white border-gray-200 text-gray-700': color === 'white',
  });

  return (
    <div
      className={clsx(
        'flex flex-col gap-15 py-10 px-8 rounded-2xl border-2',
        'md:min-h-[350px] md:w-1/3 relative mb-4 md:mb-0',
        bgColor,
        className
      )}
    >
      <p className="text-xl border-l-2 pl-3">{title}</p>
      <div className="flex flex-row items-end gap-2 md:absolute bottom-8 left-8">
        <p className="text-8xl">{count}</p>
        <p className="text-xl mb-2">{subtext}</p>
      </div>
    </div>
  );
};

InNumbersCard.displayName = 'InNumbersCard';

export default React.memo(InNumbersCard);