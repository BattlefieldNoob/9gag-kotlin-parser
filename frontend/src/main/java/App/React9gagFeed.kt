package App

import kotlinx.html.div
import org.w3c.fetch.RequestInit
import react.RState
import react.ReactComponentNoProps
import react.ReactComponentSpec
import react.dom.ReactDOMBuilder
import react.dom.ReactDOMComponent
import kotlin.browser.window
import kotlin.js.Promise
import kotlin.js.json

/**
 * Created by developer on 03/05/17.
 */

class React9gagFeed : ReactDOMComponent<ReactComponentNoProps, React9gagFeed.State>(){
    companion object : ReactComponentSpec<React9gagFeed, ReactComponentNoProps, State>

    class State(var json:String): RState

    init {
        state = State("")
        requestAndParseResult("GET","/photo/hot",null,parse = ::parse9gagJson).then({ response ->
            this.setState(builder = {
                state.json=response;
            })
        })

    }

    override fun ReactDOMBuilder.render() {
        div{
            if(state.json.isNotEmpty()){
                React9gagPhoto {
                    url = state.json
                }
            }
        }
    }

    fun <T> requestAndParseResult(method: String, url: String, body: dynamic, parse: (dynamic) -> T): Promise<T> {
        return Promise { resolve, reject ->
            window.fetch(url, object: RequestInit {
                override var method: String? = method
                override var body: dynamic = body
                override var headers: dynamic = json("Accept" to "application/json")
            }).then({ response ->
                console.log(response)
                response.json().then({
                    resolve(parse(it))
                }, reject).catch(reject)
            }, reject).catch(reject)
        }
    }
}

private fun parse9gagJson(json:dynamic):String {
    return json.images.small
}