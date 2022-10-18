const kosong = (waktu) => {
    if (waktu < 10){
        return '0' + waktu;
    }
    return '' + waktu;
};

export const Tampilan = (second) => {
    let menit = 0;
    let detik = 0;

    if (second < 0){
        second = 0;
    }
    if (second < 100){
        return '00:00.' + kosong(second);
    }

    let sisaSecond = second % 100;
    detik = (second - sisaSecond) / 100;

    if(detik < 60){
        return('00:' + kosong(detik) + '.' + kosong(sisaSecond));
    }

    let sisaDetik = detik % 100;
    menit = (detik - sisaDetik) / 60;
    return(kosong(menit) + ":" + kosong(sisaDetik) + "." + kosong(sisaSecond));
};