import React, { useCallback , useState , useEffect} from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const [previewUrl, setPreviewUrl] = useState("");

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.createPost({
                ...data,
                userId: userData.$id,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/all-posts`);
                    window.location.reload();
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

   useEffect(() => {
  if (post?.featuredImage) {
    appwriteService.getFileView(post.featuredImage).then((url) => {
      setPreviewUrl(url);
    });
  }
}, [post]);


    return (
       <form onSubmit={handleSubmit(submit)} className="flex flex-wrap bg-gray-800 text-white p-4 rounded-lg shadow-lg border
        border-orange-400 mt-5">
  {/* Left Section */}
  <div className="w-full lg:w-2/3 px-2 ">
    <Input
      label="Title :"
      placeholder="Enter the title"
      className="mb-4 focus:ring-orange-400"
      {...register("title", { required: true })}
      onInput={(e) => {
        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
      }}
    />

    <Input
      label="Slug :"
      placeholder="Slug will be auto-generated"
      className="mb-4  focus:ring-orange-400"
      {...register("slug", { required: true })}
    />

    <RTE
      label="Content :"
      name="content"
      control={control}
      defaultValue={getValues("content")}
      className="text-gray-800 "
    />
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-1/3 px-2 mt-4 lg:mt-0">
    <Input
      label="Featured Image :"
      type="file"
      className="mb-4 text-gray-800 file:text-orange-600 file:bg-gray-300 file:border-orange-400 file:rounded-xl file:px-2"
      accept="image/png, image/jpg, image/jpeg, image/gif"
      {...register("image", { required: !post })}
    />

    {post && previewUrl && (
  <div className="w-full mb-4">
    <img
      src={previewUrl}
      alt={post.title}
      className="rounded-lg border border-purple-400 shadow-md h-30 w-30 "
    />
  </div>
)}


    <Select
      options={["active", "inactive"]}
      label="Status:"
      className="mb-5 mt-3 text-orange-600"
      {...register("status", { required: true })}
    />

    <Button
      type="submit"
      bgColor={post ? "bg-green-500" : "bg-orange-500"}
      className="w-full text-white hover:bg-orange-600 transition duration-200 rounded-2xl"
    >
      {post ? "Update" : "Submit"}
    </Button>
  </div>
</form>
    );
}