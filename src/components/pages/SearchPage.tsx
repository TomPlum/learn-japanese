import React, { useEffect, useRef, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import KanaRepository from "../../repository/KanaRepository"
import { Kana } from "../../domain/kana/Kana"
import LoadingSpinner from "../ui/loading/LoadingSpinner"
import styles from "../../styles/sass/components/pages/SearchPage.module.scss"
import KanaType from "../../domain/kana/KanaType"
import KanaGrid from "../ui/kana/KanaGrid"
import SearchField from "../ui/fields/SearchField"
import FilterChain from "../../filters/FilterChain"
import KanaTypeFilter from "../../filters/kana/KanaTypeFilter"
import DiagraphFilter from "../../filters/kana/DiagraphFilter"
import DiacriticalFilter from "../../filters/kana/DiacriticalFilter"
import RomajiFilter from "../../filters/kana/RomajiFilter"
import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings"
import ToggleSwitch from "../ui/ToggleSwitch"

const SearchPage = () => {
  const data = useRef<Kana[]>([])
  const [loading, setLoading] = useState(false)
  const [kana, setKana] = useState<Kana[]>([])
  const [search, setSearch] = useState("")
  const [showHiragana, setShowHiragana] = useState(true)
  const [showKatakana, setShowKatakana] = useState(true)
  const [showDiagraphs, setShowDiagraphs] = useState(true)
  const [showDiacriticals, setShowDiacriticals] = useState(true)

  useEffect(() => {
    setLoading(true)

    const config = new KanaSettingsBuilder().withEverything().withMaxQuantity().build()

    new KanaRepository().read(config).then((response) => {
      setKana(response)
      setLoading(false)
      data.current = response
    })
  }, [])

  useEffect(() => {
    const chain = new FilterChain<Kana>()

    chain.addFilter(new RomajiFilter(search))
    if (!showHiragana) chain.addFilter(new KanaTypeFilter(KanaType.HIRAGANA))
    if (!showKatakana) chain.addFilter(new KanaTypeFilter(KanaType.KATAKANA))
    if (!showDiagraphs) chain.addFilter(new DiagraphFilter())
    if (!showDiacriticals) chain.addFilter(new DiacriticalFilter())

    setKana(chain.execute(data.current))
  }, [search, showHiragana, showKatakana, showDiagraphs, showDiacriticals])

  return (
    <div className={styles.wrapper} data-testid="search-page">
      <LoadingSpinner active={loading} variant="primary" />

      <Container className={styles.controlsWrapper}>
        <Container className={styles.searchWrapper}>
          <SearchField
            value={search}
            placeholder="Enter the rōmaji"
            append={kana.length + " Results"}
            onChange={(search: string) => setSearch(search)}
          />
        </Container>

        <Container>
          <Row>
            <Col className={styles.switchWrapper} md={3} sm={4} xs={6}>
              <ToggleSwitch
                label="Hiragana"
                enabled={showHiragana}
                data-testid="hiragana-switch"
                className={styles.hiraganaSwitch}
                onChange={() => setShowHiragana(!showHiragana)}
              />
            </Col>

            <Col className={styles.switchWrapper} md={3} sm={4} xs={6}>
              <ToggleSwitch
                label="Katakana"
                enabled={showKatakana}
                data-testid="katakana-switch"
                className={styles.katakanaSwitch}
                onChange={() => setShowKatakana(!showKatakana)}
              />
            </Col>

            <Col className={styles.switchWrapper} md={3} sm={4} xs={6}>
              <ToggleSwitch
                label="Diagraphs"
                enabled={showDiagraphs}
                data-testid="diagraphs-switch"
                className={styles.diagraphSwitch}
                onChange={() => setShowDiagraphs(!showDiagraphs)}
              />
            </Col>

            <Col className={styles.switchWrapper} md={3} sm={12} xs={6}>
              <ToggleSwitch
                label="Diacriticals"
                enabled={showDiacriticals}
                data-testid="diacriticals-switch"
                className={styles.diacriticalSwitch}
                onChange={() => setShowDiacriticals(!showDiacriticals)}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <KanaGrid kana={kana} />
    </div>
  )
}

export default SearchPage
