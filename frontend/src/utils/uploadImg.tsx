const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/auto/upload`;


const uploadFiles = async (files: string | Blob | (string | Blob)[]) => {
  // Ensure files is always an array
  const fileArray = Array.isArray(files) ? files : [files];

  const uploadPromises = fileArray.map(async (file) => {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string);
    
    const res = await fetch(url, {
      method: "POST",
      body: formdata
    });
    
    return res.json();
  });

  const results = await Promise.all(uploadPromises);
  return results;
}

export default uploadFiles;