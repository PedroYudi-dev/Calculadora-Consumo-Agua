import { useRef } from "react";
import VariableProximity from "../VariableProximity";

type ResultViewProps = {
  ResulWater: number | null;
  ResulBottle: number | null;
};

export default function ResultView({ResulWater, ResulBottle}: ResultViewProps){
    const containerRef = useRef<HTMLDivElement>(null);
    const Litros = ResulWater ? ResulWater / 1000 : 0;
    const roundedLitros = Math.ceil(Litros * 10) / 10;

    const Garrafa = ResulBottle ? Math.ceil(ResulBottle): 0;
     
    return (
      <div ref={containerRef}>
        <p>
          <VariableProximity
            label={`Você terá que beber por volta de ${roundedLitros} litros`}
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 400, 'wdth' 100, 'opsz' 14"
            toFontVariationSettings="'wght' 900, 'wdth' 125, 'opsz' 48"
            radius={120}
            falloff="gaussian"
            className="result-text"
          />
        </p>

        <p>
          <VariableProximity
            label={`Isso equivale a ${Garrafa} garrafas da capacidade escolhida.`}
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 400, 'wdth' 100, 'opsz' 14"
            toFontVariationSettings="'wght' 900, 'wdth' 125, 'opsz' 48"
            radius={120}
            falloff="exponential"
            className="result-text"
          />
        </p>
      </div>
    );
}