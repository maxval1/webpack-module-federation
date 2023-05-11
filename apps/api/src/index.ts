const api = {
  media: {
    mediaResizeUrl: "https://media-resize.8base.com/",
    addMedia: {
      label: "Add Media",
      // @ts-expect-error
      handler: async (res, rej, extra) => {
        try {
          // @ts-expect-error
          const { Upload } = await import("media/upload");

          Upload({
            root: document.body,
            onChange: (file: string) => {
              res({ name: file });
            },
            onError: (error: string) => {
              rej(error);
            },
          });
        } catch (e) {
          rej("Something went wrong");
        }
      },
    },
  },
};

// @ts-expect-error
if (window.__VISUAL_CONFIG__) {
  // @ts-expect-error
  window.__VISUAL_CONFIG__.api = api;
}

export {};
