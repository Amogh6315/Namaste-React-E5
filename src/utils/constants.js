const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

export default LOGO_URL;

export const gitInfo = "https://api.github.com/users/amogh6315";

// So this is important
// there are 2 type of export
// 1. default export
// 2. Named export

// 1. default export -  we can only export 1 at a time just like
// const LOGO_URL =
//   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

// export default LOGO_URL;

// but if we have 2 differnt things to be export which will be obviously there in future
// like
// const LOGO_URL =
//   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

// const FavIcon_URL =
//   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

//   const Resturant_url =
//   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

//   than we have to export all 3 which cannot be done with default export so we use

//   2. Named export just like

//   export const LOGO_URL =
//   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

//   export const FavIcon_URL =
//   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

//     export const Resturant_url =
//   "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

//   only a minor difference is there in importing

//   with normal default we import like

//   import LOGO_URL from "../utils/constants";

//   but with named export it will be in {} bracess

//   import {LOGO_URL} from "../utils/constants";
