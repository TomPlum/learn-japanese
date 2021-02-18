import './styles/sass/LearnJapanese.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";
import Header from "./layout/Header";
import styles from "./styles/sass/LearnJapanese.module.scss";

function LearnJapanese() {
  return (
      <Container fluid className={styles.wrapper}>
          <Row>
            <Header />
          </Row>
      </Container>
  );
}

export default LearnJapanese;
