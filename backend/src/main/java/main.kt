import com.google.gson.Gson
import org.jetbrains.ktor.application.Application
import org.jetbrains.ktor.application.call
import org.jetbrains.ktor.application.install
import org.jetbrains.ktor.content.files
import org.jetbrains.ktor.content.static
import org.jetbrains.ktor.features.DefaultHeaders
import org.jetbrains.ktor.html.respondHtmlTemplate
import org.jetbrains.ktor.http.ContentType
import org.jetbrains.ktor.http.HttpStatusCode
import org.jsoup.Jsoup
import org.jetbrains.ktor.response.respondText
import org.jetbrains.ktor.routing.get
import org.jetbrains.ktor.routing.routing
import org.jsoup.nodes.Document
import java.io.File

/**
 * Created by antonio on 20/04/17.
 */

fun Application.main(){
    val parser=NineGagParser()
    val file = File("public")
    println(file.absolutePath)

    install(DefaultHeaders)
    routing {
        get("/next/{section}/{nextPageId}") {
            val section=call.parameters["section"]
            val id=call.parameters["nextPageId"]
            val request=parser.getPosts(10,id);
            val json= Gson().toJson(request)
            call.respondText(json, ContentType.Application.Json)
        }

        get("/"){
           call.respondHtmlTemplate(IndexPage(), HttpStatusCode.OK){

            }
        }

        static {
            files(file)
        }

        get("/photo/{section}"){
            val section=call.parameters["section"]
            val request=parser.getPosts(10);
            println(request)
            val json=Gson().toJson(request)
            call.respondText(json, ContentType.Application.Json)
        }
    }
}

class NineGagParser {
    val baseUrl = "http://9gag.com"
    object Pages {
        val HOT_PAGE = "/hot"
    }

    fun getPosts(count: Int, nextPage: String? = ""): GagRequest {
        val doc: Document

        if (nextPage==null || nextPage.isEmpty())
            doc = Jsoup.connect(baseUrl).get()
        else
            doc = Jsoup.connect(baseUrl + "/?id="+ nextPage).get()

        val next = doc.getElementsByClass("badge-load-more-post").first().attr("href")

        val list = ArrayList<Gag>()

        for (article in doc.getElementsByTag("article")) {
            val img = article.getElementsByTag("img")
            if (img == null || img.isEmpty())
                println("\n NOT A IMAGE  \n")
            else {
                println(img.first().attr("src"))
                val link=img.first().attr("src")
                list.add(Gag("ID","HELLO", hashMapOf("small" to link,"cover" to link,"normal" to link,"large" to link)))
            }
        }
        return GagRequest(200,"OK",list, next.split("%")[0].split("=")[1])
    }
}

data class GagRequest(val status:Int,val message:String, val data: List<Gag>, val paging: String)

data class Gag(val id:String,val caption:String,val images:HashMap<String,String>)

