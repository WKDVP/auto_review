setInterval(() => {
    for (var i = 0; i < 13; i++) {
        document.getElementsByName('lecevQuesTy1List[' + i + '].ansSeq')[0].checked = true;
        //console.log('lecevQuesTy1List[' + i + '].ansSeq');
    }
    for (var i = 0; i < 7; i += 2) {
        const kazusa = '.'
        //lecevQuesTy3List[0].ansSbjvCont   
        t = document.getElementsByName('lecevQuesTy3List[' + i + '].ansSbjvCont')[0].value = kazusa;
        //console.log(document.getElementsByName('lecevQuesTy3List[' + i + '].ansSbjvCont'));
    }
    document.getElementById('saveBtn').click();
}, 1000);

div_arr = document.getElementsByClassName('items_wrap')
for (i = 0; i < div_arr.length; i++) {
    sex = div_arr[i].querySelectorAll('input[type="radio"]')
    console.log(sex)
    if(sex.length > 5){
        for(var j=3; j < sex.length; j+= 5){
            sex[j].checked = true;
        }
    }
    else if(sex[3] != null){
        sex[3].checked = true;
    }
}
div_arr[div_arr.length - 1].querySelector('textarea').value = '.'
