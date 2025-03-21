import cloudinary from '../config/cloudinary.js';

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'uploads',
    });
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error('Error while uploading to cloudinary', error.message);
    throw new Error('Error while uploading to cloudinary', error.message);
  }
};

export { uploadToCloudinary };
