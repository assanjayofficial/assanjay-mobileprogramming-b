//lab exercise3
//name: Assan, Jay
//Mobile Programming-B

//nomor1
class orang {
    constructor(nama,umur) {
        this.nama = nama;
        this.umur = umur;
    }
    bekerja() 
        {
            console.log(`${this.nama} sedang bekerja seperti biasa` );
        }
    tidur()
        {
            console.log(`${this.nama} sedang tidur`);
        }
    makan() 
        {
            console.log(`${this.nama} sedang makan`);
        }
}
const human = new orang ("Jay Assan","20");
human.bekerja();

//nomor2
class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        console.log (`${this.nama} sedang tidur`);
    }
    makan(){
        console.log(`${this.nama} sedang makan`);
    }
} 
class Pelajar extends Orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah =namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}
let siswa = new Pelajar('John', 17, 'Unklab'); 
console.log(siswa);
siswa.makan();

//The End