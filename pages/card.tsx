//tsfc
import { Sedans } from "@/component/Icon"



export default function Card() {
  return (
    <div className="containerBody  h-screen flex justify-center items-center text-white ">
      <div className="flex  flex-col p-8 gap-5 rounded-md bg-orange-400">
      <Sedans />
      <div className="font-BigShouldersDisplay text-2xl font-extrabold ">SEDANS</div>
      <div className="smalltext text-xs w-36 font-LexendDeca">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</div>
      <button className="button bg-white w-24 text-orange-400 text-xs mt-8 focus:outline focus:outline-white focus:bg-transparent focus:text-white py-2 rounded-3xl  font-LexendDeca">Learn More</button>
      </div>

    </div>
   

  )
}
