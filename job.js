console.log("[AIDA] Job Loaded");

const Job = {

    // ==========================
    // Current Job
    // ==========================
    data: {

        kegiatan: "",
        project: "",
        tanggal: "",
        lokasi: "",
        alat: "",
        jumlah: 1,
        uraian: ""

    },

    // ==========================
    // Build Job dari data
    // ==========================
    build(data) {

        this.data = {

            ...this.data,

            ...data,

            uraian: ""

        };

        return this.data;

    },

    // ==========================
    // Generate Uraian
    // ==========================
    generateDescription() {

        this.data.uraian =
            Config.template.description
                .replace("{kegiatan}", this.data.kegiatan)
                .replace("{alat}", this.data.alat)
                .replace("{jumlah}", this.data.jumlah)
                .replace("{lokasi}", this.data.lokasi);

        return this.data.uraian;

    },

    // ==========================
    // Get Data
    // ==========================
    get() {

        return this.data;

    },

    // ==========================
    // Reset
    // ==========================
    clear() {

        this.data = {

            kegiatan: "",
            project: "",
            tanggal: "",
            lokasi: "",
            alat: "",
            jumlah: 1,
            uraian: ""

        };

    }

};