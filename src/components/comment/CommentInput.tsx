import ReactQuill from "react-quill-new";


type CommentProps = {
    comment?: string; 
    setComment?: (value: string) => void; 
}

const CommentInput = ({ comment, setComment }: CommentProps) => {
    return (
        <div>
            <ReactQuill
                theme="snow"
                value={comment}
                onChange={setComment}
                placeholder="Write your thoughts..."
                style={{
                    height: "100px",
                    marginBottom: "70px",
                }}
                modules={{
                    toolbar: [
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link"],
                        ["clean"],
                    ],
                }}
            />
        </div>
    );
};

export default CommentInput;