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

            script(src = "frontend.bundle.js")
        }
    }
}