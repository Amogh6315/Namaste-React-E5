# Namaste React🚀

# Parcel
- Dev Build
- Local Server
- HMR(Hot module replacement) live change in server
- File watching algorithm written in c++
- Caching Faster build
- Image Optimisation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Spitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- Https
- Tree Shaking -remove unused code
- Different Dev and Prod build


-----------------------------------------------------------------------------------------------------------------

~ means major update like 2.0.1 to 3.1.1
^ means minor update like 2.8.1 to 2.8.3
 "dependencies": {
    "parcel": "^2.15.2"
  }
in package.json file in dependencies we write verisons so before that ~ and ^ are used


-----------------------------------------------------------------------------------------------------------------


Transitive dependencies
Why node modules have these many files.
so parcel have some dependencies and for those dependencies there might be other dependencies
which is called Transitive dependencies and thats why all the files in node modules are needed
All of them inside node_module is a package

-----------------------------------------------------------------------------------------------------------------

node_module is a collection of dependencies. It is kind a database for all our packages, 
all the files all the codes


-----------------------------------------------------------------------------------------------------------------

if i have my package.json and package-lock.json, i can regenerate node_modules even if they get deleted

-----------------------------------------------------------------------------------------------------------------


# React Components
- Functional Component
- Class Component


-----------------------------------------------------------------------------------------------------------------

# Functional Component
- A javascript function which return jsx is functional Component
- A function which return React Component is a functional Component


-----------------------------------------------------------------------------------------------------------------

JSX provides Cross site scripting. Anything passed in {} in code gets executed so to prevent attacks 
jsx sanatise code running in {} and do not blindly execute it. protecting our device with malicious attacks

-----------------------------------------------------------------------------------------------------------------

Props - Properties
Props is passing an argument to the function
Passing a prop to a component
when you have to dynaimcally pass a data to a component you pass it as a prop

-----------------------------------------------------------------------------------------------------------------

Config driven UI


-----------------------------------------------------------------------------------------------------------------


instead of looping we should use map, filter functions of JS 
to take details of every item from json we can loop it and than call it but thats not a good practice
        {resList.map((resturant) =>(
            <ResturantCard key={resturant.id} resData={resturant}/>
        ))}


-----------------------------------------------------------------------------------------------------------------


// Online Food ordering App
// Header
// -Logo
// -NavBar
// Body
// -Search
// -Resturant Cards
//   -img, Res name, rating, delivery time
// Footer
// -Copyright
// -Address


-----------------------------------------------------------------------------------------------------------------


So this is important
there are 2 type of export 
1. default export
2. Named export

1. default export -  we can only export 1 at a time just like 
const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

export default LOGO_URL;

but if we have 2 differnt things to be export which will be obviously there in future
like 
const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

const FavIcon_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

  const Resturant_url =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

  than we have to export all 3 which cannot be done with default export so we use

  2. Named export just like

  export const LOGO_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

  export const FavIcon_URL =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

    export const Resturant_url =
  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large";

  only a minor difference is there in importing

  with normal default we import like

  import LOGO_URL from "../utils/constants";

  but with named export it will be in {} bracess

  import {LOGO_URL} from "../utils/constants";

  -------------------------------------------------------------------------------------------------------------
  # React Hooks
  - useState (whenever state variable update React rerender the component) 80%
  - useEffect () 20%
  rest we will use 1%


------------------------------------------------------------------------------------------------------------

# React Fiber / Reconcilation Algorithm
