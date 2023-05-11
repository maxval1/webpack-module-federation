import { Config } from "./types";

export type { Config };

let _config = {} as Config;

const Conf = {
  init(config: Config): void {
    _config = config;
  },
  getAll(): Config {
    return _config;
  },
};

export default Conf;
