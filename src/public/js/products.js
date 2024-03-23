console.log("Products frontend javascript file");

$(function() {
    $(".product-collection").on("change", () => {
        const selectedValue = $(".product-collection").val();
        if(selectedValue === "DRINK") {
            $("#product-collection").hide();
            $("#product-volume").show();
        } else {
            $("#product-volume").hide();
            $("#product-collection").show();
        }
    })

    $("#process-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none");
    })

    $("#cancel-btn").on("click", () => {
        $(".dish-container").slideToggle(50);
        $("#process-btn").css("display", "flex");
    })
})

function validateForm() {
    const productName = $('.product-name').val();
    const productPrice = $('.product-name').val();
    const productLeftCount = $('.product-name').val();
    const productCollection = $('.product-name').val();
    const productDesc = $('.product-name').val();
    const productStatus = $('.product-name').val();
    
    if (
        productName === "" ||
        productPrice === "" ||
        productLeftCount === "" ||
        productCollection === "" ||
        productDesc === "" ||
        productStatus === ""
    ) {
        alert("Please insert required fields!")
        return false;
    } else return true;
    
}

function previewFileHandler(input, order) {
    const imgClassName = input.className;
    console.log("input: ", input)
    
    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    const validImageType = ["image/jpg", "image/jpeg", "image/png"];

    if (!validImageType.includes(fileType)) {
        alert("You can insert only jpeg, jpg or png!");
    } else {
        if(file) {
            const reader = new FileReader();
            reader.onload = function () {
                $(`#image-section-${order}`).attr("src", reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
}