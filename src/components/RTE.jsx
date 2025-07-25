import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full mb-4 ">
      {label && <label className="inline-block mb-1">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="6foi4qy7rc3s8glb07wau3l2gocktsziqk5u8vsp5mn8wnjq"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              
              plugins: [
                "image", "advlist","autolink","lists",
                "link", "image", "charmap", "preview",
                "anchor", "searchreplace", "visualblocks","code",
                "fullscreen","insertdatetime", "media", "table",
                "code","help","wordcount","anchor",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          ></Editor>
        )}
      ></Controller>
    </div>
  );
}

export default RTE;
