import GenkiService from "../../service/GenkiService";
import { useEffect, useRef, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import styles from "../../styles/sass/components/pages/GenkiIndexPage.module.scss";
import SearchField from "../ui/fields/SearchField";
import { faCheckCircle, faCircleNotch, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenkiVocabTable, { TableData } from "../ui/table/GenkiVocabTable";

const GenkiIndexPage = () => {

    const service = new GenkiService();
    const data = useRef<TableData[]>([]);


    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setLoading(true);
        setError(undefined);

        service.getAllVocab().then(response => {
            if (response.definitions) {
                data.current = response.definitions.map(it => {
                    return {
                        lesson: it.getLesson(),
                        kana: it.getKana()[0],
                        meaning: it.getMeanings()[0],
                        kanji: it.getKanjiVariation() ?? "-"
                    };
                });
            } else {
                setError(response.error!);
            }
        }).catch(response => {
            setError(response.error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const onSearch = (value: string) => {
        setSearch(value.toLowerCase());
    }

    return (
        <Container fluid className={styles.wrapper}>

            <Alert variant={!!error ? "danger" : "success"} className={styles.banner}>{
                !error ? <>
                    <FontAwesomeIcon icon={loading ? faCircleNotch : faCheckCircle} className={styles.spinner}
                                     spin={loading}/>
                    <span>{!loading ? `Showing ${data.current.length} definitions from Genki I and II.` : "Loading..."}</span>
                </> : <>
                    <FontAwesomeIcon icon={faExclamationCircle} className={styles.spinner}/>
                    <span>{error}</span>
                </>
            }</Alert>

            <SearchField onChange={onSearch} value={search} className={styles.search} disabled={loading}/>

            {data && <GenkiVocabTable data={data.current} />}
        </Container>
    );
}

export default GenkiIndexPage;
