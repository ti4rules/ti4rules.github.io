import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <div className="container">
      <h1>About TI4 rules</h1>
      <p>This is a free tool to make it easier to lookup and share the rules for Twilight Imperium 4th Edition.</p>

      <h4>Who made this?</h4>

      <p>This was created by <a href='https://scottparker.co'>Scott Parker</a> along with the generous help of <a href="https://github.com/ti4rules/ti4rules.github.io/graphs/contributors">a few others</a>.</p>

      <h4>Something looks wrong!</h4>

      <p>All <a href="https://github.com/ti4rules/ti4rules.github.io">source code for this site is available on Github</a>. If you see something wrong, please <a href="https://github.com/ti4rules/ti4rules.github.io/pulls">submit a pull request</a> to fix it.</p>

      <h4>I think you're claiming ownership of this intellectual property!</h4>

      <p>Ha! Twilight Imperium, Mecatol Rex, and all associated works remain the copyright of their respective copyright holders.</p>

      <h4>License</h4>
      <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
    </div>
  </Layout>
)

export default AboutPage