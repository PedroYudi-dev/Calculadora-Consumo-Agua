// import InputInfoIdade from "../InputInfoIdage";
import InputInfoPeso from "../InputInfoPeso";
import { useState } from "react";
import TrainerOrNoTrainer from "../TrainerOrNoTrainer";
import ButtonValue from "../ButtonValue";
import { WaterConsumpt } from "../../Utils/ValueWaterConsumption";
import ResultView from "../ResultView";

export default function InfoBasic(){
    const [weight, setWeight] = useState(0);
    // const [age, setAge] = useState<number>(0);
    const [trainerOrNoTraine, setTrainerOrNoTraine] = useState("");
    const [result , setResult] = useState<number | null>(null);

    const hanldeValeuTotalWater = () =>{
      if(!weight || !trainerOrNoTraine)return
      const valueWater = Number(weight)
      const valueTrainerOrNoTraine = Number(trainerOrNoTraine)
      const totalWater = WaterConsumpt(valueWater, valueTrainerOrNoTraine);
      setResult(totalWater)
    }
    console.log(result)

    return (
      <>
        <InputInfoPeso weight={weight} setWeight={setWeight} />
        <TrainerOrNoTrainer
          trainerOrNoTraine={trainerOrNoTraine}
          setTrainerOrNoTraine={setTrainerOrNoTraine}
        />
        <ButtonValue
          onClick={hanldeValeuTotalWater}
          title="Calcular consumo de água"
        />
        {
          !result ? <p>Preencha os campos acima para saber o seu consumo de água diário</p> : <ResultView Resul={result} />
        }
      </>
    );
}