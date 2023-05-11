import React from "react";
import { Button } from "ui";
import { createRoot } from "react-dom/client";

export interface Props {
  name: string;
  onChange: (r: string) => void;
  onError: (r: string) => void;
}

const _Upload = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (data) {
          props.onChange(data.toString());
        }
      };
      reader.onerror = (e) => {
        props.onError(e.toString());
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <p>Media render: {props.name}</p>
      <Button />
      <input type="file" onChange={handleChange} />
    </div>
  );
};

const creatRoot = (root: HTMLElement) => {
  const container = document.createElement("div");
  container.id = "root-media";
  root.appendChild(container);
  return container;
};

interface Root {
  root: HTMLElement;
  onChange: (r: string) => void;
  onError: (r: string) => void;
}

export const Upload: (props: Root) => void = (props) => {
  const container = creatRoot(props.root);
  const root = createRoot(container);

  root.render(
    <_Upload name="builder" onChange={props.onChange} onError={props.onError} />
  );
};

export default Upload;
