import Styles from "./styles.module.css";

type CapacityBottleProps = {
  capacity: string;
  setCapacity: (capacity: string) => void;
};

export default function CapacityBottle({ capacity, setCapacity }: CapacityBottleProps) {
  return (
    <>
      <select
        className={Styles.selectSex}
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      >
        <option value="" disabled hidden>
          Selecione a capacidade da sua garrafa 
        </option>

        <option value="250">Garrafa de 250ML</option>
        <option value="350">Garrafa de 35OML</option>
        <option value="500">Garrafa de 500ML</option>
        <option value="600">Garrafa de 600ML</option>
        <option value="750">Garrafa de 750ML</option>
        <option value="1000">Garrafa de 1L</option>
        <option value="1500">Garrafa de 1,5L</option>
        <option value="2000">Garrafa de 2L</option>
      </select>
    </>
  );
}