import { Line } from "react-lineto";
import { Component } from "react";

/**
 * TODO: Remove if library is fixed in future
 * This has been copied from https://github.com/kdeloach/react-lineto/blob/master/src/index.jsx
 * Using the import from the latest version of the library is causing all tests in
 * MatchQuestion.test.tsx to fail with a React.jsx error about an object being rendered instead of a string.
 */

const defaultAnchor = { x: 0.5, y: 0.5 };

class LineTo extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
    this.toAnchor = this.parseAnchor(this.props.toAnchor);
    this.delay = this.parseDelay(this.props.delay);
  }

  componentDidMount() {
    this.delay = this.parseDelay(this.props.delay);
    if (typeof this.delay !== 'undefined') {
      this.deferUpdate(this.delay);
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.fromAnchor !== this.props.fromAnchor) {
      this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
    }
    if (nextProps.toAnchor !== this.props.toAnchor) {
      this.toAnchor = this.parseAnchor(this.props.toAnchor);
    }
    this.delay = this.parseDelay(nextProps.delay);
    if (typeof this.delay !== 'undefined') {
      this.deferUpdate(this.delay);
    }
  }

  componentWillUnmount() {
    if (this.t) {
      clearTimeout(this.t);
      this.t = null;
    }
  }

  shouldComponentUpdate() {
    // Always update component if the parent component has been updated.
    // The reason for this is that we would not only like to update
    // this component when the props have changed, but also when
    // the position of our target elements has changed.
    // We could return true only if the positions of `from` and `to` have
    // changed, but that may be expensive and unnecessary.
    return true;
  }

  // Forced update after delay (MS)
  deferUpdate(delay) {
    if (this.t) {
      clearTimeout(this.t);
    }
    this.t = setTimeout(() => this.forceUpdate(), delay);
  }

  parseDelay(value) {
    if (typeof value === 'undefined') {
      return value;
    } else if (typeof value === 'boolean' && value) {
      return 0;
    }
    const delay = parseInt(value, 10);
    if (isNaN(delay) || !isFinite(delay)) {
      throw new Error(`LinkTo could not parse delay attribute "${value}"`);
    }
    return delay;
  }

  parseAnchorPercent(value) {
    const percent = parseFloat(value) / 100;
    if (isNaN(percent) || !isFinite(percent)) {
      throw new Error(`LinkTo could not parse percent value "${value}"`);
    }
    return percent;
  }

  parseAnchorText(value) {
    // Try to infer the relevant axis.
    switch (value) {
      case 'top':
        return { y: 0 };
      case 'left':
        return { x: 0 };
      case 'middle':
        return { y: 0.5 };
      case 'center':
        return { x: 0.5 };
      case 'bottom':
        return { y: 1 };
      case 'right':
        return { x: 1 };
    }
    return null;
  }

  parseAnchor(value) {
    if (!value) {
      return defaultAnchor;
    }
    const parts = value.split(' ');
    if (parts.length > 2) {
      throw new Error('LinkTo anchor format is "<x> <y>"');
    }
    const [x, y] = parts;
    return Object.assign({}, defaultAnchor,
      x ? this.parseAnchorText(x) || { x: this.parseAnchorPercent(x) } : {},
      y ? this.parseAnchorText(y) || { y: this.parseAnchorPercent(y) } : {}
    );
  }

  findElement(className) {
    return document.getElementsByClassName(className)[0];
  }

  detect() {
    const { from, to, within = '' } = this.props;

    const a = this.findElement(from);
    const b = this.findElement(to);

    if (!a || !b) {
      return false;
    }

    const anchor0 = this.fromAnchor;
    const anchor1 = this.toAnchor;

    const box0 = a.getBoundingClientRect();
    const box1 = b.getBoundingClientRect();

    let offsetX = window.pageXOffset;
    let offsetY = window.pageYOffset;

    if (within) {
      const p = this.findElement(within);
      const boxp = p.getBoundingClientRect();

      offsetX -= boxp.left + (window.pageXOffset || document.documentElement.scrollLeft) - p.scrollLeft;
      offsetY -= boxp.top + (window.pageYOffset || document.documentElement.scrollTop) - p.scrollTop;
    }

    const x0 = box0.left + box0.width * anchor0.x + offsetX;
    const x1 = box1.left + box1.width * anchor1.x + offsetX;
    const y0 = box0.top + box0.height * anchor0.y + offsetY;
    const y1 = box1.top + box1.height * anchor1.y + offsetY;

    return { x0, y0, x1, y1 };
  }

  render() {
    const points = this.detect();
    return points ? (
      <Line {...points} {...this.props} />
    ) : null;
  }
}

export default LineTo