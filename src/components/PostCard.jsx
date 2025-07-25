import  { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import service from "../appwrite/config";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function PostCard({ $id, title, featuredImage  }) {
  const [imageUrl, setImageUrl] = useState("");


  useEffect(() => {
    const loadImage = async () => {
      if (featuredImage) {
        try {
          const url = await service.getFileView(featuredImage);
          setImageUrl(url);
        } catch (err) {
          console.error("Image view error:", err);
        }
      }
      
    };
    

    loadImage();
  }, [featuredImage]);


  return (
    <Card className="mt-6 w-96 ">
      
      <CardHeader color="blue-gray" className="relative h-56 ">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title || "No title"}
            className="rounded-xl w-full h-54 object-cover p-1"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/300x200?text=Image+Not+Found";
            }}
          />
        ) : (
          <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-xl">
            <span className="text-gray-600">No image</span>
          </div>
        )}
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title || "No title"}
        </Typography>
        <Typography>Click below to read full post.</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between items-center">
        <Link to={`/post/${$id}`}>
          <Button className="hover:bg-gray-600">Read More</Button>
        </Link>

      </CardFooter>
    </Card>
  );
}

export default PostCard;
