type ResultViewProps = {
    Resul: number | null
}

export default function ResultView({Resul}: ResultViewProps){
    const Litros = Resul ? Resul / 1000 : 0;
    const roundedLitros = Litros.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
     
    return (
      <div>
        <p>Você terá que beber por volta de {roundedLitros } Litros</p>
      </div>
    );
}