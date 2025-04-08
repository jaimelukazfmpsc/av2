particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, // Aumente o número de partículas
      "density": {
        "enable": true,
        "value_area": 500 // Aumente a área de densidade
      }
    },
    "color": {
      "value": "#3EA5C4" // Alterar a cor das partículas
    },
    "shape": {
      "type": "circle", // Formato das partículas
      "stroke": {
        "width": 2,
        "color": "#3EA5C4" // Adicione um contorno às partículas
      }
    },
    "opacity": {
      "value": 0.8, // Torne as partículas mais visíveis
      "random": true // Adicione variação na opacidade
    },
    "size": {
      "value": 4, // Aumente o tamanho das partículas
      "random": true // Adicione variação no tamanho
    },
    "line_linked": {
      "enable": true,
      "distance": 120, // Reduza a distância entre as partículas conectadas
      "color": "#FFFFFF", // Cor das linhas de conexão
      "opacity": 0.3, // Torne as linhas mais visíveis
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Aumente a velocidade de movimento das partículas
      "direction": "none", // Movimento aleatório
      "random": false,
      "straight": false,
      "out_mode": "out", // Partículas saem da tela e reaparecem
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Alterar para "grab" para efeito de conexão ao passar o mouse
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Adicionar partículas ao clicar
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.7
        }
      },
      "bubble": {
        "distance": 200,
        "size": 10,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});