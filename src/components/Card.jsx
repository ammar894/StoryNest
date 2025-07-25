import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CardDefault({ $id, title, featuredImage }) {

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      if (featuredImage) {
        try {
          const url = await appwriteService.getFileView(featuredImage);
          setImageUrl(url);
        } catch (err) {
          console.error("Image view error:", err);
        }
      }
    };

    loadImage();
  }, [featuredImage]);

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/posts/${$id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}