import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async () =>{

    cloudinary.config({
        cloud_name:process.env.CLOUDAINARY_NAME,
        cloud_key:process.env.CLOUDAINARY_API_KEY,
        api_secret:process.enV.CLOUDAINARY_SECRET_KEY
    })

}

export default connectCloudinary;