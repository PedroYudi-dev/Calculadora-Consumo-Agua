type ResultViewProps = {
  ResulWater: number | null;
  ResulBottle: number | null;
};

export default function ResultView({ResulWater, ResulBottle}: ResultViewProps){
    const Litros = ResulWater ? ResulWater / 1000 : 0;
    const roundedLitros = Litros.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

    const Garrafa = ResulBottle ? Math.ceil(ResulBottle): 0;
     
    return (
      <div>
        <p>Você terá que beber por volta de {roundedLitros} Litros</p>
        <p>
          Isso equivale a <strong>{Garrafa}</strong> garrafas da capacidade
          escolhida.
        </p>
      </div>
    );
}