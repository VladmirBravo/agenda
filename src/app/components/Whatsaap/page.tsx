import { FaWhatsapp } from 'react-icons/fa';
import styles from '@/app/components/Whatsaap/styles.module.scss'
const BotaoWhatsApp = () => {
  const handleClick = () => {
    // Número de telefone ou link para o WhatsApp
    const numeroTelefone = '+244934274687';
    const linkWhatsApp = `https://wa.me/${numeroTelefone}`;

    window.open(linkWhatsApp, '_blank');
  };

  return (
    <div className={styles.diContainer} onClick={handleClick}>
      <FaWhatsapp color='#1C86FA' size={50} />
    </div>
  );
};

export default BotaoWhatsApp;
