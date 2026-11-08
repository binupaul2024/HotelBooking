import { assets } from "../assets/assets";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex gap-0.5">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="Star Icon"
            className="w-4.5 h-4.5"
          />
        ))}
    </div>
  );
};

export default StarRating;
