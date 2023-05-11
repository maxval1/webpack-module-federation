import React, { FC } from "react";
import Config from "./global/Config";

export interface Props {
  name: string;
}

export const App: FC<Props> = (props) => {
  const [upload, setUpload] = React.useState<{ name: string }>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();

  const handleClick = async () => {
    const config = Config.getAll();
    setLoading(true);

    const res = (data: { name: string }) => {
      setUpload(data);
      setLoading(false);
    };
    const rej = (err: string) => {
      setError(err);
      setLoading(false);
    };

    config.api?.media?.addMedia?.handler?.(res, rej, { accept: "image/*" });
  };

  return (
    <div>
      <div>Builder render: {props.name}</div>
      {loading && <div>Loading...</div>}
      {upload && <div>Uploaded: {upload.name}</div>}
      {error && <div>Error: {error}</div>}
      <button onClick={handleClick}>Upload</button>
    </div>
  );
};
