console.log("[AIDA] Config Loaded");

const Config = {

    // =====================================
    // Informasi Extension
    // =====================================
    app: {
        name: "AIDA",
        version: "1.0.0",
        debug: true
    },

    // =====================================
    // Selector Internal Panel AIDA
    // (ID/Name milik panel kita sendiri)
    // =====================================
    selectors: {

        panel: {

            kegiatan: "aida-kegiatan",

            project: "aida-project",

            tanggal: "aida-date",

            lokasi: "aida-location",

            alat: "aida-object",

            jumlah: "aida-qty"

        },

        // Nanti diisi selector website OLS
        ols: {

        }

    },

    // =====================================
    // Mapping Activity OLS
    // =====================================
    activity: {

        inspection: "755"

    },

    // =====================================
    // Template Kalimat
    // =====================================
    template: {

        description:
            "Melakukan {kegiatan} {alat} sebanyak {jumlah} di {lokasi}."

    },

    // =====================================
    // Nilai Default
    // =====================================
    defaults: {

        kegiatan: "Inspeksi",

        jumlah: 1

    }

};