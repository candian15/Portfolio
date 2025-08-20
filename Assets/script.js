// Ativa e desativa o menu mobile
function ativaMenu() {
    const menu = document.querySelector(".links-menu");
    const icone = document.querySelector(".icone-mobile");
    menu.classList.toggle("ativo");
    icone.classList.toggle("ativo");
}

// Objeto de traduções
const translations = {
    'pt': {
        // NAV
        "nav-sobre": "Sobre",
        "nav-skills": "Skills",
        "nav-projetos": "Projetos",
        "nav-contato": "Contato",

        // PERFIL
        "perfil-p1": "Olá, eu sou",
        "perfil-h1": "Arthur Candian",
        "perfil-p2": "Engenheiro de Software",
        "btn-curriculo": "Baixar Currículo",
        "btn-contato": "Contato Info",

        // SOBRE
        "sobre-p1": "Conheça mais",
        "sobre-h1": "Sobre mim",
        "sobre-h3": "Educação",
        "sobre-p-educacao": "Engenharia de Software – PUC Minas (Previsão de conclusão: 2027) <br>Ensino Médio Santo Tomas de Aquino (2020-2023)",
        "sobre-texto": "Olá! Sou o Arthur Candian, nascido em 2004 e natural de Belo Horizonte. Atualmente, sou estudante de Engenharia de Software na PUC Minas, onde tenho me dedicado a desenvolver habilidades em programação e construção de soluções tecnológicas. Estou em busca de oportunidades para aplicar e expandir meu conhecimento na área de desenvolvimento de software.",

        // SKILLS
        "skills-p1": "Veja minhas",
        "skills-h1": "Skills",
        "frontend-h2": "Desenvolvimento Frontend",
        "backend-h2": "Desenvolvimento Backend",
        "outros-h2": "Outros",
        "skills-avancado": "Avançado",
        "skills-intermediario": "Intermediário",

        // PROJETOS
        "projetos-p1": "Veja meus",
        "projetos-h1": "Projetos",
        "btn-github": "GitHub",
        "btn-detalhes": "Ver Detalhes",
        "pulse-h2": "Pulse Pump",
        "pulse-texto": "Projeto feito para a faculdade no primeiro período de Engenharia de Software. O Pulse Pump é um site que tem como objetivo ajudar pessoas com sua vida na academia, fornecendo criação de fichas personalizadas e contato com outras pessoas que usam o site. Pulse Pump é projeto bem documentado e usamos HTML, CSS, Javascript, Bootstrap e Json para armazenar os dados.",
        "bytebusters-h2": "ByteBusters",
        "worklink-h2": "WorkLink",
        "modal-texto-generico": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quam? Quas accusantium id cupiditate iste veritatis repudiandae odio dolore voluptas. Eum, deserunt quod. Sit similique laudantium assumenda repellat vel necessitatibus.",

        // CONTATO
        "contato-p1": "Gostou do que viu?",
        "contato-h1": "Entre em contato",

        // FOOTER
        "footer-copy": "Copyright &#169; 2025 Arthur Candian. Todos Direitos Reservados."
    },
    'en': {
        // NAV
        "nav-sobre": "About",
        "nav-skills": "Skills",
        "nav-projetos": "Projects",
        "nav-contato": "Contact",

        // PERFIL
        "perfil-p1": "Hello, I am",
        "perfil-h1": "Arthur Candian",
        "perfil-p2": "Software Engineer",
        "btn-curriculo": "Download Resume",
        "btn-contato": "Contact Info",

        // SOBRE
        "sobre-p1": "Get To Know More",
        "sobre-h1": "About Me",
        "sobre-h3": "Education",
        "sobre-p-educacao": "Software Engineering – PUC Minas (Expected Completion: 2027) <br>High School Santo Tomas de Aquino (2020-2023)",
        "sobre-texto": "Hello! I am Arthur Candian, born in 2004 and a native of Belo Horizonte. I am currently a Software Engineering student at PUC Minas, where I have been dedicated to developing skills in programming and building technological solutions. I am seeking opportunities to apply and expand my knowledge in the field of software development.",

        // SKILLS
        "skills-p1": "Explore My",
        "skills-h1": "Skills",
        "frontend-h2": "Frontend Development",
        "backend-h2": "Backend Development",
        "outros-h2": "Others",
        "skills-avancado": "Advanced",
        "skills-intermediario": "Intermediate",

        // PROJETOS
        "projetos-p1": "Browse My",
        "projetos-h1": "Projects",
        "btn-github": "GitHub",
        "btn-detalhes": "View Details",
        "pulse-h2": "Pulse Pump",
        "pulse-texto": "A project created for the first semester of Software Engineering at university. Pulse Pump is a website designed to help people with their fitness journey by providing personalized workout plans and connecting them with other users. Pulse Pump is a well-documented project, and we used HTML, CSS, Javascript, Bootstrap, and JSON to store the data.",
        "bytebusters-h2": "ByteBusters",
        "worklink-h2": "WorkLink",
        "modal-texto-generico": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quam? Quas accusantium id cupiditate iste veritatis repudiandae odio dolore voluptas. Eum, deserunt quod. Sit similique laudantium assumenda repellat vel necessitatibus.",

        // CONTATO
        "contato-p1": "Liked what you saw?",
        "contato-h1": "Get in Touch",

        // FOOTER
        "footer-copy": "Copyright &#169; 2025 Arthur Candian. All Rights Reserved."
    }
};

// Função para mudar o idioma
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Para elementos que podem conter HTML (como o texto de educação e o footer), use innerHTML
        if (key.includes("sobre-p-educacao") || key.includes("footer-copy")) {
            element.innerHTML = translations[lang][key];
        } else {
            element.textContent = translations[lang][key];
        }
    });
}

// Lógica para os modais (Corrigido para múltiplos modais)
const openModalButtons = document.querySelectorAll('[id^="open-modal"]');
const closeModalButtons = document.querySelectorAll('[id^="close-modal"]');
const modals = document.querySelectorAll('[id^="modal-"]');
const fades = document.querySelectorAll('[id^="fade-"]');

const toggleModal = (modalId) => {
    const fadeElement = document.getElementById(`fade-${modalId}`);
    const modalElement = document.getElementById(`modal-${modalId}`);
    
    fadeElement.classList.toggle("hide");
    modalElement.classList.toggle("hide");
};

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.id.split('-')[2];
        toggleModal(modalId);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.id.split('-')[2];
        toggleModal(modalId);
    });
});

fades.forEach(fadeElement => {
    fadeElement.addEventListener("click", () => {
        const modalId = fadeElement.id.split('-')[1];
        toggleModal(modalId);
    });
});