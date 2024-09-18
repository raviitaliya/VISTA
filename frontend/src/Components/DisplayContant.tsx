import { useParams } from "react-router-dom";
import useUserStore from "../store/store";
import { useEffect } from "react";

const DisplayContant = () => {
    const { id } = useParams<{ id: string }>();
    const { allcontentItems, user, fetchUser,getAllContent } = useUserStore();

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchUser();
        getAllContent();
    }, [fetchUser,getAllContent]);

    console.log(allcontentItems);
    // console.log(user);

 

    const item = allcontentItems.find((item: { _id: string | undefined; }) => item._id === id);

    // console.log(item);

    return (
        <div className="flex mt-10 justify-center">
            <div className="flex flex-col w-1/2">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-semibold">{item?.title}</h1>
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center gap-2 mt-4">

                            <img src={item?.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="text-lg font-semibold">{item?.name}</p>
                                <p className="text-sm">{item?.email}</p>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <p className="text-sm">{new Date(item?.uploadDate).toLocaleString()}</p>
                        </div>
                    </div>

                    <p className="text-lg mt-10">{item?.description}</p>

                    <div className="mt-10">
                        {item?.img.map((imgUrl, index) => (
                            <img
                                key={index}
                                src={imgUrl}
                                alt={`Image ${index + 1}`}
                                className="w-full h-[600px] object-cover  mb-8 rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayContant