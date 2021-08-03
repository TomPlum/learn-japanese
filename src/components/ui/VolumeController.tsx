import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faVolumeDown, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import styles from "../../styles/sass/components/ui/VolumeController.module.scss";
import RangeSlider from "react-bootstrap-range-slider";

export interface VolumeControllerProps {
    className?: string;
    onVolumeChange?: (value: number) => void;
}

interface VolumeControllerState {
    showVolume: boolean;
    muted: boolean;
    volume: number;
}

class VolumeController extends Component<VolumeControllerProps, VolumeControllerState> {

    constructor(props: Readonly<VolumeControllerProps> | VolumeControllerProps) {
        super(props);
        this.state = {
            showVolume: false,
            muted: false,
            volume: 70
        }
    }

    render() {
        const { className } = this.props;
        const { showVolume, muted, volume } = this.state;

        const overlay = (
            <Popover id="volume-slider" className={styles.volume}  onMouseLeave={this.hideVolume}
                     onMouseEnter={this.showVolume}>
                <Popover.Content className={styles.text}>
                    <RangeSlider
                        min={0}
                        max={100}
                        value={volume}
                        disabled={muted}
                        data-testid="volume-slider"
                        onChange={this.changeVolume}
                    />
                </Popover.Content>
            </Popover>
        );

        return (
            <div>
                <OverlayTrigger show={showVolume} defaultShow={false} placement="top" rootClose={true} overlay={overlay}>
                    <Button
                        title="Volume"
                        variant="light"
                        className={className}
                        onClick={this.invert}
                        onMouseLeave={this.hideVolume}
                        onMouseEnter={this.showVolume}
                    >
                        <FontAwesomeIcon fixedWidth icon={this.getVolumeIcon()} />
                    </Button>
                </OverlayTrigger>
            </div>
        );
    }

    private invert = () => {
        const { muted, volume } = this.state;
        this.props.onVolumeChange?.(muted ? volume / 100 : 0);
        this.setState({ muted: !muted });
    }

    private showVolume = () => this.setState({ showVolume: true });

    private hideVolume = () => this.setState({ showVolume: false });

    private changeVolume = (e: React.ChangeEvent, value: number) => {
        this.setState({ volume: value });
        this.props.onVolumeChange?.(value / 100);
    }

    private getVolumeIcon = () => {
        const { muted, volume } = this.state;

        if (muted || volume === 0) {
            return faVolumeMute
        }

        return volume > 50 ? faVolumeUp : faVolumeDown
    }
}

export default VolumeController;
