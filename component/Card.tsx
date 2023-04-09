

type CardType = {
  icon: React.ReactNode;
  name: string;
  description: string;
  bgColor: string;
};
// export default function Card(props: CardType) {

export default function Card(props: CardType) {
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
      }}
      className="flex  flex-col p-8 gap-5  bg-orange-400"
    >
      {props.icon}
      <div className="font-BigShouldersDisplay    text-2xl font-extrabold ">
        {props.name}
      </div>
      <div className=" text-xs w-36 font-LexendDeca">{props.description}</div>
      <button
        style={{
          color: props.bgColor,
        }}
        className="button bg-white w-24 text-orange-400 text-xs mt-8 focus:outline focus:outline-white   focus:text-white py-2 rounded-3xl  font-LexendDeca"
      >
        Learn More
      </button>
    </div>
  );
}
