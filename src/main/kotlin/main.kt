import org.jsoup.Jsoup

/**
 * Created by antonio on 20/04/17.
 */

fun main(args: Array<String>) {
    val doc = Jsoup.connect("http://9gag.com").get()
    val next=doc.getElementsByClass("badge-load-more-post").first().attr("href")
    var elem=doc.getElementById("container").getElementsByClass("badge-entry-collection").first();
    for(article in elem.getElementsByTag("article")){
        val img=article.getElementsByTag("img")
        if(img==null || img.isEmpty())
            println("\n NOT A IMAGE  \n")
        else
            println(img.first().attr("src"))
    }
    println("http://9gag.com"+next.split("%")[0])
    elem=Jsoup.connect("http://9gag.com"+next.split("%")[0]).get().getElementById("container").getElementsByClass("badge-entry-collection").first();
    for(article in elem.getElementsByTag("article")){
        val img=article.getElementsByTag("img")
        if(img==null || img.isEmpty())
            println("\n NOT A IMAGE  \n")
        else
            println(img.first().attr("src"))
    }
}