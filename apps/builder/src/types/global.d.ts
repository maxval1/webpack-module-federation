declare global {
  namespace NodeJS {
    interface Global {
      IS_EDITOR: boolean;
      BRZ_IS_DRAGGING?: boolean;
      Brizy: any;
      parent: Global;
    }
  }

  interface Window {
    Brz: Record<string, any>;
    __VISUAL_CONFIG__?: Record<string, any>;
  }

  type Primitive = undefined | null | string | number | boolean;
}
