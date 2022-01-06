import { Container } from "react-bootstrap";
import GrammarInfo from "../learn/GrammarInfo";
import PageNumber from "../../domain/learn/PageNumber";

const GenkiGrammarPage = () => {
    return (
        <Container>
            <GrammarInfo
                title="Question Sentences"
                body={<div>
                    <p>It is most common to use the end particle ka when making a question sentence.</p>
                    <p>Simply add ka to the end of a statement.</p>
                </div>}
                chapter={1}
                page={PageNumber.of(42, 43)}
            />
        </Container>
    );
}

export default GenkiGrammarPage;
