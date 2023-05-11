import Conf, { Config } from "../global/Config";

function readConfig(config?: unknown) {
  if (typeof config === "object" && config !== null) {
    return config as Config;
  }

  throw new Error("config is not defined");
}

// @ts-expect-error
const visualConfig = window.__VISUAL_CONFIG__;

try {
  Conf.init(readConfig(visualConfig));
} catch (e) {
  // add some kind on notification for users
  console.error("config is brok en. Please contact support");
}
