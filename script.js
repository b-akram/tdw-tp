class Formation {
    constructor(name, volume, price, tax,subFormations, currency = '$') {
        if (!name) throw new Error("Empty formation")
        price = parseFloat(price)
        this.name = name
        this.price = price
        this.volume = volume
        this.tax = parseFloat(tax)
        this.ttc = price + (tax * this.price / 100)
        this.currency = currency
        this.subFormations = subFormations
    }
    valueOf() {
        return name
    }
    equals(other) {
        return this === other
    }
}
Formation.compareTo = (x, y) => {
    return this > other ? 1 : this == other ? 0 : -1
}
class FormationsHolder {
    constructor(adder, ...formationsArr) {
        this.formations = []
        this.adder = adder
        formationsArr = FormationsHolder.map(formationsArr)
        this.addFormations(...formationsArr)
    }
    addFormations(...formations) {
        for (const f of formations) {
            this.formations[this.formations.length] = f
            for (const a of this.adder) {
                a.add(f)
            }
        }
    }
}
FormationsHolder.map = (formations) => {
    return formations.map(f => new Formation(f.name, f.volume, f.price, f.tax ,f.subFormations))
}
class RowAdder {    
    constructor(selector) {
        this.selector = selector
    }
    add(formation) {
        let row = `
            <tr>
            <td >${formation.name} </td>
            <td >${formation.volume} </td>
            <td>${formation.price}$ </td>
            <td class="tax">${formation.tax}%</td>
            <td>${formation.ttc}$</td>
        </tr>
            `
        $(this.selector).append(row)
    }
}
class MenuAdder {
    add(formation) {
        let element =$(`
            <li class="formation" >
            <h2><a class="lien" href="bureutuque">${formation.name} </a>
            </h2>
        </li>
        `)
        let ol =$("<ol></ol>")
        for (const sub of formation.subFormations) {
            let subElement =`<li>${sub}</li>`
            ol.append(subElement)
        }
        element.append(ol)
        $(".formations").append(element)
    }
}
menuAdder = new MenuAdder()
rowAdder = new RowAdder(".formations-table tbody")
addedformations = []
savedItems = []
let formations;
$("#manuel").on("submit", function (ev) {
    ev.preventDefault()
})
function json() {
    $.getJSON("formations.json", function (res, status, obj) {
        $(".formations-table tbody").html("")
        $(".formations").html("")
        formations = new FormationsHolder([menuAdder, rowAdder], ...FormationsHolder.map(res.formations))
        formations.addFormations(...addedformations)
        setTimeout(json, 5000)
    })
}
//json()
$(".add-formation .col").click(function (ev) {
    $(".add-formation form ,.add-formation .line").toggle()
})
$("#add-formation").click(function (event) {
    let name = $("#formation-to-add").val().trim()
    let volume = $("#volume").val().trim() || 0
    let price = $("#prix").val().trim() || 0
    let tax = $("#tax").val().trim() || 0
    
    let formation = new Formation(name, volume, price, tax,[])
    if (name && volume) {
        formations.addFormations(formation)
        addedformations.push(formation)
        $("#manuel").trigger("reset")
    }
})
$("input#formation-to-add").on("change", function () {
    $(this).val($(this).val().trim())
})
$("input#add-file-formation").on("click", function (event) {
    var url = $("#url").val()
    if (url) event.preventDefault()
    else return;
    $.getJSON(url, function (res, status, xhr) {
        let adder = new RowAdder("#file tbody")
        savedItems.push(...FormationsHolder.map(res.formations))
        let holder = new FormationsHolder([adder], ...FormationsHolder.map(res.formations))
    })
})
$("#apply").click(function (ev) {
    let formations = new FormationsHolder([menuAdder, rowAdder], ...savedItems)
    addedformations.push(...savedItems)
    savedItems.splice(0, savedItems.length)
    $("#file tbody").html("")
    event.preventDefault()
})