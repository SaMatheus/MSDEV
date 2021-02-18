// ICONS
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { RiMailSendLine, RiGithubLine } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { ImLinkedin } from 'react-icons/im';

const ContactList = [
  {
    id: 1,
    icon: <BiPhoneCall />,
    value: 'Telefone',
    href: 'tel:+5511985374474',
  },
  {
    id: 2,
    icon: <AiOutlineWhatsApp />,
    value: 'Whatsapp',
    href:
      'https://api.whatsapp.com/send?phone=5511985374474&text=Oi%2C%20amei%20seu%20site!',
  },
  {
    id: 3,
    icon: <RiMailSendLine />,
    value: 'E-mail',
    href: 'mailto:matheus.sa.alves@outlook.com',
  },
  {
    id: 4,
    icon: <RiGithubLine />,
    value: 'Github',
    href: 'https://github.com/SaMatheus',
  },
  {
    id: 5,
    icon: <ImLinkedin />,
    value: 'Linkedin',
    href: 'https://www.linkedin.com/in/matheus-f-4a5732b4/',
  },
];

export default ContactList;
