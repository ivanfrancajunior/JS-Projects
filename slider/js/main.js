const image = document.querySelector('.profile-imgage');
const nome = document.querySelector('.name');
const cargo = document.querySelector('.cargo');
const review = document.querySelector('.review');
const nextBtn = document.querySelector('#nextBtn');
const fowardBtn = document.querySelector('#prevBtn');
const arr = [
  {
    id: 1,
    name: 'Cyrilla Trqnquila',
    cargo: 'Desenvolvedora',
    review: 'Ótima profissional. Sempre entrega resultados de alta qualidade.',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0PeubLKl4Q_GvUchfhNUnugAS-k38YFBcg&usqp=CAU',
  },
  {
    id: 2,
    name: 'Maria Trqnquila',
    cargo: 'Designer',
    review:
      'Excelente criatividade e habilidades técnicas. Recomendo fortemente.',
    imagem:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d54a51105791269.5f80b1b5e44ee.png',
  },
  {
    id: 3,
    name: 'Zequinha',
    cargo: 'Designer',
    review:
      'Excelente criatividade e habilidades técnicas. Recomendo fortemente.',
    imagem:
      'https://64.media.tumblr.com/576f6fba04946221739f38ecf6a6e6a7/ab74b88535e2bd43-69/s500x750/6b12c1876a90459627d514c10780383b26087a76.png',
  },
  {
    id: 4,
    name: 'Maria Joana',
    cargo: 'Designer',
    review:
      'Excelente criatividade e habilidades técnicas. Recomendo fortemente.',
    imagem: 'https://avatarfiles.alphacoders.com/120/120464.png',
  },
  {
    id: 5,
    name: 'De  Zed',
    cargo: 'Designer',
    review:
      'Excelente criatividade e habilidades técnicas. Recomendo fortemente.',
    imagem:
      'https://preview.redd.it/h5zl60ts7a861.jpg?auto=webp&s=d40711206a9c452ef03a8f79eab6f5111938d634',
  },
  {
    id: 6,
    name: 'Not a Cyrillo',
    cargo: 'Desenvolvedor de Software',
    review: 'Ótimo profissional. Sempre entrega resultados de alta qualidade.',
    imagem:
      'https://media.tenor.com/_wA-bSNP3KAAAAAC/pixel-art-pixels.gif',
  },
  {
    id: 7,
    name: 'Isabela',
    cargo: 'Engenheira de Dados',
    review:
      'Excelente profissional na área de dados. Ajuda a impulsionar a inteligência da empresa.',
    imagem:
      'https://media.tenor.com/NiQQMjHTcEcAAAAC/pixel-art-pixels.gif',
  },
  {
    id: 8,
    name: 'Rafael',
    cargo: 'Analista de Segurança da Informação',
    review:
      'Muito competente em manter a segurança dos sistemas. Protege os dados da empresa de forma eficaz.',
    imagem:
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/3f50307644b99439cbdc1119af985d9b-1632452952/Monkey-Punk-NFT-1/create-unique-cryptopunk-pixel-art-nfts-for-you.gif',
  },
  {
    id: 9,
    name: 'Luana',
    cargo: 'Arquiteta de Soluções',
    review:
      'Precisa e criativa. Desenha soluções tecnológicas eficientes para os desafios da empresa.',
    imagem:
      'https://cdna.artstation.com/p/assets/images/images/043/871/550/large/tonga-pixels-space-man-dif-1.jpg?1638471278',
  },
  {
    id: 10,
    name: 'Mariana',
    cargo: 'Analista de Banco de Dados',
    review:
      'Atenciosa e especialista em bancos de dados. Garante que as informações estejam organizadas e acessíveis.',
    imagem:
      'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/249646262/original/d33d7a84748648a4bbba3c6a8a5bbdee5cf30512/draw-anime-custom-pixel-art-profile-picture-for-twitch-icon.jpg',
  },
  {
    id: 11,
    name: 'Fernando',
    cargo: 'Engenheiro de Software',
    review: 'Altamente competente. Desenvolve sistemas robustos e escaláveis.',
    imagem:
      'https://64.media.tumblr.com/16ed4e24ad40a1d728fe33ebebae4748/tumblr_pndvs8RxfV1r4gsiio1_1280.png',
  },
  {
    id: 12,
    name: 'Camila',
    cargo: 'Especialista em Redes',
    review:
      'Muito experiente em redes de computadores. Garante a conectividade e a estabilidade dos sistemas.',
    imagem:
      'https://64.media.tumblr.com/23e9c788b09fb62cc89d21486cb6ac3a/tumblr_o6nsehfOrm1ufdtcro1_640.png',
  },
  {
    id: 13,
    name: 'Gustavo',
    cargo: 'Cientista de Dados',
    review:
      'Profissional altamente qualificado em análise de dados. Extrai insights valiosos para impulsionar o negócio.',
    imagem:
      'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1595224626/avatars/000/150/438/150438-original.JPG?1595224626',
  },
];
console.log(arr.length)

let currentItem = 0;
const handleReviews = () => {
  const showPerson = (person) => {
    const personItem = arr[person];
    image.src = personItem.imagem;
    nome.textContent = personItem.name;
    cargo.textContent = personItem.cargo;
    review.textContent = personItem.review;
  };
  const start = () => {
    window.addEventListener('DOMContentLoaded', function () {
      showPerson(currentItem);
    });
  };
  start();
  fowardBtn.addEventListener('click', () => {
    if (currentItem <= 0) {
      return
    }
    currentItem--;
    console.log(currentItem);
    showPerson(currentItem);
  });

  nextBtn.addEventListener('click', () => {
    if (currentItem >= arr.length-1) {
      return
    }
    currentItem++;
    console.log(currentItem);
    showPerson(currentItem);
  });
};
handleReviews();
