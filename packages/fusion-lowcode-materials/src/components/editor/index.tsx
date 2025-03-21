import React, { useEffect, useRef, useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Upload, Message } from "@alifd/next";
import "./index.scss";

export interface EditorProps {
  value: string,
  style: any,
  onChange : any,  
  height : number,
  minHeight : number,
  readOnly : boolean,
  fileSize : number,
  type : string,
  onTextChange : any,
  onSelectionChange : any,
  setRequestOpts : any,
}

const Editor : React.FC<EditorProps> = function Editor({
  value,
  style,
  height,
  minHeight,
  readOnly,
  fileSize,
  type,
  onChange,
  onTextChange,
  onSelectionChange,
  setRequestOpts,
}) { 
  const quillRef = useRef<ReactQuill | null>(null); 
  const uploadRef = useRef<any>(null); 
  const buttonRef = useRef<any>(null); 
  const [currentValue, setCurrentValue] = useState(value);

  const styles = {
    height: height ? `${height}px` : "auto",
    minHeight: minHeight ? `${minHeight}px` : "auto",
  };

  // 这里用 useMemo 处理下， 不然会多次渲染，导致最后 ReactQuill 不渲染
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["clean"],
        ["link", "image", "video"],
      ],
      handlers: {
        image: () => handleImageUpload(), 
      },
    },
  }), []);

  const handleImageUpload = () => {
    if (type === "url" && buttonRef.current) {
      // 这里 Upload 组件默认会自动生成 input，不能自定义input，不然会出现2次文件选择框
      // 这里用原生的 button，不用 next 的Button，不然不好触发 click
      buttonRef.current.click(); 
    }
  };

  const handleBeforeUpload = (file) => {
    const validTypes = ["image/jpeg", "image/png", "image/svg"];
    if (!validTypes.includes(file.type)) {
      console.log("图片格式错误!");
      return false;
    }
    if (fileSize && file.size / 1024 / 1024 > fileSize) {
      console.log(`图片大小不能超过 ${fileSize} MB!`);
      return false;
    }

    if (setRequestOpts) {
      return setRequestOpts();
    }

    const requestOpts = {
      action: 'https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload',
      data: { osstoken: 1234 },
      headers: { 'X-Requested-With': 12345 },
    };
    
    // const requestOpts = {
    //   action: 'http://localhost:8080/file/upload',
    //   headers: { 'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6IjRmMWRiZTUwLTM4ZjEtNDIyMC1hMTY4LTcyYzEyMjVkYTliZCIsInVzZXJuYW1lIjoiYWRtaW4ifQ.277-x1xcRckJeqNGd3mLhEUEMHekfl-YNsu1Y0TneJDqigsbx0Kd8g70aWkKJpB8mHpLjtAZEuVvut4Z3XlvpA' },
    // };
    return requestOpts;
  };

  const handleUploadSuccess = (res) => {
    if (res.response.code === 200) {
      const quill = quillRef.current?.getEditor(); 
      const range = quill?.getSelection();
      if (range) {
        quill?.insertEmbed(range.index, "image", res.response.data.url); 
        quill?.setSelection(range.index + 1); 
      }
    } else {
      Message.error("图片插入失败");
    }
  };

  const handleUploadError = () => {
    Message.error("图片上传失败");
  };

  useEffect(() => {
    setCurrentValue(value); 
  }, [value]);

  return (
    <div style={style}>
      {type === "url" && (
        <Upload
          style={{ display: "none" }}
          accept="image/*"
          name="file"
          beforeUpload={handleBeforeUpload}
          onSuccess={handleUploadSuccess}
          onError={handleUploadError}
          ref={uploadRef}
        >      
          <button style={{display: "none"}} ref={buttonRef} />
        </Upload>
      )}
      <ReactQuill
        ref={quillRef}
        value={currentValue}
        onChange={(content, delta, source, editor) => {
          setCurrentValue(content); 
          onChange && onChange(content); 
          onTextChange &&
            onTextChange({
              html: content,
              text: editor.getText(),
              delta,
              quill: editor,
            }); 
        }}
        onChangeSelection={(range, source, editor) => {
          onSelectionChange && onSelectionChange(range, source, editor); 
        }}
        modules={modules}
        readOnly={readOnly}
        style={styles}
        placeholder="请输入内容"
      />
    </div>
  );
};

export default Editor;
