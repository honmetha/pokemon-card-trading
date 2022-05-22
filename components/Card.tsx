import Image from "next/image";

import Button from "./Button";
import { IPokemon } from "../types/interfaces";

const Card = ({ pokemon }: any) => {
  return (
    <div className="bg-steel-gray rounded-2xl p-4 pt-14 mt-60 w-full">
      <div className="relative flex justify-center">
        <div className="absolute bottom-0">
          <Image
            src={pokemon.images.small}
            alt="Pokemon card"
            width={194}
            height={270}
          />
        </div>
      </div>
      <p className="mt-4 text-center h-12">{pokemon.name}</p>
      <p className="mt-2 text-center text-tower-gray">
        $ {pokemon.cardmarket.prices.averageSellPrice}{" "}
        <span className="text-white opacity-10">•</span> {pokemon.set.total}{" "}
        Cards
      </p>
      <Button className="mt-2" variant="solid">
        Add to cart
      </Button>
    </div>
  );
};

export default Card;
