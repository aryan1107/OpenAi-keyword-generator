import config from "./aws-exports";
import Amplify from "aws-amplify";
Amplify.configure(config);

Amplify.configure({
    ...config,
    ssr: true,
  });