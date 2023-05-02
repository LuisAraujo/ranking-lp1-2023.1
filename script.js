function CSVtoArray(text) {
    arr =[];
    j = 0;
    m = 0;
    for(i=0; i < text.length; i++){
        if(arr[j] == undefined)
            arr[j] = [];

        if( arr[j][m] == undefined)
            arr[j][m] = '';

        if((text[i] == '\n') ||  (i == text.length-1)) {
            j++;
            m = 0;
        }else{
            if(text[i] == ';')
                m++;
            else
                arr[j][m] += text[i];
        }

    }
    return arr;
}

function show(csv){
    elem = document.getElementById("container-row");
    text = '';
    for(i=1; i< csv.length; i++) {
        csv_line = csv[i];
        text += '<div class="row">'
        text += '<div class="column">#'+i+'</div>'
        text += '<div class="column">';
        text += '<div style="background-image: url(\'avatars/' + csv_line[0] + '\')" class="avatar"></div></div>';
        text += '<div class="column">' + csv_line[1] + '</div> ';
        text += '<div class="column">' + csv_line[2] + '</div> ';
        text += '<div class="column">' + csv_line[3] + '</div> ';
        text += '<div class="column">' + csv_line[4] + '</div> ';
        text += '<div class="column">' + csv_line[5] + '</div> ';
        text += '<div class="column">' + csv_line[6] + '</div> ';
        text += '<div class="column">' + csv_line[7] + '</div> ';
        text += '<div class="column">' + csv_line[8] + '</div> ';
        text += '<div class="column">' + csv_line[9] + '</div> ';
        text += '<div class="column">' + csv_line[10] + '</div> ';
        text += '<div class="column">' + csv_line[11] + '</div> </div>';
    }
    elem.innerHTML = text;
}


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        arrCsv = CSVtoArray(xhr.responseText);
        show(arrCsv);
    }
};

xhr.open('GET', 'badges/ranking_csv.csv', true);
xhr.send();