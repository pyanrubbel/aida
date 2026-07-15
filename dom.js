console.log("[AIDA] DOM Loaded");

const DOM = {

    // ==========================
    // By ID
    // ==========================
    get(id) {

        return document.getElementById(id);

    },

    // ==========================
    // By Selector
    // ==========================
    query(selector) {

        return document.querySelector(selector);

    },

    // ==========================
    // All Selector
    // ==========================
    all(selector) {

        return [
            ...document.querySelectorAll(selector)
        ];

    },

    // ==========================
    // Modal
    // ==========================
    modal() {

        return this.get("ModalAddData");

    },

    // ==========================
    // Tombol Tambah
    // ==========================
    btnTambah() {

        return this.get("btn_add");

    }

};