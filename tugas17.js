function kalimat() {
    var a = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
    var b = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual";
    console.log(a.toLowerCase());
    console.log(a.toUpperCase());
    console.log(b.toLowerCase());
    console.log(b.toUpperCase());
}

function ascii() {
    var c = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // console.log(c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2), c.charCodeAt(3), c.charCodeAt(4), c.charCodeAt(5)); 
    for (var i = 0; i < 6; i++) {

        console.log(c.charCodeAt(i));
    }
}
kalimat();
ascii();