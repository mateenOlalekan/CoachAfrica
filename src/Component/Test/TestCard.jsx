const TestCard = ({ image, name, country, description, categories }) => (
  <div className="flex flex-col w-full">
    <img src={image} className="rounded-lg h-[300px]" alt={`Coach ${name}`} />
    <div className="flex flex-col bg-[#fff] mt-2 p-4 rounded-md">
      <div className="flex flex-row justify-between">
        <p className="font-bold text-lg">{`Coach ${name}`}</p>
        <div className="flex flex-row gap-2">
          <p className="font-bold">{country}</p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff9f3e8ab82bb444bfd1cd3583e6316df9f0cad056d589d8b36ccb3ba88bc29f?apiKey=48b380e81b1744be92d366c9bc26a546&"
            className="image"
            alt={`Flag of ${country}`}
          />
        </div>
      </div>
      <p className="text-justify text-sm my-2">{description}</p>
      <div className="flex flex-wrap text-black text-[10px]">
        <span className="m-1 p-1 bg-[#E6EEFF] rounded-sm">Mentorship</span>
        <span className="m-1 p-1 bg-[#E6EEFF] rounded-sm">Coaching</span>
        <span className="m-1 p-1 bg-[#E6EEFF] rounded-sm">Learning strategies</span>
        <span className="m-1 p-1 bg-[#E6EEFF] rounded-sm">curriculum development</span>
        <span className="m-1 p-1 bg-[pink]   rounded-sm bg-opacity-15">Research and Development</span>
      </div>
      <div className="px-5 py-1 text-center w-3/5 text-[#029837] text-sm border-2 border-[#029837] rounded-sm">
        Book a Session
      </div>
    </div>
  </div>
);

export default TestCard;
