var listOfImages = [];  
var images = [];  
var exportPhotos = [];

function getMeta(src) {
    src = src + '';
    var res = src.split(".");
    var res2 = res[0].split("_");
    var width = res2[1];
    var height = res2[2];
    // create an object from the imported listOfImages
    var metaData = {src: src, width: width, height: height};
    return metaData;
  }

function importAll(r) {
    return r.keys().map(r); 
}

function filterPhotos(photoCategory) {
  // import the list based on what the user chose in the drop-down
  if (photoCategory.includes("events")) {
    images = importAll(require.context('../images/events/', false, /\.(png|jpe?g|svg)$/));
  }
  else if (photoCategory.includes("nature")) {
    images = importAll(require.context('../images/nature/', false, /\.(png|jpe?g|svg)$/));
  }
  else if (photoCategory.includes("portrait")) {
    images = importAll(require.context('../images/portrait/', false, /\.(png|jpe?g|svg)$/));
  }
  else if (photoCategory.includes("still_life")) {
    images = importAll(require.context('../images/still_life/', false, /\.(png|jpe?g|svg)$/));
  }
  else if (photoCategory.includes("street")) {
    images = importAll(require.context('../images/street/', false, /\.(png|jpe?g|svg)$/));
  }
  else if (photoCategory.includes("themed")) {
    images = importAll(require.context('../images/themed/', false, /\.(png|jpe?g|svg)$/));
  }
  else if (photoCategory.includes("weddings")) {
    images = importAll(require.context('../images/weddings/', false, /\.(png|jpe?g|svg)$/));
  }
  else if (photoCategory.includes("wild_life")) {
    images = importAll(require.context('../images/wild_life/', false, /\.(png|jpe?g|svg)$/));
  }
  
  return images;
} 

function getPhotos() {
    var currentWindow = window.location.href;
    console.log(currentWindow);
    listOfImages = filterPhotos(currentWindow);
    console.log('retrieved list of images');
    var index;
    for (index = 0; index < listOfImages.length; ++index) {
       var meta = getMeta(listOfImages[index]);
       exportPhotos.push(meta);
    };
    return exportPhotos;
  }


export const categorizedPhotos = getPhotos();