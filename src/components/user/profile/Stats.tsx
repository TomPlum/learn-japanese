import { Card, Col, Row } from "react-bootstrap";
import { Cell, Pie, PieChart } from "recharts";
import styles from "../../../styles/sass/components/user/profile/Stats.module.scss";

const dummyKanjiData = [
    { grade: 1, value: 80, fill: "#4189ff" },
    { grade: 2, value: 160, fill: "#5dca41" },
    { grade: 3, value: 200, fill: "#f59037" },
    { grade: 4, value: 150, fill: "#8f46ea" },
    { grade: 5, value: 78, fill: "#d952d9" },
    { grade: 6, value: 12, fill: "#d73939" },
];

const dummyKanaData = [
    { type: "Hiragana", value: 120, fill: "#4189ff" },
    { type: "Katakana", value: 78, fill: "#5dca41" },
];

const dummyOtherData = [
    { type: "Verbs", value: 10, fill: "#4189ff" },
    { type: "Adjectives", value: 50, fill: "#5dca41" },
    { type: "Adverbs", value: 22, fill: "#f59037" },
    { type: "Nouns", value: 67, fill: "#8f46ea" },
    { type: "Counters", value: 12, fill: "#d952d9" },
];

const Stats = () => {
    return (
        <Card className={styles.card} border="success">
            <Card.Body>
                <h2 className={styles.heading}>Stats</h2>

                <Row>
                    <Col xs={4}>
                        <p className={styles.label}>Games Played</p>
                        <p className={styles.value}>56</p>
                    </Col>
                    <Col xs={4}>
                        <p className={styles.label}>Games Won</p>
                        <p className={styles.value}>42</p>
                    </Col>
                    <Col xs={4}>
                        <p className={styles.label}>Games Lost</p>
                        <p className={styles.value}>3</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <p className={styles.label}>Kanji By Grade</p>
                        <PieChart width={125} height={125} margin={{ left: -23 }}>
                            <Pie
                                dataKey="value"
                                nameKey="grade"
                                animationBegin={0}
                                innerRadius={15}
                                data={dummyKanjiData}
                            >
                                {dummyKanjiData.map(datum => {
                                    return <Cell key={`cell-${datum.grade}`} fill={datum.fill}/>
                                })}
                            </Pie>
                        </PieChart>
                    </Col>

                    <Col xs={4}>
                        <p className={styles.label}>Kana</p>
                        <PieChart width={125} height={125} margin={{ left: -23 }}>
                            <Pie
                                dataKey="value"
                                nameKey="type"
                                animationBegin={0}
                                innerRadius={15}
                                outerRadius={50}
                                data={dummyKanaData}
                            >
                                {dummyKanaData.map(datum => {
                                    return <Cell key={`cell-${datum.type}`} fill={datum.fill}/>
                                })}
                            </Pie>
                        </PieChart>
                    </Col>

                    <Col xs={4}>
                        <p className={styles.label}>Other (Top 5)</p>
                        <PieChart width={125} height={125} margin={{ left: -23 }}>
                            <Pie
                                dataKey="value"
                                nameKey="type"
                                animationBegin={0}
                                innerRadius={15}
                                outerRadius={50}
                                data={dummyOtherData}
                            >
                                {dummyOtherData.map(datum => {
                                    return <Cell key={`cell-${datum.type}`} fill={datum.fill}/>
                                })}
                            </Pie>
                        </PieChart>
                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <p className={styles.label}>Cards Reviewed</p>
                        <p className={styles.value}>1156</p>
                    </Col>
                    <Col xs={4}>
                        <p className={styles.label}>Most Reviewed</p>
                        <p className={styles.value}>人</p>
                    </Col>
                    <Col xs={4}>
                        <p className={styles.label}>Most Difficult</p>
                        <p className={styles.value}>藤</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Stats;
