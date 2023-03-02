$(document).ready(function() {
    $.ajax({
        url: "https://surabayasurveysolution.com/blog/wp-json/wp/v2/posts?per_page=12&orderby=date"
    }).then(function(data) {
        
        for (i = 0; i < data.length; i++) {
          $('#posts').append("<li><article><div class='uk-card uk-card-primary uk-card-hover'><div class='uk-card-body'><div class='uk-card-badge'><span class='uk-label'>"+data[i].categories+"</span></div><h1 class='uk-h2'><a href='/blog/"+data[i].slug+"'>"+data[i].title.rendered+"</a></h1></div><div class='uk-card-footer'><p class='uk-text-meta'>Written by <a href='"+data[i].uagb_author_info.author_link+"'>"+data[i].uagb_author_info.display_name+"</a>"+" on <time datetime='"+data[i].modified+"'>"+data[i].modified+"</time>.</p></div></div></article></li>");
        }
    });
});