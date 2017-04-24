import kotlinx.html.div
import kotlinx.html.h1
import react.ReactComponent
import react.ReactComponentNoProps
import react.ReactComponentNoState
import react.ReactElement
import react.dom.ReactDOM
import react.dom.ReactDOMBuilder
import react.dom.ReactDOMComponent
import react.dom.render
import kotlin.browser.document

/**
 * Created by developer on 24/04/17.
 */


fun main(args: Array<String>) {
    ReactDOM.render(document.getElementById("react-app")){
        HelloWorld()
    }
}

class HelloWorld : ReactDOMComponent<ReactComponentNoProps,ReactComponentNoState>(){

    override fun ReactDOMBuilder.render() {
        div{
            h1{
                +"Hello World By Kotlin Javascript!"
            }
        }
    }

}