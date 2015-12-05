// STOP VIDEO AFTER CLICKING OUT

$("#videoModal").on('hidden.bs.modal', function (e) {
    $("#videoModal iframe").removeAttr("src", $("#videoModal iframe").attr("src"));
});

// PAUSES CAROUSEL WHEN MODAL IS CLICKED

$('.modal').on('shown.bs.modal', function (e) {
    $('.carousel').carousel('pause');
})

// ADDING THE SOURCE IN

var src= [
"https://www.youtube.com/embed/JYsB9PZ2G7I?controls=0&amp;showinfo=0;autoplay=1",
"https://www.youtube.com/embed/OvRfnJaky1Y?controls=0&amp;showinfo=0;autoplay=1",
"https://www.youtube.com/embed/7WR9QX7lvtY?controls=0&amp;showinfo=0;autoplay=1"
];

var links = [document.getElementById('modalLink1'), document.getElementById('modalLink2'), document.getElementById('modalLink3') ]

links[0].onclick = function() { 
	(document.getElementById("video")).setAttribute("src", src[0]);
};

links[1].onclick = function() { 
	(document.getElementById("video")).setAttribute("src", src[1]);
};

links[2].onclick = function() { 
	(document.getElementById("video")).setAttribute("src", src[2]);
};

// CAROUSEL INTERVAL



