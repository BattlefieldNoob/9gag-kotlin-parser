import org.jsoup.Jsoup
import org.jsoup.nodes.Document

/**
 * Created by antonio on 20/04/17.
 */

fun main(args: Array<String>) {
    val parser=NineGagParser()
    val posts=parser.getPosts(10)
    parser.getPosts(10,posts.nextPage)
}

class NineGagParser {
    val baseUrl = "http://9gag.com"
    object Pages {
        val HOT_PAGE = "/hot"
    }

    fun getPosts(count: Int, nextPage: String = ""): NineGagPosts {
        val doc: Document

        if (nextPage.isEmpty())
            doc = Jsoup.connect(baseUrl).get()
        else
            doc = Jsoup.connect(baseUrl + nextPage).get()

        val next = doc.getElementsByClass("badge-load-more-post").first().attr("href")

        val list = ArrayList<String>()

        for (article in doc.getElementsByTag("article")) {
            val img = article.getElementsByTag("img")
            if (img == null || img.isEmpty())
                println("\n NOT A IMAGE  \n")
            else {
                println(img.first().attr("src"))
                list.add(img.first().attr("src"))
            }
        }
        return NineGagPosts(list, next.split("%")[0])
    }
}

data class NineGagPosts(val imagesUrl: List<String>, val nextPage: String)
