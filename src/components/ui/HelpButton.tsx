import { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/HelpButton.module.scss";

interface HelpButtonProps {
    className?: string;
}

class HelpButton extends Component<HelpButtonProps> {
    render() {
        const { className } = this.props;
        return (
          <Button variant="outline-warning" className={className + " " + styles.button} title="Help" href="/help">
              ?
          </Button>
        );
    }
}

export default HelpButton;
