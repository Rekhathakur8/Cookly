/* eslint-disable react/prop-types */
function AllCard({ item }) {
  return (
    <div>
      <div className="w-[300px] h-[300px]">
        <img src={item.image} alt="" />
      </div>
      <h1></h1>
    </div>
  );
}

export default AllCard;
