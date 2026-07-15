console.log("[AIDA] Content Loaded");

window.addEventListener("load", () => {

    if (typeof createAIDAPanel === "function") {

        createAIDAPanel();

    }

});