import Example from "./Example/Example"
import Example1 from "./Example/Example1"
import Example2 from "./Example/Example2"
const View = () => {
  return (
    <div className="home">
      这是page1
      <br />
      <Example />
      <br />
      <Example1 />
      <br />
      <Example2 />
    </div>
  )
}

export default View