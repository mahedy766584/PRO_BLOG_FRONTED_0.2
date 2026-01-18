import { useFormContext, type RegisterOptions } from "react-hook-form";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

type ProBlogEditorProps = {
  name: string;
  rules?: RegisterOptions;
  placeholder: string;
  theme?: "snow";
  label?: string;
};

const ProBlogEditor = ({
  name,
  rules,
  placeholder,
  theme = "snow",
  label,
}: ProBlogEditorProps) => {
  const { control } = useFormContext();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "indent",
    "link",
    "image",
    "align",
  ];

  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <ReactQuill
              theme={theme}
              value={field.value || ""}
              onChange={field.onChange}
              placeholder={placeholder}
              modules={modules}
              formats={formats}
              style={{
                height: "300px",
                marginBottom: "70px",
              }}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProBlogEditor;
