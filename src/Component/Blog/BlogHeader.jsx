import { useState } from "react";
import BlogHead from "./BlogHead";
import Oldest from "./Oldest";
import Video from "./Video";
import Gallery from "./Gallery";
function BlogHeader() {
  const [click, setClick] = useState(1);

  const handleClick = (index) => {
    setClick(index);
  };

  return (
    <>
      <div className="flex flex-row text-center justify-center gap-14 max-md:gap-8 pt-10 pb-4">
        <p className="cursor-pointer text-xl" onClick={() => handleClick(1)} style={{ borderBottom: click === 1 ? "2px solid #029837" : "none" }}>
          Blog
        </p>
        <p className="cursor-pointer text-xl" onClick={() => handleClick(3)} style={{ borderBottom: click === 3 ? "2px solid #029837" : "none" }}>
          Oldest
        </p>
        <p className="cursor-pointer text-xl" onClick={() => handleClick(4)} style={{ borderBottom: click === 4 ? "2px solid #029837" : "none" }}>
          Picture 
        </p>
        <p className="cursor-pointer text-xl" onClick={() => handleClick(5)} style={{ borderBottom: click === 5 ? "2px solid #029837" : "none" }}>
          Video
        </p>
      </div>
            <div>

        {click === 1 && <BlogHead/>}
        {click === 3 && <Oldest/>}
        {click === 4 && <Gallery/>}
        {click === 5 && <Video/>}
      </div>
    </>
  );
}

export default BlogHeader;
