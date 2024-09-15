import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../store/store';
import { useEffect, useState } from 'react';
import { ContentItem } from '../store/store';
import Post from '../Components/Post';
import uploadFiles from '../utils/uploadImg';

const Profile = () => {
    const navigate = useNavigate();
    const { user, contentItems, updateUser } = useUserStore();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState<ContentItem[]>([]);
    const [isNameChanged, setIsNameChanged] = useState(false);
    const [avatar, setavatar] = useState<string | null>(null);

    useEffect(() => {
        setName(user?.name || "");
        setEmail(user?.email || "");
        setavatar(user?.avatar || null);
    }, [user?.email, user?.name, user?.avatar]);

    useEffect(() => {
        setContent(contentItems || []);
    }, [contentItems]);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setIsNameChanged(e.target.value !== user?.name);
    };

    const handleSaveChanges = () => {
        if (user) {
            updateUser({ ...user, name });
            setIsNameChanged(false);
        }
    };

    const handleEditProfile = () => {
        navigate('/editor');
    };

    const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const uploadedUrls = await uploadFiles([file]);
                if (uploadedUrls.length > 0) {
                    const photoUrl = uploadedUrls[0];
                    setavatar(photoUrl.url);
                    console.log(photoUrl.url);
                    if (user) {
                        // Update the user object with the new avatar
                        updateUser({ ...user, avatar: photoUrl.url });
                    }
                }
            } catch (error) {
                console.error("Error uploading file:", error);
                // Handle error (e.g., show an error message to the user)
            }
        }
    };

    return (
        <div className="h-full w-full flex justify-center mt-20 items-center ">
            <div className=" w-[80%] ">
                <div className='flex justify-between'>

                    <div className="flex ml-20  items-center py-6  gap-10">
                        <div className="flex flex-col items-center gap-4">

                            <img
                                className="w-24 h-24 rounded-full object-cover"
                                src={avatar || "/image.png"}
                                alt="Profile"
                            />
                            <label htmlFor="photo-upload" className="cursor-pointer">
                                <p className="text-blue-500 hover:underline">Edit photo</p>
                            </label>
                            <input
                                id="photo-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handlePhotoUpload}

                            />
                        </div>
                        <div className="flex flex-col items-center ">
                            <div className="flex flex-col justify-start h-36">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder="Name"
                                    className="w-48 outline-none text-3xl py-2 font-semibold rounded-md"
                                />
                                <p>{email || "email@gmail.com"}</p>
                                {
                                    isNameChanged && (
                                        <button
                                            onClick={handleSaveChanges}
                                            disabled={!isNameChanged}
                                            className={`mt-8 px-4 py-2 rounded-md bg-black text-white `}
                                        >
                                            Save Changes
                                        </button>
                                    )
                                }

                            </div>

                        </div>
                    </div>
                    <div className='flex items-end mb-4'>
                            
                {
                    content.length > 0 ? (
                        <button
                            className="border-[1px] border-black px-4 py-2 rounded-md mt-4 hover:bg-[rgba(0,0,0,0.03)]"
                            onClick={handleEditProfile}
                        >
                            + Upload
                        </button>
                    ):("")}
                    </div>
                </div>


                <hr className="my-10" />

                {
                    content.length > 0 ? (
                        <div  className="flex flex-wrap justify-center gap-20">
                            {content.map((item) => (
                                <Link to={`/display/${item._id}`} key={item._id} >
                                <Post key={item._id} img={item.img[0]} name={item.title} avatar={item.avatar} />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center flex-col px-32 items-center mb-10">
                            <img className="w-96" src="https://cdn.dribbble.com/assets/art-banners/live-ch-2-7f65b8a5ef445ff880baf36e0427c55c5ee721309e39ec18820e9cfaa0bb3977.jpg" alt="" />
                            <p className="text-center text-sm py-2">Show off your best work. Get feedback, likes and be a part of a growing community.</p>
                            <button
                                className="border-[1px] border-black px-4 py-2 rounded-md mt-4 hover:bg-[rgba(0,0,0,0.03)]"
                                onClick={handleEditProfile}
                            >
                                + Upload
                            </button>
                        </div>
                    )
                }



            </div>
        </div>
    )
}

export default Profile