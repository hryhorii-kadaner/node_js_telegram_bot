export let blockWebsiteInit = () => {
    let date = new Date(),
        options = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        },
        timeOptions = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        },
        fullDate = date.toLocaleString("ru", options),
        fullTime = date.toLocaleString("ru", timeOptions);

    document.body.textContent = `Где оплата? ${fullDate} ${fullTime}`;
};