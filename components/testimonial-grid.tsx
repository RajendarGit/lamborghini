'use client';

import Image from 'next/image';

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  image?: string;
  avatar?: string;
  dark?: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: 'Johannes Doe',
    title: 'Outdoor Enthusiast',
    quote: 'I run my blender and projector for beach movie nights!',
    avatar: '/assets/images/user1.png',
    dark: true,
  },
  {
    name: 'Maxwell Reed',
    title: 'Outdoor Enthusiast',
    quote: 'Kept our home powered for three days with a solar panel!',
    image: '/assets/images/banner1.jpg',
  },
  {
    name: 'Alex Mercer',
    title: 'Outdoor Enthusiast',
    quote: 'I set up my projector and blender for outdoor movie nights by the shore!',
    avatar: '/assets/images/user2.1.png',
    dark: true,
  },
  {
    name: 'Noah James',
    title: 'Outdoor Enthusiast',
    quote: 'Thanks to the solar panel, we had power for our phones and camera throughout our three-day forest adventure!',
    image: '/assets/images/banner3.jpg',
  },
  {
    name: 'Oliver Grant',
    title: 'Outdoor Enthusiast',
    quote: 'Kept our phones and camera charged during 3 days in the mountains.',
    avatar: '/assets/images/user2.1.png',
    dark: true,
  },
  {
    name: 'Liam Carter',
    title: 'Outdoor Enthusiast',
    quote: 'Our solar panel kept our phones and camera charged for three days in the forest!',
    image: '/assets/images/banner2.jpg',
  },
];

const TestimonialGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className={`rounded-3xl overflow-hidden shadow-md relative flex flex-col justify-end p-6 h-100 ${
            t.image ? 'bg-white' : t.dark ? 'bg-gray-900 text-white' : 'bg-white'
          }`}
        >
          {t.image && (
            <>
              <Image
                src={t.image}
                alt={`Photo of ${t.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent h-1/2 top-auto" />
            </>
          )}

          <div className="relative z-10">
            <p className="text-lg font-medium mb-4">{t.quote}</p>
            <div className="flex items-center gap-3">
              {t.avatar && (
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs opacity-70">{t.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialGrid;