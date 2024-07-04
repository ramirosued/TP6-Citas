'useClient'
import Subtitulo from "@/app/components/Subtitulo/Subtitulo";
import Titulo from "@/app/components/Titulo/Titulo";
import Image from "next/image";
import styles from './Nosotros.module.css'
export default function(){
    return(
        <>
        <Titulo texto="Quienes somos"/>
        <Subtitulo texto="Integrantes"></Subtitulo>
        <div className={styles.contenedorNosotros}>
        <div className={styles.integrante}>
                <h3>Franco Pasquale</h3>
                <Image src="/img1.png" width={200} height={200}></Image>
            </div>
            <div  className={styles.integrante}>
                <h3>Ramiro Sued</h3>
                <Image src="/img1.png" width={200} height={200}></Image>

            </div>
        </div>
        <Subtitulo texto="Sobre Nosotros"></Subtitulo>
        <div className={styles.contenedorNosotros}>
            <div className={styles.contenedorSobreNosotros}>
 
                    <div className={styles.SobreNosotros}>
                        <p>¡Bienvenidos a nuestro gestion de citas!</p>
                        <p>Somos Ramiro Sued y Franco Pasquale, dos apasionados veterinarios comprometidos con el bienestar de tus mascotas. En nuestro gestor de citas, hemos unido nuestra experiencia para crear una plataforma innovadora que facilita la gestión de citas médicas para animales.</p>
                        <p>Nuestra misión es proporcionar a los dueños de mascotas una experiencia de atención veterinaria sin complicaciones. Con años de práctica clínica y un profundo amor por los animales, entendemos la importancia de un acceso rápido y sencillo a servicios de salud veterinaria.</p>
                        <p>En nuestra aplicación, puedes reservar citas con veterinarios calificados en tu área, recibir recordatorios de citas para que nunca te pierdas una visita importante, y mantener un registro detallado de la salud de tu mascota, todo desde la comodidad de tu dispositivo móvil.</p>
                        <p>Nos enorgullece ofrecer una solución integral que cuida tanto a las mascotas como a sus dueños. ¡Únete a nuestra comunidad y descubre cómo podemos facilitar la vida de tu compañero peludo!</p>
                    </div>
            </div>
        </div>

        </>
    )

}