export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };
  /* we have a debounce function for when we type into the text editor, we are going to want to update the text editor live. Dont want to send request everytime the user types a letter, we want to have the user stop typing for a second or so we can update the database.
  Export function is for preview for left sidebar for list of folders. this function removes the html to see the plain text previews */