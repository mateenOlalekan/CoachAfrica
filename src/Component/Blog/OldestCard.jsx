function OldestCard({ event }) {
  const { image, date, detail } = event;

  return (
    <div className="flex flex-col w-[300px] text-left">
      <img src={image} alt={`Event ${date}`} />
      <h2 className="font-medium text-sm py-2">{date}</h2>
      <div className="text-[20px] font-bold">{detail}</div>
      <p className="text-sm">Read more..</p>
    </div>
  );
}

export default OldestCard;