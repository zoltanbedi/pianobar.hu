import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

export default class WelcomeText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
    }
    this.toggleText = this.toggleText.bind(this)
  }

  toggleText() {
    const { isOpened } = this.state
    this.setState({ isOpened: !isOpened })
  }

  render() {
    const { isOpened } = this.state
    return (
      <>
        <h2>A zene közkatonája</h2>
        <p>
          Fűzy Gábor vagyok, a zene közkatonája. Sokak Gabija -ma már olykor Gabi bácsija-, a bárzene utolsó mohikánja.
        </p>
        <CSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={300}>
          {isOpened && <Text key="ex" />}
        </CSSTransitionGroup>

        <button onClick={this.toggleText}>{isOpened ? 'Bezár' : 'Tovább'}</button>
      </>
    )
  }
}

const Text = () => (
  <div>
    <p>
      Soha nem éreztem azt, hogy te jóságos ég, munkába kell mennem. Szerencsés embernek tartom magam, aki amellett,
      hogy szórakoztat, maga is szórakozik. Vendégeim szemeit fürkészve, érzem meg, hogy éppen szerelmes az ember, vagy
      szeretne bolondulásig? Netalán úgy szeretne részeg lenni, mert eldobták, mint egy szál gyufát, de ugye az egyiknek
      sikerül, a másiknak nem, mivel csak átutazók vagyunk itt a földön… Minden érzést, örömöt, bánatot ki lehet
      fejezni, meg lehet élni ezekkel az örökérvényű melódiákkal. Sikerem az, ha az emberek velem dúdolják, éneklik a
      számokat és együtt élünk meg egy csodás találkozást. <br />
      1944-ben születtem, Budapesten. Először hangszerkészítőnek tanultam, ám végül A kategóriás vendéglátó-ipari zenész
      lett belőlem. Első szerződésemet 50 éve, 1963-ban kaptam meg. Budakalászon, egy téglagyár és egy lenfonó melletti
      éjszakai zenés helyen jöttem rá, hogy nem a jól betanult számokat énekelve, magamnak kell játszanom, hanem az
      emberek szívéhez szólva, az ő kedvükben járva.
      <br />
      1971-1976 között a Gellért-hegyen található Búsuló Juhászban játszottam. A kazánkovácstól Latinovitsig, az
      élsportolótól a lottóötös nyertesig, mindenkinek, olykor este 10-től másnap 11-ig. <br />
      1976- ban jegyeztem el magam az Aranykéz utcai, mára legendássá vált Pipacs Bárral. A Pipacsba „mindenki” bejárt
      Alfonzótól Albert Flóriánig, Bodrogi Gyulától Farkas Jánosig, Kabos Lászlótól Szűcs Lajosig, Kibédy Ervintől
      Szusza Ferencig, Tordy Gézától Törőcsik Andrásig.
      <br />
      Az elmúlt nyolc évben a budai <strong>Kis Pipacs Pianó Bárban</strong> lehet megtalálni. Ez egy kis családias
      hangulatú pianó bár egy “éjszakai felnőtt megőrző”.
      <br />
      Azt gondolom, hogy mi egy ma már ritkaság számba menő “<strong>zeneklinika</strong>” vagyunk, ahol balzsamos
      kezelést kap a szív, felüdül a lélek, édes-bús emlékek szakadnak fel.
      <br />
      Amikor leszáll az éj, a bárban kigyúl a fény, megszólal a zongora…és egyszer csak azt vesszük észre, hogy
      mindnyájan együtt énekeljük az ismert melódiákat.
      <br />
      Ha szeretne részt venni egy andalító időutazáson Budapest egykori lokálvilágában, látogasson meg személyesen a{' '}
      <strong>Kis Pipacs Pianó Bárban</strong>!
    </p>
  </div>
)
