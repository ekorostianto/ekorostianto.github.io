$(document).ready(function() {
    $.ajax({
        url: "https://www.googleapis.com/blogger/v3/blogs/6228868311191208789/posts?key=AIzaSyDjDZtCIql15EWiK79E4qL6FxUsk-JEIvk"
    }).then(function(data) {

        for (i = 0; i < data.items.length; i++) {
          $('#posts').append("<li><article><div class='uk-card uk-card-primary uk-card-hover'><div class='uk-card-body'><div class='uk-card-badge'><span class='uk-label'>"+data.items[i].labels+"</span></div><h1 class='uk-h2'><a href="+data.items[i].url+">"+data.items[i].title+"</a></h1></div><div class='uk-card-footer'><p class='uk-text-meta'>Written by "+data.items[i].author.displayName+" on <time datetime='"+data.items[i].updated+"'>"+data.items[i].updated+"</time>.</p></div></div></article></li>");
        }
    });
});
