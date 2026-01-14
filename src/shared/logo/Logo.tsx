import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to={'/'}><h1 className='text-4xl! tracking-tight font-bold! font-body! text-[#333333]!'><span className="text-[#00AAA1]">Pro</span> <span className="text-3xl">Blog</span><span className="text-[#00AAA1]">.</span></h1></NavLink>
    );
};

export default Logo;