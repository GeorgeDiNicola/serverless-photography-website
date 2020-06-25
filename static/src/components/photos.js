var listOfImages = [];  
var images = [];  

function getMeta(src) {
    var res = src.split(".");
    var res2 = res[0].split("_");
    var width = res2[1];
    var height = res2[2];
    /*
    if (width > height) {
      width = 4
      height = 3
    } else if (height > width) {
      width = 3
      height = 4
    } else {
      width = 1
      height = 1
    }
    */
    // create an object from the imported listOfImages
    var metaData = {src: src, width: width, height: height};
    return metaData;
  }

function importAll(r) {
    return r.keys().map(r); 
  } 

function getPhotos() {
    //getPhotos() {
    listOfImages = importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
    var index;
    for (index = 0; index < listOfImages.length; ++index) {
       var meta = getMeta(listOfImages[index]);
       images.push(meta);
    };
    shuffleList(images);
    return images;
  }

function shuffleList(array) {
    array.sort(function(a, b) { 
      return 0.5 - Math.random()  
    }); 
  }


export const photos = getPhotos();