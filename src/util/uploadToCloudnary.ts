export const uploadToCloudinary = async (pics: File) => {

    const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "doi6t2grw";
    const upload_preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "doi6t2grw";
    
    if (pics) {
      
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", upload_preset);
      data.append("cloud_name", cloud_name);
  
      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
          method: "post",
          body: data,
        });
        
        if (!res.ok) {
          throw new Error(`Cloudinary upload failed: ${res.statusText}`);
        }
        
        const fileData = await res.json();
        console.log("Image uploaded successfully:", fileData.url);
        return fileData.url;
      } catch (error) {
        console.error("Image upload error:", error);
        return null;
      }
    } else {
      console.error("No file provided for upload");
      return null;
    }
};