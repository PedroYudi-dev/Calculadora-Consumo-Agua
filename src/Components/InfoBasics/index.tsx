// import InputInfoIdade from "../InputInfoIdage";
import InputInfoPeso from "../InputInfoPeso";
import { useState } from "react";
import TrainerOrNoTrainer from "../TrainerOrNoTrainer";
import ButtonValue from "../ButtonValue";
import { WaterConsumpt } from "../../Utils/ValueWaterConsumption";
import ResultView from "../ResultView";
import CapacityBottle from "../CapacityBottle";
import { QuantityBottle } from "../../Utils/QuantityBottle";
import TextType from "../TextType";

export default function InfoBasic(){
    const [weight, setWeight] = useState(0);
    // const [age, setAge] = useState<number>(0);
    const [trainerOrNoTraine, setTrainerOrNoTraine] = useState("");
    const [resultTotalWater , setResultTotalWater] = useState<number | null>(null);
    const [resultTotalBottle, setResultTotalBottle] = useState<number | null>(null);
    const [capacity, setCapacity] = useState("");

    const hanldeValeuTotalWater = () =>{
      if(!weight || !trainerOrNoTraine || !capacity)return
      const valueWater = Number(weight)
      const valueTrainerOrNoTraine = Number(trainerOrNoTraine)
      const totalWater = WaterConsumpt(valueWater, valueTrainerOrNoTraine);
      const valueCapacity = Number(capacity)
      if(valueCapacity <= 0) return;
      const totalBottles = QuantityBottle(totalWater, valueCapacity);
      setResultTotalBottle(totalBottles)
      setResultTotalWater(totalWater)
    }

    return (
      <>
        <InputInfoPeso weight={weight} setWeight={setWeight} />
        <TrainerOrNoTrainer
          trainerOrNoTraine={trainerOrNoTraine}
          setTrainerOrNoTraine={setTrainerOrNoTraine}
        />
        <CapacityBottle capacity={capacity} setCapacity={setCapacity} />
        <ButtonValue
          onClick={hanldeValeuTotalWater}
          title="Calcular consumo de água"
        />
        {resultTotalWater == null || resultTotalBottle == null ? (
          <TextType
            text=" Preencha os campos acima para saber o seu consumo de água diário"
            as="h1"
            className="title-react-style"
            typingSpeed={40}
            pauseDuration={1200}
            showCursor={false}
          />
        ) : (
          <ResultView
            ResulWater={resultTotalWater}
            ResulBottle={resultTotalBottle}
          />
        )}
      </>
    );
}