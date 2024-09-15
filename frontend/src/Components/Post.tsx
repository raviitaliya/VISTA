import { Heart,Eye } from "@phosphor-icons/react";

const Post = ({img,name}) => {
  return (
    <div className="w-[415px] h-[345px]">
      <div className="flex flex-col gap-2">
        <div className="h-[305px] bg-red-300 rounded-lg">
          <img className="object-cover w-[415px] h-[305px] rounded-lg " src={img} alt=""  />
        </div>
        <div className="flex justify-between items-center px-1">
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-full bg-black"></div>
            <p>{name}</p>
          </div>
          <div className="flex gap-2 ">
            <div className="flex gap-1 items-center">
              <Heart size={16} className="text-gray-400" weight="fill" />
              <p className="text-sm">100</p>
            </div>
            <div className="flex gap-1 items-center">
              <Eye size={16} className="text-gray-400" weight="fill" />
              <p className="text-sm">100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
