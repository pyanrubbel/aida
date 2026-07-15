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
            DOM.get("aida-project");

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

        // Bangun Job dari Panel
        Job.build();

        // Buat Uraian
        Job.generateDescription();

        const job = Job.get();

        console.table(job);

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

        DOM.get("aida-status").innerText =
            "Selesai";

        console.log("[AIDA] RUN SUCCESS");

    }

};