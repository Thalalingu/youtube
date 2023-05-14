import React from "react";
import { useDispatch } from "react-redux";
import { toggelMenu } from "../utils/appSlice";


const Head = () =>{
    const dispatch = useDispatch()

    const toggelMenuHandler = () =>{
        dispatch(toggelMenu());
    }
    return(
        <div className="grid grid-flow-col p-3 m-2 shadow-lg">
            {/* <h1>im Head</h1> */}
            <div className="flex col-span-1">
                <img  className="h-8 cursor-pointer" onClick={() => toggelMenuHandler()}
                alt="menu"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="/>

                    <a href="/">
                <img className=" h-10 mx-2 pb-2" 
                alt="youtube" 
                src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"/>
                    </a>

            </div>
            <div className="col-span-10 mx-2 px-10">
                <input className="w-1/2 border border-gray-400 p-1 rounded-l-full" type="text" />
                <button className="border border-gray-400 p-1 rounded-r-full">serach</button>
            </div>
            <div>
                <img className=" h-8 col-span-1" 
                alt="user"
                 src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
            </div>

        </div>
    )
}

export default Head