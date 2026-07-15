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
    // Build Job dari UI
    // ==========================
    build() {

        this.data = {

            kegiatan: DOM.get("aida-kegiatan")?.value || "",
            project: DOM.get("aida-project")?.value || "",
            tanggal: DOM.get("aida-date")?.value || "",
            lokasi: DOM.get("aida-location")?.value.trim() || "",
            alat: DOM.get("aida-object")?.value.trim() || "",
            jumlah: DOM.get("aida-qty")?.value || 1,
            uraian: ""

        };

        return this.data;

    },

    // ==========================
    // Generate Uraian
    // ==========================
    generateDescription() {

        this.data.uraian =
            Config.description
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