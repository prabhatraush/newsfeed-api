
 function getImage(description){
    let cleanUrl = "";
    if(description.indexOf(".png")>0)    
       cleanUrl = description.substring(description.indexOf("src=") + 5, description.indexOf(".png")+ 4);
   else if(description.indexOf(".jpg")>0)
   {
       cleanUrl = description.substring(description.indexOf("src=") + 5, description.indexOf(".jpg")+ 4);
   }
   else if(description.indexOf(".jpeg")>0)
   {
       cleanUrl = description.substring(description.indexOf("src=") + 5, description.indexOf(".jpeg")+ 5);
   }
   else if(description.indexOf(".gif")>0)
   {
       cleanUrl = description.substring(description.indexOf("src=") + 5, description.indexOf(".gif")+ 4);
   }
   else if(description.indexOf(".bmp")>0)
   {
       cleanUrl = description.substring(description.indexOf("src=") + 5, description.indexOf(".bmp")+ 4);
   }
   else{
       cleanUrl = null;
   }
   return cleanUrl;
}

async function getFeed(feedUrl){
    const Stories = [];
    const feed = await parser.parseURL(feedUrl);
    if(!feed) {
        return;
    }
    console.log(feed.title);
    console.log(feed.items.length);

    feed.items.forEach(item => {
        //console.log(item.thumbnail['$'].url);
        item.imageUrl = item.thumbnail['$'].url;
        Stories.push(item);
    });
}

module.exports = { getImage, getFeed};