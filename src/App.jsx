import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Page1 = () => {
  return (
    <div>
      <h1>MOBILE</h1>
      <p>Os Melhores Jogos </p>
      <p>
      1. Free Fire e PUBG Mobile (Battle Royale): Ambos são jogos de batalha real muito populares, nos quais os jogadores competem para ser o último sobrevivente em um campo de batalha.
     <br/>
2. Among Us (Multijogador Online):** Um jogo social divertido onde os jogadores trabalham juntos para completar tarefas em uma espaçonave, mas alguns são impostores tentando sabotar o grupo.
<br/>
3. Clash Royale (Estratégia em Tempo Real): Um jogo de estratégia em tempo real onde os jogadores montam decks de cartas e batalham uns contra os outros para destruir torres.
<br/>
4. Genshin Impact (Ação e RPG): Um RPG de ação em mundo aberto com gráficos impressionantes, jogabilidade envolvente e uma história cativante.
<br/>
5. Call of Duty: Mobile (Ação e Tiro): Uma versão para dispositivos móveis da popular franquia de jogos de tiro em primeira pessoa, oferecendo modos multiplayer e Battle Royale.
<br/>
6. Brawl Stars (Jogo de Equipe): Um jogo de batalha de equipe onde os jogadores escolhem entre uma variedade de personagens com habilidades únicas para competir em diferentes modos de jogo.
<br/>
7. Monument Valley 2 (Quebra-cabeça): Um jogo de quebra-cabeça visualmente deslumbrante que desafia os jogadores com quebra-cabeças envolventes e mecânicas únicas.
<br/>
8. The Room Series (Quebra-cabeça): Uma série de jogos de quebra-cabeça em que os jogadores exploram caixas intricadamente projetadas para desvendar segredos.
<br/>
9. Asphalt 9: Legends (Corrida): Um jogo de corrida arcade com gráficos impressionantes e uma variedade de carros e pistas.
<br/>
10. Pokémon GO (Realidade Aumentada): Um jogo que combina elementos do mundo real com a realidade aumentada, permitindo que os jogadores capturem Pokémon no mundo ao seu redor.
<br/>
      </p>
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <h1>PC</h1>
      <p>Os Melhores Jogos</p>
      <p>
      1. The Witcher 3: Wild Hunt (RPG de Ação): Um RPG de ação de mundo aberto com uma narrativa envolvente, personagens complexos e um vasto mundo para explorar.
      <br/>
2. Cyberpunk 2077 (RPG de Ação): Desenvolvido pelos mesmos criadores de The Witcher 3, Cyberpunk 2077 é um RPG de ação ambientado em um futuro distópico e tecnológico.
<br/>
3. Red Dead Redemption 2 (Ação e Aventura): Um épico de ação e aventura ambientado no Velho Oeste, com uma história envolvente e um vasto mundo aberto.
<br/>
4. DOOM Eternal (Tiro em Primeira Pessoa): Um jogo de tiro em primeira pessoa cheio de ação, onde os jogadores enfrentam hordas de demônios em ambientes infernais.
<br/>
5. Counter-Strike: Global Offensive (Tiro em Primeira Pessoa): Um clássico jogo de tiro competitivo que envolve equipes de terroristas e contra-terroristas em diversas missões.
<br/>
6. League of Legends (MOBA - Multiplayer Online Battle Arena): Um dos jogos mais populares no gênero MOBA, onde duas equipes competem para destruir a base inimiga.
<br/>
7. Overwatch (Tiro em Equipe): Um jogo de tiro em primeira pessoa com elementos de jogo em equipe, onde os jogadores escolhem entre heróis com habilidades únicas.
<br/>
8. Civilization VI (Estratégia): Um jogo de estratégia por turnos onde os jogadores constroem e gerenciam civilizações desde os primórdios até a era espacial.
<br/>
9. Fallout 4 (RPG de Ação): Um RPG de ação ambientado em um mundo pós-apocalíptico, com uma narrativa envolvente e a capacidade de construir e personalizar abrigos.
<br/>
10. Rainbow Six Siege (Tiro Tático): Um jogo de tiro tático onde os jogadores participam de confrontos intensos em ambientes fechados, com foco na destruição do ambiente.
<br/>
      </p>
    </div>
  );
};

const Page3 = () => {
  return (
    <div>
      <h1>CONSOLE</h1>
      <p>Os Melhores Jogos </p>
      <p>
      1. The Legend of Zelda: Breath of the Wild (Nintendo Switch): Um jogo de ação e aventura que se passa em um vasto mundo aberto, oferecendo uma experiência imersiva e inovadora.
      <br/>
2. God of War (PlayStation 4): Um jogo de ação e aventura que segue a jornada épica de Kratos, com uma narrativa emocionante e combates intensos.
<br/>
3. Super Mario Odyssey (Nintendo Switch): Um jogo de plataforma que leva os jogadores a explorar diversos reinos com Mario e seu novo companheiro, Cappy.
<br/>
4. Red Dead Redemption 2 (PlayStation 4, Xbox One): Um épico de ação e aventura ambientado no Velho Oeste, com uma história envolvente e um vasto mundo aberto.
<br/>
5. Marvel's Spider-Man (PlayStation 4):Um jogo de ação que coloca os jogadores na pele do Homem-Aranha, explorando Nova York e enfrentando vilões icônicos.
<br/>
6. Animal Crossing: New Horizons (Nintendo Switch): Um jogo de simulação de vida em que os jogadores constroem e gerenciam uma ilha deserta, interagindo com personagens adoráveis.
<br/>
7. Persona 5 (PlayStation 4): Um RPG japonês que combina elementos de simulação social, combate estratégico e uma narrativa envolvente.
<br/>
8. Uncharted 4: A Thief's End (PlayStation 4): Um jogo de ação e aventura que segue Nathan Drake em sua última jornada, repleta de cenas cinematográficas e quebra-cabeças.
<br/>
9. Halo: Master Chief Collection (Xbox One): Uma coleção de jogos da série Halo, oferecendo uma experiência completa do icônico herói Master Chief.
<br/>
10. Mario Kart 8 Deluxe (Nintendo Switch): Um jogo de corrida multiplayer com os personagens favoritos da Nintendo, repleto de pistas divertidas e power-ups.
<br/>    
       </p>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/page1">Página 1</Link>
        </li>
        <li>
          <Link to="/page2">Página 2</Link>
        </li>
        <li>
          <Link to="/page3">Página 3</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;