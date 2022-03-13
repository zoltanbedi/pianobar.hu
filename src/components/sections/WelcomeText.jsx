import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  transition: 'all 400ms ease-in-out',
  opacity: 0,
  maxHeight: 0,
};

const transitionStyles = {
  entering: { opacity: 1, maxHeight: 2000 },
  entered: { opacity: 1, maxHeight: 2000 },
  exiting: { opacity: 0, maxHeight: 0 },
  exited: { opacity: 0, maxHeight: 0 },
};

export default function WelcomeText() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2>A zene közkatonája</h2>
      <p>
        Fűzy Gábor vagyok, a zene közkatonája. Sokak Gabija -ma már olykor Gabi bácsija-, a bárzene utolsó mohikánja.
      </p>
      <Transition in={isOpen} timeout={400} unmountOnExit>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <p>
              Soha nem éreztem azt, hogy te jóságos ég, munkába kell mennem. Szerencsés embernek tartom magam, aki
              amellett, hogy szórakoztat, maga is szórakozik. Vendégeim szemeit fürkészve, érzem meg, hogy éppen
              szerelmes az ember, vagy szeretne bolondulásig? Netalán úgy szeretne részeg lenni, mert eldobták, mint egy
              szál gyufát, de ugye az egyiknek sikerül, a másiknak nem, mivel csak átutazók vagyunk itt a földön… Minden
              érzést, örömöt, bánatot ki lehet fejezni, meg lehet élni ezekkel az örökérvényű melódiákkal. Sikerem az,
              ha az emberek velem dúdolják, éneklik a számokat és együtt élünk meg egy csodás találkozást.
              {' '}
              <br />
              1944-ben születtem, Budapesten. Először hangszerkészítőnek tanultam, ám végül A kategóriás
              vendéglátó-ipari zenész lett belőlem. Első szerződésemet 50 éve, 1963-ban kaptam meg. Budakalászon, egy
              téglagyár és egy lenfonó melletti éjszakai zenés helyen jöttem rá, hogy nem a jól betanult számokat
              énekelve, magamnak kell játszanom, hanem az emberek szívéhez szólva, az ő kedvükben járva.
              <br />
              1971-1976 között a Gellért-hegyen található Búsuló Juhászban játszottam. A kazánkovácstól Latinovitsig, az
              élsportolótól a lottóötös nyertesig, mindenkinek, olykor este 10-től másnap 11-ig.
              {' '}
              <br />
              1976- ban jegyeztem el magam az Aranykéz utcai, mára legendássá vált Pipacs Bárral. A Pipacsba „mindenki”
              bejárt Alfonzótól Albert Flóriánig, Bodrogi Gyulától Farkas Jánosig, Kabos Lászlótól Szűcs Lajosig, Kibédy
              Ervintől Szusza Ferencig, Tordy Gézától Törőcsik Andrásig.
              <br />
              Az elmúlt nyolc évben a budai
              {' '}
              <strong>Piros Pezsgő Pianó Bárban</strong>
              {' '}
              lehet megtalálni. Ez egy kis
              családias hangulatú pianó bár egy “éjszakai felnőtt megőrző”.
              <br />
              Azt gondolom, hogy mi egy ma már ritkaság számba menő “
              <strong>zeneklinika</strong>
              ” vagyunk, ahol
              balzsamos kezelést kap a szív, felüdül a lélek, édes-bús emlékek szakadnak fel.
              <br />
              Amikor leszáll az éj, a bárban kigyúl a fény, megszólal a zongora…és egyszer csak azt vesszük észre, hogy
              mindnyájan együtt énekeljük az ismert melódiákat.
              <br />
              Ha szeretne részt venni egy andalító időutazáson Budapest egykori lokálvilágában, látogasson meg
              személyesen a
              {' '}
              <strong>Piros Pezsgő Pianó Bárban</strong>
              !
            </p>
          </div>
        )}
      </Transition>

      <button type="button" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Bezár' : 'Tovább'}</button>
    </>
  );
}
