import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/store';
import { useEffect, useState } from 'react';

const Profile = () => {
    const navigate = useNavigate();
    const { user, fetchUser } = useUserStore();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");


    useEffect(() => {
        fetchUser();
        setname(user?.name);
        setemail(user?.email);
    }, [fetchUser, user?.email, user?.name]);


    console.log(user);


    const handleEditProfile = () => {
        navigate('/editor');
    };

    return (
        <div className="h-full w-full flex justify-center mt-20 items-center ">
            <div className=" w-[80%] ">
                <div className="flex ml-20 items-center py-6  gap-10">
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-24 h-24 rounded-full bg-black" src="" alt="" />
                        <label htmlFor="photo-upload" className="cursor-pointer">
                            <p className="text-blue-500 hover:underline">Edit photo</p>
                        </label>
                        <input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                console.log(e.target.files[0]);
                            }}
                        />
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-start h-36">
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" className="w-48 outline-none text-3xl py-2 font-semibold rounded-md" />
                            <p>{email || "example@gmail.com"}</p>
                            <button className="bg-black text-white px-4 py-2 rounded-lg mt-8">save changes</button>

                        </div>
                    </div>
                </div>
                <hr className="my-10" />

                <div className="flex justify-center flex-col px-32 items-center mb-10">
                    <img className="w-96" src="https://cdn.dribbble.com/assets/art-banners/live-ch-2-7f65b8a5ef445ff880baf36e0427c55c5ee721309e39ec18820e9cfaa0bb3977.jpg" alt="" />
                    <p className="text-center text-sm py-2">Show off your best work. Get feedback, likes and be a part of a growing community.</p>
                    <button
                        className="border-[1px] border-black px-4 py-2 rounded-md mt-4 hover:bg-[rgba(0,0,0,0.03)]"
                        onClick={handleEditProfile}
                    >
                        + Edit profile
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Profile