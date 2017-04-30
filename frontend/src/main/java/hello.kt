
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
    console.log("HELLO!")
    ReactDOM.render(document.getElementById("react-app")){
        div {
            React9gagFeed {}
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
        div {
            React9gagFeed()
        }
    }
}

class React9gagPhoto : ReactDOMComponent<React9gagPhoto.Props,ReactComponentNoState>(){
    companion object : ReactComponentSpec<React9gagPhoto, Props, ReactComponentNoState>

    class Props(var url:String):RProps()

    init {
        console.log("Stated photo")
    }

    override fun ReactDOMBuilder.render() {
        div{
            img(src = props.url)
        }
    }
}

class React9gagFeed : ReactDOMComponent<ReactComponentNoProps,BoxedState<String>>(){
    companion object : ReactComponentSpec<React9gagFeed, ReactComponentNoProps, BoxedState<String>>

    init {
        console.log("Stated Feed")
        state = BoxedState("")
        console.log("Status:$state")
        requestAndParseResult("GET","/photo/hot",null,parse = ::parse9gagJson).then({ response ->
            {
                console.log("Response:$response")
            }
        })

    }

    override fun ReactDOMBuilder.render() {
        div{
            if(state.state.isNotEmpty()){
                console
                React9gagPhoto{
                    url=state.state
                }
            }
        }
    }

}

fun <T> requestAndParseResult(method: String, url: String, body: dynamic, parse: (dynamic) -> T): Promise<T> {
    console.log("REQUEST")
    return Promise { resolve, reject ->
        window.fetch(url, object: RequestInit {
            override var method: String? = method
            override var body: dynamic = body
            override var headers: dynamic = json("Accept" to "application/json")
        }).then({ response ->
                response.json().then({ resolve(parse(it)) }, reject).catch(reject)
        }, reject).catch(reject)
    }
}

private fun parse9gagJson(json:dynamic):String {
    return json.images.small
}
