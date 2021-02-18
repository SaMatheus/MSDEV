// IMAGES
import Ecoleta from '../Assets/ecoleta.png';
import Proffy from '../Assets/proffy.png';
import Happy from '../Assets/happy.png';
import NinjaSom from '../Assets/ninja_som.png';
import Github from '../Assets/project-github_explorer.png';
import Starbucks from '../Assets/starbucks.png';

// ICONS
import {
  FaRecycle,
  FaGlasses,
  FaHandHoldingHeart,
  FaMusic,
  FaGithub,
} from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';

const ProjectsList = [
  {
    id: 1,
    img: Ecoleta,
    title: 'Ecoleta',
    objective: 'Colaborar com a reciclagem em prol da natureza.',
    description:
      'Neste site os usuarios encontram pontos de coleta de lixos reclicaveis, como papel, plastico e pilhas eletronicas descarregadas. ',
    icon: <FaRecycle />,
    size: 'contain',
  },
  {
    id: 2,
    img: Proffy,
    title: 'Proffy',
    objective:
      'Interligar professores e alunos em uma plataforma simples de usar.',
    description:
      'Aqui o usuário pode se cadastrar como professor ou aluno afim de dar aulas online ou receber aulas.',
    icon: <FaGlasses />,
    size: 'contain',
  },
  {
    id: 3,
    img: Happy,
    title: 'Happy',
    objective: 'Fazer o dia de uma criança feliz.',
    description:
      'Esse projeto apresenta orfanatos perto da sua localização. Também permite que o usuário cadastre novos orfanatos.',
    icon: <FaHandHoldingHeart />,
    size: 'contain',
  },
  {
    id: 4,
    img: NinjaSom,
    title: 'Ninja Som',
    objective: 'Página de um ecomerce de instrumentos músicais.',
    description:
      'Site de instrumentos músicais disponiveis para consumo, acesse para ver mais: https://www.ninjasom.com.br/',
    icon: <FaMusic />,
    size: 'cover',
  },
  {
    id: 5,
    img: Github,
    title: 'Github Explorer',
    objective: 'App de busca de repositórios no GITHUB.',
    description:
      'O app permite o usuário realizar pesquisas com base no nome de usuário, as informações da pesquisa são exibidas em uma tela organizada e bonita.',
    icon: <FaGithub />,
    size: 'cover',
  },
  {
    id: 6,
    img: Starbucks,
    title: 'Starbucks',
    objective: 'Captar clientes com base em 3 rodutos base.',
    description:
      'Prévia de trabalho profissional em produção. O site permite a interação com cada shake alterando a cor principal do site.',
    icon: <BiCoffeeTogo />,
    size: 'contain',
  },
];

export default ProjectsList;
