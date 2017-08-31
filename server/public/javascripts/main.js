function searching(){
  var word = document.getElementById('search').value;
  $.get( '/singleSearch?term='+word, function(data){
    document.location="/"+data[0].term+".html"
  })
}

$(document).ready(function() {
  function reload() {
    $('.hidden').fadeOut();
    $('displayOutput').empty();
    $.get( '/starredWords', function(data) {
      console.log("showing", data);

      var list = document.createElement("ul");
      data.forEach(function(wordObj) {
        console.log("item", wordObj);
        var item = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = wordObj.term;
        description.innerHTML = wordObj.definition;
        link.appendChild(title);
        link.href = "/"+wordObj.term+".html";
        item.appendChild(link);
        item.appendChild(description);
        list.appendChild(item);
      });
      document.getElementById("displayStarred").appendChild(list);
    });
    $.get( '/certainTag?tags=Version%20Control', function(data) {
      console.log("showing", data);

      var list = document.createElement("ul");
      data.forEach(function(wordObj) {
        console.log("item", wordObj);
        var item = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = wordObj.term;
        description.innerHTML = wordObj.definition;
        link.appendChild(title);
        link.href = "/"+wordObj.term+".html";
        item.appendChild(link);
        item.appendChild(description);
        list.appendChild(item);
      });
      document.getElementById("displayVC").appendChild(list);
    });

    $.get( '/certainTag?tags=cloud', function(data) {
      console.log("showing", data);

      var list = document.createElement("ul");
      data.forEach(function(wordObj) {
        console.log("item", wordObj);
        var item = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = wordObj.term;
        description.innerHTML = wordObj.definition;
        link.appendChild(title);
        link.href = "/"+wordObj.term+".html";
        item.appendChild(link);
        item.appendChild(description);
        list.appendChild(item);
      });
      document.getElementById("displayCl").appendChild(list);
    });

    $.get( '/certainTag?tags=data', function(data) {
      console.log("showing", data);

      var list = document.createElement("ul");
      data.forEach(function(wordObj) {
        console.log("item", wordObj);
        var item = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = wordObj.term;
        description.innerHTML = wordObj.definition;
        link.appendChild(title);
        link.href = "/"+wordObj.term+".html";
        item.appendChild(link);
        item.appendChild(description);
        list.appendChild(item);
      });
      document.getElementById("displayDA").appendChild(list);
    });

    $.get( '/certainTag?tags=frame', function(data) {
      console.log("showing", data);

      var list = document.createElement("ul");
      data.forEach(function(wordObj) {
        console.log("item", wordObj);
        var item = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = wordObj.term;
        description.innerHTML = wordObj.definition;
        link.appendChild(title);
        link.href = "/"+wordObj.term+".html";
        item.appendChild(link);
        item.appendChild(description);
        list.appendChild(item);
      });
      document.getElementById("displayFR").appendChild(list);
    });

    $.get( '/certainTag?tags=opsys', function(data) {
      console.log("showing", data);

      var list = document.createElement("ul");
      data.forEach(function(wordObj) {
        console.log("item", wordObj);
        var item = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = wordObj.term;
        description.innerHTML = wordObj.definition;
        link.appendChild(title);
        link.href = "/"+wordObj.term+".html";
        item.appendChild(link);
        item.appendChild(description);
        list.appendChild(item);
      });
      document.getElementById("displayOS").appendChild(list);
    });

    $.get( '/certainTag?tags=proj', function(data) {
      console.log("showing", data);

      var list = document.createElement("ul");
      data.forEach(function(wordObj) {
        console.log("item", wordObj);
        var item = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = wordObj.term;
        description.innerHTML = wordObj.definition;
        link.appendChild(title);
        link.href = "/"+wordObj.term+".html";
        item.appendChild(link);
        item.appendChild(description);
        list.appendChild(item);
      });
      document.getElementById("displayPM").appendChild(list);
    });

    $.get( '/certainTag?tags=mobile', function(data) {
      console.log("showing", data);

      var list = document.createElement("ul");
      data.forEach(function(wordObj) {
        console.log("item", wordObj);
        var item = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var description = document.createElement("p");
        title.innerHTML = wordObj.term;
        description.innerHTML = wordObj.definition;
        link.appendChild(title);
        link.href = "/"+wordObj.term+".html";
        item.appendChild(link);
        item.appendChild(description);
        list.appendChild(item);
      });
      document.getElementById("displayMO").appendChild(list);
    });

    $('.hidden').fadeIn();
  }

  $('#add-word').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: '/sampleWords',
      type: 'PUT',
      data: $(this).serialize(),
      success: function(data) {
        reload();
      }
    });
  });

  // load data on start
  reload();

});
