let lorem = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

$(document).ready(function () {

    // when function is ready then get current date and set it 
    setCurrentDate();
    // action for post_type
    $("#id_post_type").change(function () {
        // getting current value in option
        let post_type = $("#id_post_type").val();

        // if it is custom
        if (post_type == "custom") {
            let pt = document.querySelector("#id_lorem_size");
            pt.style = "display: none;";
            let box = document.querySelector("#id_post_content");
            box.style = "display: block;";
        } // end of custom
        else {
            // then hide the box
            let pt = document.querySelector("#id_lorem_size");
            pt.style = "display: block;";
            let box = document.querySelector("#id_post_content");
            box.style = "display: none;";
        } // if it is lorem


    }); // id_post_type button action (selection button)

    $("form").submit(function (e) {
        e.preventDefault();

        let post_type = $("#id_post_type").val();

        // checking if post_type is lorem

        if (post_type == "lorem") {
            // if lorem -> first read lorem size
            let lorem_para_size = document.getElementById("id_lorem_size").value;

            if (lorem_para_size == "")
                lorem_para_size = 1
            else
                lorem_para_size = parseInt(lorem_para_size);

            let new_lorem = "";

            for (i = 0; i < lorem_para_size; i++) {
                new_lorem = lorem + new_lorem;
            }

            // reading all necessary data
            let pst_title = document.querySelector("#id_post_title").value;
            let pst_author = document.querySelector("#id_author").value;
            let pst_date = document.querySelector("#id_post_date").value;

            post_adder(pst_title, pst_author, pst_date, new_lorem);



        } // end of post_type = lorem
        else {
            // reading all necessary data
            let pst_title = document.querySelector("#id_post_title").value;
            let pst_author = document.querySelector("#id_author").value;
            let pst_date = document.querySelector("#id_post_date").value;
            let pst_content = document.querySelector("#id_post_content").value;

            post_adder(pst_title, pst_author, pst_date, pst_content);

        } // end of custom post type

    }); // form on submit action 

}); // ready()



// defining post_adder function 
function post_adder(pst_title, pst_author, pst_date, post) {

    let new_post = `
<!-- default post 1 -->
<div class="post">
    <!-- post head  -->
    <div class="post-head">
        <div class="post-title">${pst_title}</div>
        <div class="post-info">Written By ${pst_author}. <span id="post-date">On ${pst_date} </span> </div>
    </div>
    <!-- end of post head  -->
    <div class="post-body">
        <p>
            ${post}
        </p>
    </div>
</div>
<!-- end of post 1 -->
`;

    let posts_section = document.getElementsByClassName("posts")[0];

    posts_section.innerHTML += new_post;

    clearForm();
} // end of post_adder

// defining clearform()
function clearForm() {
    document.querySelector("#id_post_title").value = '';
    document.querySelector("#id_author").value = '';
    document.querySelector("#id_post_date").value = '';
    document.querySelector("#id_post_content").value = '';
    document.getElementById("id_lorem_size").value = '';
    setCurrentDate();
} // end of clear()


// defingin current Date()

function setCurrentDate() {
    let date = new Date();
    let d_field = document.querySelector("#id_post_date");

    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    d_field.value = year + '-' + month + '-' + day;


} // end of currentDate()