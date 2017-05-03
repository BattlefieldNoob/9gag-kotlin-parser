
import App.React9gagFeed
import kotlinx.html.div
import kotlinx.html.h1
import kotlinx.html.img
import org.w3c.dom.url.URLSearchParams
import org.w3c.fetch.RequestInit
import react.*
import react.dom.ReactDOM
import react.dom.ReactDOMBuilder
import react.dom.ReactDOMComponent
import react.dom.render
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.JSON.parse
import kotlin.js.Promise
import kotlin.js.Promise.Companion.resolve
import kotlin.js.json

/**
 * Created by developer on 24/04/17.
 */


fun main(args: Array<String>) {
    ReactDOM.render(document.getElementById("react-app")){
        div {
            React9gagFeed {}
        }
    }
}
