package App

import kotlinx.html.div
import kotlinx.html.li
import kotlinx.html.ul
import org.w3c.fetch.RequestInit
import react.RState
import react.ReactComponentNoProps
import react.ReactComponentSpec
import react.dom.ReactDOMBuilder
import react.dom.ReactDOMComponent
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Json
import kotlin.js.Promise
import kotlin.js.json

/**
 * Created by developer on 03/05/17.
 */

class React9gagFeed : ReactDOMComponent<ReactComponentNoProps, React9gagFeed.State>(){
    companion object : ReactComponentSpec<React9gagFeed, ReactComponentNoProps, State>

    class State(var json:ArrayList<dynamic>, var paging:String): RState

    init {
        state = State(ArrayList<dynamic>(),"")
        requestAndParseResult("GET","/photo/hot",null,parse = ::parse9gagJson).then({ response ->
            this.setState(builder = {
                state.json=response.second
                state.paging=response.first
            })
        })
        document.onscroll = { event->
            if(document.body!!.scrollHeight == document.body!!.scrollTop.toInt() + window.innerHeight){
                requestAndParseResult("GET","/next/hot/${state.paging}",null,parse = ::parse9gagJson).then({ response ->
                    this.setState(builder = {
                        state.json.addAll(response.second)
                        state.paging=response.first
                    })
                })
            }
        }
    }

    override fun ReactDOMBuilder.render() {
        div{
            ul {
                for (item in state.json) {
                    li {
                        React9gagPhoto {
                            url = item.images.small
                        }
                    }
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

private fun parse9gagJson(json:dynamic):Pair<String,ArrayList<dynamic>> {
    val a = ArrayList<dynamic>()
    for(item in json.data){
        a.add(item)
    }
    return Pair(json.paging,a)
}