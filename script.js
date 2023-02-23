alert('Hello thank you for visiting to our site');
let w = prompt('Enter the width of the square');
let h = prompt('Enter the height of the square');
function s(width , height) {
    let b = parseInt(width) * parseInt(height)
    alert(b + 'sms = S')
    document.write(`<div class="square" width="${w}" height="${h}" style="display: inline-block" id="square">
    <h2>S = <span id="s">${b}</span>sms</h2>
    </div>
    `)
}
s(w,h)
