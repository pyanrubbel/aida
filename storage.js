console.log("[AIDA] Storage Loaded");

const Storage = {

    currentJob: {

        kegiatan: "",

        project: "",

        tanggal: "",

        lokasi: "",

        alat: "",

        jumlah: "",

        uraian: ""

    },

    // ==========================
    // Simpan seluruh Job
    // ==========================
    save(data) {

        this.currentJob = {

            ...this.currentJob,

            ...data

        };

    },

    // ==========================
    // Ambil seluruh Job
    // ==========================
    get() {

        return this.currentJob;

    },

    // ==========================
    // Reset Job
    // ==========================
    clear() {

        this.currentJob = {

            kegiatan: "",

            project: "",

            tanggal: "",

            lokasi: "",

            alat: "",

            jumlah: "",

            uraian: ""

        };

    }

};