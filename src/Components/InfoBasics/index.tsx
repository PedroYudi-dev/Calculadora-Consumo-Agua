// import InputInfoIdade from "../InputInfoIdage";
import InputInfoPeso from "../InputInfoPeso";
import { useState } from "react";
import TrainerOrNoTrainer from "../TrainerOrNoTrainer";

export default function InfoBasic(){
    const [weight, setWeight] = useState(0);
    // const [age, setAge] = useState<number>(0);
    const [trainerOrNoTraine, setTrainerOrNoTraine] = useState("");
    return (
      <>
        <InputInfoPeso weight={weight} setWeight={setWeight} />
        <TrainerOrNoTrainer trainerOrNoTraine={trainerOrNoTraine} setTrainerOrNoTraine={setTrainerOrNoTraine} />
      </>
    );
}