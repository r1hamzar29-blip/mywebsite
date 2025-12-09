(function () {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    if (id) {
        window.location.replace(
            "https://google.com/?id=" + encodeURIComponent(id)
        );
    }
})();
