console.log("[AIDA] Status Loaded");

const Status = {

    element() {

        return DOM.get(Config.selectors.panel.status);

    },

    set(message) {

        const el = this.element();

        if (!el) return;

        el.innerText = message;

    },

    success(message) {

        this.set("✅ " + message);

    },

    error(message) {

        this.set("❌ " + message);

    }

};