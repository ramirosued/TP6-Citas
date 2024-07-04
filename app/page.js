import Image from "next/image";
import Mascota from "../public/perros.jpg";
import styles from"./page.module.css";
import Titulo from "./components/Titulo/Titulo";
import Subtitulo from "./components/Subtitulo/Subtitulo";

export default function Home() {
  return (
    <>
        <Titulo texto="Bienvenidos"/>
        <Subtitulo texto="Programa tus citas para tus mascotas"/>
        <div className={styles.contenedorFoto}>
          <Image src={Mascota} width={900} height={600}/>
        </div>     
      
   </>
  );
}
