import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import GrammarInfo, { GrammarInfoProps } from "../learn/GrammarInfo";
import styles from "../../styles/sass/components/pages/GenkiGrammarPage.module.scss";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import ComponentTree from "../../utility/ComponentTree";
import ValueSelector from "../ui/select/ValueSelector";
import Arrays from "../../utility/Arrays";
import { useDebouncedEffect } from "../../hooks";
import GenkiChapter1 from "./genki/GenkiChapter1";
import GenkiChapter2 from "./genki/GenkiChapter2";
import GenkiChapter3 from "./genki/GenkiChapter3";
import GenkiChapter4 from "./genki/GenkiChapter4";
import GenkiChapter13 from "./genki/GenkiChapter13";
import GenkiChapter14 from "./genki/GenkiChapter14";
import GenkiChapter15 from "./genki/GenkiChapter15";
import GenkiChapter16 from "./genki/GenkiChapter16";
import GenkiChapter17 from "./genki/GenkiChapter17";
import GenkiChapter5 from "./genki/GenkiChapter5";

const GenkiGrammarPage = () => {

    const { c1p1, c1p2, c1p3 } = GenkiChapter1();
    const { c2p1, c2p2, c2p3, c2p4, c2p5, c2p6, c2p7 } = GenkiChapter2();
    const { c3p1, c3p2, c3p3, c3p4, c3p5, c3p6, c3p7, c3p8 } = GenkiChapter3();
    const { c4p1, c4p2, c4p3, c4p4, c4p5, c4p6, c4p7, c4p8 } = GenkiChapter4();
    const { c5p1, c5p2, c5p3, c5p4 } = GenkiChapter5();
    const { c13p1, c13p2, c13p3, c13p4, c13p5, c13p6 } = GenkiChapter13();
    const { c14p1, c14p2, c14p3, c14p4, c14p5 } = GenkiChapter14();
    const { c15p1, c15p2, c15p3, c15p4 } = GenkiChapter15();
    const { c16p1, c16p2, c16p3, c16p4, c16p5 } = GenkiChapter16();
    const { c17p1, c17p2, c17p3, c17p4, c17p5, c17p6 } = GenkiChapter17();

    const allGrammar: GrammarInfoProps[] = [
        c1p1, c1p2, c1p3,
        c2p1, c2p2, c2p3, c2p4, c2p5, c2p6, c2p7,
        c3p1, c3p2, c3p3, c3p4, c3p5, c3p6, c3p7, c3p8,
        c4p1, c4p2, c4p3, c4p4, c4p5, c4p6, c4p7, c4p8,
        c5p1, c5p2, c5p3, c5p4,
        c13p1, c13p2, c13p3, c13p4, c13p5, c13p6,
        c14p1, c14p2, c14p3, c14p4, c14p5,
        c15p1, c15p2, c15p3, c15p4,
        c16p1, c16p2, c16p3, c16p4, c16p5,
        c17p1, c17p2, c17p3, c17p4, c17p5, c17p6
    ];

    const [grammar, setGrammar] = useState(allGrammar);
    const [search, setSearch] = useState("");
    const [chapter, setChapter] = useState(1);
    const [cleared, setCleared] = useState(true);

    useDebouncedEffect(() => {
        if (search != "") {
            const matchingGrammar = grammar.filter(section => {
                const hasBodyMatch = new ComponentTree(section.body).getStringChildren().some(value => {
                    return value.toLowerCase().includes(search.toLowerCase());
                });

                const hasTitleMatch = section.title.toLowerCase().includes(search.toLowerCase());

                return hasBodyMatch || hasTitleMatch;
            }).map(section => {
                section.preExpand = true;
                return section;
            });

            setGrammar(matchingGrammar);
        } else {
            setGrammar(allGrammar);
        }
    }, 200, [search]);

    useEffect(() => {
        if (!cleared) {
            const matchingChapters = grammar.filter(section => section.chapter === chapter);
            setGrammar(matchingChapters);
        } else {
            setGrammar(allGrammar);
        }
    }, [chapter]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const search = e.target.value;
        setSearch(search);
    }

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <Container className={styles.wrapper} fluid>
            <Row noGutters>
                <div className={styles.searchWrapper}>
                    <InputGroup className={styles.search}>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch}/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>

                        <Form.Control
                            type="text"
                            value={search}
                            placeholder="search"
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </InputGroup>
                </div>
                <div className={styles.chapterSelectorWrapper}>
                    <ValueSelector
                        prefix="Chapter"
                        selected={chapter}
                        showBeforeScrolling={150}
                        id="genki-chapter-selector"
                        values={Arrays.range(1, 25)}
                        className={styles.chapterSelector}
                        itemClassName={styles.chapterSelectorItem}
                        onChange={(value: number) => setChapter(value)}
                    />
                </div>
            </Row>

            <Row noGutters>
                <Col>
                    {grammar.map(props => <GrammarInfo {...props} />)}
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button variant="dark" className={styles.backToTop} onClick={handleScrollToTop}>
                        <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                        <span>Back to Top</span>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default GenkiGrammarPage;
