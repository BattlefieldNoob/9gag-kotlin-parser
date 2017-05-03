package App

import kotlinx.html.div
import kotlinx.html.img
import react.RProps
import react.ReactComponentNoState
import react.ReactComponentSpec
import react.dom.ReactDOMBuilder
import react.dom.ReactDOMComponent

/**
 * Created by developer on 03/05/17.
 */
class React9gagPhoto : ReactDOMComponent<React9gagPhoto.Props, ReactComponentNoState>(){
    companion object : ReactComponentSpec<React9gagPhoto, Props, ReactComponentNoState>

    class Props(var url:String): RProps()

    init {
        state= ReactComponentNoState()
    }

    override fun ReactDOMBuilder.render() {
        div{
            img(src = props.url)
        }
    }
}