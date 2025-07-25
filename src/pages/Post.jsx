import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

   useEffect(() => {
    if (slug) {
        appwriteService.getPost(slug).then((post) => {
            if (post) {
                setPost(post);
                appwriteService.getFileView(post.featuredImage).then((url) => {
                    setImageUrl(url);
                });
            } else {
                navigate("/");
            }
        });
    } else {
        navigate("/");
    }
}, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/all-posts");
            }
        });
    };

    return post ? (
        <div className="py-8 border rounded-xl border-gray-300 bg-gray-200 min-h-screen "> 
            <Container>
                <div className="w-full flex justify-center mb-4 relative ">
                    <img
                        src={imageUrl}
                        alt={post.title}
                        className="rounded-xl h-80 w-fit object-contain border-2 border-gray-400 shadow-lg"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 rounded-2xl hover:bg-green-700 transition duration-200">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} className="rounded-2xl hover:bg-red-700 transition duration-200">
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>        
        </div>
    ) : null;
}