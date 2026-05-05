const tombolSimpan = document.querySelector("#tombol-simpan")
const inputTanggal = document.querySelector("#input-tanggal")
const inputAktivitas = document.querySelector("#input-aktivitas")
const tabelTodo = document.querySelector("#tabel-todo")


const style = "col-1 bg-info-subtle border-dark border"


function urutkan() {
    let angka = 1;
    for(row of tabelTodo.children) {
        if(row.id !== 'head') {
            row.children[0].innerHTML = angka;
            angka += 1;
        }
    }
}

function simpanData() {
    const data = {
        aktivitas: inputAktivitas.value,
        tanggal: inputTanggal.value
    };
    const row = document.createElement('div');


    row.className = "row";
    for(let i = 1; i <= 5; ++i) {
        let div = document.createElement('div')
        div.className = style
        row.append(div)
    }
        
    row.children[1].innerHTML = data.aktivitas;
    row.children[2].innerHTML = data.tanggal;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    row.children[3].append(checkbox);

    const tombolHapus = document.createElement('input');
    tombolHapus.type = 'button'; tombolHapus.value = 'hapus';
    tombolHapus.addEventListener('click', () => { 
        row.remove();
        urutkan();
    });

    const tombolEdit = document.createElement('input');
    tombolEdit.type = 'button'; tombolEdit.value = 'edit';
    tombolEdit.addEventListener('click', () => {
        const dataEdit = {
            aktivitas: inputAktivitas.value,
            tanggal: inputTanggal.value
        };
        
        row.children[1].innerHTML = dataEdit.aktivitas;
        row.children[2].innerHTML = dataEdit.tanggal;
    });

    row.children[4].append(tombolHapus, tombolEdit);

    tabelTodo.append(row);
    urutkan();
    
}



tombolSimpan.addEventListener('click', simpanData)
