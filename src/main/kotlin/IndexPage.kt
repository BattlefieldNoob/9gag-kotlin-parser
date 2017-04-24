import kotlinx.html.*
import org.jetbrains.ktor.html.Template

/**
 * Created by developer on 24/04/17.
 */
class IndexPage : Template<HTML> {

    override fun HTML.apply() {
        head {
            title("HelloWorld!")
        }

        body {
            div {
                +"Hello World!!!!!!"
            }

            div {
                id = "react-app"
            }

            script(ScriptType.textJavaScript, "https://cdn.jsdelivr.net/react/0.14.0-rc1/react.js")
            script(ScriptType.textJavaScript, "https://cdn.jsdelivr.net/react/0.14.0-rc1/react-dom.js")
            script(src = "./test.js")
        }
    }
}