console.log("[AIDA] Activity Loaded");

const Activity = {

    // =====================================
    // Membuka Form Tambah Activity
    // =====================================
    openForm() {

        const btn = DOM.btnTambah();

        if (!btn) {

            alert("Tombol Tambah Activity tidak ditemukan.");

            return false;

        }

        btn.click();

        return true;

    },

    // =====================================
    // Membaca daftar Project dari OLS
    // =====================================
    readProjects() {

        const select =
            DOM.query('select[name="pr_num"]');

        if (!select) {

            console.warn("Dropdown Project tidak ditemukan.");

            return [];

        }

        return [...select.options]

            .filter(opt => opt.value)

            .map(opt => ({

                value: opt.value,

                text: opt.text.trim()

            }));

    },

    // =====================================
    // Mengisi dropdown Project pada Panel
    // =====================================
    loadProjects() {

        const projects = this.readProjects();

        const panel =
            DOM.get(Config.selectors.panel.project);

        if (!panel) return;

        panel.innerHTML = "";

        projects.forEach(project => {

            const option =
                document.createElement("option");

            option.value = project.value;

            option.textContent = project.text;

            panel.appendChild(option);

        });

    },

    // =====================================
    // Jalankan Automation
    // =====================================
    run() {
        try {
        // Bangun Job dari Panel
        Status.set("Membangun Job...");
        Job.build({

            kegiatan: DOM.get(Config.selectors.panel.kegiatan)?.value || "",

            project: DOM.get(Config.selectors.panel.project)?.value || "",

            tanggal: DOM.get(Config.selectors.panel.tanggal)?.value || "",

            lokasi: DOM.get(Config.selectors.panel.lokasi)?.value.trim() || "",

            alat: DOM.get(Config.selectors.panel.alat)?.value.trim() || "",

            jumlah: DOM.get(Config.selectors.panel.jumlah)?.value || 1

        });

        // Buat Uraian
        Status.set("Menyusun Uraian...");
        Job.generateDescription();

        const job = Job.get();
        Status.set("Validasi...");
        if (!Validator.validate(job)) {

            Status.error("Validasi Gagal");

            return;

        }

        console.table(job);
            Status.set("Mengisi Form...");
        // Isi Form OLS
        Form.fill({

            jns_kegiatan:
                Config.activity.inspection,

            pr_num:
                job.project,

            tanggal_aktifitas:
                job.tanggal,

            uraian:
                job.uraian

        });

        Status.success("Selesai");

        console.log("[AIDA] RUN SUCCESS");
}
    catch (error) {

        console.error("[AIDA]", error);

        Status.error("Terjadi kesalahan");

    }

}
    

};