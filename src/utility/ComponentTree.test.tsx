import ComponentTree from "./ComponentTree.ts"
import Copyable from "../components/ui/Copyable"
import { ReactElement } from "react"

describe("Component Tree", () => {
  describe("Get Deepest Leaf Node", () => {
    it("Should return undefined when there no children", () => {
      const tree = new ComponentTree(<Copyable />)
      const leaf = tree.getDeepestLeafNode()
      expect(leaf).toBeUndefined()
    })

    it("Should return the leaf node if there is a single child", () => {
      const tree = new ComponentTree(
        (
          <Copyable>
            <p>hello world!</p>
          </Copyable>
        )
      )
      const leaf = tree.getDeepestLeafNode()
      expect(leaf).toBe("hello world!")
    })

    it("Should return the first leaf if there are 2 side-by-side", () => {
      const tree = new ComponentTree(
        (
          <Copyable>
            <p>I&apos;m first!</p>
            <p>I&apos;m second!</p>
          </Copyable>
        )
      )
      const leaf = tree.getDeepestLeafNode()
      expect(leaf).toBe("I'm first!")
    })

    it("Should return the first leaf if there are 2 at the same depth with different parents", () => {
      const tree = new ComponentTree(
        (
          <Copyable>
            <p>
              <span>I&apos;m first!</span>
            </p>
            <p>
              <span>I&apos;m second!</span>
            </p>
          </Copyable>
        )
      )
      const leaf = tree.getDeepestLeafNode()
      expect(leaf).toBe("I'm first!")
    })

    it("Should return the only leaf if it is several levels deep", () => {
      const tree = new ComponentTree(
        (
          <Copyable>
            <div>
              <p>
                <span>I&apos;m a leaf!</span>
              </p>
            </div>
          </Copyable>
        )
      )
      const leaf = tree.getDeepestLeafNode()
      expect(leaf).toBe("I'm a leaf!")
    })
  })

  describe("Add Props To Leaf Node", () => {
    it("Should add the props to the child if it's directly below the root", () => {
      const tree = new ComponentTree(
        (
          <div>
            <span>test</span>
          </div>
        )
      )

      const updatedTree = tree.addPropsToLeafNode(() => {
        return { className: "myClass" }
      })

      expect(updatedTree.props.className).toBe("myClass")
    })

    it("Should keep the existing props if no function is passed in", () => {
      const tree = new ComponentTree(
        (
          <div>
            <span className="myClass">test</span>
          </div>
        )
      )

      const updatedTree = tree.addPropsToLeafNode()

      expect(updatedTree.props.children.props.className).toBe("myClass")
    })

    it.skip("Should pass leaf node into function so it's properties can accessed", () => {
      const tree = new ComponentTree(
        (
          <div>
            <span title="myTitle">test</span>
          </div>
        )
      )

      const updatedTree = tree.addPropsToLeafNode((el: ReactElement) => {
        return { className: "myClass", title: el.props.title }
      })

      expect(updatedTree.props.children.props.className).toBe("myClass")
      expect(updatedTree.props.children.props.title).toBe("myTitle")
    })
  })

  describe("Get String Children", () => {
    it("Should return the text content of an immediate child", () => {
      const tree = new ComponentTree(<p>I&apos;m some text content</p>)

      const stringChildren = tree.getStringChildren()

      expect(stringChildren).toStrictEqual(["I'm some text content"])
    })
  })
})
