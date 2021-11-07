import GenkiService from "../../service/GenkiService";
import { useEffect, useRef, useState } from "react";
import GenkiDefinition from "../../domain/learn/GenkiDefinition";
import { Alert, Container, Table } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/GenkiIndexPage.module.scss";
import SearchField from "../ui/fields/SearchField";
import Copyable from "../ui/Copyable";
import ScrollableContainer from "../ui/ScrollableContainer";
import { faCheckCircle, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GenkiIndexPage = () => {

    const service = new GenkiService();
    const wholeDataset = useRef<GenkiDefinition[]>([]);

    const [definitions, setDefinitions] = useState<GenkiDefinition[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        service.getAllVocab().then(response => {
            if (response.definitions) {
                wholeDataset.current = response.definitions;
                setDefinitions(response.definitions);
            } else {
                setError(response.error!);
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const data = definitions;

        if (search === "") {
            setDefinitions(wholeDataset.current);
        } else {
            const results = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].getMeanings()[0].indexOf(search) !== 1 || String(data[i].getLesson()).indexOf(search) !== -1) {
                    results.push(data[i]);
                }
            }
            setDefinitions(results);
        }
    }, [search]);

    const onSearch = (value: string) => {
        setSearch(value.toLowerCase());
    }

    return (
        <Container fluid className={styles.wrapper}>

            <Alert variant="success">
                <FontAwesomeIcon icon={loading ? faCircleNotch : faCheckCircle} className={styles.spinner} spin={loading} />
                <span>{`Showing ${definitions.length} definitions from Genki I and II.`}</span>
            </Alert>

            {!!error && <p>{error}</p>}

            <SearchField onChange={onSearch} value={search} className={styles.search} />

            <ScrollableContainer maxHeight={1000}>
                <Table responsive className={styles.table} variant="dark">
                    <thead>
                        <tr>
                            <th>Kana</th>
                            <th>Kanji</th>
                            <th>Meaning</th>
                            <th>Lesson</th>
                        </tr>
                    </thead>

                    <tbody>
                        {definitions.map(definition => {
                            const colourClass = definition.getLesson() < 12 ? styles.genkiOne : styles.genkiTwo;

                            return (<tr className={colourClass}>
                                <td><Copyable><span>{definition.getKana()[0]}</span></Copyable></td>
                                <td><Copyable><span>{definition.getKanjiVariation() ?? "-"}</span></Copyable></td>
                                <td><Copyable><span>{definition.getMeanings()[0]}</span></Copyable></td>
                                <td>{definition.getLesson()}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </ScrollableContainer>
        </Container>
    );
}

export default GenkiIndexPage;
