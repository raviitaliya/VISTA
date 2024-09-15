import React, { useState, ChangeEvent, FormEvent } from "react";
import uploadFiles from "../utils/uploadImg";
import useUserStore from "../store/store";
import { toast, ToastContainer } from "react-toastify"; // Update this import
import "react-toastify/dist/ReactToastify.css"; // Add this import

const UploadContant: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: [] as File[],
  });
  const [isUploading, setIsUploading] = useState(false);
  const { createContent } = useUserStore();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const newImages = [...formData.images];
      newImages[index] = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        images: newImages,
      }));
    }
  };

  const addImageInput = () => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, null as unknown as File],
    }));
  };

  const removeImageInput = (index: number) => {
     setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      const uploadedImages = await uploadFiles(formData.images);

      const contentData = {
        title: formData.title,
        description: formData.description,
        img: uploadedImages.map((img) => img.secure_url),
      };

      console.log(contentData);
      

      await createContent(contentData);

      setIsUploading(false);
      toast.success("Content uploaded successfully!");

      setFormData({
        title: "",
        description: "",
        images: [],
      });
    } catch (error) {
      console.error("Error uploading content:", error);
      setIsUploading(false);
      toast.error("Error uploading content. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex">
      <ToastContainer /> {/* Add this line */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[600px] p-8">
          <h1 className="text-3xl font-semibold mb-8">Upload Content</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block mb-2 font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full rounded-xl py-4 px-4 border outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 font-semibold">
                Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full rounded-xl py-4 px-4 border outline-none focus:ring-1 h-32 resize-none"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Images</label>
              {formData.images.map((_, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, index)}
                    className="w-full py-2 pr-2"
                  />
                  <button
                    type="button"
                    onClick={() => removeImageInput(index)}
                    className=" flex items-center justify-center  px-2 border-[1px] border-black rounded-md"
                  >
                    <p className="font-bold text-xl">-</p>
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addImageInput}
                className="mt-2 px-3 py-1 bg-black text-white rounded-md"
              >
                + Add Image
              </button>
            </div>
            <button
              type="submit"
              className="bg-[rgba(0,0,0,1)] mt-4 text-white py-4 px-4 rounded-2xl hover:bg-[rgba(0,0,0,0.8)] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <span className="animate-spin inline-block mr-2">&#8987;</span>
                  Uploading...
                </>
              ) : (
                "Upload Content"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadContant;