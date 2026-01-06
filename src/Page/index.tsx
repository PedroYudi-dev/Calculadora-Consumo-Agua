import InfoBasic from "../Components/InfoBasics";
import LightPillar from "../Components/LightPillar";
import TextType from "../Components/TextType";
import Container from "../Container";

export function InicialPage(){
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            background: "#0b0b14",
            overflow: "hidden",
          }}
        >
          <LightPillar
            topColor="#003366" // cor do topo
            bottomColor="#00CED1" // cor da base
            intensity={1} // brilho geral
            rotationSpeed={1.6} // velocidade da animação
            // interactive={true} // reage ao mouse
            glowAmount={0.008} // intensidade do glow
            pillarWidth={2.5} // largura
            pillarHeight={0.6} // altura
            noiseIntensity={0.3} // ruído
            pillarRotation={90}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              color: "#0e0d0dff",
              padding: "40px",
            }}
          >
            <Container>
              <TextType
                text="Calculadora de consumo de água"
                as="h1"
                className="title-react-style"
                typingSpeed={100}
                initialDelay={300}
                textColors={["#FFF"]}
              />
              <InfoBasic />
            </Container>
          </div>
        </div>
      </>
    );
}