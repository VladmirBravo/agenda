import { Image } from "react-bootstrap";
import BotaoWhatsApp from "../Whatsaap/page";
import styles from "./styles.module.scss"

export default function Rodape() {
    return (
        <>
            <div className={styles.divContainer1}>
                <a>
                    <Image className={styles.img}
                        alt=""
                        src="/comercio.svg"
                    ></Image>
                </a>
            </div>
            <div className={styles.divIcon}>
                <BotaoWhatsApp />
            </div>
        </>
    )
}