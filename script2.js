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
        text += '<div class="column">';
        text += '<div style="background-image: url(\'avatars/' + csv_line[0] + '\')" class="avatar"></div></div>';
        text += '<div class="column">' + csv_line[2] + '</div> ';
        text += '<div class="column">' + csv_line[3] + '</div> ';
        text += '<div class="column">' + csv_line[13] + '</div> ';
        text += '<div class="column">' + ( parseInt(csv_line[3]) - parseInt(csv_line[13]) ) + '</div> ';
        text += '<div class="column">' + csv_line[14] + '</div> ';
        text += '<div class="column">' + csv_line[15] + '</div> ';
        text += '<div class="column">' + csv_line[16] + '</div> ';
        text += '<div class="column">' + csv_line[17] + '</div> ';
        text += '<div class="column">' + csv_line[18] + '</div> ';
        text += '</div> ';
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

xhr.open('GET', 'data/ranking_csv.csv', true);
xhr.send();