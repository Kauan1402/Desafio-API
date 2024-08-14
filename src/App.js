import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rickD99, setRickD99] = useState({});
  const [ladyKatana, setLadyKatana] = useState({});
  const [ethan, setEthan] = useState({});

  useEffect(() => {
    const urlRickD99 = 'https://rickandmortyapi.com/api/character/286';
    fetch(urlRickD99)
      .then((r) => r.json())
      .then((json) => setRickD99(json));

    const urlLadyKatana = 'https://rickandmortyapi.com/api/character/198';
    fetch(urlLadyKatana)
      .then((r) => r.json())
      .then((json) => setLadyKatana(json));

    const urlEthan = 'https://rickandmortyapi.com/api/character/114';
    fetch(urlEthan)
      .then((r) => r.json())
      .then((json) => setEthan(json));
  }, []);

  return (
    <div>
      <header className='header'>
        <strong>Rick and Morty - Characters</strong>
      </header>
      <div className='container'>
        <article className='artigo' key={rickD99.id}>
          <div className='artigo-imagem'>
            <strong>{rickD99.name}</strong>
            <img src={rickD99.image} alt={rickD99.name} />
          </div>
          <div className='artigo-texto'>
            <p><strong>Rick D-99</strong> era um membro do SEAL Team Ricks que foi enviado pela Cidadela de Ricks para assassinar Rick Sanchez (C-137). Ele estava claramente entre os Ricks mais durões e perigosos, pois fazia parte de sua unidade de elite de assassinatos. Seu corpo foi usado por Rick C-137 em seu plano elaborado para destruir a Federação Galáctica. Ele foi explodido quando C-137 assumiu o controle de um Rick de classe superior e ordenou que outro Rick o explodisse. <a href='#'>Ler mais...</a></p>
          </div>
        </article>

        <article className='artigo' key={ladyKatana.id}>
          <div className='artigo-imagem'>
            <strong>{ladyKatana.name}</strong>
            <img src={ladyKatana.image} alt={ladyKatana.name} />
          </div>
          <div className='artigo-texto'>
            <p><strong>Lady Katana</strong> era uma ex-integrante dos Vindicators, que teria morrido em sua segunda aventura, uma luta contra Doom-Nomitron, junto com Calypso e Diablo Verde. Em Vindicators 2: Girls Night, é revelado que ela nunca lutou contra Doom-Nomitron e foi morta por Supernova quando desmaiou bêbada. <a href='#'>Ler mais...</a></p>
          </div>
        </article>

        <article className='artigo' key={ethan.id}>
          <div className='artigo-imagem'>
            <strong>{ethan.name}</strong>
            <img src={ethan.image} alt={ethan.name} />
          </div>
          <div className='artigo-texto'>
            <p><strong>Ethan B.</strong> Ethan é o ex-namorado de Summer, e um personagem recorrente em Rick e Morty. Ele apareceu pela primeira vez no episódio Anatomy Park. O relacionamento de Ethan com Summer começou em um momento desconhecido antes de sua estreia em Anatomy Park, onde seu relacionamento secreto é revelado à família dela quando ele a confronta sobre não responder às suas mensagens de texto. Depois de ter uma discussão com Jacob, ele revelou que quando era criança. <a href='#'>Ler mais...</a></p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
