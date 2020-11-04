var img, 
    img_width,
    img_height;

function prepare(){
    document.getElementById('quality_div').className = 'action_row';
    document.getElementById('scale_div').className = 'action_row';
    document.getElementById('link_div').className = 'link';
}

function convert(){

    var input = document.getElementById('input');

    var ctx = document.getElementById('canvas').getContext('2d');
    img = new Image;
    img.src = URL.createObjectURL(input.files[0]);
    img.onload = function() {
        document.getElementById('canvas').width = img.width;
        document.getElementById('canvas').height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        img_width = img.width;
        img_height = img.height;
        
        prepare();
        change_quality();
    }
}

function change_quality(){
    var quality = document.getElementById('quality').value;
    quality = parseInt(quality) / 100;
    document.getElementById('quality_value').innerHTML = quality.toFixed(2);
    var canvas = document.getElementById('canvas');

    var image = canvas.toDataURL("image/jpeg", quality)
    document.getElementById('img').src = image;
    document.getElementById('link').href = image;
}

function change_size() {
    var ctx = document.getElementById('canvas').getContext('2d');

    var scale = document.getElementById('scale').value / 100;
    document.getElementById('scale_value').innerHTML = scale.toFixed(2);

    var new_width = img_width * scale;
    var new_height = img_height * scale;

    document.getElementById('canvas').width = new_width;
    document.getElementById('canvas').height = new_height;
    ctx.drawImage(img, 0, 0, new_width, new_height);
    
    change_quality();
}