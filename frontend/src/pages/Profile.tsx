    const Profile = () => {
    return ( 
        <div className="h-full w-full flex justify-center mt-20 items-center ">
            <div className=" w-[80%] ">
                <div className="flex justify-center items-center  gap-6">
                    <div className="">
                        <img className=" w-24 h-24 rounded-full bg-black " src="" alt="" />
                        <button className="bg-black text-white px-4 py-2 rounded-xl mt-4">Edit profile</button>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-start h-36">
                        <input type="text" placeholder="Name" className="w-48 outline-none text-3xl py-2 font-semibold rounded-md" />
                        <input type="text" placeholder="email" className="w-48 outline-none  rounded-md" />

                        </div>
                    </div>
                </div>
                <hr className="my-10"/>

            </div>
        </div>
    )
}

export default Profile