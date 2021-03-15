import { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/HelpButton.module.scss";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HelpButtonProps {
    className?: string;
}

class HelpButton extends Component<HelpButtonProps> {
    render() {
        const { className } = this.props;
        return (
          <Button variant="outline-warning" className={className + " " + styles.button} title="Help" href="/help">
              <FontAwesomeIcon icon={faQuestion} /> Help
          </Button>
        );
    }
}

export default HelpButton;
