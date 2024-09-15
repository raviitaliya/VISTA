import { useEffect, useState } from "react";
import useUserStore from "../store/store";
import Post from "../Components/Post";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";

const HomePage = () => {
	const { getAllContent, allcontentItems } = useUserStore();
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		getAllContent();
	}, []);

	// Filter content based on search term
	const filteredContent = allcontentItems.filter((item) =>
		item.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="h-full w-full flex flex-col items-center">
			<div className="w-3/4 mt-10 relative">
				<input
					type="text"
					placeholder="Search posts..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full px-4 py-3 pl-10 border-[1px] rounded-2xl border-black focus:outline-none focus:border-blue-500"
				/>
				<MagnifyingGlass
					className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
					size={20}
				/>
			</div>
			<div className="flex justify-center w-full items-center mt-10 h-full">
				<div className="flex flex-wrap justify-center gap-10">
					{filteredContent.map((item) => (
						<Link to={`/display/${item._id}`} key={item._id}>
							<Post key={item._id} img={item.img[0]} name={item.title} avatar={item.avatar} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;