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
    //document.getElementById('saveBtn').click();
}, 1000);