function Footer() {
  return (
    <footer className="text-center border-t px-5 py-5 flex flex-col items-center gap-6 md:gap-16">
      <p className="text-4xl md:text-9xl font-bold ">Concert Photography</p>
      <ul className=" grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-row items-center text-white-smoke gap-x-4 gap-y-6 md:gap-11 border-y px-4 py-4 w-full max-w-4xl justify-center">
        <li className="">Home</li>
        <li className="">About</li>
        <li className="">Team</li>
        <li className="">Contact</li>
        <li className="">BTS</li>
        <li className="">Gallery</li>
        <li className="">Trailer</li>
      </ul>
      <div className="flex w-full text-xs justify-between">
        <p className="text-zinc-400 text-xs">Privacy Policy</p>
        <p className="text-zinc-400 text-xs">CONCERT PHOTOGRAPHY</p>
      </div>
    </footer>
  );
}
export default Footer;
