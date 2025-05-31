const Footer = () => {

    return(
        <div className="bg-neutral-800 text-neutral-600 text-[3vmax] font-[panchanglight] flex flex-col gap-[0.5vmax] items-center rounded-t-[2vmax] pb-[1vmax]">
            <h1 className="text-center inline-block">Footer</h1>
            <div className="bg-neutral-600 h-[0.1vmax] w-[80%]"></div>
            <p className="sm:text-sm max-sm:text-[10px] text-white">&copy; Thahir {new Date().getFullYear()}. All rights reserved, ofcourse.</p>
        </div>
    );
}
export default Footer