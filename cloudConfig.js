const cloudinayo = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinayo.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinayo,
    params: {   
        folder: 'Wanderlust_DEV',
        allowed_formats: ['jpeg', 'png', 'jpg', 'webp'],
    },
});

module.exports = {
    cloudinayo,
    storage,
};