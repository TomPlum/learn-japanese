import ComponentTree from "../../utility/ComponentTree";
import Copyable from "../../components/ui/Copyable";

describe("Component Tree", () => {
    describe("Get Deepest Leaf Node", () => {
        it("Should return undefined when there no children", () => {
            const tree = new ComponentTree(<Copyable />);
            const leaf = tree.getDeepestLeafNode();
            expect(leaf).toBeUndefined();
        });

        it("Should return the leaf node if there is a single child", () => {
            const tree = new ComponentTree(<Copyable><p>hello world!</p></Copyable>);
            const leaf = tree.getDeepestLeafNode();
            expect(leaf).toBe('hello world!');
        });

        it("Should return the first leaf if there are 2 side-by-side", () => {
            const tree = new ComponentTree(<Copyable><p>I'm first!</p><p>I'm second!</p></Copyable>);
            const leaf = tree.getDeepestLeafNode();
            expect(leaf).toBe('I\'m first!');
        });

        it("Should return the first leaf if there are 2 at the same depth with different parents", () => {
            const tree = new ComponentTree(
                <Copyable>
                    <p>
                        <span>I'm first!</span>
                    </p>
                    <p>
                        <span>I'm second!</span>
                    </p>
                </Copyable>
            );
            const leaf = tree.getDeepestLeafNode();
            expect(leaf).toBe('I\'m first!');
        });

        it("Should return the only leaf if it is several levels deep", () => {
            const tree = new ComponentTree(
                <Copyable>
                    <div>
                        <p>
                            <span>I'm a leaf!</span>
                        </p>
                    </div>
                </Copyable>
            );
            const leaf = tree.getDeepestLeafNode();
            expect(leaf).toBe('I\'m a leaf!');
        });
    });
});