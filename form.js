console.log("[AIDA] Form Loaded");

const Form = {

    // ==========================
    // Cari element berdasarkan name
    // ==========================
    get(name) {

        return document.querySelector(
            `[name="${name}"]`
        );

    },

    // ==========================
    // Input Text / Textarea
    // ==========================
    setInput(name, value) {

        const input = this.get(name);

        if (!input) {

            console.warn(`${name} tidak ditemukan`);

            return false;

        }

        input.value = value ?? "";

        input.dispatchEvent(new Event("input", {
            bubbles: true
        }));

        input.dispatchEvent(new Event("change", {
            bubbles: true
        }));

        return true;

    },

    // ==========================
    // Dropdown
    // ==========================
    setSelect(name, value) {

        const select = this.get(name);

        if (!select) {

            console.warn(`${name} tidak ditemukan`);

            return false;

        }

        select.value = value;

        select.dispatchEvent(new Event("change", {
            bubbles: true
        }));

        return true;

    },

    // ==========================
    // Date
    // ==========================
    setDate(name, value) {

        return this.setInput(name, value);

    },

    // ==========================
    // Isi Form Otomatis
    // ==========================
    fill(data) {

        Object.entries(data).forEach(([key, value]) => {

            const el = this.get(key);

            if (!el) {

                console.warn(`${key} tidak ditemukan`);

                return;

            }

            if (el.tagName === "SELECT") {

                this.setSelect(key, value);

            } else {

                this.setInput(key, value);

            }

        });

    },

    // ==========================
    // Reset Form
    // ==========================
    reset(data = {}) {

        this.fill(data);

    }

};