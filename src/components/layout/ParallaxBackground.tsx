import { Component } from "react";
import { Kana } from "../../types/Kana";
import styles from "../../styles/sass/components/layout/ParallaxBackground.module.scss";
import Arrays from "../../utility/Arrays";

interface ParallaxBackgroundProps {
    kana: Kana[];
}

interface ParallaxBackgroundState {
    kana: Kana[];
    height: number;
    width: number;
    xMouse: number;
    yMouse: number;
    position: [x: number, y: number, z: number];
}

class ParallaxBackground extends Component<ParallaxBackgroundProps, ParallaxBackgroundState> {

    constructor(props: ParallaxBackgroundProps | Readonly<ParallaxBackgroundProps>) {
        super(props);

        this.state = {
            kana: [],
            width: window.innerWidth,
            height: window.innerHeight,
            xMouse: window.innerWidth / 2,
            yMouse: window.innerHeight / 2,
            position: [0, 0, 0]
        }
    }

    componentDidMount() {
        this.getBackgroundKana();
        window.addEventListener('resize', this.updateWindowDimensions);
        //window.addEventListener('mousemove', this.updateMousePosition);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        //window.removeEventListener('mousemove', this.updateMousePosition);
    }

    render() {
        const { kana, position } = this.state;
        return (
            <ul className={styles.background}>
                {kana.map(kana => {
                    return (
                        <li key={Math.random().toString()} data-testid="background-kana">
                            {kana.code}
                        </li>
                    )
                })}
            </ul>
        );
    }

    private updateWindowDimensions = () => {
        this.getBackgroundKana();
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    private updateMousePosition = (e: MouseEvent) => {
        this.setState({ xMouse: e.pageX, yMouse: e.pageY }, this.calculateParallax);
    }

    private getBackgroundKana = () => {
        let kana: Kana[] = [];

        const html = document.querySelector('html');
        const pool = [...this.props.kana];

        if (pool.length > 0 && html) {
            //Calculate the width & height of the viewport in em.
            const fontSize = getComputedStyle(html).fontSize;
            const width = window.innerWidth / parseFloat(fontSize);
            const height = window.innerHeight / parseFloat(fontSize);

            //Calculate how many kana fit on a single row, the number of rows and the total required.
            const kanaPerRow = Math.ceil(width / 5);
            const rows = Math.ceil(height / 5) + 1;
            const totalKanaRequired = kanaPerRow * rows;

            if (totalKanaRequired > pool.length) {
                //There are 214 kana. If more is needed, find out how many more and push them.
                const pools = Math.floor(totalKanaRequired / pool.length);
                for (let i = 0; i < pools; i++) {
                    kana.push(...pool);
                }

                //If the number of pools is fractional, push one more row in.
                const remaining = totalKanaRequired % pool.length;
                if (remaining !== 0) {
                    kana.push(...pool.splice(0, kanaPerRow));
                }
            } else {
                kana.push(...pool.splice(0, totalKanaRequired));
            }
        }

        this.setState({ kana: Arrays.shuffle(kana) });
    }

    private calculateParallax() {
        const { xMouse, yMouse, width, height } = this.state;
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        const xDepth = 0
        const yDepth = 0
        const zDepth = 0
        this.setState({ position: [xDepth, yDepth, zDepth] });
    }
}

export default ParallaxBackground;