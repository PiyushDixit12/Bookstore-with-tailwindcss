import {NavBar} from "./Navbar/NavBar"


// eslint-disable-next-line react/prop-types
export const Layout = ({children}) => {
    return (
        <div className=" w-screen h-screen">
            <NavBar />
            {children}
        </div>
    )
}
