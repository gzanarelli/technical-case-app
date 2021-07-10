import React from 'react';
import Layout from './components/Layout';
import GlobalStyle from './utils/GlobalStyle';
import Bloc from './components/Bloc';
import Form from './components/Form';

const App = () => (
  <Layout>
    <GlobalStyle />
    <Bloc
      img="/header.png"
      title="Construire des campus apprenants"
      content="A quoi ressembleront les campus de demain ? Retour sur les révolutions numériques et pédagogiques qui bousculent aujourd’hui les établissements de l’enseignement supérieur pour découvrir comment ceux-ci effectuent leur transition vers des formats hybrides."
      cta="Télécharger gratuitement"
      catchPhrase="Livre blanc en libre accès"
      level="h1"
    />
    <Bloc
      img="/infographic.png"
      title="Ce que vous allez y apprendre"
      content={null}
      reverse
      list={[
        'Tout sur les révolutions numériques et pédagogiques',
        'Quels sont les freins et leviers de la transformation numérique dans la pédagogie',
        'Les différentes mutations des espaces pédagogiques',
        'A quoi ressembleront les campus de demain',
      ]}
      cta={null}
      catchPhrase={null}
    />
    <Bloc
      img="/headway.png"
      title="En partenariat avec HEADway"
      content="Fondé en 2011, HEADway Advisory est le leader français du conseil en stratégie exclusivement dédié aux acteurs de l’enseignement supérieur, de la recherche et de la formation. Leur expertise leur permet d’avoir une vision globale des défis que leurs clients doivent relever, tout en apportant des solutions sur mesure adaptées aux enjeux particuliers de chaque institution."
      cta={null}
      catchPhrase={null}
    />
    <Form />
  </Layout>
);

export default App;
