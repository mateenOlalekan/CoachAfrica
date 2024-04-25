// EducatorCard.js
import "./EducatorCard.css";

function EducatorCard({ Name, Country,imgSrc, College, Capital,info }) {
  return (
    <div className="EducatorCard">
      <div className="flex flex-col px-4 py-4">
        <div className="flex flex-row justify-between flex-wrap px-2 py-1">
          <div className="flex  gap-2">
            <img
              src={imgSrc}
              className="w-10 h-10"
              alt=""
            />
            <div className="flex flex-col mt-[-7px]">
              <h3 className="text-2xl text-bold">{Name}</h3>
              <p>{Country}</p>
            </div>
          </div>
          <div className="sm:text-sm mt-2">
            {College},{Capital}
          </div>
        </div>
        <p className="py-1 sm:text-sm">
         {info}
        </p>
      </div>
    </div>
  );
}

export default EducatorCard;