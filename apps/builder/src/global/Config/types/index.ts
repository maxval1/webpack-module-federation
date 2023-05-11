export type Response<R> = (r: R) => void;

export interface Config {
  api?: {
    // Media
    media?: {
      mediaResizeUrl?: string;

      addMedia?: {
        label?: string;
        handler: (
          res: Response<{ name: string }>,
          rej: Response<string>,
          extra: Record<string, string>
        ) => void;
      };
    };
  };
}
