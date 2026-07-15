console.log("[AIDA] UI v5 Loaded");

function createAIDAPanel() {

    if (DOM.get("aida-panel")) return;

    const panel = document.createElement("div");

    panel.id = "aida-panel";

    panel.innerHTML = `

        <h3>AIDA</h3>

        <label>Jenis Kegiatan</label>

        <input
            id="aida-kegiatan"
            type="text"
            value="Inspeksi">

        <label>Project</label>

        <select id="aida-project"></select>

        <label>Tanggal</label>

        <input
            id="aida-date"
            type="date">

        <label>Lokasi</label>

        <input
            id="aida-location"
            type="text"
            placeholder="Contoh : RU VI Balongan">

        <label>Nama Alat</label>

        <input
            id="aida-object"
            type="text"
            placeholder="Contoh : Daniel Turbine Meter">

        <label>Jumlah</label>

        <input
            id="aida-qty"
            type="number"
            value="1">

        <hr>

        <button id="aida-open">
            Open Form
        </button>

        <button id="aida-run">
            RUN
        </button>

        <hr>

        <div id="aida-status">
            Ready
        </div>

    `;

    document.body.appendChild(panel);

    initEvents();

}

function initEvents() {

    // ==========================
    // OPEN FORM
    // ==========================
    DOM.get("aida-open").addEventListener(

        "click",

        () => {

            DOM.get("aida-status").innerText =
                "Opening...";

            if (!Activity.openForm()) return;

            setTimeout(() => {

                Activity.loadProjects();

            },300);

        }

    );

    // ==========================
    // RUN
    // ==========================
    DOM.get("aida-run").addEventListener(

        "click",

        () => {

            DOM.get("aida-status").innerText =
                "Running...";

            Activity.run();

        }

    );

}