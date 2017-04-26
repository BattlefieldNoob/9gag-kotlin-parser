
import kotlinx.html.div
import kotlinx.html.h1
import react.*
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
        div {
            HelloWorld {}
        }
    }
}

class HelloWorld : ReactDOMComponent<ReactComponentNoProps,ReactComponentNoState>(){
    companion object : ReactComponentSpec<HelloWorld, ReactComponentNoProps, ReactComponentNoState>

    init {
        state= ReactComponentNoState()
    }

    override fun componentDidMount() {
        super.componentDidMount()
    }

    override fun ReactDOMBuilder.render() {
        for(i in 1..3) {
            div {
                h1 {
                    +"Hello World By Kotlin Javascript!"
                }
            }
        }
    }

}