//Create navbar entries automatically
//Names must matched loaded parameter in each .html page
var navbar_entries = [
{href:"./index.html",
 name: "Home",
 },

{href:"./projects.html",
 name:"Projects",
},
{href:"./publications.html",
 name:"Publications",
},
{href:"./presentations.html",
 name:"Presentations",
},

{href:"./music.html",
 name:"Music",
},


]



var make_navbar= function(cur_page_name){
    var entry = null;
    var href = null;
    var name = null;
    var pos = null;
    console.log("executed")
    for(let i=0;i< navbar_entries.length; i++){
        
        //extract navbar info
        entry =navbar_entries[i];
        href = entry["href"];
        name = entry["name"];
        //determine which is current page
        if (name == cur_page_name){
            pos = "cur_pos"
        }
        else{
            pos = "other_pos"
        }
        $(".navbar").append(`<li class="nav_entry">  <a style="flex:1" id=${pos} class="button" href=${href} > ${name} </a> </li>`);
        
      }
       

	}

//Create footer automatically
var make_footer=function(){
    
    $("footer").append(`<div class="footer">
   <p>Contact: <a href="mailto:kaitlinpet@gmail.com">kaitlinpet@gmail.com</a></p>
   <p>Github: <a href="https://github.com/kpet123"> kpet123</a> </p>
   <p> Last Updated: May 10, 2023 </p>
  </div>`);
}

var make_header=function(){
    $("header").append(`    <div class="header">
         <h1> kaitlin pet</h1>
    </div>`);
}

var load  = function(cur_page_name){
    make_header();
    make_footer();
    make_navbar(cur_page_name);
};



