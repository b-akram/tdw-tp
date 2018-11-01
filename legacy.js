window.onload1 = () => {
    let tts = document.querySelectorAll("tr")
    for (const element of tts) {

        let totalElement = element.lastElementChild
        let taxElement = totalElement.previousElementSibling
        let priceElement = taxElement.previousElementSibling
        let tax = taxElement.innerText.trim().substring(0, taxElement.innerText.trim().length - 1)
        let prix = priceElement.innerText.trim().substring(0, priceElement.innerText.trim().length - 1)
        let total = parseFloat(prix) + tax * prix / 100
        totalElement.innerHTML = total || totalElement.innerHTML
        totalElement.innerHTML = total ? totalElement.innerHTML + "$" : totalElement.innerHTML
    }

}

function calculate(selector) {
    $(selector + " tr").each(function () {

        $this = $(this)
        let totalElement = $this.children().last()
        let taxElement = totalElement.prev()
        let priceElement = taxElement.prev()
        let tax = taxElement.html().trim().substring(0, taxElement.html().trim().length - 1)
        let prix = priceElement.html().trim().substring(0, priceElement.html().trim().length - 1)
        let total = parseFloat(prix) + tax * prix / 100
        totalElement.html(total == 0 ? "0$" : total || totalElement.html())
        totalElement.html(totalElement.html() + (total ? "$" : ""))
    })
}

calculate(".formations-table")

$("#add-formation").click(function (event) {
    let name = $("#formation-to-add").val().trim()
    let volume = $("#volume").val().trim() || "0"
    let prix = $("#prix").val().trim() || "0"
    let tax = $("#tax").val().trim() || "0"
    let formation = {
        volume :volume ,
        price : prix,
        tax : tax,
    }
    if (name) {
        addMenuFormation(name)
        addRowFormation(".table tbody",name ,formation)
        calculate(".formations-table tbody")
        event.preventDefault()
    }
})

$("input#formation-to-add").on("change", function () {
    $(this).val($(this).val().trim())
})

$("input#add-file-formation").on("click", function (event) {
    var url = $("#url").val()
    if (url) {
        event.preventDefault()
    } else return;
    $.getJSON(url, function (res, status, xhr) {
        if (status >= 400) {
            alert("error :" + status)
            return
        }
        addFormations(res)
    })

})

$(".add-formation .col").click(function (ev) {
    $(".add-formation form ,.add-formation .line").toggle()
})


function addFormations(obj) {
    
}

function addMenuFormation(formation) {
    let element = `
        <li class="formation" >
        <h2><a class="lien" href="bureutuque">${formation} </a>
        </h2>
        <ol>
            <li>word</li>
            <li>excel</li>
            <li>spss</li>
        </ol>
    </li>
    `
    $(".formations").append(element)
}

function addRowFormation(selector ,formation, obj) {
    let row = `
        <tr>
        <td >${formation} </td>
        <td >${obj.volume} </td>
        <td>${obj.price}$ </td>
        <td class="tax">${obj.tax}%</td>
        <td></td>
    </tr>
        `
    console.log(obj.tax)
    $(selector).append(row)
    calculate(selector)
}

class MenuAdder2 {
    add(formation) {
        let element = `
            <li class="formation" >
            <h2><a class="lien" href="bureutuque">${formation.name} </a>
            </h2>
            <ol>
                <li>word</li>
                <li>excel</li>
                <li>spss</li>
            </ol>
        </li>
        `
        $(".formations").append(element)
    }
}
