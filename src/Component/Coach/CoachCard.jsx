
function CoachCard({ Event, detail, date }) {
  return (
    // Return the content of the slide without <SwiperSlide>
    <div className="flex flex-col">
      <div className="flex flex-col w-[300px]  text-left">
        <img src={Event} alt={`Event ${date}`} />
        <h2 className="font-medium  text-sm py-2">{date}</h2>
        <div className="text-[20px] font-bold">
          {detail}
        </div>
        <p className="text-sm">
          Read more..
        </p>
      </div>
    </div>
  );
}

export default CoachCard;