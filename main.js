const id_pelanggan = document.querySelector('#id');
const nama_pelanggan = document.querySelector('#nama');
const alamat = document.querySelector('#alamat');
const bulan = document.querySelector('#bulan');
const meteran_awal =document.querySelector('#meteran_awal');
const meteran_akhir =document.querySelector('#meteran_akhir');
const meterr = document.getElementById('meteran_awal').value;
const jumlah = meterr - meteran_awal;
const tampil = document.querySelector('#row');


if(jumlah  <= 10 ){
     const harga = jumlah * 2500;
}else if(jumlah <=10  && jumlah >=20){
    const harga = jumlah * 5000;
}else if(jumlah <=20 && jumlah <=30){
    const harga = jumlah * 7000;
}else{
    const harga = jumlah * 10000;
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
   
    document.querySelector('.id_pel').innerHTML = `${id_pelanggan.value}`;
    document.querySelector('.nama_pelanggann').innerHTML = `${nama_pelanggan.value}`;
    document.querySelector('.bulan_tagihan').innerHTML = `${bulan.value}`;
    document.querySelector('.awal').innerHTML = `${meteran_awal.value}`;
    document.querySelector('.akhir').innerHTML = `${meteran_akhir.value}`;
    
})

