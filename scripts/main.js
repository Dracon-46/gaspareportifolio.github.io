const projectTitle = document.getElementById("projectTitle");
const projectDetails = document.getElementById("projectDetails");

const projectData = [
    {
        title: "Minha Jornada",
        description: "Esta seção destaca minha experiência e crescimento durante três anos no programa Ptechs/ACPS, onde compartilho momentos importantes, aprendizagens e conexões."
    },
    {
        title: "Prêmios",
        description: "Todos os prêmios que eu recebi."
    },
    {
        title: "Primeiro encontro (25/03/2022)",
        description: "Nossa reunião inicial no P-tech foi essencial para criar um ambiente colaborativo e definir como as palestras e atividades contribuiriam para nosso desenvolvimento profissional. Focamos em aprimorar habilidades práticas e em promover o envolvimento de todos os participantes."
    },
    {
        title: "Conduta Ética (19/04/2022)",
        description: "Exploramos a importância da ética no ambiente de trabalho, discutindo dilemas como o de um funcionário em situação de urgência pessoal. Esse exercício destacou a complexidade entre decisões pessoais e a integridade profissional."
    },
    {
        title: "Visita na EDUZZ (13/05/2022)",
        description: "A visita à EDUZZ proporcionou uma visão do dinamismo de trabalho em uma empresa focada em inovação e colaboração. Pude acompanhar as interações das equipes e participar de sessões de brainstorming, reforçando a importância do trabalho em equipe."
    },
    {
        title: "Ikigai (12/08/2022)",
        description: "Já no quinto aula de P-Tech, foi nos ensinado sobre o 'Ikigai' e a sua importancia na nossa vida técnica desenvolvida para nos autoconhecermos em nossa vida pessoal e profissional.."
    },
    {
        title: "Comunicação Interpessoal - como melhorar a sua? (30/09/2022)",
        description: "Exploramos maneiras de aprimorar a comunicação interpessoal, enfatizando a importância da escuta ativa, clareza nas mensagens e a prática de empatia para evitar mal-entendidos e fortalecer conexões."
    },
    {
        title: "Dia a dia do analista de suporte (27/04/2023)",
        description: "Compreender a rotina de um analista de suporte me permitiu valorizar o papel de resolução de problemas técnicos e o suporte aos usuários. Aprendi como priorizar questões e manter a eficiência operacional com foco no atendimento ao cliente."
    },
    {
        title: "Nova Parceria - ITIX (04/05/2023)",
        description: "A ITIX, empresa de tecnologia com foco em IA, juntou-se como parceira da escola, proporcionando uma experiência interativa e de aprendizado. Tivemos sorteios de brindes e atividades que mostraram como a inovação é uma aliada estratégica para o futuro."
    },
    {
        title: "De Estagiária a Analista: Quando Conversar Conta Tanto Quanto Codar! (05/05/2023)",
        description: "Ao avançar de estagiária para Analista de Requisitos, descobri o impacto da comunicação para transformar ideias em soluções eficazes. Esse aprendizado evidenciou a importância do equilíbrio entre habilidades técnicas e interpessoais."
    },
    {
        title: "Palestra e Oficina: como gerenciar seu talento (22/09/2023)",
        description: "Participar dessa oficina foi um passo importante para aprender a gerenciar talentos e construir um currículo que destaque realizações e habilidades. Descobri a importância de adaptar o currículo para cada oportunidade."
    },
    {
        title: "Treinamento presencial de uma nova ferramenta da ITIX (19/11/23)",
        description: "Durante um treinamento prático, desenvolvemos um projeto com técnicas de Scrum e colaboração em equipe. Aprendi muito e criei uma logo para nosso projeto de reciclagem, que reforçou meu gosto pelo design e criatividade."
    },
    {
        title: "Criatividade e Inovação: Um Desafio Constante (08/04/2024)",
        description: "Compreendi como criatividade e inovação são vitais para enfrentar desafios em um mercado em constante mudança. Aprender a colaborar e experimentar novas ideias foram pontos chave para cultivar esse mindset."
    },
    {
        title: "As possibilidades da IA no mercado de trabalho (23/05/2024)",
        description: "Exploramos o papel crescente da IA no ambiente profissional, discutindo como a automação e o aprendizado de máquina criam novas oportunidades e demandam habilidades atualizadas, adaptadas a um mercado em evolução."
    },
    {
        title: "Liderança e Gestão 3.0 (27/05/2024)",
        description: "Essa nova abordagem de liderança prioriza autonomia e colaboração, onde os líderes incentivam as equipes a tomar decisões e a se desenvolverem continuamente, promovendo um ambiente de aprendizado constante."
    },
    {
        title: "Homelabs (18/06/2024)",
        description: "Construir um homelab me permitiu experimentar tecnologias e aprimorar habilidades práticas. Criar um ambiente de testes foi fundamental para desenvolver soluções inovadoras e aprofundar o conhecimento em TI."
    },
    {
        title: "Hacker do bem e a segurança digital no dia-a-dia (31/07/2024)",
        description: "Aprendemos sobre o papel do hacker ético na proteção dos dados e segurança de sistemas, entendendo também a importância de práticas cotidianas para garantir nossa segurança digital."
    },
    {
        title: "Você é uma pessoa organizada? (28/08/2024)",
        description: "Organização é essencial para manter a produtividade. Explorei métodos práticos para priorizar tarefas e evitar sobrecargas, promovendo uma rotina mais eficiente e equilibrada."
    },
    {
        title: "Fluxo de Operações Comercial - UNO (29/08/2024)",
        description: "Aprendi como a integração do ERP pode otimizar operações comerciais, proporcionando uma visão completa dos processos e facilitando a tomada de decisões estratégicas para aumentar a eficiência."
    },
    {
        title: "IA + TI e outras tecnologias (05/09/2024)",
        description: "A inteligência artificial e novas tecnologias estão transformando o setor de TI, exigindo adaptação e desenvolvimento constante de habilidades. Desenvolvi um projeto pessoal, um jogo socioemocional, que em breve estará no meu portfólio."
    },
    {
        title: "Como posso ter uma carreira bem-sucedida? (19/09/2024)",
        description: "Descobri a importância de criar uma marca pessoal autêntica e investir em habilidades técnicas e interpessoais. Manter uma rede ativa e compartilhar experiências são passos importantes para se destacar no mercado."
    },
    {
        title: "Capricho: skill cada vez mais raro no Mercado (24/09/2024)",
        description: "Capricho é uma característica que se reflete na atenção aos detalhes e na qualidade do trabalho. É um diferencial que poucos mantêm, mas que valoriza o profissional no mercado de trabalho."
    },
    {
        title: "Desenvolvimento Low Code (10/10/2024)",
        description: "Low code e no code facilitam o desenvolvimento rápido de soluções, permitindo que ideias sejam rapidamente testadas sem necessidade de programação intensa, acelerando o processo de inovação."
    },
    {
        title: "Criatividade e inovação | IOCHPE (11/10/2024)",
        description: "A palestra da Fundação Ioschpe trouxe insights sobre criatividade e inovação, com métodos práticos para estimular ideias e aprimorar o desenvolvimento de soluções tecnológicas em nosso dia a dia."
    },
    {
        title: "Preparando-se para o amanhã: da FATEC para o mundo (17/10/2024)",
        description: "O evento da FATEC inspirou a importância de uma rede de contatos e desenvolvimento contínuo, com anúncios de parcerias que reforçam o aprendizado e o preparo para o mercado de trabalho."
    },
    {
        title: "A Revolução da Web3 e a Propriedade Digital 04/11",
        description: "No dia 04/11, assistimos a uma palestra da IOCHPE pelo Youtube com o tema: 'A Revolução da Web3 e a Propriedade Digital', ministrada pelo palestrante Caio Mattos ."
    },
    {
        title: "Blockchain  05/11",
        description: "No dia 05/11, tivemos uma palestra/oficina dada pela NearX"
    },
    {
        title: "Estudo sobre Inteligência Artificial. - Itix (30/11/2024)",
        description: "Uma resenha sobre o futuro da carreira em Tecnologia a partir de um documentário."
    },
    {
        title: "Gerenciamento de Projeto - UNO (02/12/2024)",
        description: "Gerenciamento de demandas de ERP."
    },
    {
        title: "Apêndice-8 (06/12/2024)",
        description: "Formulário de auto Avaliação."
    },


];


document.getElementById("projectCarousel").addEventListener('slide.bs.carousel', function (e) {
    const nextIndex = e.to;
    projectTitle.innerHTML = projectData[nextIndex].title;
    projectDetails.innerHTML = projectData[nextIndex].description; 
});
