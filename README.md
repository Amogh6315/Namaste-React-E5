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

# React Fiber / Reconciliation Algorithm

virtual dom is a object reprensentation of actual dom

so In react 16, what react do to update UI is there will be old Virtual dom and new virtual dom and than it will
compare and than update the changes in UI

so in out food app, there were 20 items in resturant cards and when we apply (on click) filter it lowered
down to 14 so 20 items were in old Virtual DOM and 14 were in new virtual DOM which than be compared and 
updated to UI this is Reconciliation Algorithm or React Fiber
virtual dom is just a object, if we console.log a component it will give an object. It will return a react element
like we use to make
const head = React.createElement(h1,{},"Namaste");
like this it will convert whole jsx to this structure and return a object
react does not find differnce between HTML or css it compares 2 object and than update actual dom
that is why react is fast

-----------------------------------------------------------------------------------------------------------------

# why react is fast?
 - beacuse react is doing efficient DOM Manupulation 
 - it has diff algorithm which can do efficient DOM manupulation

# How?
- because it has a virtual DOM

-----------------------------------------------------------------------------------------------------------------

# Single Responsibility principle / Seperation of concerns
- it is when we make microservices like multilpe services like UI, DB, Authentication, etc. they talk to each other
to make whole application. 

-----------------------------------------------------------------------------------------------------------------


Whenever the state variable update, react trigger a reconciliation cycle(re-render the component)


-----------------------------------------------------------------------------------------------------------------

  if no dependency array => useEffect is called on every render
  if dependency array is empty = [] => useEffect is called on intial render(just once)
  is dependency array is [btnLogin] => useEffect is called everytime btnLogin is updated
  useEffect(()=>{
    console.log("useEffect is called");
    
  },[])
  
-----------------------------------------------------------------------------------------------------------------

To navigate a differnt route use Link tag not ahref ahref will reload the whole page but link will just refresh the component
that's why it is one page application via client side routing


-----------------------------------------------------------------------------------------------------------------


# 2 Types of Routing
- Client Side Routing - In this we load the page and just playing with components. No call so server to fetch data
- Server Side Routing - In this like our old website we use to fetch data for every file from server


-----------------------------------------------------------------------------------------------------------------

to unmount in class based component we have componentwillunmount function but in functional based component
we use return like
useEffect(()=>{
  console.log("hi");

  return () ={

  }

  this return will act like this
})

-----------------------------------------------------------------------------------------------------------------

For scaling our application we divide app in chunks  known as
 - chunking
 - code spliting
 - Dynamic Bundling
 - Lazy Loading
 - On demand Loading
 - Dynamic import



we use lazy(()=>import("path of component")) function and than use Suspense with fallback for 
rendering in the middle time

-----------------------------------------------------------------------------------------------------------------

Higher Order Component are just a function they just take one component and returns a component and that component
is a enhanced version of it. just like on top of cards we see bestseller or promoted written.

-----------------------------------------------------------------------------------------------------------------

useContext
so if we want to use some data in multiple component we have to pass it like
resturant menu -> resturant card -> resturant category -> itemList 
so data from menu to item list will be passed by sending in each component which does not even using that. this is 
know as props drilling but to solve this we have useContext 
it like like putting in global so can any component can access
I'll be making UserContext as example
this all is done in fuctional component using hook useContext

for class component we have UserContext.Consume  this usercontext is component made by us
this .consume componet is used we wrap things inside it. it gives value and in return part we can do our work

-----------------------------------------------------------------------------------------------------------------

redux toolkit 
Will be using for data layer for data managemnet

Add(button clicked) => dispatch Action => call reducer function => modify the slice of store 
using selector (subscribing to the store) => cart gets updated