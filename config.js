console.log("[AIDA] Config Loaded");

const Config = {

    // ==========================
    // Informasi Aplikasi
    // ==========================
    appName: "AIDA",

    version: "1.0.0",

    debug: true,

    // ==========================
    // Jenis Kegiatan OLS
    // ==========================
    activity: {

        inspection: "755"

    },

    // ==========================
    // Template Uraian
    // ==========================
    description:

        "Melakukan {kegiatan} {alat} sebanyak {jumlah} di {lokasi}.",

    // ==========================
    // Default Value
    // ==========================
    defaults: {

        kegiatan: "Inspeksi",

        jumlah: 1

    }

};