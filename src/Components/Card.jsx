
// eslint-disable-next-line react/prop-types
function Card({ name, description, imageUrl }) {
  return (
    <div className="relative h-[380px] w-[280px] flex-shrink-0 rounded-3xl mx-2">
      <img
        src={imageUrl}
        alt={name}
        className="z-0 h-full w-full rounded-3xl object-cover"
      />
      <div className="absolute rounded-3xl inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {description}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
    </div>
  );
}

export default Card;