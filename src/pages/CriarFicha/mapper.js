export default new Map([

  ['Acadêmico',
    {
      pericia1: 'ciencia',
      pericia2: 'investigacao',

      nome: 'Saber é Poder (Origem)',
      desc: 'Quando faz um teste usando Intelecto, você pode gastar 2 PE para receber +5 nesse teste.'
    }
  ],

  ['Agente de Saúde',
    {
      pericia1: 'intuicao',
      pericia2: 'medicina',

      nome: 'Técnica Medicinal (Origem)',
      desc: 'Sempre que cura um personagem, você adiciona seu Intelecto no total de PV curados.',
    }
  ],

  ['Amnésico',
    {
      pericia1: null,
      pericia2: null,

      nome: 'Vislumbres do Passado (Origem)',
      desc: 'Uma vez, por sessão, você pode fazer um teste de Intelecto (DT 10) para reconhecer pessoas ou lugares familiares, que tenha encontrado antes de perder a memória. Se passar, recebe 1d4 PE temporários e, a critério do mestre, uma informação útil.',
    }
  ],

  ['Artista',
    {
      pericia1: 'arte',
      pericia2: 'enganacao',

      nome: 'Magnum Opus (Origem)',
      desc: 'Você é famoso por uma de suas obras. Uma vez por missão, pode determinar que um personagem envolvido em uma cena de interação o reconheça. Você recebe +5 em testes de Presença e de perícias baseadas em Presença contra aquele personagem. A critério do mestre, pode receber esses bônus em outras situações nas quais seria reconhecido.',
    }
  ],

  ['Atleta',
    {
      pericia1: 'acrobacia',
      pericia2: 'atletismo',

      nome: '110% (Origem)',
      desc: 'Quando faz um teste de perícia usando Força ou Agilidade (exceto Luta e Pontaria) você pode gastar 2 PE para receber +5 nesse teste.',
    }
  ],

  ['Chef',
    {
      pericia1: 'fortitude',
      pericia2: 'profissao',

      nome: 'Ingrediente Secreto (Origem)',
      desc: 'Em cenas de interlúdio, você pode fazer a ação alimentar-se para cozinhar um prato especial. Você, e todos os membros do grupo que fizeram a ação alimentar-se, recebem o benefício de dois pratos (caso o mesmo benefício seja escolhido duas vezes, seus efeitos se acumulam).',
    }
  ],

  ['Criminoso',
    {
      pericia1: 'crime',
      pericia2: 'furtividade',

      nome: 'O Crime Compensa (Origem)',
      desc: 'No final de uma missão, escolha um item encontrado na missão. Em sua próxima missão, você pode incluir esse item em seu inventário sem que ele conte em seu limite de itens por patente.',
    }
  ],

  ['Cultista Arrependido',
    {
      pericia1: 'ocultismo',
      pericia2: 'religiao',

      nome: 'Traços do Outro Lado (Origem)',
      desc: 'Você possui um poder paranormal à sua escolha. Porém, começa o jogo com metade da Sanidade normal para sua classe.',
    }
  ],

  ['Desgarrado',
    {
      pericia1: 'fortitude',
      pericia2: 'sobrevivencia',

      nome: 'Calejado (Origem)',
      desc: 'Você recebe +1 PV para cada 5% de NEX.',
    }
  ],

  ['Engenheiro',
    {
      pericia1: 'profissao',
      pericia2: 'tecnologia',

      nome: 'Ferramentas Favoritas (Origem)',
      desc: 'Um item a sua escolha (exceto armas) conta como uma categoria abaixo (por exemplo, um item de categoria II conta como categoria I para você).',
    }
  ],

  ['Executivo',
    {
      pericia1: 'diplomacia',
      pericia2: 'profissao',

      nome: 'Processo Otimizado (Origem)',
      desc: 'Sempre que faz um teste de perícia durante um teste estendido, ou uma ação para revisar documentos (físicos ou digitais), pode pagar 2 PE para receber +5 nesse teste.',
    }
  ],

  ['Investigador',
    {
      pericia1: 'investigacao',
      pericia2: 'percepcao',

      nome: 'Faro para Pistas (Origem)',
      desc: 'Uma vez por cena, quando fizer um teste para procurar pistas, você pode gastar 1 PE para receber +5 nesse teste.',
    }
  ],

  ['Lutador',
    {
      pericia1: 'luta',
      pericia2: 'reflexo',

      nome: 'Mão Pesada (Origem)',
      desc: 'Você recebe +2 em rolagens de dano com ataques corpo a corpo.',
    }
  ],

  ['Magnata',
    {
      pericia1: 'diplomacia',
      pericia2: 'pilotagem',

      nome: 'Patrocinador da Ordem (Origem)',
      desc: 'Seu limite de crédito é sempre considerado um acima do atual.',
    }
  ],

  ['Mercenário',
    {
      pericia1: 'iniciativa',
      pericia2: 'intimidacao',

      nome: 'Posição de Combate (Origem)',
      desc: 'No primeiro turno de cada cena de ação, você pode gastar 2 PE para receber uma ação de movimento adicional.',
    }
  ],

  ['Militar',
    {
      pericia1: 'pontaria',
      pericia2: 'tatica',

      nome: 'Para Bellum (Origem)',
      desc: 'Você recebe +2 em rolagens de dano com armas de fogo.',
    }
  ],

  ['Operário',
    {
      pericia1: 'fortitude',
      pericia2: 'profissao',

      nome: 'Ferramenta de Trabalho (Origem)',
      desc: 'Escolha uma arma simples ou tática que, a critério do mestre, poderia ser usada como ferramenta em sua profissão (como uma marreta para um pedreiro). Você sabe usar a arma escolhida e recebe +1 em testes de ataque, rolagens de dano e margem de ameaça com ela.',
    }
  ],

  ['Policial',
    {
      pericia1: 'percepcao',
      pericia2: 'pontaria',

      nome: 'Patrulha (Origem)',
      desc: 'Você recebe +2 em Defesa.',
    }
  ],

  ['Religioso',
    {
      pericia1: 'religiao',
      pericia2: 'vontade',

      nome: 'Acalentar (Origem)',
      desc: 'Você recebe +5 em testes de Religião para acalmar. Além disso, quando acalma uma pessoa, ela recebe um número de pontos de Sanidade igual a 1d6 + a sua Presença.',
    }
  ],

  ['Servidor Público',
    {
      pericia1: 'intuicao',
      pericia2: 'vontade',

      nome: 'Espírito Cívico (Origem)',
      desc: 'Sempre que faz um teste para ajudar, você pode gastar 1 PE para aumentar o bônus concedido em +2.',
    }
  ],

  ['Teórico da Conspiração',
    {
      pericia1: 'investigacao',
      pericia2: 'ocultismo',

      nome: 'Eu Já Sabia (Origem)',
      desc: 'Você não se abala com entidades ou anomalias. Afinal, sempre soube que isso tudo existia. Você recebe resistência a dano mental igual ao seu Intelecto.',
    }
  ],

  ['T.I.',
    {
      pericia1: 'investigacao',
      pericia2: 'tecnologia',

      nome: 'Motor de Busca (Origem)',
      desc: 'A critério do Mestre, sempre que tiver acesso a internet, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Tecnologia.',
    }
  ],

  ['Trabalhador Rural',
    {
      pericia1: 'adestramento',
      pericia2: 'sobrevivencia',

      nome: 'Desbravador (Origem)',
      desc: ' Quando faz um teste de Adestramento ou Sobrevivência, você pode gastar 2 PE para receber +5 nesse teste. Além disso, você não sofre penalidade em deslocamento por terreno difícil.',
    }
  ],

  ['Trambiqueiro',
    {
      pericia1: 'crime',
      pericia2: 'enganacao',

      nome: 'Impostor (Origem)',
      desc: 'Uma vez por cena, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Enganação.',
    }
  ],

  ['Universitário',
    {
      pericia1: 'atualidade',
      pericia2: 'investigacao',

      nome: 'Dedicação (Origem)',
      desc: 'Você recebe +1 PE, e mais 1 PE adicional a cada NEX ímpar (15%, 25%...). Além disso, seu limite de PE por turno aumenta em 1 (em NEX 5% seu limite é 2, em NEX 10% é 3 e assim por diante; isso não afeta a DT de seus efeitos).',
    }
  ],

  ['Vítima',
    {
      pericia1: 'reflexo',
      pericia2: 'vontade',

      nome: 'Cicatrizes Psicológicas (Origem)',
      desc: 'Você recebe +1 de Sanidade para cada 5% de NEX.',
    }
  ],

])