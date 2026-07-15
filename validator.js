console.log("[AIDA] Validator Loaded");

const Validator = {

    validate(job) {

        if (!job.project) {

            alert("Project belum dipilih.");

            return false;

        }

        if (!job.tanggal) {

            alert("Tanggal belum diisi.");

            return false;

        }

        if (!job.lokasi.trim()) {

            alert("Lokasi belum diisi.");

            return false;

        }

        if (!job.alat.trim()) {

            alert("Nama alat belum diisi.");

            return false;

        }

        if (Number(job.jumlah) <= 0) {

            alert("Jumlah harus lebih dari 0.");

            return false;

        }

        return true;

    }

};